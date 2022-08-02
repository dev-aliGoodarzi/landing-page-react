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
import CustomersSay from './Compunents/CustomersSay/CustomersSay';
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
    <CustomersSay />
  </>
}
export default App;