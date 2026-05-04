import { gallery } from '../data'

export default function Gallery() {
  return (
    <div className='max-desktop:gap-4 flex gap-6'>
      {gallery.map(({ imageSrc, title }, index) => (
        <div
          key={index}
          className='min-desktop:size-[130px] max-desktop:max-w-[150px] max-desktop:rounded-2xl aspect-square size-fit overflow-hidden rounded-4xl'
        >
          <img
            src={import.meta.env.BASE_URL + imageSrc}
            alt={title}
            className='size-full object-cover transition-transform duration-300 hover:scale-115'
          />
        </div>
      ))}
    </div>
  )
}
