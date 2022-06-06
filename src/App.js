import './App.css';
import { Route, Routes } from 'react-router-dom';
import StarWars from './components/StarWars/StarWars';
import StarShip from './components/StarShip/StarShip';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StarWars />} />
        <Route path="listOfStarships/:id" element={<StarShip />} />
      </Routes>
    </div>
  );
}

export default App;
