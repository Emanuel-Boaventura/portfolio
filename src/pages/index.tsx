import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <div className='min-h-screen bg-neutral-800 text-white flex flex-col'>
      <Header />
      <main className='container mx-auto'>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
