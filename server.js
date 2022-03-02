const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

const PORT = 5501

let staticPath = path.join(__dirname, "public");

const app = express();

//middlewares
app.use(express.static(staticPath));

//home
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

//404
app.get("/404", (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404')
})


app.listen(PORT, () => console.log('Server running on port ' + PORT))