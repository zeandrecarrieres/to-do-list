const btnAdd = document.querySelector('#addTask')

const taskInput = document.querySelector('#task')
const tasksDiv = document.querySelector('.tasks')
// const taskGroup =
const removeTask = document.querySelector('#removeTask')

// console.log(btnAdd)
// console.log(taskInput)


btnAdd.addEventListener('click', (e)=>{
    const taskDesc = taskInput.value 
    let li = document.createElement('li')
    li.innerHTML = `${taskDesc} <button class="btnDel"> (-)  </button>`
    
    // console.log(e.target);
    
    tasksDiv.appendChild(li)
    taskInput.value = null
    
})


removeTask.addEventListener('click', ()=>{

    const buttons = document.querySelectorAll('.btnDel')
    console.log(buttons)

    for (let i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click', deleteItem)
        buttons[i].style.color='red'
        function deleteItem(e){

           this.parentNode.remove()
    } 
}
})







