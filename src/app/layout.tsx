import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { GuitarlaProvider } from '@/context/GuitarlaContext'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GuitarLA',
  description: 'Esto es GuitarLA...',
}

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        <header className="h-64 header">
          <Header />
        </header>
        <main>
          <GuitarlaProvider>
            {children}
          </GuitarlaProvider>
        </main>
        <footer className='p-28 bg-neutral-900'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
