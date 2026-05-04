import { ReactTyped } from 'react-typed'
import { headlines } from '../data'
import Gallery from './Gallery'

export default function MobileHero() {
  return (
    <div className='min-desktop:hidden min-w-[320px]'>
      <div className='relative h-[740px] w-full overflow-hidden rounded-2xl shadow-lg shadow-black/15'>
        <img
          src={`${import.meta.env.BASE_URL}/services/autotowers.jpg`}
          alt=''
          className='absolute left-0 -z-10 size-full object-cover brightness-[.4]'
        />

        <div className='flex h-full flex-col justify-between p-6 text-white'>
          <div className='flex flex-col gap-2'>
            <ReactTyped
              strings={headlines}
              typeSpeed={120}
              backSpeed={80}
              loop
              className='font-semibold'
            />

            <span className='text-6xl font-bold uppercase'>
              вышки <br /> про
            </span>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='text-lg'>
              Автовышки от <span className='font-semibold'>12</span> до{' '}
              <span className='font-semibold'>45</span> метров.
              <br />
              <span className='font-semibold'>Любые задачи:</span> от
              электромонтажа до уборки снега с крыш.
            </p>

            <p className='text-base'>
              Также предоставляем промышленных альпинистов, спил и вывоз
              деревьев,
              <br />
              монтаж рекламы с изготовлением, очистка кровли от снега и сосулек.
            </p>
          </div>

          <Gallery />

          <div className='flex flex-col'>
            <h4 className='text-lg font-semibold'>Профессионально</h4>
            <span>Работаем на высоте</span>
          </div>
        </div>
      </div>
    </div>
  )
}
