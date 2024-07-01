import { TableColumnsType } from "antd";
import { Orders } from "../../interfaces/IOrders";

export const orderData: Orders[] = [
  {
    no: 1,
    userEmail: "blabla@mail.com",
    car: "bmw rawrr",
    startRent: "20 04 2024",
    finishRent: "21 04 2024",
    price: 1000000,
    status: "status"
  },
  {
    no: 2,
    userEmail: "blabla@mail.com",
    car: "bmw rawrr",
    startRent: "20 04 2024",
    finishRent: "21 04 2024",
    price: 1000000,
    status: "status"
  },
  {
    no: 3,
    userEmail: "blabla@mail.com",
    car: "bmw rawrr",
    startRent: "20 04 2024",
    finishRent: "21 04 2024",
    price: 1000000,
    status: "status"
  }
] 

export const OrderColumns: TableColumnsType = [
  {
    title: 'No',
    dataIndex: 'no',
  },
  {
    title: 'User Email',
    dataIndex: 'userEmail',
  },
  {
    title: 'Car',
    dataIndex: 'car',
  },
  {
    title: 'Start Rent',
    dataIndex: 'startRent',
  },
  {
    title: 'Finish Rent',
    dataIndex: 'startRent',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];