import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DevOps Technical Club',
  description: 'DevOps Technical Club - Interactive 3D Experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} m-0 p-0 overflow-hidden`}>
        {children}
      </body>
    </html>
  )
} 