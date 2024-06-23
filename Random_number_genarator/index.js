const mybutton = document.getElementById("randnum");
const Lable1 = document.getElementById("label1");
const Lable2 = document.getElementById("label2");
const Lable3 = document.getElementById("label3");
const min = 1 ;
const max = 10 ;
let randomno1;
let randomno2;
let randomno3;

mybutton.onclick = function(){
    randomno1 = Math.floor(Math.random() * max )+ min ;
    randomno2 = Math.floor(Math.random() * max )+ min ;
    randomno3 = Math.floor(Math.random() * max )+ min ;
    Lable1.textContent = randomno1;
    Lable2.textContent = randomno2;
    Lable3.textContent = randomno3;
}

