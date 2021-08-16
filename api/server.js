const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const leaderboardRoutes = require('./controllers/leaderboard')

server.use('/leaderboard', leaderboardRoutes)

// Root route
server.get('/', (req, res) => res.send('Welcome to the Quizzo server'))

module.exports = server
