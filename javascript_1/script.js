 /*let username;

document.getElementById("gen-BTN").onclick = function() {
    username = document.getElementById("myText").ariaValueMax;
    console.log(username)
}

document.getElementById('Add-card-BTN').addEventListener('click', function() {
    var originalDiv = document.querySelector('duplicate-div');

    var clonedDiv = originalDiv.cloneNode(true); 

    document.getElementById('flash-card-gen').appendChild(clonedDiv);
});
*/
// Animation
var loginBTN = document.getElementById("login");
var signupBTN = document.getElementById("signup");
var BTN = document.getElementById("btn");
var signupTitle = document.getElementById("signup-title");
var loginTitle = document.getElementById("login-title");
const changeColor = document.getElementById("signup-text-change");
const changeColor2 = document.getElementById("login-text-change");
function signup() {
    loginBTN.style.left = "-400px";
    signupBTN.style.left = "50px";
    BTN.style.left = "110px";
    signupTitle.style.left = "0px";
    loginTitle.style.left = "-400px";
    signupTitle.style.visibility = "visible";
    changeColor2.style.color = "#3499D1";
    changeColor.style.color = "white";
}

function login() {
    loginBTN.style.left = "50px";
    signupBTN.style.left = "450px";
    BTN.style.left = "0px";
    signupTitle.style.left = "300px";
    loginTitle.style.left = "0";
    changeColor2.style.color = "white";
    changeColor.style.color = "#3499D1";
}

//Pop Up

function popUp() {
    /*var blur = document.getElementById('blur')
    blur.classList.popUp('active')*/

    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
};


// duplicate
let currentNumber = 5; 

function addCard() {
    var original = document.getElementById("duplicate-div");
    var clone = original.cloneNode(true);

    currentNumber++;

    const newNumberDiv = clone.querySelector("#number-change");
    newNumberDiv.textContent = currentNumber;
    newNumberDiv.id = "";

    document.getElementById("flash-card-gen-whole").appendChild(clone);
} 

// Title's change

let title = ''

/* function changeTitle() {
    const titleInput = document.getElementById('input-text').value;
    const pageTitle = document.getElementById('flash-card-title');
    pageTitle.textContent = titleInput;
} */

function changeTitle() {
    const titleInput = document.getElementById('title-input').value;
    localStorage.setItem('flash-card-title', titleInput);
}

window.onload = function() {
    const savedTitle = localStorage.getItem('flash-card-title');
    if (savedTitle) {
        document.getElementById('flash-card-title').textContent = savedTitle;
    }
};