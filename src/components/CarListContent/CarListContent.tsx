import { CarListContentStyled } from "./StyledCarListContent";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { ListCarContext } from "../../context/ListCarContext";
import { useNavigate } from "react-router-dom";
import { ListCar } from "../../interfaces/IListCar";

const icons = [
  require('../../assets/icons/key-grey.svg'),
  require('../../assets/icons/clock-grey.svg'),
  require('../../assets/icons/trash-danger.svg'),
  require('../../assets/icons/edit.svg')
];

const CarListContent = () => {
  const { listCar, deleteListCar } = useContext(ListCarContext);
  const [cars, setCars] = useState<ListCar[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCars(listCar);
  }, [listCar]);

  const handleDelete = (id: string) => {
    deleteListCar(id);
  };

  return (
    <CarListContentStyled>
      <div className="CL-header">
        <p>List Car {'>'} List Car</p>
        <div className="CL-add-button">
          <h1>List Car</h1>
          <button onClick={() => { navigate('/admin/cars/create') }}>+ Add New Car</button>
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
          cars.map((car) => {
            const urlImage = car.image.split('./');
            return (
              <div key={car.id} className="CL-item">
                <img src={`/${urlImage[1]}`} alt="" className="CL-item-image" />
                <p>{car.name}/{car.category}</p>
                <p>{`Rp. ${new Intl.NumberFormat('id-ID').format(Number(car.rentPerDay))} / Hari`}</p>
                <div className="CL-group-with-icon">
                  <img src={icons[0].default} alt="" />
                  <p>{!car.startRent && !car.finishRent ? 'Available for rent' : `${car.startRent} - ${car.finishRent}`}</p>
                </div>
                <div className="CL-group-with-icon">
                  <img src={icons[1].default} alt="" />
                  <p>{!car.updatedAt
                    ? `Created at ${moment(car.createdAt).format('D MMMM YYYY, h:mm:ss a')}` :
                    moment(car.updatedAt).format('D MMMM YYYY, h:mm:ss a')}</p>
                </div>
                <div className="CL-item-button">
                  <button onClick={() => handleDelete(car.id)}>
                    <img src={icons[2].default} alt="" />
                    <p>Delete</p>
                  </button>
                  <button>
                    <img src={icons[3].default} alt="" />
                    <p>Edit</p>
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
    </CarListContentStyled>
  );
};

export default CarListContent;