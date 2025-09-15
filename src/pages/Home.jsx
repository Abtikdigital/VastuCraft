import Hero from "../sections/Hero";
import Services from "../sections/Servicesection";
import Steps from "../sections/Steps";
import FeaturedDesign from "../sections/FeaturedDesign";
import Testimonial from "../sections/Testimonial";
import Newsletter from "../sections/Newsletter";
import Mainlayout from "../layout/Mainlayout";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Elevate your space with VastuCraft’s interior design services for homes, offices, and commercial spaces."
        />
        <meta
          name="keywords"
          content=" Interior design services , Best interior designers near me , Affordable interior design solutions"
        />
        <title>VastuCraft – Creative Interior Design Solutions</title>
      </Helmet>

      <Mainlayout>
        <Hero />
        <Services />
        <Steps />
        <FeaturedDesign />

        <Testimonial />
        <Newsletter />
      </Mainlayout>
    </>
  );
}

export default Home;
