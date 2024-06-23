import style from './FAQ.module.css'
import { Collapse } from 'antd';
import { items } from '../../utils/data/FAQData';
const FAQ = () => {
  return (
    <section className={style.FAQ}>
      <div className={style['FAQ-header']}>
        <h3>Frequently Asked Question</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      <div className={style['FAQ-accordeon']}>
        {
          items.map((item) => (
            <Collapse
              expandIconPosition="end"
              items={[item]}
              key={item.key}
             />
          ))
        }
      </div>
    </section>
  )
}

export default FAQ;