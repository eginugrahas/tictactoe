import React, { Component } from 'react';
import Square from '../components/Square';

export default class Board2 extends Component {
    renderSquare(i){
        return <Square value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    render() {
        return (
            <div className='board'>
                <div className="board-info">
                    <p>Game Size: 4x4</p>
                    <p>Place 4 in a row</p>
                </div>
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                </div>
                <div className="board-row">
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                </div>
                <div className="board-row">
                {this.renderSquare(8)}
                {this.renderSquare(9)}
                {this.renderSquare(10)}
                {this.renderSquare(11)}
                </div>
                <div className="board-row">
                {this.renderSquare(12)}
                {this.renderSquare(13)}
                {this.renderSquare(14)}
                {this.renderSquare(15)}
                </div>
            </div>
        )
    }
}