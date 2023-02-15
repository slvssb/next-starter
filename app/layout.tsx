import './globals.css'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
const bodyClasses =
  inter.className + ' bg-light text-primary dark:bg-dim dark:text-primary-dark min-h-screen'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={bodyClasses}>
        {children}
        <div id="portal-root" />
      </body>
    </html>
  )
}
