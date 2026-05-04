import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { works } from '../data'

export default function Works() {
  const [index, setIndex] = useState(-1)

  const slides = works.map(({ title, imageSrc }) => ({
    src: import.meta.env.BASE_URL + imageSrc,
    title: title
  }))

  return (
    <section id='works'>
      <div className='min-desktop:grid-cols-4 max-desktop:gap-3 min-tablet:grid-cols-3 grid grid-cols-2 gap-6'>
        {works.map(({ imageSrc, title }, index) => (
          <div
            key={index}
            className='group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl'
            onClick={() => setIndex(index)}
          >
            <div className='aspect-square overflow-hidden'>
              <img
                src={import.meta.env.BASE_URL + imageSrc}
                alt={title}
                className='size-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>

            <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              <span className='text-center text-xl font-semibold text-white'>
                {title}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </section>
  )
}
