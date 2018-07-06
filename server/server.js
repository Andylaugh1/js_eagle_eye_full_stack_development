const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
const db = client.db("drone_strikes_app");
const droneStrikes = db.collection('drone_strikes_db');
const droneStrikesRouter = createRouter(droneStrikes);
app.use('/api/drone_strikes_db', droneStrikesRouter);
});

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

app.listen(3000, function(){
  console.log(`listening on port ${ this.address().port}`);
});
