
import './App.css';
import Game from './components/Game';

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
