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

// Sequelize connection to DB
const sequelize = new Sequelize(process.env.PSQL_SERVER, process.env.PSQL_USER, process.env.PSQL_PASS, {
    host: process.env.HOST,
    dialect: 'postgres'
});

// Sequelize Models
const Jyh = require('./models/JyhModel')(sequelize);
const Output = require('./models/QueryOutputModel')(sequelize);
const AddMan = require('./models/AddManModel')(sequelize);
const AddSauce = require('./models/AddSauceModel')(sequelize);
const AddLocation = require('./models/AddLocationModel')(sequelize);
const AddHeatSources = require('./models/AddHeatSourcesModel')(sequelize);

// const TestTable = require('./models/TestTableModel')(sequelize);

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

app.get('/names', async (req, res) => { 
    const names = await AddLocation.findAll()
        // console.log(sauces);
        res.json(names);
});

// POSTs to Postgres using Sequelize
// POST to ReviewForm
app.post('/review', async (req, res) => {
    await Jyh.create({  // .create is a Sequelize method
        hotSauceId: req.body.hotSauceId,
        presentation: req.body.presentation,
        viscosityId: req.body.viscosityId,
        spiciness: req.body.spiciness,
        Flavor_Notes: req.body.Flavor_Notes,
        overall_rating: req.body.overall_rating,
        lovedit: req.body.lovedit,
        taster_notes: req.body.taster_notes
    }).then(() => {
        console.log('req.body: ', req.body);
    }).catch((err) => {
        console.log(err);
    });
});

// Post to AddForm
app.post('/add', async (req, res) => {
    const man = await AddMan.create({  // .create is a Sequelize method
        name: req.body.Manufacturer,
        locatedId: req.body.locatedId
    })
    const sauce = await AddSauce.create({  // .create is a Sequelize method
        name: req.body.SauceName,
    // })
    // const locale = await AddLocation.create({  // .create is a Sequelize method
    //     name: req.body.Location,
    // })
    // const heat = await AddHeatSources.create({  // .create is a Sequelize method
    //     name: req.body.HeatSources,
    }).then(() => {
        console.log('req.body: ', req.body);
    }).catch((err) => {
        console.log(err);
    });
    return man, sauce
})

const port = process.env.DEV_PORT;
app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));
