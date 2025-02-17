const yourHeight = document.getElementById('height')
const yourWeight = document.getElementById('weight')
const calculate = document.getElementById('calculate')
const show = document.getElementById('show')

calculate.addEventListener('click', () => {
    const h1 = yourHeight.value;
    yourHeight.value = ''
    const w1 = yourWeight.value;
     yourWeight.value = ''

    const bmi = Math.round( w1/(h1*h1))
    // console.log(bmi)
    const span = document.createElement('span')
    span.innerText = bmi
    show.append(span)
    
   



})