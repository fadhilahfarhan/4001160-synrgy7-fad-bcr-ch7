import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { ListCar, ListCarContextType } from "../interfaces/IListCar";
import { ICars } from "../interfaces/ICars";
import fetchCars from "../service/api";

export const ListCarContext = createContext<ListCarContextType>({
  listCar: [],
  saveListCar: () => {},
  updateListCar: () => {},
  deleteListCar: () => {}
});

const ListCarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [listCar, setListCar] = useState<ListCar[]>(() => {
    // Ambil data dari local storage saat inisialisasi state
    const savedCars = localStorage.getItem('listCar');
    return savedCars ? JSON.parse(savedCars) : [];
  });
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched && listCar.length === 0) {
      const fetchAndSetCars = async () => {
        const carsData: ICars[] = await fetchCars();
        const newListCarFormat = carsData.map((car) => ({
          id: car.id,
          image: car.image,
          name: `${car.manufacture} ${car.model}`,
          category: car.type,
          rentPerDay: car.rentPerDay,
          startRent: '',
          finishRent: '',
          createdAt: new Date().toISOString(),
          updatedAt: ''
        }));
        setListCar(newListCarFormat);
        localStorage.setItem('listCar', JSON.stringify(newListCarFormat));
        setIsDataFetched(true); // Tandai bahwa data sudah di-fetch
      };
      fetchAndSetCars();
    }
  }, [isDataFetched, listCar.length]);

  const saveListCar = (newData: { name?: string; rentPerDay?: number; image?: string }) => {
    const newCar: ListCar = {
      id: `car-${new Date().toISOString()}`,
      image: newData.image || '',
      name: newData.name || '',
      category: "sedan",
      rentPerDay: String(newData.rentPerDay),
      startRent: '',
      finishRent: '',
      createdAt: new Date().toISOString(),
      updatedAt: ''
    };

    setListCar((prevListCar) => {
      const updatedList = [...prevListCar, newCar];
      localStorage.setItem('listCar', JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const deleteListCar = (id: string) => {
    setListCar((prevListCar) => {
      const updatedList = prevListCar.filter(car => car.id !== id);
      localStorage.setItem('listCar', JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const updateListCar = () => {
    // Logic untuk mengupdate list car
  };

  return (
    <ListCarContext.Provider value={{ listCar, saveListCar, updateListCar, deleteListCar }}>
      {children}
    </ListCarContext.Provider>
  );
};

export default ListCarProvider;