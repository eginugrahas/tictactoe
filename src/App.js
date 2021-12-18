
import './App.css';
import Game from './components/Game';
import Game2 from './components/Game2';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <div className="game-container">
        <div className='title'>
          <h1>Tic Tac Toe</h1>
        </div>
        <Game />
      </div>
      
    </div>
  );
}

export default App;
