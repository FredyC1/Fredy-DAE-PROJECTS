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
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
};


// duplicate card
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

// Title's change/flash cards
function flashCard() {
    //title change input
    const titleInput = document.getElementById('title-input').value;
    localStorage.setItem('flash-card-title', titleInput);

    const subjectInput = document.getElementById('subject-input').value;
    localStorage.setItem('flash-card-name', subjectInput);

    //flash cards input
    const term = document.getElementById('flash-term').value;
    const definition = document.getElementById('flash-def').value;
    
    let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
    flashcards.push({ term, definition });
    localStorage.setItem('flashcards', JSON.stringify(flashcards));

    document.getElementById('flash-term').value = '';
    document.getElementById('flash-def').value = '';
}

//Flash Card Title change output
window.onload = function() {
    const savedTitle = localStorage.getItem('flash-card-title');
    if (savedTitle) {
        document.getElementById('flash-card-title').textContent = savedTitle;
    }

    const savedSubject = localStorage.getItem('flash-card-name');
    if (savedSubject) {
        document.getElementById('flash-card-name').textContent = savedSubject;
    }
};
//Flash Cards output
const flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
    let currentIndex = 0;
    document.getElementById('flash-card-paragraph').addEventListener('click', () => {
        document.getElementById('flash-card-paragraph').classList.toggle('flipped');
    });
    document.getElementById('forward-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % flashcards.length;
        displayFlashcard();
    });
    document.getElementById('back-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex - 1) % flashcards.length;
        displayFlashcard();
        if (currentIndex === 0) {
            currentIndex = (currentIndex + flashcards.length);
        }
    });

    function displayFlashcard() {
        if (flashcards.length === 0) return;
        document.getElementById('flash-card-paragraph').classList.remove('flipped');
        document.getElementById('term').textContent = flashcards[currentIndex].term;
        document.getElementById('definition').textContent = flashcards[currentIndex].definition;
    }

    if (flashcards.length > 0) {
        displayFlashcard();
    } else {
        alert('No flashcards available. Please create some first.');
    }

//Amount of flash cards

let numerator = 0;
let denominator = flashcards.length;

const flashCardAmount = document.getElementById('flash-card-amount');
const incrementButton = document.getElementById('forward-arrow');
const decrementButton = document.getElementById('back-arrow')


function increment() {
    if (numerator === denominator) {
        numerator = 0;
    };
    numerator++;
    flashCardAmount.textContent = `${numerator}/${denominator}`;
}

function decrement() {
    numerator--;
    if (numerator === 0) {
        numerator === denominator
    }
    flashCardAmount.textContent = `${numerator}/${denominator}`;
}


incrementButton.addEventListener('click', increment);

