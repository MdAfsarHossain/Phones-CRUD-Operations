const express = require('express');
const phones = require('./phones.json');
const cors = require('cors');
const app = express();

app.use(cors());

const port = 5000;

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/phones', (req, res) => {
    // res.send("Phones are comming");
    res.send(phones);
});

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id);
    res.send(phone);
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})