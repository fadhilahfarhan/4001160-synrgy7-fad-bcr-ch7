import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import SearchCarsForm from "../../components/SearchCars/SearchCars";
import CarsProvider from "../../context/CarsContext";
import Layout from "../../layout/Layout"

const Cars = () => {
  return (
    <CarsProvider>
      <Navbar/>
      <Hero hideButton/>
      <Layout>
        <SearchCarsForm/>
        <Footer/>
      </Layout>
    </CarsProvider>
    
  )
}

export default Cars;