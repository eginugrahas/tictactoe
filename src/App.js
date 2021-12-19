import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MainMenu from './components/MainMenu';
import Game from './Game/Game';
import Game2 from './Game/Game2';
import Game3 from './Game/Game3';
import Game4 from './Game/Game4';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' exact element={<MainMenu />} />
          <Route path='/game' exact element={<Game />} />
          <Route path='/game2' exact element={<Game2 />} />
          <Route path='/game3' exact element={<Game3 />} />
          <Route path='/game4' exact element={<Game4 />} />
        </Routes>
      </Router>
  );
}

export default App;
