import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import './globals.css'

const prompt = Prompt({
  variable: '--font-prompt',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Wesley Leandro | Software Engineer',
  description:
    'Specializing in React, Next.js, and High-Performance Web Applications.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${prompt.variable} antialiased`}>{children}</body>
    </html>
  )
}
