let hindiBox = document.querySelector(".hindi");
let englishBox = document.querySelector(".english");

let optionRed = document.querySelector(".red");
optionRed.addEventListener("click", verifyAnswer);

let optionGreen = document.querySelector(".green");
optionGreen.addEventListener("click", verifyAnswer);

let optionBlue = document.querySelector(".blue");
optionBlue.addEventListener("click", verifyAnswer);

let optionOrange = document.querySelector(".orange");
optionOrange.addEventListener("click", verifyAnswer);

let answerButton = document.querySelector(".answerButton");
answerButton.addEventListener("click", displayEnglish);

let playAgainButton = document.querySelector(".playAgain");  
playAgainButton.addEventListener("click", playAgain);

let h2 = document.querySelector("h2");
let score = 0;

let hindiArray = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ",
                "ए ", "ऐ", "ओ", "औ", "अं", "अः",
                "क", "ख", "ग", "घ", "ङ",
                "च", "छ", "ज", "झ", "ञ",
                "ट", "ठ", "ड", "ढ", "ण",
                "त", "थ", "द", "ध", "न",
                "प", "फ", "ब", "भ", "म",
                "य", "र", "ल", "व", "श", "ष", "स", "ह",
                "क्ष", "त्र", "ज्ञ", "श्र",
];
let englishArray = ["a", "aa", "i", "ee", "u", "oo", "ri",
                "e", "ai", "o", "au", "an", "ah",
                "k", "kh", "g", "gh", "ng",
                "ch", "chh", "j", "jh", "N",
                "t", "th", "d", "dh", "n",
                "t", "th", "d", "dh", "n",
                "p", "ph", "b", "bh", "m",
                "y", "r", "l", "w", "sh", "sh", "s", "h",
                "ksh", "tr", "gy", "sr",
];    
function getIndex(){
    return Math.floor(Math.random()*hindiArray.length) ;
}

function verifyAnswer(){

    if(hindiBox.innerText === ""){
        alert("Click Play Again.");
    } 
    else if(this.innerText === englishArray[index]){
        score = score + 1;
        h2.innerText = `Correct..! Score: ${score}`;
        displayEnglish();
    }
    else{
        hindiBox.innerText = "";
        englishBox.innerText = "";

        optionRed.innerText = "";
        optionGreen.innerText = "";
        optionBlue.innerText = "";
        optionOrange.innerText = "";

        h2.innerText = `Game over..! Score: ${score}`;
        
        setTimeout(()=>{
            score = 0;
            h2.innerText = "Click the correct option";
        }, 3000);
    }
}

let index = getIndex();

function startGame(){
    hindiBox.innerText = "";
    englishBox.innerText = "";
    optionRed.innerText = "";
    optionGreen.innerText = "";
    optionBlue.innerText = "";
    optionOrange.innerText = "";

    index = getIndex();
    hindiBox.innerText = hindiArray[index];

    let optionNumber = Math.floor( Math.random() * 4 );

    optionRed.innerText = englishArray[(index + (optionNumber + 0) % 4) % englishArray.length];
    optionGreen.innerText = englishArray[(index + (optionNumber + 1) % 4) % englishArray.length];
    optionBlue.innerText = englishArray[(index + (optionNumber + 2) % 4) % englishArray.length];
    optionOrange.innerText = englishArray[(index + (optionNumber + 3) % 4)% englishArray.length];
}

function displayEnglish(){

    if(hindiBox.innerText === ""){
        englishBox.innerText = "";
    }else{
        englishBox.innerText = englishArray[index];
    }

    setTimeout(()=>{
        hindiBox.innerText = "";
        englishBox.innerText = "";
    }, 1000);
}

function playAgain(){
    if(hindiBox.innerText == ""){
        startGame(index);
    }
}

startGame();
