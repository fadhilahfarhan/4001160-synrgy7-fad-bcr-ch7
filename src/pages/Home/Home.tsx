import CTABanner from "../../components/CTABanner/CTABanner";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import OurService from "../../components/OurServices/OurServices";
import WhyUs from "../../components/WhyUs/WhyUs";
import Layout from "../../layout/Layout";

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Layout>
        <OurService/>
        <WhyUs/>
        <CTABanner/>
        <FAQ/>
        <Footer/>
      </Layout>
    </>
  )
}

export default Home;