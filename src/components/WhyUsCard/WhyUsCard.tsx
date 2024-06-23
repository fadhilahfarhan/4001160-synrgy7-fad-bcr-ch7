import { FC } from 'react';
import { IWhyUsCardProps } from '../../interfaces/IComponentProps'
import style from './WhyUsCard.module.css'
import Icon from '../Icon/Icon';

const WhyUsCard: FC<IWhyUsCardProps> = ({image, title, description, color, size}) => {
  return (
    <div className={style['whyUs-card']}>
      <Icon key={title} color={color} image={image} alt={title} size={size}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default WhyUsCard;