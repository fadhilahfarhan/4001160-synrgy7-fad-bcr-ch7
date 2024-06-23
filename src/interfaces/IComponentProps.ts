export interface IButtonProps {
  path?: string
  title: string
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