const btnAdd = document.querySelector('#addTask')
const btnDel = document.querySelector('.btnDel')
const taskInput = document.querySelector('#task')
const tasksDiv = document.querySelector('.tasks')
const taskGroup = 

// console.log(btnAdd)
// console.log(taskInput)

btnAdd.addEventListener('click', (e)=>{
    const taskDesc = taskInput.value 
    let li = document.createElement('li')
    li.innerHTML = `${taskDesc} <button class="btnDel"> (-)  </button>`
    
    // console.log(e.target);
    
    tasksDiv.appendChild(li, )
    taskInput.value = null
})



// btnDel.addEventListener('click', deleteItem())

// function deleteItem(e){
//     console.log(e.target)
// }


