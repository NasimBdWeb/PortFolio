import React from 'react';
import Marquee from "react-fast-marquee";
import { SkillsData } from '../../contexts/SkillsData';


const Skills = () => {
    return (
         <div className="skills" >
            <div className="skillsHeader">
            <h1 className="gallery-title">Skills</h1>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
        {
        SkillsData.SkillsItem.map(({ index, images,name }) => {
            return (
                <div className="skill--box" key={index} >
                <img src={images.png} />
                
                <h6 className='skillsname'>{name}</h6>
              </div>
            );
          })
        }
        </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Skills;