import { reviews } from '../data'

export default function Reviews() {
  return (
    <section id='reviews'>
      <div className='min-tablet:grid-cols-2 min-desktop:grid-cols-3 max-desktop:gap-4 grid gap-6'>
        {reviews.map(({ author, text }, index) => (
          <div
            key={index}
            className='flex flex-col gap-2 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg'
          >
            <div className='flex items-start justify-between'>
              <div className='text-5xl text-gray-300'>“</div>

              <div className='text-xl text-yellow-400'>{'★'.repeat(5)}</div>
            </div>

            <p className='line-clamp-4 text-gray-700'>{text}</p>

            <div className='flex items-center gap-3 border-t border-gray-200 pt-4'>
              <div className='bg-accent/10 flex size-10 items-center justify-center rounded-full'>
                <span className='text-accent font-bold'>
                  {author.charAt(0)}
                </span>
              </div>
              <span className='font-semibold text-gray-800'>{author}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
