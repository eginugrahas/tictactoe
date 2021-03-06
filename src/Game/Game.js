import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ]
        }
    }
    
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });

    }
    jumpTo(step) {
        this.setState({
          history: [{
            squares: Array(9).fill(null),
          }],
          stepNumber: step,
          xIsNext: (step%2) === 0,
        });
      }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const moves = history.map((step, move) => {
            if (move === 0) {
              return (
                <div key={move}>
                  <button onClick={() => this.jumpTo(move)}>{"Reset Game"}</button>
                </div>
              );
            } else {
              return null;
            }
          });
        let status;
        if (calculateWinner(current.squares) === 9) {
            status = 'Tie Game! Reset?';
          } else if (calculateWinner(current.squares) != null) {
            status = 'Winner: ' + calculateWinner(current.squares);
          } else {
            status = 'Next Turn: ' + (this.state.xIsNext ? 'X' : 'O');
          }


        return (
            <div className="game">
                 <div className='title'>
                    <h1>Tic Tac Toe</h1>
                </div>
                <div className="game-board">
                    <Board onClick={(i) => this.handleClick(i)}
                        squares={current.squares} />
                </div>
                <div className="game-info">
                    <div className='status'>{status}</div>
                    <button>{moves}</button>
                </div>
                <div className="main-menu">
                  <button><a href="/">MENU</a></button>
                </div>
            </div>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] &&
            squares[a] === squares[b] 
            && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    for (let i = 0; i < 9; i++) {
        if (squares[i] === null) {
          return null;
        }
    }
    return 9;
}
