
import CarListContent from "../../components/CarListContent/CarListContent"
import Header from "../../components/Header/Header"
import SideBar from "../../components/SideBar/SideBar"
import ListCarProvider from "../../context/ListCarContext"
import { DashboardStyled } from "./StyledCarsDashboard"

const CarsDashboard = () => {
  return(
    <ListCarProvider>
        <DashboardStyled>
          <SideBar/>
          <div className="container">
            <Header/>
            <CarListContent/>
          </div>
        </DashboardStyled>
    </ListCarProvider>
  )
}

export default CarsDashboard