import { About } from '@/components/About'
import { Career } from '@/components/Career'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Menu } from '@/components/Menu'
import { Projects } from '@/components/Projects'
import { Techs } from '@/components/Techs'
import { useState } from 'react'

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <div className='relative flex min-h-screen flex-col overflow-hidden bg-[#0d0d0d] text-white'>
      <Header setOpen={setOpen} />

      <Menu open={open} setOpen={setOpen} />

      <main className='container mx-auto'>
        <Hero />

        <About />

        <Techs />

        <Projects />

        <Career />
      </main>

      <Footer />
    </div>
  )
}
