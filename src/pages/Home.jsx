import React from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import Hero from '../sections/Hero'
import Services from '../sections/Servicesection'
import Steps from '../sections/Steps'
import FeaturedDesign from '../sections/FeaturedDesign'
import Testimonial from '../sections/Testimonial'
import Newsletter from '../sections/Newsletter'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Steps />
      <FeaturedDesign />
      
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
