const display = document.getElementById('display')

let currentValue = '';

const button = document.querySelectorAll('button')
console.log(button)

button.forEach(button => {
    button.addEventListener('click', ()=>{

        const value = button.innerText
        console.log( ` button value is  ${value}`)
        if(value === 'AC'){
            currentValue = 0
        } else if (value === "="){
            
            currentValue = eval(currentValue).toString();
        } else if (value === 'X'){
            currentValue = currentValue.slice(0,-1)
        }   else {
            if (currentValue === '0' && value !== '.') {
                currentValue = value;
            } else {
                currentValue += value;
            }
        }
        display.innerText = currentValue
    })
})