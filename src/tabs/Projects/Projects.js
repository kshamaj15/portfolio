import React, { useEffect, useState } from 'react';
import imga from '../../assets/dummy.png'

import './Projects.scss';

const Projects = () => {

    const [projectData, setProjectData] = useState([{
        title: 'Grid Game',
        codeUrl: 'https://github.com/kshamaj15/ui-grid-game',
        hostedOn: 'https://github.com/kshamaj15/ui-grid-game',
        description: 'dsakd dsakdj dsakjd dskda dosak dask',
        image: '../../assets/dummy.png'
    },{
        title: 'Portfolio',
        codeUrl: 'https://github.com/kshamaj15/ui-grid-game',
        hostedOn: 'https://github.com/kshamaj15/ui-grid-game',
        description: 'dsakd dsakdj dsakjd dskda dosak dask',
        image: ''
    },{
        title: 'Burger App',
        codeUrl: 'https://github.com/kshamaj15/ui-grid-game',
        hostedOn: 'https://github.com/kshamaj15/ui-grid-game',
        description: 'dsakd dsakdj dsakjd dskda dosak dask',
        image: ''
    },{
        title: 'Blog App',
        codeUrl: 'https://github.com/kshamaj15/ui-grid-game',
        hostedOn: 'https://github.com/kshamaj15/ui-grid-game',
        description: 'dsakd dsakdj dsakjd dskda dosak dask',
        image: ''
    },{
        title: 'Grid Game',
        codeUrl: 'https://github.com/kshamaj15/ui-grid-game',
        hostedOn: 'https://github.com/kshamaj15/ui-grid-game',
        image: ''
    },{
        title: 'Grid Game',
        codeUrl: 'https://github.com/kshamaj15/ui-grid-game',
        hostedOn: 'https://github.com/kshamaj15/ui-grid-game',
        description: 'dsakd dsakdj dsakjd dskda dosak dask',
        image: ''
    }]);

    return (
        <div className="mx-3 tab tab-projects">
            <h1>Personal Projects</h1>
            <div className="tab-projects-list">
            {projectData.map(project => {
                return (
                    <>
                        <div className="tab-projects-list-item">
                            <img src={imga} height="210px" style={{borderRadius: '38px'}} alt="img"/>
                            <p>{project.description}</p>
                            <h6>{project.title}</h6>
                        </div>
                        
                    </>
                )
            })}
            </div>
        </div>
    )
}

export default Projects;