import { FC } from "react"
import { IOurServiceListProps } from "../../interfaces/IComponentProps"
import Icon from "../Icon/Icon"

const OurServiceList: FC<IOurServiceListProps> = ({icons, text}) => {
  return (
    <li>
      <Icon key={icons.alt} color={icons.color} image={icons.image.default} alt={icons.alt} size={icons.size}/>
      <p>{text}</p>
    </li>
  )
}

export default OurServiceList;