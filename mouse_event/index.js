const box = document.getElementById("box");
const btn = document.getElementById("b1");

b1.addEventListener("click",function(event){
    box.style.backgroundColor = "red";
    box.textContent = "Don't do it 😖";
});

b1.addEventListener("mouseover", function(event){
    box.style.backgroundColor = "yellow";
    box.textContent = "Hello Guys! 🙂";
});

b1.addEventListener("mouseout", function(event){
    box.style.backgroundColor = "aquamarine";
    box.textContent = "Click Me! 😀";
   
});