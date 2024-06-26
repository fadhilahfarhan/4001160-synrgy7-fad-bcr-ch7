import { CSSProperties, FC } from "react";
import style from'./Button.module.css'
import { IButtonProps } from "../../interfaces/IComponentProps";
import { useNavigate } from "react-router-dom";

const Button: FC<IButtonProps> = ({path, title, width, onClick}) => {
  const navigate = useNavigate();

  const customStyle: CSSProperties = { 
    width: width
  }

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (path) {
      navigate(path);
    }
  };

  return (
    <button onClick={handleClick} style={customStyle} className={style['button-component']}>{title}</button>
  )
}

export default Button;