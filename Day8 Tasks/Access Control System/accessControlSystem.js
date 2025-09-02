const loginUsername = "A";
const loginPassword = "1";
const adminUsername = "B";
const adminPassword = "2";
const specialPassUsername = "C";
const specialPassPassword = "3";

let result1;
let result2;
let result3;
function validateLogin() {
    const username = document.getElementById('Login-Username').value;
    const password = document.getElementById('Login-Password').value;

    if (username === loginUsername && password === loginPassword) {
        result1 = true;
    } else {
        result1 = false;
        document.getElementById('result1').textContent = "Access Declined";
    }

    if (result1 == true) {
        document.getElementById('login').className = "hide";
        document.getElementById('admin').className = "container show";
        document.getElementById('specialPass').className = "container show";


    }

}
function validateAdmin() {
    const username = document.getElementById('Admin-Username').value;
    const password = document.getElementById('Admin-Password').value;

    if (username === adminUsername && password === adminPassword) {
        result2 = true;
        document.getElementById('result2').textContent = "Access Granted";
    } else {
        result2 = false;
        document.getElementById('result2').textContent = "Access Declined";
    }
    validateAccess();

}
function validatePass() {
    const username = document.getElementById('Specialpass-username').value;
    const password = document.getElementById('Specialpass-password').value;

    if (username === specialPassUsername && password === specialPassPassword) {
        result3 = true;
        document.getElementById('result3').textContent = "Access Granted";
    } else {
        result3 = false;
        document.getElementById('result3').textContent = "Access Declined";
    }
    validateAccess();

}
function validateAccess() {

    if (result2 === true || result3 === true) {

        document.getElementById('result4').textContent = "Access Granted";
        document.getElementById('admin').className = "container hide";
        document.getElementById('specialPass').className = "container hide";
        document.getElementById('accessGranted').className = "container show";
    }

}