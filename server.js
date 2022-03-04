const PORT = 5501

const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

const cors = require('cors');

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:5501", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
    }
}

let staticPath = path.join(__dirname, "public");

const app = express();

//Middlewares
app.use(express.static(staticPath));
app.use(express.json());


app.use(cors(config.application.cors.server));


//Routes

//home
app.get("/", (req, res) => {
    //sendFile: Sets the Content-Type response HTTP header field based on the filename’s extension
    res.sendFile(path.join(staticPath, "index.html"));
})

//signup
app.get("/signup", (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})

app.post("/signup", (req, res) => {
    console.log(req.body);
    res.json('data received')
})

//404
app.get("/404", (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404')
})


app.listen(PORT, () => console.log('Server running on port ' + PORT))