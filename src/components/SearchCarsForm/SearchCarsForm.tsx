import { DatePicker, Input, Select } from "antd"
import style from './SearchCarsForm.module.css'
import { driverType, pickUpTime } from "../../utils/data/searchCarsFormData";
import Button from "../Button/Button";

const SearchCarsForm =() => {
  return(
    <div className={style.searchCarsForm}>
      <div className={style['searchCarsForm-container']}>
        <div className={style['searchCarsForm-inputField']}>
          <label htmlFor="driverType">Tipe Driver</label>
          <Select
            style={{width: '100%', height: '36px' }}
            id="driverType"
            defaultValue=""
            placement="bottomRight"
            options={driverType}
          />
        </div>

        <div className={style['searchCarsForm-inputField']}>
          <label htmlFor="date">Tanggal</label>
          <DatePicker id="date" placement="bottomRight" style={{width: '100%', height: '36px' }}/>
        </div>

        <div className={style['searchCarsForm-inputField']}>
          <label htmlFor="date">Waktu Jemput/Ambil</label>
          <Select
            style={{width: '100%', height: '36px' }}
            id="driverType"
            defaultValue=""
            options={pickUpTime}
          />
        </div>

        <div className={style['searchCarsForm-inputField']}>
        <label htmlFor="date">Jumlah Penumpang(optional)</label>
        <Input
        style={{width: '100%', height: '36px' }} type="number"/>
        </div>

        <div className={style['searchCarsForm-submit']}>
        <Button title="Cari Mobil" path=""/>
        </div>
        
      </div>
      
    </div>
    
  )
}

export default SearchCarsForm;