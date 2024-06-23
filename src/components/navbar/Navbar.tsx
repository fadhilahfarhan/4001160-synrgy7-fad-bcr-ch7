import Layout from '../../layout/Layout';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import style from './Navbar.module.css'

const Navbar = () => {

  return (
    <nav className={style.navigation}>
      <Layout>
        <div className={style['navigation-container']}>
          <Logo/>
          <ul className={style['menu-items']}>
            <li><a href="##">Our Services</a></li>
            <li><a href="##">Why Us</a></li>
            <li><a href="##">Testimonial</a></li>
            <li><a href="##">FAQ</a></li>
            <li><Button path='/login' title="Register"/></li>
          </ul>
        </div>
      </Layout>
    </nav>
  )
}

export default Navbar;