function Roll(){
    const noofdice =document.getElementById("noofdice").value;
    const diceresult = document.getElementById("diceresult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    console.log(noofdice);
    //console.log(value);

    for(let i = 0 ; i < noofdice ; i++){
        const value = Math.floor(Math.random() * 6) + 1 ;
        console.log(value);
        values.push(value);
        
        images.push(`<image src = "dice_images/${value}.png" alt = "Dice ${value}">`);
    }
    diceresult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join('');
     
}