const names = document.getElementById('name');
const description = document.getElementById('description');
const add = document.querySelector('button')
const star = document.querySelectorAll('.star')
const submit = document.getElementById('insert')


add.addEventListener('click', () => {
    const name = names.value;
    const des = description.value
    console.log(`${name} ${des} ${star}`)

    const h1 = document.createElement('h1');
    h1.innerText = name
    const p = document.createElement('p')
    p.innerText = des

    

    const div = document.createElement('div')
    submit.append(div)
    div.appendChild(h1)
    div.appendChild(p)
    names.value = ''
    description.value = ''


})

