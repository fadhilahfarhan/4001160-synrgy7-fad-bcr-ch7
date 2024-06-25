import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import SearchCarsForm from "../../components/SearchCarsForm/SearchCarsForm";
import Layout from "../../layout/Layout"

const Cars = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Layout>
        <SearchCarsForm/>
        <Footer/>
      </Layout>
    </>
    
  )
}

export default Cars;