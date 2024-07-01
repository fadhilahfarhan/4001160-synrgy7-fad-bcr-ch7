import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { CarsContextType, ICar, ICars } from "../interfaces/ICars";
import fetchCars from "../service/api";
import moment from "moment";

export const CarsContext = createContext<CarsContextType>({
  cars: [],
  saveCars: () => {},
  updateCars: () => {}
});

function getRandomInt(min:number, max:number):number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const CarsProvider: FC<PropsWithChildren<{}>> = ({children}) =>{
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    const getCars = async () => {
      const carsData: ICars[] = await fetchCars();
      
      const timeAt = new Date()
      const mutator = getRandomInt(1000000, 100000000);

      const tranformData: ICar[] = carsData.map((car) => ({
        id: car.id,
        image: car.image,
        name: `${car.manufacture} ${car.model}`,
        rentPerDay: car.rentPerDay,
        category: car.type,
        capacity: car.capacity,
        description: car.description,
        transmission: car.transmission,
        driverType: getRandomInt(0,1) === 1 ? "Dengan Supir" : 'Tanpa Supir (Lepas Kunci)',
        year: car.year,
        available: car.available,
        availableAt: new Date(timeAt.getTime() + (getRandomInt(0,1)? mutator : -1 * mutator)),
        startRent: '',
        finishRent: '',
        updatedAt: '',
        createdAt: moment(Date()).format('D MMMM YYYY')
      })) 
      setCars(tranformData)
    }
    getCars()
  }, [])

  const saveCars = () => {

  }

  const updateCars = () => {

  }

  console.log(cars);
  
  return (
    <CarsContext.Provider value={{ cars, saveCars, updateCars }}>
      {children}
    </CarsContext.Provider>
  )
}

export default CarsProvider