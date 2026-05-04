import { constant } from '../data'
import Gallery from './Gallery'

export default function Hero() {
  return (
    <div className='hero'>
      <img
        src={`${import.meta.env.BASE_URL}/services/autotowers.jpg`}
        alt=''
        className='backdrop-hero'
      />

      <div className='flex w-full items-center justify-between p-4'>
        <div className='flex flex-col gap-8'>
          {/* <div className='flex gap-12 font-semibold text-gray-600 italic'>
            {specifications.map((specification, index) => (
              <div key={index} className='flex items-center gap-2'>
                <span className='text-sm'>✔️</span>
                <span>{specification}</span>
              </div>
            ))}
          </div> */}

          {/* <span className='text-8xl font-bold uppercase italic'>
            вышки <br /> про
          </span> */}

          <div className='relative size-[650px] overflow-hidden'>
            <img
              src={`${import.meta.env.BASE_URL}/logo.png`}
              alt='Logo'
              className='absolute -left-18 size-full'
            />
          </div>
        </div>

        <div className='flex flex-col items-end gap-10 text-right text-xl'>
          {/* <div className='flex justify-end gap-10 text-lg font-semibold text-gray-600'>
            {specifications.map((specification, index) => (
              <div key={index} className='flex items-center gap-3'>
                <div className='bg-second size-4 rounded-full text-sm' />
                <span>{specification}</span>
              </div>
            ))}
          </div> */}

          <Gallery />

          <div className='flex flex-col gap-1.5'>
            <h4>
              Автовышки от <span className='font-semibold'>12</span> до{' '}
              <span className='font-semibold'>45</span> метров.
            </h4>

            <p>
              <span className='font-semibold'>Любые задачи:</span> от
              электромонтажа до уборки снега с крыш.
            </p>

            <p>Работаем с деревьями, рекламой и сложными объектами.</p>

            <p className='text-lg text-gray-600'>
              Также предоставляем промышленных альпинистов, спил и вывоз
              деревьев,
              <br />
              монтаж рекламы с изготовлением, очистка кровли от снега и сосулек.
            </p>
          </div>

          {/* <span className='text-lg font-semibold'>
            Профессиональные услуги на высоте.
          </span> */}

          <div className='flex justify-end gap-8 text-base'>
            <a
              href={`tel:${constant.PHONE_MAIN}`}
              className='accent-button max-desktop:hidden'
            >
              Получить консультацию
            </a>
            <a className='link-button' href='#services'>
              Услуги
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
