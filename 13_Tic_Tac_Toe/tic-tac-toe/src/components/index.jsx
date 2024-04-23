// Importing necessary components and hooks from React
import { useEffect, useState } from "react";
import "./style.css";
import PropTypes from "prop-types"; // Import PropTypes
// Component for rendering individual squares
function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

// Prop types validation for Square component
Square.propTypes = {
    value: PropTypes.string.isRequired, // Value prop should be a string and is required
    onClick: PropTypes.func.isRequired // onClick prop should be a function and is required
  };


// Main TicTacToe component
export default function TicTacToe() {
  // State variables for managing game state
  const [squares, setSquares] = useState(Array(9).fill("")); // Array to hold the state of each square
  const [isXTurn, setIsXTurn] = useState(true); // Boolean to track whose turn it is (true for X, false for O)
  const [status, setStatus] = useState(""); // String to display game status (e.g., next player, winner, draw)

  // Function to determine the winner based on the current state of squares
  function getWinner(squares) {
    // Array of winning patterns
    const winningPatterns = [
      [0, 1, 2], // Horizontal top row
      [3, 4, 5], // Horizontal middle row
      [6, 7, 8], // Horizontal bottom row
      [2, 5, 8], // Vertical right column
      [0, 4, 8], // Diagonal from top-left to bottom-right
      [2, 4, 6], // Diagonal from top-right to bottom-left
      [0, 3, 6], // Vertical left column
      [1, 4, 7], // Vertical middle column
    ];

    // Loop through each winning pattern
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      // If all three squares in a winning pattern have the same value and are not empty, return the value
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    // If no winner is found, return null
    return null;
  }

  // Function to handle click events on squares
  function handleClick(squareIndex) {
    // Make a copy of the current squares array
    let updatedSquares = [...squares];

    // If there's already a winner or the clicked square is not empty, return
    if (getWinner(updatedSquares) || updatedSquares[squareIndex]) return;

    // Update the value of the clicked square based on whose turn it is
    updatedSquares[squareIndex] = isXTurn ? "X" : "O";

    // Toggle the turn to the next player
    setIsXTurn(!isXTurn);

    // Update the squares state with the new values
    setSquares(updatedSquares);
  }

  // Function to handle game restart
  function handleRestart() {
    // Reset game state
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  }

  // useEffect hook to update game status whenever squares or isXTurn change
  useEffect(() => {
    // If there's no winner and all squares are filled, set status to draw
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw! Please restart the game.`);
    }
    // If there's a winner, set status to display the winner
    else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game.`);
    }
    // Otherwise, set status to display whose turn it is
    else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  // Render the TicTacToe board with squares and game status
  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        {/* Render the first row of squares */}
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        {/* Render the second row of squares */}
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        {/* Render the third row of squares */}
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      {/* Display game status */}
      <h1>{status}</h1>
      {/* Button to restart the game */}
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}