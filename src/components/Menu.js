import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div className='board-options'>
                <div>Choose Board Size!</div>
                <div className="size-options">
                    <label>
                        <input type="radio" name='size' />
                        <img src="./images/grid-3.png" alt="grid-3" />
                    </label>
                    <label>
                        <input type="radio" name='size' />
                        <img src="./images/grid-4.png" alt="grid-4" />
                    </label>
                    <label>
                        <input type="radio" name='size' />
                        <img src="./images/grid-5.png" alt="grid-5" />
                    </label>
                    <label>
                        <input type="radio" name='size' />
                        <img src="./images/grid-6.png" alt="grid-6" />
                    </label>
                </div>
                <div className="start">
                    <button id='start'>START</button>
                </div>
                
            </div>
        )
    }
}
