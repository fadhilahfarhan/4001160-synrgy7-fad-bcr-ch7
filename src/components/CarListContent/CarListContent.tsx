import { CarListContentStyled } from "./StyledCarListContent";
import { useContext } from "react";
import { CarsContext } from "../../context/CarsContext";
import moment from "moment";

const icons = [
  require('../../assets/icons/key-grey.svg'),
  require('../../assets/icons/clock-grey.svg'),
  require('../../assets/icons/trash-danger.svg'),
  require('../../assets/icons/edit.svg')
]

const CarListContent = () => {
  const carsContext = useContext(CarsContext);
  const cars = carsContext.cars

  
  return (
    <CarListContentStyled>
      <div className="CL-header">
        <p>Dashboard {'>'} List Car</p>
        <div className="CL-add-button">
          <h1>Dashboard</h1>
          <button>+ Add New Car</button>
        </div>
        <div className="CL-button-groups">
          <button>All</button>
          <button>Small</button>
          <button>Medium</button>
          <button>Large</button>
        </div>
      </div>

      <div className="CL-content">
        {
          cars.map((car)=>{

            const urlImage = car.image.split('./')
            return (
            <div key={`${car.id}`} className="CL-item">
              <img src={`/${urlImage[1]}`} alt="" className="CL-item-image"/>
              <p>{car.name}/{car.category}</p>
              <p>Rp {car.rentPerDay}/Hari</p>
              <div className="CL-group-with-icon">
                <img src={icons[0].default} alt="" />
                <p>{!car.startRent && !car.finishRent ? 'Available for rent' : `${car.startRent} - ${car.finishRent}`}</p>
              </div>
              <div className="CL-group-with-icon">
                <img src={icons[1].default} alt="" />
                <p>{!car.updatedAt 
                ? `Created at ${moment(car.createdAt).format('D MMMM YYYY, h:mm:ss a')}`:
                moment(car.updatedAt).format('D MMMM YYYY, h:mm:ss a')}</p>
              </div>
              <div className="CL-item-button">
                <button>
                  <img src={icons[2].default} alt="" />
                  <p>Delete</p>
                </button>
                <button>
                  <img src={icons[3].default} alt="" />
                  <p>Edit</p>
                </button>
              </div>
            </div>
          )})
        }
      </div>
    </CarListContentStyled>
  )
}

export default CarListContent;