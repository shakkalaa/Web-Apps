const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(bodyParser.json());

// In-memory storage for game data
const games = {};

// Create a new game
app.post('/api/game', (req, res) => {
  const gameId = uuidv4();
  const game = {
    id: gameId,
    state: initializeGameState(),
    history: []
  };
  games[gameId] = game;
  res.json(game);
});

// Get game state
app.get('/api/game/:gameId', (req, res) => {
  const { gameId } = req.params;
  const game = games[gameId];
  if (!game) {
    res.status(404).json({ error: 'Game not found' });
  } else {
    res.json(game);
  }
});

// Make a move
app.post('/api/game/:gameId/move', (req, res) => {
  const { gameId } = req.params;
  const { player, move } = req.body;
  const game = games[gameId];
  if (!game) {
    res.status(404).json({ error: 'Game not found' });
  } else if (game.state.winner) {
    res.status(400).json({ error: 'Game is already finished' });
  } else {
    if (isValidMove(game.state.board, move)) {
      makeMove(game.state.board, player, move);
      game.history.push({ player, move });
      const winner = checkWinner(game.state.board);
      game.state.winner = winner;
      res.json(game);
    } else {
      res.status(400).json({ error: 'Invalid move' });
    }
  }
});

// Get game history
app.get('/api/game/:gameId/history', (req, res) => {
  const { gameId } = req.params;
  const game = games[gameId];
  if (!game) {
    res.status(404).json({ error: 'Game not found' });
  } else {
    res.json(game.history);
  }
});

// End the game
app.delete('/api/game/:gameId', (req, res) => {
  const { gameId } = req.params;
  const game = games[gameId];
  if (!game) {
    res.status(404).json({ error: 'Game not found' });
  } else {
    delete games[gameId];
    res.json({ message: 'Game ended successfully' });
  }
});

// Helper functions

function initializeGameState() {
  return {
    board: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    winner: null
  };
}

function isValidMove(board, move) {
  const { row, col } = move;
  if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] === '') {
    return true;
  }
  return false;
}

function makeMove(board, player, move) {
  const { row, col } = move;
  board[row][col] = player;
}

function checkWinner(board) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] !== '' &&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2]
    ) {
        return board[0][i];
    }
  }

  // Check diagonals
  if (
    board[0][0] !== '' &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    return board[0][0];
  }

  if (
    board[0][2] !== '' &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    return board[0][2];
  }

  // No winner
  return null;
}

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
