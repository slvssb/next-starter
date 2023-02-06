import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <div className="flex h-screen items-center justify-center">
        <h1 className="dark:text-current">Hello, world!</h1>
      </div>
    </main>
  )
}
