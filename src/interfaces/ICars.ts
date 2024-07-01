export interface ICars {
  id: string
  plate: string
  manufacture: string
  model: string
  image: any
  rentPerDay: number
  capacity: number
  description: string
  transmission: string
  driverType: string
  type: string
  year: number
  option: string[]
  specs: string[]
  available: boolean
  availableAt: Date
}

export type CarsContextType = {
  cars: ICar[]
  saveCars: () => void
  updateCars: () => void
}

export interface ICar {
  id: string
  image: any
  name: string
  rentPerDay: number
  capacity: number
  description: string
  transmission: string
  driverType: string
  year: number
  category: string
  availableAt: Date
  startRent?: string
  finishRent?: string
  updatedAt?: string
  createdAt: string
}