"use strict";


let personArray = [];
let gameRecord = [];
let secretWord;
let unknown = "";
let count = 6;
let makePerson = function (name) { return { nm: name }; };

let easy = ["and", "was", "if", "low", "flow"];
let medium = ["hello", "along", "belong", "song", "garden"];
let hard = ["impossible", "whatever", "therefore", "imagine", "supercalifragilisticexpialidocious"];


function createPerson() {
    let person = makePerson(getName());
    let paragraph = document.getElementById("content");
    let paragraph2 = document.getElementById("count");
    personArray.push(person);
    print(personArray);
    paragraph2.innerHTML = "Guess Left: " + count;
    paragraph.innerHTML += "-Hello " + getName() + ", Your Difficulty: " + getDifficulty() + ".<br>-Try Guessing the word now<br>";

    //document.getElementsByTagName('body')[0].appendChild(paragraph);  
    word();

}

function word() {
    let paragraph = document.getElementById("word");
    let placement = [];
    let chooseWord;
    if (getDifficulty() === "Easy") {
        chooseWord = Math.floor((Math.random() * easy.length));
        secretWord = easy[chooseWord];
        for (let i = 0; i < secretWord.length; i++) { placement.push("_"); }
        print(easy[chooseWord] + secretWord);
    }
    else if (getDifficulty === "Hard") {
        chooseWord = Math.floor((Math.random() * easy.length));
        secretWord = easy[chooseWord];
        for (let i = 0; i < secretWord.length; i++) { placement.push("_"); }
        print(medium[chooseWord] + secretWord);
    }
    else {
        chooseWord = Math.floor((Math.random() * easy.length));
        secretWord = easy[chooseWord];
        for (let i = 0; i < secretWord.length; i++) { placement.push("_"); }
        print(hard[chooseWord] + secretWord);
    }
    unknown = placement;
    paragraph.innerHTML = unknown;
}

function replace() {
    let guess = document.getElementById('guess').value;
    let paragraph = document.getElementById("word");
    let paragraph2 = document.getElementById("count");
    if (secretWord.includes(guess)) {
        print(unknown);
        for (let i = 0; i < secretWord.length; i++) {
            if (guess === secretWord.charAt(i)) {
                print(unknown.length);
                unknown.splice(i, 1, secretWord.charAt(i));
            }
        }
    }
    else {
        counter();
    }
draw();
    paragraph2.innerHTML = "Guess Left: " + count;
    paragraph.innerHTML = unknown;
}
function draw() {
    let draw = document.getElementById('draw');
    switch (count) {
        case 5:
            draw.innerHTML += "|<br>|--------------<br>|...........|<br>";
            break;
        case 4:
            draw.innerHTML += "|..........O<br>|...........|<br>|...........|<br>";
            break;
        case 3:
            draw.innerHTML += "|......./...|...\\<br>|...........|<br>";
            break;
        case 2:
            draw.innerHTML += "|...........|<br>|...........|<br>";
            break;
        case 1:
            draw.innerHTML += "|......./...|...\\<br>|        |<br>";
            break;
        case 0:
            draw.innerHTML += "|<br>|--------------<br>|        |<br>";
            break;
        default:
    }
}

function counter() {
    if (count > 0) {
        count--;
    }
    return count;
}

//functions to get data
function getName() { return document.getElementById('name').value; }

function getDifficulty() {
    let radioEasy = document.getElementById('easy').checked;
    let radioMedium = document.getElementById('medium').checked;
    let radioHard = document.getElementById('hard').checked;
    if (radioEasy === true) {
        return "Easy";
    }
    else if (radioMedium === true) {
        return "Medium";
    }
    else if (radioHard === true) {
        return "Hard";
    }
    else {
        return "Not chosen";
    }
}



//---Extra useful functions 
function refresh() {
    location.reload();
}
function print(x) {
    console.log(x);
}

