const box = document.getElementById("box");
const move =100;
let x =0;
let y = 0 ;
document.addEventListener("keydown", event =>{
    box.textContent = "🫣";
    box.style.backgroundColor = "lightblue";
})
document.addEventListener("keyup", event =>{
    box.textContent = "😉";
    box.style.backgroundColor = " aquamarine";
})

document.addEventListener("keydown", event =>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y -=move ;
                break;
            case "ArrowDown":
                y +=move ;
                break;
            case "ArrowLeft":
                x -=move ;
                break;
            case "ArrowRight":
                x +=move ;
                break;
        }
    }

    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
})

