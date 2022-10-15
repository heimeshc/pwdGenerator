const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass = ""

//Selecting Button and displays for them
let pwdbtn = document.querySelector(".pwdbtn")
let displayOne = document.querySelector(".pwdOne")
let displayTwo = document.querySelector(".pwdTwo")

pwdbtn.addEventListener("click", generate())


function generate(){
    for(let i = 0; i <= 8; i++){
        randomNo = Math.floor(Math.random() * 66);
        passOne += characters[randomNo]
    }

    for(let q = 0; q <= 8; q++){
        randomNotwo = Math.floor(Math.random() * 66);
        passTwo += characters[randomNotwo]
    }

    displayOne.textContent += passOne
    displayTwo.textContent += passTwo
}
