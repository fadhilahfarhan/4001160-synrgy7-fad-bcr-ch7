import Logo from '../Logo/Logo';
import house from '../../assets/icons/house.svg'
import truck from '../../assets/icons/truck.svg'
import { Sidebar, SidebarIcon, SidebarIcons, SidebarItems }from './StyledSideBar'
import { useRef, useState} from 'react';
import { sidebarList } from '../../utils/data/sidebarList';
import { useNavigate } from 'react-router-dom';

type SidebarList = typeof sidebarList;

const SideBar = () => {
  const navigate = useNavigate()
  const [activeButton, setActiveButton] = useState<keyof SidebarList>('Dashboard');
  const dashboardButtonRef = useRef<HTMLButtonElement>(null);
  const carsButtonRef = useRef<HTMLButtonElement>(null);

  const list: (keyof SidebarList)[] = Object.keys(sidebarList) as (keyof SidebarList)[];
  
  const handleButton = (id: keyof SidebarList) => {
    setActiveButton(id);
    if(id === "Dashboard"){
      navigate('/admin/dashboard')
    } else {
      navigate('/admin/cars')
    }
  };

  return (
    <Sidebar>
      <SidebarIcons>
        <Logo key={'logo-sidebar-1'} color='#CFD4ED' width='34px' />
        <div>
          <SidebarIcon $isActive={activeButton === 'Dashboard'}>
            <button ref={dashboardButtonRef} onClick={() => handleButton('Dashboard')} id='Dashboard'></button>
            <img src={house} alt="house" />
            <p>Dashboard</p>
          </SidebarIcon>
          <SidebarIcon $isActive={activeButton === 'Cars'}>
            <button ref={carsButtonRef} onClick={() => handleButton('Cars')} id='Cars'></button>
            <img src={truck} alt="truck" />
            <p>Cars</p>
          </SidebarIcon>
        </div>
        
      </SidebarIcons> 
      <SidebarItems>
        <div className='header-logo'>
          <Logo key={'logo-sidebar-2'} color='#CFD4ED' />
        </div>
        
        <div className='sidebar-items-container'>
          <h4>{activeButton.toUpperCase()}</h4>
          <ul>
            {
              list.includes(activeButton) ? sidebarList[activeButton].map((item, index) => (
                <li key={`sidebar-${item}-${index}`}>
                  <button>{item}</button>
                </li>
              )) : null
            } 
          </ul>
        </div>
      </SidebarItems>
    </Sidebar >
  )
}

export default SideBar;