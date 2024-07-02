import { FC } from 'react'
import Button from '../Button/Button'
import style from './CarCard.module.css'
import { IcarProps } from '../../interfaces/IComponentProps'
const CarCard: FC<IcarProps> = ({image, name, rentPerDay, description, capacity, transmission, year}) => {
  const icons = [
    require('../../assets/icons/users.svg'),
    require('../../assets/icons/settings.svg'),
    require('../../assets/icons/calendar.svg')
  ]
  
  return (
    <div className={style.carCard}>
      <div className={style['carCard-image']}>
        <img src={image} alt="car" />
      </div>

      <div className={style['carCard-content']}>
        <p>{name}</p>
      <p className={style.bold}>{`Rp. ${new Intl.NumberFormat('id-ID').format(Number(rentPerDay))} / Hari`}</p> 
        <p>{description}</p>
        <div> 
          <img src={icons[0].default} alt="icons_users" />
          <p>{capacity} orang</p>
        </div>
        <div>
          <img src={icons[1].default} alt="icons_setting" />
          <p>{transmission}</p>
        </div>
        <div>
          <img src={icons[2].default} alt="icons_calendar" />
          <p>Tahun {year}</p>
        </div>
      </div>
      <div className={style['carCard-content-button']}>  
        <div>
        <Button width="100%" title='Pilih Mobil'/></div>
      </div> 
    </div>
  )
} 

export default CarCard;