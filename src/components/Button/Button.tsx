import { FC } from "react";
import style from'./Button.module.css'

interface IButtonProps {
  onClick?: () => void
  title: string
}

const Button: FC<IButtonProps> = ({onClick, title}) => {
  return (
    <button className={style['button-component']} onClick={onClick}>{title}</button>
  )
}

export default Button;