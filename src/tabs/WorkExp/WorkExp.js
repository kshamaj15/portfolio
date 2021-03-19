import React from 'react';
import './WorkExp.scss';
import homeImg from '../../assets/photo.jpg';

const WorkExp = () => {
    return (
        <div className="mx-3 tab tab-work-exp" style={{height: '97vh'}}>
          <div className="intro">
            <img src={homeImg} alt="Kshama Jain"/>
            <p>My name is</p>
            <h1>KSHAMA JAIN</h1>
            <p>Full Stack Developer</p>
          </div>
        </div>
    )
}

export default WorkExp;


