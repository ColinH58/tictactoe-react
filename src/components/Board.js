import { useState } from 'react';
import Square from './Square';

const Board = () => {

    const [square, setSquare] = useState(Array(9).fill(null));
    const [X, setX] = useState(true);
    const initialState = Array(9).fill(null);

    const resetGame = () => {
        setSquare(initialState);
        setX(true);
    };

    const renderSquare = (index) => {
        return (
            <Square value={square[index]} onClick={() => handleClick(index)} />
    )};

    const winner = calculateWinner(square);
        let status;
            if (winner) {
                setTimeout(() => resetGame(), 4000);
                status = `The Winner is: ${winner}`;
            } else {
                status = 'Player Turn: ' + (X ? 'X' : 'O');
    };

    const handleClick = (index) => {
        const squares = square.slice();
            if (squares[index] === null) {
                squares[index] = X ? 'X' : 'O';
                setSquare(squares);
                setX(!X);
            } else { 
                alert("Please choose an open square!") 
            }
    };

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null
    };

    return (
        <div className="board">
            <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            </div>
            <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            </div>
            <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
            </div>
            <div>
            <h3 className="status">{ status }</h3>
            </div>
            <button className="reset" onClick={() => resetGame()}>Reset</button>
        </div>
    )
}

export default Board;