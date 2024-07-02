import styled from "styled-components";

export const LoginStyled = styled.div`
  background-color: #0D28A6;
  display: flex;
  align-items: start;
  height: 100vh;
  overflow-y: hidden;
  .login-image{
    height: 100%;
    width: 70vw;
    position: relative;
    img{
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .login-form{
    height: 100%;
    width: 30vw;
    display: flex;
    background-color: #FFFFFF;
    justify-content: center;
    align-items: center;

    .login-form-container{
      display: flex;
      flex-direction: column;
      gap: 32px;
      width: 370px;

      .login-form-header{
        display: flex;
        flex-direction: column;
        gap: 32px;
        
        h4{
          font: 700 24px/36px Helvetica;
        }
      }

      form{
        display: flex;
        flex-direction: column;
        gap: 32px;

        .login-input-fields{
          display: flex;
          flex-direction: column;
          gap: 16px;

          label{
            font: 300 14px/20px Helvetica;
            margin-bottom: 8px;
          }

          input{
            height: 39px;
            width: 100%;
            padding-inline: 12px;
            border: 1px solid #0000001A;
            border-radius: 5px;
          }
        }
      }
    }
  }
`