import { HeaderStyled } from "./StyledHeader"
import menu from '../../assets/icons/menu.svg'
import search from '../../assets/icons/search.png'
import chevronDown from '../../assets/icons/chevron-down.svg'

const Header = () => {
  return(
    <HeaderStyled>
      <img className="header-menu-icon" src={menu} alt="menu" />
      <div className="header-container">
        <div className="header-search">
          <div className="header-search-box">
            <img src={search} alt="search" />
            <input type="text" />
          </div>
          <button>Search</button>
        </div>
        <div className="header-user">
          <span>U</span>
          <p>Unis Badri</p>
          <img src={chevronDown} alt="chevron-down" />
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header