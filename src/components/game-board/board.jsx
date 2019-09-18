import React from 'react';
import Square from '../game-square/square';
import './board.css';
class SquareValue {
    value = 0;
    key = 0;
    constructor(value, key) {
        this.value = value;
        this.key = key;
    }
    equal = (orther) => {
        if (orther.key === this.key) {
            return true;
        }
        return false;
    }
    isSameValue = (orther) => {
        if (orther.value === this.value) {
            return true;
        }
        return false;
    }
}
// class SquareRow {
//     value = 0;
//     key = 0;
//     constructor(value, key) {
//         this.value = value * 10 + key;
//         this.key = value * 10 + key;
//     }
//     equal = (orther) => {
//         if(typeof(orther)===SquareValue){
//             if(orther.key===SquareValue.key){
//                 return true;
//             }
//         }
//         return false;
//     }
// }
class Board extends React.Component {
    constructor() {
        super();
        let arr = new Array(20).fill(0);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = new Array(20);
            for (var j = 0; j < arr[i].length; j++) {
                arr[i][j] = new SquareValue(0, i * 10 * 2 + j);
            }
        }
        console.log(arr);
        this.state = {
            squares: arr,
            player: 1
        };
    }
    checkWin = (square) => {
        
    }
    handleClick = (square) => {
        const squaresBoard = this.state.squares.map((squareRow) => {
            squareRow.map(squareM => {
                if (squareM.equal(square)) {
                    console.log('map', squareM);
                    if (squareM.value === 0) {
                        squareM.value = this.state.player;
                        this.setState({
                            player: this.state.player === 1 ? 2 : 1
                        });
                        console.log('player', this.state.player)
                    }
                }
                return squareM;
            })
            return squareRow;
        })

        this.setState({ squares: squaresBoard });
    }
    renderSquare = (square) => {
        return <Square
            value={square.value} key={square.key}
            onClick={() => this.handleClick(square)} />;
    }
    renderRow = (squareRow) => {
        //console.log('row'+squareRow[0].key);

        return (
            <div className='square-row' key={'row' + squareRow[0].key}>
                <div>
                    {squareRow.map(square => this.renderSquare(square))}
                </div>
                <br></br>
            </div>
        )
    }
    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.player === 1 ? 'X' : 'O'}</h1>
                </div>
                <div className='board'>
                    {this.state.squares.map(squareRow => this.renderRow(squareRow))}
                </div>
            </div>
        );
    }
}
export default Board;