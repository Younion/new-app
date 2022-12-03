const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { Sequelize } = require('sequelize');

// Apps
const corsMiddleware = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization, Origin');

    next();
}

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(corsMiddleware);
// app.use(cors());

// Sequelize connect to DB
const sequelize = new Sequelize(process.env.PSQL_SERVER, process.env.PSQL_USER, process.env.PSQL_PASS, {
    host: process.env.HOST,
    dialect: 'postgres'
});

// Models
// const Jyh = require('./models/JyhModel')(sequelize);
const Output = require('./models/QueryOutputModel')(sequelize);
const TestTable = require('./models/TestTableModel')(sequelize);

// Test Connection Authentication
async function connectToPg() {
    try {
        await sequelize.authenticate();
        console.log('Connection works!');
    } catch(error) {
        console.log("Connection failed :(");
    }
};

connectToPg();



// GET
app.get('/', async (req, res) => { 
    const sauces = await Output.findAll()
        // console.log(sauces);
        res.json(sauces);
});

// POST
// TestTable.create({
//         test_name: "testsauce",
//         test_sauce: "testsauce"
//     }).then((data) => {
//         console.log(data.toJSON());
//     }).catch((err) => {
//         console.log(err);
//     });


// app.post('/', async (req, res) => {
//     await TestTable.create({
//         // test_name: "testsauce7",
//         // test_sauce: "testsauce7"
//     }).then(data => {
//         console.log(data.toJSON());
//         res.send(data)
//     }).catch((err) => {
//         console.log(err);
//     })
// });

// Sync Sequelize
sequelize.sync();

const port = process.env.DEV_PORT;
app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));