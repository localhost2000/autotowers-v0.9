export default function Banner() {
  return (
    <section>
      <div className='max-desktop:h-[300px] relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl text-white shadow-lg shadow-black/15'>
        <img
          src={`${import.meta.env.BASE_URL}/services/snow.jpg`}
          alt=''
          className='absolute -z-10 size-full object-cover blur-[2px] brightness-50'
        />
        <div className='max-desktop:max-w-[60%] max-desktop:mx-auto flex flex-col gap-2 text-center'>
          <h4 className='max-desktop:text-xl text-4xl font-semibold'>
            Автовышки от 12 до 45 метров
          </h4>
          <span className='min-desktop:text-xl'>
            Современный автопарк для любых задач на высоте
          </span>
        </div>
      </div>
    </section>
  )
}
