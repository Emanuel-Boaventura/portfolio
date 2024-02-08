import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <div className='min-h-screen bg-[#0d0d0d] text-white flex flex-col'>
      <Header />
      <main className='container mx-auto'>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  )
}
