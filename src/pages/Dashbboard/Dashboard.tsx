
import DashboardContent from "../../components/DashboardContent/DashboardContent"
import Header from "../../components/Header/Header"
import SideBar from "../../components/SideBar/SideBar"
import CarsProvider from "../../context/CarsContext"
import OrdersProvider from "../../context/OrdersContext"
import { DashboardStyled } from "./StyledDashboard"

const Dashboard = () => {
  return(
    <CarsProvider>
      <OrdersProvider>
        <DashboardStyled>
          <SideBar/>
          <div className="container">
            <Header/>
            <DashboardContent/>
          </div>
        </DashboardStyled>
      </OrdersProvider>
    </CarsProvider>
  )
}

export default Dashboard