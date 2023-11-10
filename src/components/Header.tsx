export function Header() {
  return (
    <header className='fixed top-0 flex justify-between items-center w-full px-6 py-4 bg-neutral-800 text-white font-semibold'>
      <p className='text-2xl'>
        Emanuel-<span className='text-lime-500'>Boaventura</span>
      </p>

      <div className='flex gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <a href='#about' className='header-sections'>
          Sobre mim
        </a>
        <a href='#about' className='header-sections'>
          Habilidates
        </a>
        <a href='#about' className='header-sections'>
          Projetos
        </a>
        <a href='#about' className='header-sections'>
          Carreira
        </a>
      </div>

      <div className='flex gap-4'>
        <a
          href='https://www.linkedin.com/in/emanuelboaventura/'
          target='_blank'
          rel='noopener noreferrer'
          className='header-links'
        >
          Linkedin
        </a>
        <a
          href='https://github.com/Emanuel-Boaventura'
          target='_blank'
          rel='noopener noreferrer'
          className='header-links'
        >
          Github
        </a>
        <a href='mailto:emanuelbmatos321@gmai.com' className='header-links'>
          E-mail
        </a>
      </div>
    </header>
  )
}
