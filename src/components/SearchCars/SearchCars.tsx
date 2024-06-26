import { DatePicker, Input, Select } from "antd";
import style from './SearchCars.module.css';
import { driverType, pickUpTime } from "../../utils/data/searchCarsData";
import Button from "../Button/Button";
import CarCard from "../CarCard/CarCard";
import { CarsContext } from "../../context/CarsContext";
import { useContext, useState } from "react";
import { ICar } from "../../interfaces/ICars";
import moment from "moment";

const SearchCars =() => {
  const { cars } = useContext(CarsContext);

  const [dataForm, setDataForm] = useState<any>({});
  const [filteredCars, setFilteredCars] = useState<ICar[]>([]);

  const getDataForm = (key: string, value: any) => {
    setDataForm((prevDataForm: any) => ({
      ...prevDataForm,
      [key]: value
    }));
  };

  const filterCars = () => {
    const result = cars.filter((car: ICar) => {
      const condition1 = car.driverType === dataForm.driverType;
      const condition2 = moment(car.availableAt).isSameOrAfter(moment(dataForm.dates), 'day');
      const condition3 = !!dataForm.pickUp;
      const condition4 = !dataForm.numberPassenger || car.capacity === Number(dataForm.numberPassenger);
      return condition1 && condition2 && condition3 && condition4;
    });
    setFilteredCars(result || []);
  };

  return(
    <div className={style['cars-container']}>
      <div className={style.searchCars}>
        <div className={style['searchCars-container']}>
          <div className={style['searchCars-inputField']}>
            <label htmlFor="driverType">Tipe Driver</label>
            <Select
              onChange={(value) => getDataForm('driverType', value)}
              style={{width: '100%', height: '36px' }}
              defaultValue=""
              placement="bottomRight"
              options={driverType}
            />
          </div>

          <div className={style['searchCars-inputField']}>
            <label htmlFor="dates">Tanggal</label>
            <DatePicker 
              onChange={(date, dateString) => getDataForm('dates', dateString)} 
              placement="bottomRight" 
              style={{width: '100%', height: '36px' }}
            />
          </div>

          <div className={style['searchCars-inputField']}>
            <label htmlFor="pickUp">Waktu Jemput/Ambil</label>
            <Select
              onChange={(value) => getDataForm('pickUp', true)}
              style={{width: '100%', height: '36px' }}
              defaultValue=""
              options={pickUpTime}
            />
          </div>

          <div className={style['searchCars-inputField']}>
            <label htmlFor="numberPassenger">Jumlah Penumpang (optional)</label>
            <Input
              onChange={(e) => getDataForm('numberPassenger', e.currentTarget.value)}
              id="numberPassenger"
              style={{width: '100%', height: '36px' }} 
              type="number" 
              placeholder="1"
            />
          </div>

          <div className={style['searchCars-submit']}>
            <Button title="Cari Mobil" onClick={filterCars} />
          </div>
        </div>
      </div>
      <div className={style['searchCars-result']}>
        <div className={style['searchCars-result-container']}>
          {
            filteredCars.map((car) => (
              <CarCard 
                key={car.id}
                image={car.image} 
                name={car.name} 
                rentPerDay={car.rentPerDay}
                description={car.description} 
                capacity={car.capacity}
                transmission={car.transmission} 
                year={car.year}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SearchCars;