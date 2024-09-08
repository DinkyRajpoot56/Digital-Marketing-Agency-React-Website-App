import React from 'react'
import "../../styles/about.css";
import aboutImg from '../../images/about-us.jpg';
const chooseData= [
    {
        icon:'ri-wifi-line',
        title:'First working process',
        desc:"Starting with an idea and ending up with a polished product can be an intimidating and arduous process, but it’s the most gratifying thing in the world. Even as high schoolers, many of us have the drive to create whether it’s art, games, videos or music, but sometimes you don’t know where to start. I hope these steps bring you a bit closer to taking that idea in the back of your head and turning it into reality."
    },
    {
        icon:'ri-team-line',
        title:'Dedicated Team',
        desc:"A dedicated team is a group of specialists that a client hires to work on a project over a long period of time. The team is dedicated to the client and their business objectives."
    },
    {
        icon:'ri-customer-service-2-line',
        title:'24/7 Hours Support',
        desc:"24/7 support means customers can get help and find answers to questions as soon as they come up—24/7 and in real-time."
    },
]
const About = () => {
  return <section id="about">
    <div className="container">
        <div className="about__wrapper">
            <div className="about__content">
            <h6 className="subtitle">Why Choose Us</h6>
        <h2>Specialist in avoiding clients on</h2>
        <h2 className="highlight">Financial Challenges</h2>
        <p className="description about__content-desc">
        We want you to feel excited about your career and your future. That’s why we offer a range of programs, tools and experiences to help build your skills and chart your path to personal success.
        </p>
        <div className="choose__item-wrapper">
            {
                chooseData.map((item,index)=>(
                    <div className="choose__us-item" key={index}>
            <span className="choose__us-icon">
                <i class={item.icon}></i>
            </span>
            <div>
                <h4 className="choose__us-title">{item.title}</h4>
                <p className="description">{item.desc}
                </p>
            </div>
        </div>
                ))
            }
        </div>
                </div>

                <div className="about__img">
                    <img src={aboutImg} alt=""/>
                </div>
            </div>
        </div>
  </section>
}

export default About
