import Button from '../Button/Button';
import style from './CTABanner.module.css'

const CTABanner = () => {
  return (
    <section className={style.CTABanner}>
      <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Button path={'/cars'} title='Mulai Sewa Mobil'/>
    </section>
  )
}

export default CTABanner;