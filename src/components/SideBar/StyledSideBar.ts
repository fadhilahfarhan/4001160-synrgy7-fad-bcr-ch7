import styled from 'styled-components'

export const Sidebar = styled.aside`
  width: 290px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
`

export const SidebarIcons = styled.div`
  background-color: #0D28A6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 16px;
  padding-top: 16px;
  width: 70px;
  height: 100%;
`

export const SidebarIcon = styled.div<{ $isActive?: boolean }>`
  position: relative;
  width: 70px;
  height: 64px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  background: ${({ $isActive }) => ($isActive ? '#FFFFFF4D' : 'transparent')};

  button {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
  }

  p {
    font: ${({ $isActive }) => ($isActive ? '700 12px/18px Helvetica' : '300 12px/18px Helvetica')};
    color: white;
  }
`;

export const SidebarItems = styled.div`
  background-color: white;
  width: 220px;
  height: 100%;
  padding: 16px  0;

  .header-logo{
    padding-left:16px;
  }
  .sidebar-items-container{
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin-top: 16px;
  
   h4{
    font: 700 14px/20px Helvetica;
    color: #8A8A8A;
    padding: 0 16px;
   } 

   ul{
    display: flex;
    flex-direction: column;

    li{
      list-style: none;

      button{
        cursor: pointer;
        padding: 8px 16px;
        height: 100%;
        width: 100%;
        background-color: #CFD4ED;
        border: none;
        text-align: left;

        &:hover{
          background-color: #0D28A6;
          color:white;
        }

        &:active{
          background-color: #0D28A6;
          color:white;
        }
      }
    }
   }
  }
`