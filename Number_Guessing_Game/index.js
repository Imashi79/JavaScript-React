
const min = 1 ;
const max = 100;
const result = Math.floor(Math.random() * (max-min + 1))+ min;
let attempt = 0 ;
let guess = true;
submit.onclick = function(){
    const submit = document.getElementById("submit");
    const label = document.getElementById("label"); 
    let num = document.getElementById("no").value 
    num = Number(num);
    attempt++;
    if(isNaN(num) || num <= 0 || num > 100){
       label.textContent = "invalid number ! please enter valid number";
    }
    else if (num < result){
        label.textContent = "number is low! try again";
    }
    else if (num > result){
        label.textContent = "number is high! try again";
    }
    else{
        label.textContent = `congratulations , number is correct. attempts ${attempt}`;
    }
        
}

