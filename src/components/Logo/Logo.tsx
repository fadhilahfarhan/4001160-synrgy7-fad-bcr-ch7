import { FC } from "react";
import { LogoStyled } from "./StyledLogo";
import { ILogoProps } from "../../interfaces/IComponentProps";


const Logo: FC<ILogoProps> = ({color, width}) => {
  return <LogoStyled color={color} width={width}></LogoStyled>
}

export default Logo;