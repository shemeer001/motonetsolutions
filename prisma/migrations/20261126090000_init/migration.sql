CREATE TABLE "ContactSubmission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL DEFAULT '',
    "service" TEXT NOT NULL DEFAULT '',
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'new',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "ContactSubmission_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "ContactSubmission_createdAt_idx"
ON "ContactSubmission"("createdAt");

CREATE INDEX "ContactSubmission_status_idx"
ON "ContactSubmission"("status");
