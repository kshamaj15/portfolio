import logo from './logo.svg';
import './App.scss';
import pp from './assets/photo.jpg';

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
        <div className="img-container"></div>
        <div className="css-typing">
          <p>I am a 2.5 years experienced Front end web developer with hands on skills</p>
          <p>in React, Angular, Node JS, HTML5, CSS, SCSS, Bootstarp, JavaScript, jQuery.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
