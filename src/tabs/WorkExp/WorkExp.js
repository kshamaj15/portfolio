import React, { useEffect } from 'react';
import './WorkExp.scss';
import homeImg from '../../assets/mainphotu.jpg';

const WorkExp = () => {
  useEffect(()=>{
    function onMount(){
      const a = setInterval(()=> {
        console.log('a');
      }, 1000)
    }

    const a = setInterval(()=> {
      console.log('a');
    }, 1000)
    console.log('aa')
    // return function clear(){
    //   clearInterval(a);
    // }
  }, [])
    return (
        <div className="mx-3 tab tab-work-exp" style={{height: '97vh'}}>
          <div className="intro">
            <img src={homeImg} alt="Kshama Jain"/>
            <strong>My name is</strong>
            <h1>Kshama Jain</h1>
            <strong>Front End Developer</strong>
          </div>
        </div>
    )
}

export default WorkExp;


