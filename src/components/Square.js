import React, { Component } from 'react'

// export default class square extends Component {
//     render() {
//         return (
//             <button className="square" 
//                 onClick={() => this.props.onClick()}
//             >
//                {this.props.value}
//             </button>
//         )
//     }
// }

/* Changing from class to function components */ 

export default function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}


