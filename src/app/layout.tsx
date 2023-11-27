import type { Metadata } from 'next'
import { Cabin } from 'next/font/google'

const cabin = Cabin({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Per product widgets',
  description: '',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cabin.className}>{children}</body>
    </html>
  )
}
