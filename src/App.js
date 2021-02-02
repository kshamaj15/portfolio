import './App.scss';
import linkedin from './assets/linkedin.svg';
import instagram from './assets/instagram.svg';
import gmail from './assets/gmail.svg';
import github from './assets/github.svg';
// import linkedin from './assets/linkedin.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a>Work Experience</a></li>
            <li><a>Personal Projects</a></li>
            <li><a>Skillsets</a></li>
            <li><a>Article Blogs</a></li>
            <li><a>Contact Me</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {/* <div className="css-typing">
          <p>I am a 2.5 years experienced Front end web developer</p>
          <p>with hands on skills in</p>
          <p>React, Angular, Node JS, HTML5, CSS</p>
          <p>SCSS, Bootstarp, JavaScript, jQuery.</p>
        </div> */}
        <div style={{display: 'flex'}}>
          <div className="img-container"></div>
          <div className="intro">
            <p>Hi, I am Kshama Jain</p>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className="links">
          <span><img width="60px" src={linkedin}/></span>
          <span><img width="60px" src={instagram}/></span>
          <span><img width="60px" src={gmail}/></span>
          <span><img width="60px" src={github}/></span>
          <span><img width="60px" src={linkedin}/></span>
        </div>
      </main>
    </div>
  );
}

export default App;
