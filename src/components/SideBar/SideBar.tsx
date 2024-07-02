import Logo from '../Logo/Logo';
import house from '../../assets/icons/house.svg'
import truck from '../../assets/icons/truck.svg'
import { Sidebar, SidebarIcon, SidebarIcons, SidebarItems }from './StyledSideBar'
import { useEffect,  useState} from 'react';
import { sidebarList } from '../../utils/data/sidebarList';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate()
  const [currentList, setCurrentList] = useState('')

  const handleButton = (id: string) => {
    if(id === "dashboard"){
      setCurrentList(id)
      console.log('dashboard clicked');
    } 
    if(id === 'cars') {
      setCurrentList(id)
      console.log('cars clicked');
    }
  };

  useEffect(()=>{
    const currentListUrl = window.location.pathname.split('/')[2]
    setCurrentList(currentListUrl)
  }, [])

  const subList = () => {
    let list: any[] = [];

    if("dashboard" === currentList){
      list = sidebarList.dashboard
    } else if("cars" === currentList){
      list = sidebarList.cars
    }
    

    return (
      <ul>
        {
        list.map((item)=>(
          <li>
            <button onClick={()=>navigate(item.navigate)}>{item.title}</button>
          </li>
        ))
        } 
      </ul>
    )
  }

  return (
    <Sidebar>
      <SidebarIcons>
        <Logo key={'logo-sidebar-1'} color='#CFD4ED' width='34px' />
        <div>
          <SidebarIcon $isActive={currentList === 'dashboard'}>
            <button onClick={() => handleButton('dashboard')}></button>
            <img src={house} alt="house" />
            <p>Dashboard</p>
          </SidebarIcon>
          <SidebarIcon $isActive={currentList === 'cars'}>
            <button onClick={() => handleButton('cars')}></button>
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
          <h4>{currentList.toUpperCase()}</h4>
          {subList()}
        </div>
      </SidebarItems>
    </Sidebar >
  )
}

export default SideBar;