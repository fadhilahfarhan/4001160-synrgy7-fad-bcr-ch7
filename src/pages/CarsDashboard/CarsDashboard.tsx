
import CarListContent from "../../components/CarListContent/CarListContent"
import DashboardContent from "../../components/DashboardContent/DashboardContent"
import Header from "../../components/Header/Header"
import SideBar from "../../components/SideBar/SideBar"
import CarsProvider from "../../context/CarsContext"
import OrdersProvider from "../../context/OrdersContext"
import { DashboardStyled } from "./StyledCarsDashboard"

const CarsDashboard = () => {
  return(
    <CarsProvider>
        <DashboardStyled>
          <SideBar/>
          <div className="container">
            <Header/>
            <CarListContent/>
          </div>
        </DashboardStyled>
    </CarsProvider>
  )
}

export default CarsDashboard