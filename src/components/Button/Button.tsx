import { FC } from "react";
import { IButtonProps } from "../../interfaces/IComponentProps";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from './StyledButton'

const Button: FC<IButtonProps> = ({path, title, color, width, textColor, onClick}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (path) {
      navigate(path);
    }
  };

  return (
    <ButtonComponent onClick={handleClick}
    color={color} 
    Width={width}
    textColor={textColor}>{title}</ButtonComponent>
  )
}

export default Button;