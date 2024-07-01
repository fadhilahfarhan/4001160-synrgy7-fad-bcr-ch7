import { DashboardContentStyled } from "./StyledDashboardContent";
import { Table } from 'antd';
import { useContext, useEffect, useState } from "react";
import { OrdersContext } from "../../context/OrdersContext";
import { OrderColumns } from "../../utils/data/orderData";
import { CarsContext } from "../../context/CarsContext";
import { ListCarColumns } from "../../utils/data/listCar";
import { ListCar } from "../../interfaces/IListCar";


const DashboardContent = () => {
  const ordersContext = useContext(OrdersContext);
  const orders = ordersContext.orders;
  const ordersColumns = OrderColumns

  const cars = useContext(CarsContext);
  const [listCar, setListCar] = useState<ListCar[]>([])
  const listCarColumns = ListCarColumns

  

  useEffect(() => {
    let no = 1
    const newListCarFormat = cars.cars.map((car) => ({
      no: no++,
      name: car.name,
      category: car.category,
      rentPerDay: car.rentPerDay,
      startRent: car.startRent ? car.startRent : '-',
      finishRent: car.finishRent ? car.finishRent : '-',
      createdAt: car.createdAt,
      updatedAt: car.updatedAt ? car.updatedAt : '-'
    }))

    setListCar(newListCarFormat)
    console.log(listCar);
    
  }, [cars.cars, listCar])
  
  return (
    <DashboardContentStyled>
      <div className="DC-header">
        <p>Dashboard {'>'} cars</p>
        <h1>Dashboard</h1>
      </div>

      <div className="list-order">
        <h4>List Order</h4>
        <Table columns={ordersColumns} dataSource={orders} size="middle" />
      </div> 
      <div className="list-car">
        <h4>List Car</h4>
        <Table columns={listCarColumns} dataSource={listCar} size="middle" />
      </div> 
    </DashboardContentStyled>
  )

}

export default DashboardContent;