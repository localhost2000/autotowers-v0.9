import { contacts, sections } from '../data'

export default function Footer() {
  return (
    <footer className='min-desktop:mt-14'>
      <div className='min-desktop:mx-auto min-desktop:w-[1500px] max-desktop:flex-col max-desktop:gap-6 flex justify-between p-4'>
        <div className='flex flex-col justify-between gap-6'>
          <div className='flex flex-col gap-1'>
            <span className='text-3xl font-bold uppercase'>
              вышки <br /> про
            </span>
          </div>

          <div className='flex flex-col gap-2'>
            {sections.map(({ href, title }) => (
              <a className='w-fit font-semibold' href={href}>
                {title}
              </a>
            ))}
          </div>

          <span className='text-sm text-gray-500'>© 2026 «ВЫШКИ ПРО»</span>
        </div>

        <div className='min-desktop:items-end flex flex-col gap-2'>
          {contacts.map((contact, index) => (
            <div key={index} className='desktop:text-right truncate'>
              <p className='text-sm text-gray-500'>{contact.title}</p>
              {contact.type === 'text' ? (
                <p>{contact.value}</p>
              ) : (
                <a href={contact.link}>{contact.value}</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
