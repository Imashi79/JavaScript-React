
let lowerletters = false;
let upperletters = false;
let num = false;
let characters = false;
const radioButtons = document.getElementsByName("groupName");
for (const radioButton of radioButtons) {
    radioButton.checked = false;
}

function create(){
    const pwdlen = document.getElementById("pwdlen").value;
    let plen = Number(pwdlen);
    const lowercaseletters = document.getElementById("lowercaseletters");
    const Uppercaseletters = document.getElementById("Uppercaseletters");
    const numbers = document.getElementById("numbers");
    const specialcharacters = document.getElementById("specialcharacters");
    const pwd = document.getElementById("pwd");
    if (lowercaseletters.checked){
        lowerletters = true;
    }
    if (Uppercaseletters.checked){
        upperletters = true;
    }
    if (numbers.checked){
        num = true;
    }
    if (specialcharacters.checked){
        characters = true;
    }
    let password =generatePassword(plen, lowerletters, upperletters,num, characters);
    pwd.textContent = "Password: " + password;
    
}

function generatePassword(plen, lowerletters, upperletters,num, characters){
    const lcharacters = "abcdefghijklmnopqrstuvwxyz";
    const ucharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const no = "0123456789";
    const symbol ="!@#$%&*?+-_=";
    let allowedChars = "";
    let password = "";

    allowedChars += lowerletters? lcharacters: "";
    allowedChars += upperletters? ucharacters: "";
    allowedChars += num? no: "";
    allowedChars += characters? symbol: "";

    
    if(plen <= 0){
        return "password length must be at lest 1";
    }
    else if(allowedChars.length == 0){
        return "At least 1 set of character neesds to be selected";
    }
    else{

        for( let i = 0 ; i < plen ; i++){
            console.log("a");
            let index = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[index];
        }
    
        return password;

    }
   

}