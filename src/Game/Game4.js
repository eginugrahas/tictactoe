import React, { Component } from 'react';
import Board4 from './Board4';

export default class Game4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { squares: Array(36).fill(null) }
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
            squares: Array(36).fill(null),
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
        if (calculateWinner(current.squares) === 36) {
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
                    <Board4 onClick={(i) => this.handleClick(i)}
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
        [0,1,2,3,4,5],
        [6,7,8,9,10,11],
        [12,13,14,15,16,17],
        [18,19,20,21,22,23],
        [24,25,26,27,28,29],
        [30,31,32,33,34,35],
        [0,7,14,21,28,35],
        [5,10,15,20,25,30],
        [0,6,12,18,24,30],
        [1,7,13,19,25,31],
        [2,8,14,20,26,32],
        [3,9,15,21,27,33],
        [4,10,16,22,28,34],
        [5,11,17,23,29,35],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a,b,c,d,e,f] = lines[i];
        if (squares[a] && 
          squares[a] === squares[b] 
          && squares[a] === squares[c]
          && squares[a] === squares[d]
          && squares[a] === squares[e]
          && squares[a] === squares[f]) {
          return squares[a];
        }
    }
    for (let i = 0; i < 36; i++) {
        if (squares[i] === null) {
          return null;
        }
    }
    return 36;
}