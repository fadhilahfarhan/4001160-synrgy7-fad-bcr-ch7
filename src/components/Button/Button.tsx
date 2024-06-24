import { FC } from "react";
import style from'./Button.module.css'
import { IButtonProps } from "../../interfaces/IComponentProps";
import { useNavigate } from "react-router-dom";

const Button: FC<IButtonProps> = ({path = '/', title}) => {
  const navigate = useNavigate();

  const onClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <button onClick={onClick} className={style['button-component']}>{title}</button>
  )
}

export default Button;