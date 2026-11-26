# ------------------------------------------------------------
# Base image
# ------------------------------------------------------------
FROM node:22-bookworm-slim AS base

RUN apt-get update \
    && apt-get install -y --no-install-recommends openssl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app


# ------------------------------------------------------------
# Dependencies
# ------------------------------------------------------------
FROM base AS deps

ENV DATABASE_URL="postgresql://build:build@127.0.0.1:5432/motonet?schema=public"

RUN corepack enable \
    && corepack prepare yarn@4.9.2 --activate

COPY package.json yarn.lock .yarnrc.yml ./
COPY prisma ./prisma

RUN yarn install --immutable

# ------------------------------------------------------------
# Build
# ------------------------------------------------------------
FROM deps AS builder

COPY . .

ARG NEXTAUTH_URL=https://www.motonetsolutions.online

ENV NEXTAUTH_URL=${NEXTAUTH_URL}
ENV NEXT_OUTPUT_MODE=standalone
ENV NEXT_TELEMETRY_DISABLED=1

RUN yarn prisma generate
RUN yarn build

# ------------------------------------------------------------
# Production runtime
# ------------------------------------------------------------
FROM base AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXTAUTH_URL=https://www.motonetsolutions.online
ENV HOSTNAME=127.0.0.1
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN mkdir -p .next/cache \
    && chown -R nextjs:nodejs .next

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
