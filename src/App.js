// React 
import React from 'react'
// React 
// Components
import LandingContainer from './Compunents/LandingContainer/LandingContainer';
import TrustedUsers from './Compunents/TrustedUsers/TrustedUsers';
import Services from './Compunents/Services/Services';
import AboutSEO from './Compunents/AboutSEO/AboutSEO';
import AboutUs from './Compunents/AboutUs/AboutUs';
import OurStatus from './Compunents/OurStatus/OurStatus';
import WhyChoooseUs from './Compunents/WhyChoooseUs/WhyChoooseUs';
import Testimonial from './Compunents/Testimonial/Testimonial';
import Blog from './Compunents/Blog/Blog';
import Footer from './Compunents/Footer/Footer';
// Components

const App = () => {
  return <>
    <LandingContainer />
    <TrustedUsers />
    <Services />
    <AboutSEO />
    <AboutUs />
    <OurStatus />
    <WhyChoooseUs />
    <Testimonial />
    <Blog />
    <Footer />
  </>
}
export default App;