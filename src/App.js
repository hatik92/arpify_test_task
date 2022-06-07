import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import StarWars from './components/StarWars/StarWars';
import StarShip from './components/StarShip/StarShip';
import HomePage from './components/HomePage/HomePage';
import Films from './components/Films/Films';

function App() {
  return (
    <div className="App">
      <h1>
        <Link to='/' style={{ textDecoration: 'none', color: 'rgb(255, 230, 0)' }}>HOME</Link>
      </h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="films" element={<Films />} />
        <Route path="films/:id" element={<StarWars />} />
        <Route path="films/:id/listOfStarships/:id" element={<StarShip />} />
      </Routes>
    </div>
  );
}

export default App;
