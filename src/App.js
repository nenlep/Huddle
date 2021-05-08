import logo from './images/logo.svg';
import mockup from "./images/illustration-mockups.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo}></img>
      </header>
      <main>
        <img src={mockup}></img>
        <div className="text">
          <h2>Build the community your fans will love</h2>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
          <button>Register</button>
        </div>
        
      </main>
      <footer>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
      </footer>
    </div>
  );
}

export default App;
