// React
import React from "react";
// React
// Components
import LandingContainer from "./Compunents/LandingContainer/LandingContainer";
import TrustedUsers from "./Compunents/TrustedUsers/TrustedUsers";
import Services from "./Compunents/Services/Services";
import AboutSEO from "./Compunents/AboutSEO/AboutSEO";
import AboutUs from "./Compunents/AboutUs/AboutUs";
import OurStatus from "./Compunents/OurStatus/OurStatus";
import WhyChoooseUs from "./Compunents/WhyChoooseUs/WhyChoooseUs";
import Testimonial from "./Compunents/Testimonial/Testimonial";
import Blog from "./Compunents/Blog/Blog";
import Footer from "./Compunents/Footer/Footer";
// Components

// Contexts
import { StateContext } from "./Contexts/StateContext";
// Contexts

// Images
// Images

const App = () => {
  // const [beforeImage, setBeforeImage] = useState(testimonialImage1);
  // const [, setCurrentUserImg] = useState("");

  // const reducer = (state, action) => {
  //   if (action.type === "change") {
  //     return {
  //       ...state,
  //       topImage: action.imageSrc,
  //       currentUserImage: action.imageSrc,
  //     };
  //   } else {
  //     return { state };
  //   }
  // };

  // const [state, dispach] = useReducer(reducer, {
  //   topImage: testimonialImage1,
  //   currentUserImage: "",
  // });

  return (
    <>
      <LandingContainer />
      <TrustedUsers />
      <Services />
      <AboutSEO />
      <AboutUs />
      <OurStatus />
      <WhyChoooseUs />

      <StateContext>
        <Testimonial />
      </StateContext>

      <Blog />
      <Footer />
    </>
  );
};
export default App;
