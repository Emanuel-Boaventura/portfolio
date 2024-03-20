import { useViewportSize } from '@/hooks/use-viewport-size'
import { Dispatch, SetStateAction } from 'react'

interface IMenu {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function Menu({ open, setOpen }: IMenu) {
  const { height } = useViewportSize()

  return (
    <div
      className={`w-screen h-screen bg-[rgb(6,6,6,_0.2)] -z-10 backdrop-blur-sm fixed ${
        open ? 'stop-scroll z-10' : ''
      }`}
    >
      <nav
        className={`${
          open ? 'animate-open w-full' : 'animate-close w-1'
        } fixed max-w-[280px] right-0 bg-[rgb(6,6,6)] z-50 overflow-hidden`}
        style={{ height }}
      >
        <div className='w-[280px] border-lime-500 border-l h-full py-4 px-6 relative'>
          <div className='flex justify-between items-center border-b mb-4 pb-2'>
            <p>Seções:</p>

            <button onClick={() => setOpen(false)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='#fff'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M18 6l-12 12' />
                <path d='M6 6l12 12' />
              </svg>
            </button>
          </div>

          <div className='flex flex-col gap-6 '>
            <a href='#about' className='links' onClick={() => setOpen(false)}>
              Biografia
            </a>

            <a
              href='#projects'
              className='links'
              onClick={() => setOpen(false)}
            >
              Projetos
            </a>

            <a href='#career' className='links' onClick={() => setOpen(false)}>
              Carreira
            </a>

            <div className='flex gap-4 absolute bottom-6 left-0 w-full justify-center'>
              <a
                href='https://www.linkedin.com/in/emanuelboaventura/'
                target='_blank'
                rel='noopener noreferrer'
                className='links'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 stroke-white hover:stroke-lime-500'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
                  <path d='M8 11l0 5' />
                  <path d='M8 8l0 .01' />
                  <path d='M12 16l0 -5' />
                  <path d='M16 16v-3a2 2 0 0 0 -4 0' />
                </svg>
              </a>

              <a
                href='https://github.com/Emanuel-Boaventura'
                target='_blank'
                rel='noopener noreferrer'
                className='links'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 stroke-white hover:stroke-lime-500'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path
                    d='M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z'
                    strokeWidth='0'
                    fill='currentColor'
                  />
                </svg>
              </a>

              <a href='mailto:emanuelbmatos321@gmai.com' className='links'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 stroke-white hover:stroke-lime-500'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5' />
                  <path d='M3 6l9 6l9 -6' />
                  <path d='M15 18h6' />
                  <path d='M18 15l3 3l-3 3' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
