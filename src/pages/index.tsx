import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Menu } from '@/components/Menu'
import { useState } from 'react'

export default function Home() {
  const [open, setOpen] = useState(false)
  console.log('open:', open)

  return (
    <div className='min-h-screen bg-[#0d0d0d] text-white flex flex-col relative overflow-hidden'>
      <Header setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <main className='container mx-auto'>
        <Hero />
        {/* <About /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
