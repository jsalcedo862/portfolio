const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Item = require('./models/item')

mongoose.connect('mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
})

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/makeitem', async (req, res) => {
    const item = new Item({title: 'EQ1', subTitle: 'Basic Equalizer'});
    await item.save();
    res.send(item);
})

app.listen(3000, () => {
    console.log("serving on port 3000")
});