import { services } from '../data'
import Service from './Service'

export default function Services() {
  return (
    <section id='services'>
      <div className='min-tablet:grid-cols-2 min-desktop:grid-cols-3 max-desktop:gap-4 grid gap-6'>
        {services.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </section>
  )
}
