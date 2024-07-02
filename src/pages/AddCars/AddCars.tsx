
import SideBar from "../../components/SideBar/SideBar"
import ListCarProvider from "../../context/ListCarContext"
import { AddCarsStyled } from "./StyledAddCars"
import Header from "../../components/Header/Header"
import CreateCar from "../../components/CreateCar/CreateCar"

const AddCars = () => {
  return(
    <ListCarProvider>
        <AddCarsStyled>
          <SideBar/>
          <div className="container">
            <Header/>
            <CreateCar/>
          </div>
        </AddCarsStyled>
    </ListCarProvider>
  )
}

export default AddCars