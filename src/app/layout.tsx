import './globals.css'
import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'

const prompt = Prompt({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Wesley Leandro',
  description:
    'Software Engineer, Full Stack Developer, and Business Specialist.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' className={prompt.className}>
      <body className='antialiased'>{children}</body>
    </html>
  )
}
