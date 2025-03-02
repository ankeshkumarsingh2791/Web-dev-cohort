const task = document.getElementById('taskInput')
const add = document.getElementById('addButton')
const insert = document.getElementById('addList')
const ulRemove = document.getElementById('taskList')
const total = document.getElementById('totalTasks')

let totalTask = 0;

add.addEventListener('click', ()=>{
    totalTask++;
  const value = task.value;

  total.innerText = `Total tasks : ${totalTask}`
  const li = document.createElement('div')
  li.id = 'task-item'

 

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
 
  checkbox.id = 'complete-checkbox'

  const text = document.createElement('p')
  text.innerText = value

  const delButton = document.createElement('button')
  delButton.innerText = "Delete "
  delButton.id = 'delete-button'

  ulRemove.remove()

  console.log(li)
  insert.append(li)
  li.appendChild(checkbox)
  li.appendChild(text)
  li.appendChild(delButton)

  task.value = ""
  
 
 delButton.addEventListener('click', ()=>{
    totalTask--;
    total.innerText = `Total tasks : ${totalTask}`
    li.remove()
 })
 


})