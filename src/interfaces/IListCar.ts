export interface ListCar {
  no?: number
  id: string
  image: string
  name: string
  category: string
  rentPerDay: string
  startRent: string
  finishRent: string
  createdAt: string
  updatedAt: string
}

export type ListCarContextType ={
  listCar: ListCar[]
  saveListCar: (newData:{name?: string, rentPerDay?: number, image?: string}) => void
  updateListCar: () => void
  deleteListCar: (id:string) => void
}