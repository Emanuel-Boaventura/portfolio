/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'

const useInViewport = (justFade = false) => {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(justFade ? 'fade-in' : 'fade-in-slide')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return ref
}

export default useInViewport
