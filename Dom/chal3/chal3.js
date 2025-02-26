
const jobDisplay  = document.getElementById("jobDisplay")
const ageDisplay = document.getElementById("ageDisplay")
const bioDisplay = document.getElementById("bioDisplay")

// const val = nameInput(EventTarget.value)
function writeName(){
    const nameInput = document.getElementById("nameInput").value  
    const nameDisplay = document.getElementById("nameDisplay")
    nameDisplay.innerText = nameInput || "Not Provided" 
}

document.getElementById('nameInput').addEventListener('input', writeName)

function writeJob (){
    const jobInput = document.getElementById('jobInput').value
    const jobDisplay  = document.getElementById("jobDisplay")
    jobDisplay.innerText = jobInput || "Not Provided"

}

jobInput.addEventListener('input',writeJob )

function writeAge(){
    const ageInput = document.getElementById("ageInput").value
    const ageDisplay = document.getElementById("ageDisplay")
    ageDisplay.innerText = ageInput || "Not Provided"

}

ageInput.addEventListener('input', writeAge)

function writeBio(){
const bioInput = document.getElementById("bioInput").value
const bioDisplay = document.getElementById("bioDisplay")
bioDisplay.innerText = bioInput || "Not Provided"
}

bioInput.addEventListener('input', writeBio)