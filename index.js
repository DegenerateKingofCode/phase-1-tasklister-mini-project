// const form = document.querySelector('#create-task-form')
// const inputField = document.querySelector('#new-task-description')
// const ul = document.querySelector('#tasks')

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const li = document.createElement('li')
//   li.textContent = inputField.value
// })


// ul.append(li)

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#create-task-form')
    form.addEventListener('submit', function(event) {
      event.preventDefault()
      const newTask=(event.target['new-task-description'].value)
      document.getElementById('tasks').appendChild(newTaskHandler(newTask))
      form.reset()
    })
    
  })
  
  function newTaskHandler(newTask){
    li = document.createElement('li')
    li.textContent=newTask+' '
  
    btn = document.createElement('button')
    btn.textContent= 'X'
    btn.addEventListener('click', function(){
      this.parentNode.remove()
    })
  
    li.append(btn)
    return li
  }