import React from 'react'
import '../../styles/testimonial.css';
import Slider from "react-slick";
import ava01 from '../../images/ava-1.jpg';
import ava02 from '../../images/ava-2.jpg';
import ava03 from '../../images/ava-3.jpg';

const Testimonial = () => {
    const settings = {
        dots:false,
        infinite:true,
        speed:1000,
        autoPlay:true,
        autoPlaySpeed:2000,
        slidesToShow:1,
        slidesToScroll:1,
        swipeToSlide:true,
    }
  return(
   <section>
    <div className="container">
        <div class="slider__content-top">
            <h6 className="subtitle">Testimonial</h6>
            <h2>Trusted by more than{" "}
                <span className="highlight"></span>5,000 customers</h2>
        </div>
        <div className="slider__wrapper">
        <Slider {...settings}>
        <div className="slider__item">
            <p className="description">online banking, online payment and transfer services.peer-to-peer lending.personal investment advice and services.
            </p>
            <div className="customer__details">
                <div className="customer__img">
                    <img src={ava01} alt=""/>
                </div>
                <div>
                <h5 className="customer__name">Anney Martin</h5>
                <p className="description">Software Developer</p>
            </div>
            </div>
        </div>

        <div className="slider__item">
            <p className="description">The primary goal behind digital marketing for financial services is to improve customer engagement and win their trust. It is imperative to implement digital strategies to gain more visibility and reach more potential customers.
            </p>
            <div className="customer__details">
                <div className="customer__img">
                    <img src={ava02} alt=""/>
                </div>
                <div>
                <h5 className="customer__name">Jhon Doe</h5>
                <p className="description">Sr.Product Designer</p>
            </div>
            </div>
        </div>

        <div className="slider__item">
            <p className="description">It encompasses a broad range of technology-enabled financial activities, including online banking, mobile payments, POS terminals, and cryptocurrencies. The driving purpose of digital finance is to enhance the reach, speed, and cost-effectiveness of financial services, making them more accessible to the general public.
            </p>
            <div className="customer__details">
                <div className="customer__img">
                    <img src={ava03} alt=""/>
                </div>
                <div>
                <h5 className="customer__name">Wiliam Cooper</h5>
                <p className="description">Sr.Developer</p>
            </div>
            </div>
        </div>
        
    </Slider>
        </div>
    </div>
  </section>
  );
  
};

export default Testimonial
