import React from 'react';
import sgsits from '../../assets/sgsits.png';
import mp from '../../assets/mp.jpg';
import './Education.scss';

const Education = () => {
    return (
        <div className="tab mx-3 tab-education">
            <h1>Education</h1>
            <div className="tab-education-list">
                <div className="tab-education-list-item">
                    <a href="http://www.sgsits.ac.in/" target="_blank"><img src={sgsits} height="100px" style={{borderRadius: '38px'}} alt="img"/></a>
                    <p>Bachlor Of Engineering</p>
                    <p>2014 - 2018</p>
                </div>
                <div className="tab-education-list-item">
                    <a href="http://mpbse.nic.in/" target="_blank"><img src={mp} height="100px" style={{borderRadius: '38px'}} alt="img"/></a>
                    <p>High School</p>
                    <p>2009 - 2013</p>
                </div>                          
            </div>
        </div>
    )
}

export default Education;
