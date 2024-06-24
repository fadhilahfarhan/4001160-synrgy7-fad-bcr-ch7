import React, { useRef } from 'react';
import { Carousel, Row, Col, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import type { CarouselRef } from 'antd/es/carousel';
import style from './Testimonial.module.css'; // Import custom CSS for styling
import { items } from '../../utils/data/TestimonialData';
const Testimonial = () => {
  const carouselRef = useRef<CarouselRef>(null);

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  const next = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div className={style['testimonial-container']}>
      <div>
      <h2>Testimonial</h2>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      
      
      <Carousel ref={carouselRef} arrows={false} dots={false} infinite={true}>
        {groupedItems.map((group, index) => (
          <div key={index}>
            <Row gutter={85} justify="center" wrap={false}>
              {group.map(item => (
                <Col key={item.key} span={11} className={style['testimonial-col']}>
                  <div className={style['testimonial-item']}>
                    <div className={style['testimonial-content']}>
                      <div className={style['testimonial-user-picture']}>
                        <img src={item.image} alt="picture-user" />
                      </div>
                      <div className={style['testimonial-author']}>
                        <img src={item.star} alt="star" />
                        <p>{item.content}</p>
                        <p>{item.author}</p>
                      </div>
                  </div></div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>
      <div className={style['testimonial-buttons']}>
        <Button onClick={prev} icon={<LeftOutlined />} />
        <Button onClick={next} icon={<RightOutlined />} />
      </div>
    </div>
  );
};

export default Testimonial;