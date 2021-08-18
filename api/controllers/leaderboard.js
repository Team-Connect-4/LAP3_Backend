const express = require('express');
const router = express.Router();

const Leaderboard = require('../models/leaderboard')

// leaderboard index routes
router.get('/', async (req, res) => {
    try {
        const leaderboard = await Leaderboard.all
        res.json({leaderboard})
    } catch(err) {
        res.status(500).json({err})
    }
})

// Leaderboard show route
router.get('/:id', async (req, res) => {
    try {
        const leaderboard = await Leaderboard.findById(parseInt(req.params.id))
        res.json(leaderboard)
    } catch(err) {
        res.status(404).json({err})
    }
})

// Create Leaderboard route
router.post('/', async (req, res) => {
    try {
        const leaderboard = await Leaderboard.create(req.body.name, req.body.score, req.body.difficulty)
        res.json(leaderboard)
    } catch(err) {
        res.status(400).json({err})
    }
})

module.exports = router;