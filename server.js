const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

const PORT = 5501

let staticPath = path.join(__dirname, "public");

const app = express();

//middlewares
app.use(express.static(staticPath));
//app.use(express.json());

//routes

//home
app.get("/", (req, res) => {
    //sendFile: Sets the Content-Type response HTTP header field based on the filename’s extension
    res.sendFile(path.join(staticPath, "index.html"));
})

//signup
app.get("/signup", (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})

/*
app.post('/signup', (req, res) => {
    console.log(req.body);
    res.json('data received')
})*/

//404
app.get("/404", (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404')
})


app.listen(PORT, () => console.log('Server running on port ' + PORT))