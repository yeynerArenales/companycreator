import { Inter } from 'next/font/google'
import { Providers } from '@/redux/provider'
export const metadata = {
  title: 'Company Creator',
  description: 'Form to create a Company'
}
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
