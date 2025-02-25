function updateTime (){
 const timeElemnt = document.getElementById('time')
const dateElemnt = document.getElementById('date')

const now = new Date()
const hour = now.getHours()%12 || 12;
const minute = now.getMinutes().toString().padStart(2,"0")
const second = now.getSeconds().toString().padStart(2,"0")
const ampm = now.getHours() >=12? "PM": "AM"

const options = {
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
}
timeElemnt.textContent = `${hour}:${minute}:${second}:${ampm}`
 dateElemnt.innerText = now.toLocaleDateString(undefined, options)
}

setInterval(updateTime,1000)
updateTime()