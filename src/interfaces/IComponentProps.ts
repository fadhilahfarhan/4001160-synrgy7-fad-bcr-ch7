export interface IButtonProps {
  path?: string
  title: string
  width?: string
  onClick?: () => void
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
  rentPerDay: number, 
  description: string, 
  capacity: number, 
  transmission: string, 
  year: number
}