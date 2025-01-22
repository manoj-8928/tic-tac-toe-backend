const express = require("express");
const router = express.Router();

router.get('/match-history/:userId', (req, res) => {
    const { userId } = req.params;

    const query = `
        SELECT g.id AS gameId, u.username AS opponent, g.winner, m.position, m.move_number
        FROM games g
        JOIN users u ON (g.player_1 = u.id OR g.player_2 = u.id) AND u.id != ?
        JOIN moves m ON g.id = m.game_id
        WHERE g.player_1 = ? OR g.player_2 = ?
    `;

    db.all(query, [userId, userId, userId], (err, rows) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json({ history: rows });
    });
});


module.exports = router