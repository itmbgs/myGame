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

// let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");

let score = 0;
let maxScore = 0;
let lastGameScore = 0;
h4.innerText = `Max Score: ${maxScore} | Last Score: ${lastGameScore}`;

let hindiArray = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ",
                "ए ", "ऐ", "ओ", "औ", "अं", "अः",
                "क", "ख", "ग", "घ", "ङ",
                "च", "छ", "ज", "झ", "ञ",
                "ट", "ठ", "ड", "ढ", "ण",
                "त", "थ", "द", "ध", "न",
                "प", "फ", "ब", "भ", "म",
                "य", "र", "ल", "व", "श", "ष", "स", "ह",
                "क्ष", "त्र", "ज्ञ", "श्र",
                
                "क", "का", "कि", "की", "कु", "कू", "के", "कै", "को", "कौ", "कं", "कः",
                "ख", "खा", "खि", "खी", "खु", "खू", "खे", "खै", "खो", "खौ", "खं", "खः",
                "ग", "गा", "गि", "गी", "गु", "गू", "गे", "गै", "गो", "गौ", "गं", "गः",
                "घ", "घा", "घि", "घी", "घु", "घू", "घे", "घै", "घो", "घौ", "घं", "घः",
                "च", "चा", "चि", "ची", "चु", "चू", "चे", "चै", "चो", "चौ", "चं", "चः",
                "छ", "छा", "छि", "छी", "छु", "छू", "छे", "छै", "छो", "छौ", "छं", "छः",
                "ज", "जा", "जि", "जी", "जु", "जू", "जे", "जै", "जो", "जौ", "जं", "जः",
                "झ", "झा", "झि", "झी", "झु", "झू", "झे", "झै", "झो", "झौ", "झं", "झः",
                "ट", "टा", "टि", "टी", "टु", "टू", "टे", "टै", "टो", "टौ", "टं", "टः",
                "ठ", "ठा", "ठि", "ठी", "ठु", "ठू", "ठे", "ठै", "ठो", "ठौ", "ठं", "ठः",
                "ड", "डा", "डि", "डी", "डु", "डू", "डे", "डै", "डो", "डौ", "डं", "डः",
                "ढ", "ढा", "ढि", "ढी", "ढु", "ढू", "ढे", "ढै", "ढो", "ढौ", "ढं", "ढः",
                "ण", "णा", "णि", "णी", "णु", "णू", "णे", "णै", "णो", "णौ", "णं", "णः",
                "त", "ता", "ति", "ती", "तु", "तू", "ते", "तै", "तो", "तौ", "तं", "तः",
                "थ", "था", "थि", "थी", "थु", "थू", "थे", "थै", "थो", "थौ", "थं", "थः",
                "द", "दा", "दि", "दी", "दु", "दू", "दे", "दै", "दो", "दौ", "दं", "दः",
                "ध", "धा", "धि", "धी", "धु", "धू", "धे", "धै", "धो", "धौ", "धं", "धः",
                "न", "ना", "नि", "नी", "नु", "नू", "ने", "नै", "नो", "नौ", "नं", "नः",
                "प", "पा", "पि", "पी", "पु", "पू", "पे", "पै", "पो", "पौ", "पं", "पः",
                "फ", "फा", "फि", "फी", "फु", "फू", "फे", "फै", "फो", "फौ", "फं", "फः",
                "ब", "बा", "बि", "बी", "बु", "बू", "बे", "बै", "बो", "बौ", "बं", "बः",
                "भ", "भा", "भि", "भी", "भु", "भू", "भे", "भै", "भो", "भौ", "भं", "भः",
                "म", "मा", "मि", "मी", "मु", "मू", "मे", "मै", "मो", "मौ", "मं", "मः",
                "य", "या", "यि", "यी", "यु", "यू", "ये", "यै", "यो", "यौ", "यं", "यः",
                "र", "रा", "रि", "री", "रु", "रू", "रे", "रै", "रो", "रौ", "रं", "रः",
                "ल", "ला", "लि", "ली", "लु", "लू", "ले", "लै", "लो", "लौ", "लं", "लः",
                "व", "वा", "वि", "वी", "वु", "वू", "वे", "वै", "वो", "वौ", "वं", "वः",
                "श", "शा", "शि", "शी", "शु", "शू", "शे", "शै", "शो", "शौ", "शं", "शः",
                "ष", "षा", "षि", "षी", "षु", "षू", "षे", "षै", "षो", "षौ", "षं", "षः",
                "स", "सा", "सि", "सी", "सु", "सू", "से", "सै", "सो", "सौ", "सं", "सः",
                "ह", "हा", "हि", "ही", "हु", "हू", "हे", "है", "हो", "हौ", "हं", "हः",
                "क्ष", "क्षा", "क्षि", "क्षी", "क्षु", "क्षू", "क्षे", "क्षै", "क्षो", "क्षौ", "क्षं", "क्षः",
                "त्र", "त्रा", "त्रि", "त्री", "त्रु", "त्रू", "त्रे", "त्रै", "त्रो", "त्रौ", "त्रं", "त्रः",
                "ज्ञ", "ज्ञा", "ज्ञि", "ज्ञी", "ज्ञु", "ज्ञू", "ज्ञे", "ज्ञै", "ज्ञो", "ज्ञौ", "ज्ञं", "ज्ञः",
                "श्र", "श्रा", "श्रि", "श्री", "श्रु", "श्रू", "श्रे", "श्रै", "श्रो", "श्रौ", "श्रं", "श्रः",
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
                
                "k", "ka", "ki", "kee", "ku", "koo", "ke", "kai", "ko", "kau", "kan", "kah",
                "kh", "kha", "khi", "khee", "khu", "khoo", "khe", "khai", "kho", "khau", "khan", "khah",
                "g", "ga", "gi", "gee", "gu", "goo", "ge", "gai", "go", "gau", "gan", "gah",
                "gh", "gha", "ghi", "ghee", "ghu", "ghoo", "ghe", "ghai", "gho", "ghau", "ghan", "ghah",
                "ch", "cha", "chi", "chee", "chu", "choo", "che", "chai", "cho", "chau", "chan", "chah",
                "chh", "chha", "chhi", "chhee", "chhu", "chhoo", "chhe", "chhai", "chho", "chhau", "chhan", "chhah",
                "j", "ja", "ji", "jee", "ju", "joo", "je", "jai", "jo", "jau", "jan", "jah",
                "jh", "jha", "jhi", "jhee", "jhu", "jhoo", "jhe", "jhai", "jho", "jhau", "jhan", "jhah",
                "t", "ta", "ti", "tee", "tu", "too", "te", "tai", "to", "tau", "tan", "tah",
                "th", "tha", "thi", "thee", "thu", "thoo", "the", "thai", "tho", "thau", "than", "thah",
                "d", "da", "di", "dee", "du", "doo", "de", "dai", "do", "dau", "dan", "dah",
                "dh", "dha", "dhi", "dhee", "dhu", "dhoo", "dhe", "dhai", "dho", "dhau", "dhan", "dhah",
                "n", "na", "ni", "nee", "nu", "noo", "ne", "nai", "no", "nau", "nan", "nah",
                "t", "ta", "ti", "tee", "tu", "too", "te", "tai", "to", "tau", "tan", "tah",
                "th", "tha", "thi", "thee", "thu", "thoo", "the", "thai", "tho", "thau", "than", "thah",
                "d", "da", "di", "dee", "du", "doo", "de", "dai", "do", "dau", "dan", "dah",
                "dh", "dha", "dhi", "dhee", "dhu", "dhoo", "dhe", "dhai", "dho", "dhau", "dhan", "dhah",
                "n", "na", "ni", "nee", "nu", "noo", "ne", "nai", "no", "nau", "nan", "nah",
                "p", "pa", "pi", "pee", "pu", "poo", "pe", "pai", "po", "pau", "pan", "pah",
                "ph", "pha", "phi", "phee", "phu", "phoo", "phe", "phai", "pho", "phau", "phan", "phah",
                "b", "ba", "bi", "bee", "bu", "boo", "be", "bai", "bo", "bau", "ban", "bah",
                "bh", "bha", "bhi", "bhee", "bhu", "bhoo", "bhe", "bhai", "bho", "bhau", "bhan", "bhah",
                "m", "ma", "mi", "mee", "mu", "moo", "me", "mai", "mo", "mau", "man", "mah",
                "y", "ya", "yi", "yee", "yu", "yoo", "ye", "yai", "yo", "yau", "yan", "yah",
                "r", "ra", "ri", "ree", "ru", "roo", "re", "rai", "ro", "rau", "ran", "rah",
                "l", "la", "li", "lee", "lu", "loo", "le", "lai", "lo", "lau", "lan", "lah",
                "w", "wa", "wi", "wee", "wu", "woo", "we", "wai", "wo", "wau", "wan", "wah",
                "sh", "sha", "shi", "shee", "shu", "shoo", "she", "shai", "sho", "shau", "shan", "shah",
                "sh", "sha", "shi", "shee", "shu", "shoo", "she", "shai", "sho", "shau", "shan", "shah",
                "s", "sa", "si", "see", "su", "soo", "se", "sai", "so", "sau", "san", "sah",
                "h", "ha", "hi", "hee", "hu", "hoo", "he", "hai", "ho", "hau", "han", "hah",
                "ksh", "ksha", "kshi", "kshee", "kshu", "kshoo", "kshe", "kshai", "ksho", "kshau", "kshan", "kshah",
                "tr", "tra", "tri", "tree", "tru", "troo", "tre", "trai", "tro", "trau", "tran", "trah",
                "gy", "gya", "gyi", "gyee", "gyu", "gyoo", "gye", "gyai", "gyo", "gyau", "gyan", "gyah",
                "sr", "sra", "sri", "sree", "sru", "sroo", "sre", "srai", "sro", "srau", "sran", "srah",
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
        h3.innerText = `Correct..! Score: ${score}`;
        displayEnglish();
    }
    else{
        hindiBox.innerText = "";
        englishBox.innerText = "";

        optionRed.innerText = "";
        optionGreen.innerText = "";
        optionBlue.innerText = "";
        optionOrange.innerText = "";

        lastGameScore = score;
        if(lastGameScore > maxScore){
            maxScore = lastGameScore;
        }
        h3.innerText = `Game over..! Score: ${score}`;
        h4.innerText = `Max Score: ${maxScore} | Last Score: ${lastGameScore}`;
        setTimeout(()=>{
            score = 0;
            h3.innerText = "Click the correct option";
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
