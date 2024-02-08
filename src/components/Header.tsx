export function Header() {
  return (
    <header className='fixed top-0 z-10 w-full px-6 py-4  bg-[#0a0a0a] font-semibold'>
      <div className='container mx-auto flex justify-between items-center'>
        <p className='text-2xl'>
          Emanuel-<span>Boaventura</span>
        </p>

        <div className='flex gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <a href='#about' className='sections'>
            Sobre mim
          </a>

          <a href='#skills' className='sections'>
            Habilidates
          </a>

          <a href='#projects' className='sections'>
            Projetos
          </a>

          <a href='#career' className='sections'>
            Carreira
          </a>
        </div>

        <div className='flex gap-4'>
          <a
            href='https://www.linkedin.com/in/emanuelboaventura/'
            target='_blank'
            rel='noopener noreferrer'
            className='links'
          >
            Linkedin
          </a>

          <a
            href='https://github.com/Emanuel-Boaventura'
            target='_blank'
            rel='noopener noreferrer'
            className='links'
          >
            Github
          </a>

          <a href='mailto:emanuelbmatos321@gmai.com' className='links'>
            E-mail
          </a>
        </div>
      </div>
    </header>
  )
}
