import React from 'react';
import './Contacts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Contacts = () => {
    return (
        <div className="tab mx-3 tab-contacts">
            <h1>Contacts</h1>
            <div className="tab-contacts-list">
                <a href="https://github.com/kshamaj15" target="_blank"><FontAwesomeIcon className="icon git" size="3x" icon={faGithub} /><span>https://github.com/kshamaj15</span></a>
                <a href="https://www.linkedin.com/in/kshamajain/" target="_blank"><FontAwesomeIcon className="icon ln" size="3x" icon={faLinkedinIn} /><span>https://www.linkedin.com/in/kshamajain/</span></a>
                <a href="7987300922" target="_blank"><FontAwesomeIcon className="icon phone" size="3x" icon={faPhoneAlt} /><span>7987300922</span></a>
                <a href="mailto:kshamaj150896@gmail.com" target="_blank"><FontAwesomeIcon className="icon mail" size="3x" icon={faEnvelope} /><a href="mailto:kshamaj150896@gmail.com">kshamaj150896@gmail.com</a></a>
            </div>
            
        </div>
    )
}

export default Contacts;
