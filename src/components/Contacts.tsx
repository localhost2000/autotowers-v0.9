import { contacts } from '../data'
import MiniBanner from './MiniBanner'

export default function Contacts() {
  return (
    <section
      id='contacts'
      className='desktop:px-4 desktop:py-16 desktop:rounded-4xl rounded-2xl bg-gray-100 p-6'
    >
      <div className='max-desktop:gap-6 max-desktop:w-full z-10 flex flex-col gap-14'>
        <div className='desktop:text-center flex flex-col gap-2'>
          <h2 className='text-5xl font-semibold'>Контакты</h2>
          <p className='text-gray-500'>
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className='desktop:grid-cols-2 grid w-full grid-cols-1 gap-8'>
          <div className='w-full rounded-2xl bg-white p-8 shadow-lg shadow-black/15'>
            <div className='flex w-full flex-col gap-6'>
              {contacts.map((contact, index) => (
                <div key={index} className='flex items-start gap-4'>
                  <div className='flex aspect-square size-12 items-center justify-center rounded-xl border border-gray-200 text-2xl'>
                    {contact.icon}
                  </div>
                  <div className='truncate'>
                    <p className='text-sm text-gray-500'>{contact.title}</p>
                    {contact.type === 'text' ? (
                      <p className='desktop:text-lg font-semibold text-gray-800'>
                        {contact.value}
                      </p>
                    ) : (
                      <a
                        href={contact.link}
                        className='desktop:text-lg font-semibold text-gray-800 transition'
                      >
                        {contact.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <MiniBanner />
        </div>
      </div>
    </section>
  )
}
