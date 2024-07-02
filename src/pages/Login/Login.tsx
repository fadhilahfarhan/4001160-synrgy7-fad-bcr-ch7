import { LoginStyled } from "./StyledLogin"
import loginImage from '../../assets/images/login.png'
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";

const Login = () => {
  return (
  <LoginStyled>
    <div className="login-image">
      <img src={loginImage} alt="" />
    </div>
    <div className="login-form">
      <div className="login-form-container">
        <div className="login-form-header">
          <Logo width="100px" color="#CFD4ED"/>
          <h2>Welcome, Admin BCR</h2> 
        </div>
        <form>
          <div className="login-input-fields">
            <div>
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Contoh: johndee@gmail.com"/>
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="password" placeholder="6+ karakter"/>
            </div>
          </div>
          
          <Button title="Sign In" width="100%" color="#0D28A6"/>
        </form>
        
      </div>
    </div>
  </LoginStyled>
  )
}

export default Login;