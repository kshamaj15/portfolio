import React, { useState } from 'react';
import Redux from '../../assets/skillsLogo/scss.png';
import './Skills.scss';

const Skills = () => {
    const [skills, setSkills] = useState([
        { name: 'React', expertise: '8' },
        { name: 'Redux', expertise: '6' },
        { name: 'Angular', expertise: '8' },
        { name: 'JavaScript', expertise: '9' },
        { name: 'HTML', expertise: '7' },
        { name: 'CSS', expertise: '8' },
        { name: 'Bootstrap', expertise: '6' },
        { name: 'SCSS', expertise: '8' },
        { name: 'jQuery', expertise: '6' },
        { name: 'Node JS', expertise: '6' }
    ]);

    return (<div className="mx-3 tab tab-skills">
        <h1>Skills</h1>
        <div className="tab-skills-list">
            {skills.map(skill => {
                return (
                    <div className="tab-skills-list-item">
                        <div>
                            <img src={Redux} height="30px" className="pr-3"/>
                            {skill.name}</div>
                        <div className="tab-skills-list-item-outer">
                            <div className="tab-skills-list-item-inner"></div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>)
}
export default Skills;
