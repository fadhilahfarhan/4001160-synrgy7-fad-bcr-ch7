import style from './OurServices.module.css'
import serviceImage from '../../assets/images/img_service.png'
import { serviceList } from '../../utils/data/OurServiceListData'
import { IOurServiceListProps } from '../../interfaces/IComponentProps'
import OurServiceList from '../OurServiceList/OurServiceList'

const OurService = () => {
  const lists: IOurServiceListProps[] = serviceList;
  return (
    <section className={style.service}>
        <div className={style['service-container']}>
          <div className={style['service-image']}>
            <img src={serviceImage} alt="service-image" />
          </div>
          <div className={style['service-content']}>
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul>
              {
                lists.map((list) => (
                  <OurServiceList key={list.key} icons={list.icons} text={list.text}/>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
  )
}

export default OurService;