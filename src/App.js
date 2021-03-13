import './App.scss';
import linkedin from './assets/linkedin.svg';
import instagram from './assets/instagram.svg';
import gmail from './assets/gmail.svg';
import github from './assets/github.svg';
import Avatar from '@material-ui/core/Avatar';
import WorkExp from './tabs/WorkExp/WorkExp';
// import linkedin from './assets/linkedin.svg';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <nav id="navbar-list">
          <ul>
            <li><a href="#work-exp">Work Experience</a></li>
            <li><a href="#projects">Personal Projects</a></li>
            <li><a href="#skills">Skillsets</a></li>
            <li><a href="#articles">Article Blogs</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      </header> */}
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
      {/* <main style={{height: '100vh'}}>
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
      </main>  */}

      
        <section id="work-exp">
          <WorkExp></WorkExp>
        </section>

        <section id="projects">
          <h3>Personal Projects</h3>
          <p></p>
        </section>
      </div>
    </div>
  );
}

export default App;
