
var email = document.getElementById("username")
var pass = document.getElementById("password")
var btn = document.querySelector('.btn')
let user = false

function logfun() {
    if (email.value === "ayan@gmail.com" && pass.value === "123456") {

        alert("You have succesfully login ");
        window.location.replace("index.html");
        user = true
        localStorage.setItem('user', user)

    }
    else {
        alert("you cannot login");
    }
}

btn.addEventListener('click', logfun)