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
var x = document.getElementById("login");
var y = document.getElementById("signup");
var z = document.getElementById("btn");
var a = document.getElementById("signup-title")
var b = document.getElementById("login-title")
const changeColor = document.getElementById("signup-text-change")
const changeColor2 = document.getElementById("login-text-change")
function signup() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    a.style.left = "0px";
    b.style.left = "-400px";
    a.style.visibility = "visible";
    changeColor2.style.color = "#3499D1";
    changeColor.style.color = "white";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    a.style.left = "300px";
    b.style.left = "0";
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


function addCard() {
    var orignal = document.getElementById("duplicate-div");
    var clone = orignal.cloneNode(true);

    document.getElementById("flash-card-gen-whole").appendChild(clone);


};