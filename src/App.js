import './App.scss';
import linkedin from './assets/linkedin.svg';
import instagram from './assets/instagram.svg';
import gmail from './assets/gmail.svg';
import github from './assets/github.svg';
import logo from './assets/logo.png';
import $ from 'jquery'; 
import Avatar from '@material-ui/core/Avatar';
import { useEffect } from 'react';
import WorkExp from './tabs/WorkExp/WorkExp';
import Projects from './tabs/Projects/Projects';
import Experience from './tabs/Experience/Experience';

function App() {

  useEffect(() => {
    console.log('useEffect')
    
  })

  const navClicked = (e) => {
    $(".nav-link").removeClass("active");
    e.target.className += ' active';
  }

  return (
    <div className="App">
        <nav id="navbar-ex" className="navbar navbar-expand-lg navbar-light App-header">
          <a className="navbar-brand pl-4" href="#">
            <img src={logo} width="25%"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" onClick={navClicked}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><a className="nav-link" href="#intro">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#work-exp">Experience</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Personal Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skillsets</a></li>
              <li className="nav-item"><a className="nav-link" href="#articles">Articles</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav> 

      <div className="scroll-spy" data-spy="scroll" data-target="#navbar-ex" data-offset="0px">
        <div id="intro"><WorkExp /></div>
        <div id="projects"><Projects /></div>
        <div id="work-exp"><Experience /></div>
  <p>...</p>
  <h5 id="skills">Item 3</h5>
  <p>...</p>
  <h4 id="articles">Item 4</h4>
  <p>...</p>
  <h4 id="contact">Item 5</h4>
  <p>...</p>
</div>    
    </div>
  );
}

export default App;
