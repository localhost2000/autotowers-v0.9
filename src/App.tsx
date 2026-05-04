import Banner from './components/Banner'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MobileHero from './components/MobileHero'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Works from './components/Works'

export default function App() {
  return (
    <>
      <Header />

      <div className='min-desktop:gap-14 flex flex-col gap-4 p-4'>
        <MobileHero />

        <Hero />

        <Services />

        <Works />

        <Banner />

        <Reviews />

        <Contacts />

        {/* <LinkButton /> */}
      </div>

      <Footer />
    </>
  )
}
