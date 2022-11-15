const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();

const db = knex({
    client: 'pg',
    connection: {
        host: "127.0.0.1",
        user: "postgres",
        password: "password",
        database: "fakecards",
    },
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    db.select('*')
        .from('cards')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));