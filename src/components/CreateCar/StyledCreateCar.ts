import styled from "styled-components";

export const CreateCarStyled = styled.div`
margin: 0 0 0 16px;
  padding-right: 16px;
  display: flex;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  

  .create-car-header{
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    h1{
      font: 700 20px/30px Helvetica;
    }
  }

  form{
    background-color: white;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .create-input-field{
      display: flex;
      width: 100%;

      label{
        font: 300 12px/18px Helvetica;
      }

      span{
        color: red;
      }

      input, .button-upload{
        height: 36px;
        width: 339px;
        border-radius: 2px;
        padding: 9px 12px;
        border: 1px solid #D0D0D0;
      }

      :first-child{
        width: 147px;
      }
    }
  }

  .create-form{
    position: relative;
    height: 100%;
    margin-bottom: 32px;
  }

  .create-submit-button{
    position: absolute;
    bottom: 0;
    display: flex;
    gap: 10px;

    button{
      border-radius: 2px;
      padding: 8px 12px 8px 12px;
      font: 700 14px/20px Helvetica;
    }

    :first-child{
      color: #0D28A6;
      background-color: white;
      border: 1px solid #0D28A6;
    }

    :last-child{
      background-color: #0D28A6;
      color: white;
      border: 1px solid #0D28A6;
    }
  }
`