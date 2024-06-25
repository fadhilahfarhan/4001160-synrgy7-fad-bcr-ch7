import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import style from './Footer.module.css'
import { contact } from '../../utils/data/footerData';
import { IIconsProps } from '../../interfaces/IComponentProps';

const Footer = () => {
  const Contacts: IIconsProps[] = contact
  return (
    <footer className={style.footer}>
      <div className={style['footer-address']}>
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className={style['footer-navigation']}>
        <a href="##">Our Service</a>
        <a href="##">Why Us</a>
        <a href="##">Testimonial</a>
        <a href="##">FAQ</a>
      </div>
      <div className={style['footer-contact']}>
        <p>Connect with us</p>
        <div className={style['footer-contact-icons']}>
          {Contacts.map((item) => (
            <Icon key={item.alt} color={item.color} image={item.image.default} alt={item.alt} size={item.size}/>
          ))}
        </div>
      </div>
      <div className={style['footer-copyRight']}>
        <p>Copyright Binar 2022</p>
        <Logo/>
      </div>
    </footer>
  )
}

export default Footer;