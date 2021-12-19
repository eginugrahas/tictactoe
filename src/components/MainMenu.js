import React from 'react'
import {useNavigate} from 'react-router-dom'

function MainMenu() {
    let navigate = useNavigate();

    return (
        <div>
            <div className='title'>
                <h1>Tic Tac Toe</h1>
            </div>
            <div>
                <div>
                    <div className='board-options'>
                    <div>Choose Board Size:</div>
                    <div className="size-options">
                        <div className="size">
                            <button onClick={() => {navigate('/game');}}>
                            <img src="./images/grid-3.png" alt="grid-3" />
                            </button>
                        </div> 
                        <div className="size">
                            <button onClick={() => {navigate('/game2');}}>
                            <img src="./images/grid-4.png" alt="grid-4" />
                            </button>
                        </div> 
                        <div className="size">
                            <button onClick={() => {navigate('/game3');}}>
                            <img src="./images/grid-5.png" alt="grid-5" />
                            </button>
                        </div> 
                        <div className="size">
                            <button onClick={() => {navigate('/game4');}}>
                            <img src="./images/grid-6.png" alt="grid-6" />
                            </button>
                        </div> 
                    </div>
                    <div className="credit">
                        <p>Created by <a href="igeegi.my.id">igeegi</a></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMenu
