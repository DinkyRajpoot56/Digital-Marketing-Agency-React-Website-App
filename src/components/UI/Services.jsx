import React from 'react'
import "../../styles/services.css";
const serviceData = [
    {
        icon:'ri-apps-line',
        title:'App Development',
        desc:'Development of your app: Our developers will bring your designs to life. Your new mobile app will be developed to work smoothly on all major platforms.'
    },
    {
        icon:'ri-code-s-slash-line',
        title:'Web Design',
        desc:'Full Stack Development — Connect Your Front-End UI to the Backend With Minimal Coding. Create a Free AWS Account.'
    },
    {
        icon:'ri-landscape-line',
        title:'Graphics Design',
        desc:'Graphic design is a craft where professionals create visual content to communicate messages. '
    },
    {
        icon:'ri-rocket-line',
        title:'Digital Marketing',
        desc:'Digital marketing is the use of websites, apps, mobile devices, social media, search engines, and other digital means to promote and sell products and services.'
    },
]

const Services = () => {
  return(
     <section id="service">
    <div className="container">
      <div className="services__top-content">
        <h6 className="subtitle">Our Services</h6>
        <h2>Save Time managing your business with</h2>
        <h2 className="highlight">Our best Services</h2>
      </div>

      <div className="service__item-wrapper">
        {
            serviceData.map((item,index)=>(
                <div className="services__item" key={index}>
        <span className="service__icon">
            <i class={item.icon}></i>
            </span>
            <h3 className="service__title">{item.title}</h3>
            <p className="description">
                {item.desc}
            </p>
        </div>

            ))
        }
      </div>
    </div>
  </section>
  );
};

export default Services
