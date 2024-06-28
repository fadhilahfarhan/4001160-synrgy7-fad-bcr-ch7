import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: white;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  .header-menu-icon{
    height: 24px;
    width: 24px;
  }

  .header-container{
    display: flex;
    gap: 16px;

    .header-search{
      height: 36px;
      display: flex;

      .header-search-box{
        border: 1px solid #D0D0D0;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 14px;
        img{
          height: 18px;
          width: 18px;
        }
        input{
          width: 124px;
          height: 34px;
          border: 0px solid;
          outline: none;
        }
      }

      button{
        border: 1px solid #0D28A6;
        background-color: transparent;
        width: 71px;
        height: 36px;
        padding: 8px 12px 8px 12px;
        opacity: 0px;
        color: #0D28A6;
        font: 700 14px/20px Helvetica;
      }
    }

    .header-user{
      display: flex;
      gap: 8px;
      align-items: center;

      span{
        height: 38px;
        width: 38px;
        background-color: #CFD4ED;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font: 700 16px/24px Helvetica;
      }
      p{
        font: 400 14px/20px Helvetica;
      }
      img{
        height: 24px;
        width: 24px;
      }
    }
  }
`