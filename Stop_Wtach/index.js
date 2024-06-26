const display = document.getElementById("display");
let timer = null ;
let startTime = 0 ;
let etime = 0 ;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - etime;
        timer = setInterval(update,10);
        isRunning = true ;
    }

}
function stop(){
    clearInterval(timer);
    etime = Date.now() - startTime ;
    isRunning = false ;
}
function reset(){
    clearInterval(timer);
    etime = 0;
    startTime = 0;
    isRunning = false ;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    etime = currentTime - startTime ;

    let hours = Math.floor(etime / (1000 * 60 * 60));
    let minutes = Math.floor(etime / (1000 * 60) % 60);
    let seconds = Math.floor(etime / 1000 % 60);
    let miliseconds = Math.floor(etime % 1000 / 10);

    hours = hours.toString().padStart(2,0);
    minutes = minutes.toString().padStart(2,0);
    seconds = seconds.toString().padStart(2,0);
    miliseconds = miliseconds.toString().padStart(2,0);


    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}