import React, { useState } from "react";
import Dew from '../../assets/dew.png';
import Wipro from '../../assets/wipro.png';
import './Experience.scss'; 

const Experience = () => {
    const [companies, setCompanies] = useState([{
        name: 'Dew Solutions',
        from: 'April 2020',
        to: 'present',
        logo: Dew
    },{
        name: 'Wipro',
        from: 'July 2018',
        to: 'March 2020',
        logo: Wipro
    }])
    return (
        <div className="mx-3 tab tab-experience">
            <h1>Experience</h1>
            <div className="tab-experience-list">
            {companies.map((company, i) => {
                return (
                    <div className="tab-experience-list-item"  key={i}>
                        <img src={company.logo} height="100px" style={{borderRadius: '38px'}} alt="img"/>
                        <p>{company.name}</p>
                        <p>{company.from} - {company.to}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Experience;
