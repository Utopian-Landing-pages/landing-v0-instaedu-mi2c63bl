import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'InstaEdu - Safe & Engaging Social Learning for Kids',
  description: 'An Instagram-style social learning platform for children, offering a safe and engaging space for educational content discovery and interaction through short videos, images, and moderated comments.',
  generator: 'v0.app',
  keywords: ['education', 'learning', 'kids', 'children', 'social learning', 'safe platform', 'parental controls'],
  authors: [{ name: 'InstaEdu' }],
  openGraph: {
    title: 'InstaEdu - Safe & Engaging Social Learning for Kids',
    description: 'An Instagram-style social learning platform for children, offering a safe and engaging space for educational content discovery and interaction through short videos, images, and moderated comments.',
    url: 'https://utopia-ai-prod-1.web.app/projects/wdGXSFyiZMQ4rGJGUejm',
    siteName: 'InstaEdu',
    images: [{
      url: 'https://source.unsplash.com/1200x630/?education,kids,learning,platform',
      width: 1200,
      height: 630,
      alt: 'InstaEdu - Safe Social Learning Platform'
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InstaEdu - Safe & Engaging Social Learning for Kids',
    description: 'Safe, Instagram-style platform for kids to discover educational content',
    images: ['https://source.unsplash.com/1200x630/?education,kids,learning,platform'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
