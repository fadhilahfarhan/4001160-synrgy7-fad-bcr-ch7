import { CSSProperties, FC, useEffect, useState } from "react";
import { IIconsProps } from "../../interfaces/IComponentProps";
import style from './Icon.module.css'

const Icon: FC<IIconsProps> = ({color, image, alt, size}) => {
  const [customStyle, setCustomStyle] = useState<CSSProperties>({backgroundColor: color})

  const mediumSize: CSSProperties ={
    width: '32px',
    height: '32px',
    padding: '6px'
  }

  const smallSize: CSSProperties = {
    width: '24px',
    height: '24px',
    padding: '4px',
  }

  const customSize = (size: string) => {
    const getSize = size === 'small' ? smallSize : mediumSize;
    setCustomStyle({
      ...customStyle,
      ...getSize
    })
  }
  
  useEffect(()=> {
    customSize(size)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className={style.container} style={customStyle}>
      <img
          style={customStyle}
          className={style.icon}
          src={image}
          alt={alt}
      />
    </div>
  )
}

export default Icon;