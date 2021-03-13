import './App.scss';
import linkedin from './assets/linkedin.svg';
import instagram from './assets/instagram.svg';
import gmail from './assets/gmail.svg';
import github from './assets/github.svg';
import logo from './assets/logo.png';
import $ from 'jquery'; 
import Avatar from '@material-ui/core/Avatar';
import { useEffect } from 'react';
// import linkedin from './assets/linkedin.svg';

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
      <header className="App-header">
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand pl-4" href="#">
            <img src={logo} width="25%"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" onClick={navClicked}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><a className="nav-link" href="#work-exp">Experience</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Personal Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skillsets</a></li>
              <li className="nav-item"><a className="nav-link" href="#articles">Articles</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav> 
      </header>     
    </div>
  );
}

export default App;
