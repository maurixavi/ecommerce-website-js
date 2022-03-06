const PORT = 5501

const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

//firebase admin setup
let serviceAccount = require("./ecommerce-clothing-website-firebase-adminsdk-ve9fr-868992e5c6.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();


let staticPath = path.join(__dirname, "public");

const app = express();

//Middlewares
app.use(express.static(staticPath));
app.use(express.json());


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
    let { name, email, password, number, terms, notification } = req.body;
    
    //forms validations
    if (!name.length){
        return res.json({'alert': 'Please enter a name'});
    } else if (name.length < 3){
        return res.json({'alert': 'Name must be at least 3 letters long'});
    } else if (!email.length){
        return res.json({'alert': 'Please enter an email'});
    } else if (!password.length){
        return res.json({'alert': 'Please enter a password'}); 
    } else if (password.length < 8){
        return res.json({'alert': 'Password should be at least 8 letters long'});
    } else if (!number.length){
        return res.json({'alert': 'Please enter your phone number'});
    } else if (!Number(number) || number.length < 8){
        return res.json({'alert': 'Please enter a valid number'});
    } else if (!terms) {
        return res.json({'alert': 'You must agree to our Terms & Conditions'});
    } 

    //store user in db
    db.collection('users').doc(email).get()
    .then(user => {
        if(user.exists){
            return res.json({'alert': 'Email already exists'});
        } else{
            //encrypt the password before storing it
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    // store hash in password DB
                    req.body.password = hash;
                    db.collection('users').doc(email).set(req.body)
                    .then(data => {
                        res.json({
                            name: req.body.name,
                            email: req.body.email,
                            seller: req.body.seller,
                        })
                    })
                })
            })
        }
    })

    //res.json('data received');
})

//404
app.get("/404", (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404')
})


app.listen(PORT, () => console.log('Server running on port ' + PORT))