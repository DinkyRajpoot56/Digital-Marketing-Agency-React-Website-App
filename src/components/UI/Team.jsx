import React from 'react'
import '../../styles/team.css';
import team01 from '../../images/team-01.png';
import team02 from '../../images/team-02.png';
import team03 from '../../images/team-03.png';
import team04 from '../../images/team-04.png';
const teamMembers =[
    {
        imageUrl:team01,
        name:'Courtney Harry',
        position:'Product Developer'
    },
    {
        imageUrl:team02,
        name:'Lindaa Walton',
        position:'Frontend Developer'
    },
    {
        imageUrl:team03,
        name:'Harry Martin',
        position:'Product Designer'
    },
    {
        imageUrl:team02,
        name:'Lisa Copper',
        position:'CEO and Sr.Developer'
    },
]

const Team = () => {
  return(
   <section className="our__team">
    <div className="container">
        <div className="team__content">
            <h6 className="subtitle">Our Team</h6>
            <h2>
                Meet with <span className="highlight">our team</span>
                </h2>
        </div>
        <div className="team__wrapper">
            {
                teamMembers.map((item,index)=>(
                    <div className="team__item" key={index}>
                <div className="team__img">
                    <img src={item.imageUrl} alt=""/>                
                    </div>
                    <div className="team__details">
                        <h4>{item.name}</h4>
                        <p className="description">{item.position}</p>
                        <div className="team__member-social">
                            <span>
                                <i class="ri-linkedin-line"></i>
                                </span>
                            <span>
                                <i class="ri-twitter-line"></i>
                                </span>
                        </div>
                    </div>
            </div>
                ))
            }
        </div>
    </div>
  </section>
  );
};

export default Team
