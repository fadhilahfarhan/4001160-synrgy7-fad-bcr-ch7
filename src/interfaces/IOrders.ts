export type OrdersContextType = {
  orders: Orders[]
  saveOrder: () => void
  updateOrder: () => void
}

export interface Orders {
  no?: number
  userEmail: string
  car: string
  startRent: string
  finishRent: string
  price: number
  status: string
}