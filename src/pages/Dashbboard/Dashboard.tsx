
import DashboardContent from "../../components/DashboardContent/DashboardContent"
import Header from "../../components/Header/Header"
import SideBar from "../../components/SideBar/SideBar"
import ListCarProvider from "../../context/ListCarContext"
import { DashboardStyled } from "./StyledDashboard"

const Dashboard = () => {
  return(
    <ListCarProvider>
        <DashboardStyled>
          <SideBar/>
          <div className="container">
            <Header/>
            <DashboardContent/>
          </div>
        </DashboardStyled>
    </ListCarProvider>
  )
}

export default Dashboard