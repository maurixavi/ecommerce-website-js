//const { response } = require("express");

const loader = document.querySelector('.loader');

const submitBtn = document.querySelector('.submit-btn');

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');

const terms = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');

submitBtn.addEventListener('click', () => {
    /*if (!name.value.length){
        showAlert('Please enter a name');
    } else if (name.value.length < 3){
        showAlert('Name must be at least 3 letters long');
    } else if (!email.value.length){
        showAlert('Please enter an email');
    } else if (!password.value.length){
        showAlert('Please enter a password'); 
    } else if (password.value.length < 8){
        showAlert('Password should be at least 8 letters long');
    } else if (!number.value.length){
        showAlert('Please enter your phone number');
    } else if (!Number(number.value) || number.length < 8){
        showAlert('Please enter a valid number');
    } else if (!terms.checked) {
        showAlert('You must agree to our Terms & Conditions');
    } else {*/
        //submit form
        loader.style.display = 'block';
        sendData('/signup', {
            name: name.value,
            email: email.value,
            password: password.value,
            number: number.value,
            terms: terms.checked,
            notification: notification.checked,
            seller: false
        })
    //}
})

//send data
const sendData = (path, data) => {
    fetch(path, {
        method: 'POST',
        mode: 'cors',
        /*headers: {
            'Content-Type': 'application/json'
          },*/
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        processData(response);
        //console.log(res);
    })
}

const processData = (data) => {
    loader.style.display = null;
    if (data.alert){
        showAlert(data.alert);
    } else if(data.name){
        //console.log(data)
        //Create authToken
        data.authToken = generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}

//alert function
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 2500)
}