interface IService {
  name: string
  description: string
  tagline: string
  icon: string
}

export default function Block({ name, tagline, description, icon }: IService) {
  return (
    <div className='service'>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-4'>
          <div className='flex aspect-square size-14 items-center justify-center rounded-lg bg-blue-50'>
            <span className='text-2xl'>{icon}</span>
          </div>

          <div className='flex flex-col gap-0.5'>
            <h3 className='text-xl font-semibold'>{name}</h3>

            <p className='text-accent text-sm font-medium'>{tagline}</p>
          </div>
        </div>

        <p className='text-gray-600'>{description}</p>
      </div>

      <button className='text-accent flex w-fit cursor-pointer items-center gap-1 text-sm font-semibold transition-all duration-300'>
        Узнать стоимость
      </button>
    </div>
  )
}
