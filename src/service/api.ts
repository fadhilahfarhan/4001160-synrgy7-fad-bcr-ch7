const APIEndpoint = 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json'

const fetchCars = async () => {
  const response = await fetch(APIEndpoint)
  const cars = await response.json()
  return cars;
}

export default fetchCars;