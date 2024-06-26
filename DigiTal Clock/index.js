function updateClock(){
    const now = new Date();
    let hours =now.getHours();
    const times = hours >= 12 ? "PM" : "AM";
    hours = (hours % 12) || 12 ;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeSharing = `${hours}:${minutes}:${seconds} ${times}`;
    document.getElementById("clock").textContent= timeSharing;
}

updateClock();
setInterval(updateClock,1000); // at like timeout function but repeatly