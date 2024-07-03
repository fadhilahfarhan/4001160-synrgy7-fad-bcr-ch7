

import styled from "styled-components";

export const CarListContentStyled = styled.div`
  margin: 0 0 16px 16px;
  padding-right: 16px;
  display: flex;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
  gap: 20px;

  .CL-header{
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    h1{
      font: 700 20px/30px Helvetica;
    }

    .CL-add-button{
      display: flex;
      justify-content: space-between;
      align-items: center;

      button{
        width:142px;
        height:36px;
        text-align: center;
        padding: 8px 12px 8px 12px;
        border: none;
        border-radius: 2px 0px 0px 0px;
        background: #0D28A6;
        color: white;
        font-family: Helvetica;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      }
    }

    .CL-button-groups{
      display: flex;
      gap: 16px;

      button{
        height: 36px;
        padding: 8px 12px 8px 12px;
        gap: 10px;
        border-radius: 2px;
        border: 1px;
        background: #FFFFFF;
        border: 1px solid #aeb7e1;
        font-family: Helvetica;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-align: left;
        color: #AEB7E1;
      }
      :first-child{
        color: #0D28A6;
        border: 1px solid #0D28A6
      }
    }
  }
  .CL-content{
    display: flex;
    flex-wrap: wrap;
    gap: 32px;

    .CL-item{
      border-radius: 8px;
      box-shadow: 0px 0px 4px 0px #00000026;
      padding: 16px;
      width: 351px;
      background-color: white;
      display: flex;
      flex-direction: column;
      gap: 16px;
      
      p:nth-child(3){
        font: 700 16px/24px Helvetica;
      }
    
      .CL-item-image{
        border-radius: 8px;
        width: 100%;
        height: 222px;
        object-fit: cover;
      }

      .CL-group-with-icon{
        display: flex;
        gap: 8px;
      }

      .CL-item-button{
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 10px;
      }

      button{
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;

        &:first-child{
          background-color: white;
          color: #FA2C5A;
          border: 1px solid #FA2C5A;
        }
        
        &:last-child{
          color: white;
          background-color: #5CB85F;
          border: none;
        }
      }
    }
  }
`