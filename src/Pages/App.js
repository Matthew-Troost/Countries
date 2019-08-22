import React from 'react';
import '../Styles/App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to a cool country directory!

        Curious to see the countries the world has to offer? Click here => <Link to="/countries">put icon here</Link>

        Have a particular country in mind? 
      </header>
    </div>
  );
}

export default App;
