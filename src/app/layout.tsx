import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { NextUIProvider } from '@nextui-org/react'

import '../styles/globals.css'
import { setInitialTheme } from '@integration/config/theme'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Joseph DLCode',
  description:
    'Desarrollador FullStack con 5 años de experiencia en la industria del software.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={poppins.className}>
        <NextUIProvider>{children}</NextUIProvider>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </body>
    </html>
  )
}
