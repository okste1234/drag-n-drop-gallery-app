import { AuthProvider } from './context/auth'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FotoGram',
  description: 'FotoGram App, Drag and Drop App, Transform Your Gallery with Effortless Drag and Drop Arrangement!',
  author: "Adekunle Stephen Omorotimi"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="black">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider></body>
    </html>
  )
}
