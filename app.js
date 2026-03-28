    let hindiBox = document.querySelector(".hindi");
    let englishBox = document.querySelector(".english");

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

let index = getIndex();

function startGame(){
    hindiBox.innerText = "";
    englishBox.innerText = "";
    index = getIndex();
    hindiBox.innerText = hindiArray[index];
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
    }, 2000);
}

startGame();

let answerButton = document.querySelector(".answerButton");
answerButton.addEventListener("click", displayEnglish);

let playAgainButton = document.querySelector(".playAgain");
playAgainButton.addEventListener("click", playAgain);

function playAgain(){
    if(hindiBox.innerText == ""){
        startGame(index);
    }
}
