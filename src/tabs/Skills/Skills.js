import React, { useState } from 'react';
import react from '../../assets/skillsLogo/react.jpg';
import redux from '../../assets/skillsLogo/redux.png';
import angular from '../../assets/skillsLogo/angular.png';
import js from '../../assets/skillsLogo/js.png';
import html from '../../assets/skillsLogo/html.png';
import css from '../../assets/skillsLogo/css.png';
import bootstrap from '../../assets/skillsLogo/bootstrap.png';
import scss from '../../assets/skillsLogo/scss.png';
import jquery from '../../assets/skillsLogo/jquery.webp';
import node from '../../assets/skillsLogo/node.jpeg';
import './Skills.scss';

const Skills = () => {
    const [skills, setSkills] = useState([
        { name: 'React', expertise: '8', image: react},
        { name: 'Redux', expertise: '6', image: redux},
        { name: 'Angular', expertise: '8', image: angular},
        { name: 'JavaScript', expertise: '9', image: js},
        { name: 'HTML', expertise: '7', image: html},
        { name: 'CSS', expertise: '8', image: css},
        { name: 'Bootstrap', expertise: '6', image: bootstrap},
        { name: 'SCSS', expertise: '8', image: scss},
        { name: 'jQuery', expertise: '6', image: jquery},
        { name: 'Node JS', expertise: '6', image: node}
    ]);

    return (<div className="mx-3 tab tab-skills">
        <h1>Skills</h1>
        <div className="tab-skills-list">
            {skills.map((skill, i) => {
                return (
                    <div className="tab-skills-list-item" key={i}>
                        <div>
                            <img src={skill.image} height="30px" className="pr-3"/>
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
