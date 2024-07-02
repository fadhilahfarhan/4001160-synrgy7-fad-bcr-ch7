import { DashboardContentStyled } from "./StyledDashboardContent";
import { Table } from 'antd';
import { useContext, useEffect, useState } from "react";
import { OrderColumns, orderData } from "../../utils/data/orderData";
import { ListCarColumns } from "../../utils/data/listCar";
import { ListCar } from "../../interfaces/IListCar";
import moment from "moment";
import { Orders } from "../../interfaces/IOrders";
import { ListCarContext } from "../../context/ListCarContext";


const DashboardContent = () => {
  const [orders, setOrders] = useState<Orders[]>([])
  const ordersColumns = OrderColumns

  const listCarContext = useContext(ListCarContext);
  const [listCar, setListCar] = useState<ListCar[]>([])
  const listCarColumns = ListCarColumns

  useEffect(() => {
    let no = 1;
    const newListCarFormat = listCarContext.listCar.map((car) => {
      return {
      ...car,
      no: no++,
      rentPerDay: `Rp. ${new Intl.NumberFormat('id-ID').format(Number(car.rentPerDay))}`,
      startRent: car.startRent ? car.startRent : '-',
      finishRent: car.finishRent ? car.finishRent : '-',
      createdAt: moment(car.createdAt).format('D MMMM YYYY, h:mm:ss a'),
      updatedAt: car.updatedAt ? car.updatedAt : '-'
    }});

    setListCar(newListCarFormat)
    setOrders(orderData)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listCarContext.listCar])
  
  return (
    <DashboardContentStyled>
      <div className="DC-header">
        <p>Dashboard {'>'} Dashboard</p>
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