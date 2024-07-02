export interface IButtonProps {
  path?: string
  title?: string
  width?: string
  color?: string
  textColor?: string
  onClick?: () => void
}

export interface ILogoProps{
  color?: string
  width?: string
}

export interface IHeroProps {
  hideButton?: boolean
} 

export interface IWhyUsCardProps {
  key?: string
  image: any
  title: string
  description: string
  color: string
  size: string
}

export interface IIconsProps {
  color: string
  image: any
  alt: string
  size: string
}

export interface IOurServiceListProps {
  key: string
  icons: IIconsProps
  text: string
}

export interface IcarProps {
  image: string, 
  name: string, 
  rentPerDay: string, 
  description: string, 
  capacity: number, 
  transmission: string, 
  year: number
}