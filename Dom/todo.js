const Input = document.getElementById('task')

const add = document.getElementById('to-do')
const finaladd = document.getElementById('add')
const removeall = document.getElementById('remove')
add.addEventListener('click', () => {
    const value = Input.value;
    
    const li = document.createElement('li')
    li.innerText = value

    const delButton = document.createElement('button')
    delButton.innerText = 'X';

    finaladd.append(li);
    li.appendChild(delButton)
    Input.value =''

    delButton.addEventListener('click', ()=> {
        li.remove()
    })
})


removeall.addEventListener('click', () => {
    // finaladd.removeChild(finaladd.firstElementChild)
    const all = document.getElementsByTagName('li');
    //  this helps to conver html li tags into array and then remove all 
    Array.from(all).forEach(li => {
        li.remove();
    });

       
});