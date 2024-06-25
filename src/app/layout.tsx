import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Ecommerce 13',
  description: 'Next Ecommerce 13 using version 13.4.7',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='bg-slate-700 h-screen p-16'>
          {children}
        </main>
      </body>
    </html>
  )
}
