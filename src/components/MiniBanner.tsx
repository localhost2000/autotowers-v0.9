export default function MiniBanner() {
  return (
    <div className='max-desktop:hidden relative flex h-full w-[600px] flex-col justify-end overflow-hidden rounded-2xl shadow-lg shadow-black/15'>
      <img
        src={`${import.meta.env.BASE_URL}/services/autotowers.jpg`}
        alt=''
        className='absolute left-0 -z-10 size-full object-cover'
      />

      <div className='m-6 flex flex-col gap-0.5'>
        <h4 className='text-xl font-semibold'>Профессионально</h4>
        <span>Работаем на высоте</span>
      </div>
    </div>
  )
}
