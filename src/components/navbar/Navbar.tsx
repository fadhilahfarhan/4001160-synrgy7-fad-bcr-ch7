import Button from '../Button/Button';
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.navigation}>
      <div className={style['navigation-container']}>
        <span className={style.logo}></span>
        <ul className={style['menu-items']}>
          <li><a href="##">Our Services</a></li>
          <li><a href="##">Why Us</a></li>
          <li><a href="##">Testimonial</a></li>
          <li><a href="##">FAQ</a></li>
          <li><Button title="Register"/></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;