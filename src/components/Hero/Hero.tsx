import Button from '../Button/Button'
import style from './Hero.module.css'
import imgCar from '../../assets/images/img_car.png'

const Hero = () => {
  return(
    <>
      <section className={style['hero-section']}>
        <div className={style['hero-container']}>
          <div className={style['hero-content']}>
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. 
              Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <Button title='Mulai Sewa Mobil'/>
          </div>
          <div className={style['hero-image']}>
            <img src={imgCar} alt="img_car" />
          </div>
        </div>  
      </section>
    </>
  )
}

export default Hero