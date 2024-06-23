import style from './WhyUs.module.css'
import { whyUsContent } from '../../utils/data/whyUsData';
import WhyUsCard from '../WhyUsCard/WhyUsCard';
import { IWhyUsCardProps } from '../../interfaces/IComponentProps';

const WhyUs = () => {
  const contents: IWhyUsCardProps[] = whyUsContent
  return (
    <section className={style.whyUs}>
      <div className={style['whyUs-header']}>
        <h2>Why Us?</h2>
        <p>Mengapa harus pilih Binar Car Rental?</p>
      </div>

      <div className={style['whyUs-cards']}>
        {
          contents.map((content) => (
            <WhyUsCard 
              key={content.key} 
              image={content.image.default} 
              title={content.title} 
              description={content.description}
              color={content.color}
              size={content.size}
            />
          ))
        }
      </div>
    </section>
  )
}

export default WhyUs;