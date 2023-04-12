const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'mydb',
    password: 'password',
    port: 5432
});

app.get('/games/:gameId/languages', (req, res) => {
    const gameId = req.params.gameId;
    pool.query(
        'SELECT language.name FROM language INNER JOIN game_language ON language.language_id = game_language.language_id INNER JOIN game ON game.game_id = game_language.game_id WHERE game.game_id = $1',
        [gameId],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error retrieving languages for game');
            } else {
                const languageNames = result.rows.map(row => row.name);
                res.json(languageNames);
            }
        }
    );
});

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})