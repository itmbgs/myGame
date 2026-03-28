let button = document.querySelector(".btn");
button.addEventListener("click", display)
let hindiBox = document.querySelector(".hindi");
let englishBox = document.querySelector(".english");

hindiBox.innerText = "";
englishBox.innerText = "";

let hindiArray = ["अ", "आ", "इ", "ई", "उ", "ऊ"];
let englishArray = ["a", "aa", "i", "ee", "u", "oo"];

function display() {
    return new Promise((resolve, reject) => {

        let index = Math.floor(Math.random()*6) ;
        hindiBox.innerText = hindiArray[index];

        setTimeout(()=>{
            englishBox.innerText = englishArray[index];
        }, 3000);
        setTimeout(()=>{
            hindiBox.innerText = "";
            englishBox.innerText = "";
            resolve();
        }, 5000);
    });  
}

