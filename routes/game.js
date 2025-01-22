const express = require("express");
const router = express.Router();

router.post('/start', (req, res) => {
    const { player_1, player_2 } = req.body;

    const query = `INSERT INTO games (player_1, player_2) VALUES (?, ?)`;
    db.run(query, [player_1, player_2], function (err) {
        if (err) return res.status(400).json({ error: err.message });
        res.json({ gameId: this.lastID });
    });
});
module.exports = router