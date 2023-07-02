import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '2NIBBLE',
  description: 'Réplica do website oficial da 2NIBBLE(2nibble.com) criada por LESS14/Felipe Maciel.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
