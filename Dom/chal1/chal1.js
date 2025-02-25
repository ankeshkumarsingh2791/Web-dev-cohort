const toggle = document.querySelector('button')
const bulb = document.getElementById('bulbs')
const bg = document.querySelector("body")


toggle.addEventListener('click', ()=>{
    if(toggle.textContent === "on"){
        bulb.src = "turnonn.avif";
        toggle.textContent = "off";
        bg.style.backgroundColor = "yellow"
        
    } else {
        bulb.src = "turnon.webp";
        toggle.textContent = "on" ;
        bg.style.backgroundColor = "black"

    }


})

