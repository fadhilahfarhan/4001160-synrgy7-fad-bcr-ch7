
import DashboardContent from "../../components/DashboardContent/DashboardContent"
import Header from "../../components/Header/Header"
import SideBar from "../../components/SideBar/SideBar"
import CarsProvider from "../../context/CarsContext"
import { DashboardStyled } from "./StyledDashboard"

const Dashboard = () => {
  return(
    <CarsProvider>
      <DashboardStyled>
        <SideBar/>
        <div className="container">
          <Header/>
          <DashboardContent/>
        </div>
      </DashboardStyled>
      
    </CarsProvider>
  )
}

export default Dashboard