import { useEffect, useState } from 'react'
import { ReactTyped } from 'react-typed'
import { constant, headlines, sections } from '../data'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`${isScrolled ? 'bg-white shadow-lg shadow-black/10' : ''}`}
    >
      <div className='mx-auto flex w-[1500px] items-center justify-between gap-4'>
        <ReactTyped
          strings={headlines}
          typeSpeed={120}
          backSpeed={80}
          loop
          className='text-2xl font-bold'
        />

        <nav className='absolute left-1/2 flex -translate-x-1/2 items-center justify-center gap-15'>
          {sections.map(({ title, href }, index) => (
            <a key={index} className='link' href={href}>
              {title}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-6 text-sm font-semibold text-gray-500'>
          <a href={`tel:${constant.PHONE_MAIN}`} className='link'>
            {constant.PHONE_MAIN}
          </a>
          <a href={`tel:${constant.PHONE_MAIN}`} className='accent-button'>
            Заказать
          </a>
        </div>
      </div>
    </header>
  )
}
