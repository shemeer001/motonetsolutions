import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'

export const dynamic = "force-dynamic";

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'MotoNet Solutions - The Complete Online Solutions for your Vehicle',
  description: 'MotoNet Solutions Kuttippuram, Malappuram, Kerala - Motor Vehicle Insurance, Tax, License Renewal, Vehicle Tests, and all RTO-related services. Direct Agent of New India Assurance. Your one-stop solution for all vehicle needs.',
  keywords: 'motor vehicle insurance, RTO services, license renewal, vehicle tax, Kuttippuram, Malappuram, Kerala, MotoNet Solutions, New India Assurance agent',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'MotoNet Solutions - The Complete Online Solutions for your Vehicle',
    description: 'Motor Vehicle Insurance, Tax, License Renewal, Vehicle Tests, and all RTO-related services in Kuttippuram.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

        <link rel="preload" href="/motonet-logo.png" as="image" />
        <link rel="preload" href="/favicon.png" as="image" />
      </head>
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ChunkLoadErrorHandler />
        </ThemeProvider>
      </body>
    </html>
  )
}
