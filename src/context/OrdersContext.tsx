import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { Orders, OrdersContextType } from "../interfaces/IOrders";
import { orderData } from "../utils/data/orderData";

export const OrdersContext = createContext<OrdersContextType>({
  orders: [],
  saveOrder: () => {},
  updateOrder: () => {}
})

const OrdersProvider: FC<PropsWithChildren> = ({children}) => {
  const [orders, setOrders] = useState<Orders[]>([])

  useEffect(()=>{
    const initialDataOrder: Orders[] = orderData

    setOrders(initialDataOrder)
  }, [])
  console.log(orders);
  
  const saveOrder =() => {

  }

  const updateOrder = () => {
    
  }

  return (
    <OrdersContext.Provider value={{ orders, saveOrder, updateOrder }}>
      {children}
    </OrdersContext.Provider>
  )
} 

export default OrdersProvider;