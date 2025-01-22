const express = require("express");
const router = express.Router();

router.post('/move', (req, res) => {
    const { game_id, player_id, position, move_number } = req.body;

    const query = `INSERT INTO moves (game_id, player_id, position, move_number) VALUES (?, ?, ?, ?)`;
    db.run(query, [game_id, player_id, position, move_number], (err) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json({ success: true });
    });
});
