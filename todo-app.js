
const todos = [{
  title: 'plan classes',
  completed: false
}, {
  title: 'study',
  completed: true
}, {
  title: 'work out',
  completed: true
}, {
  title: 'send e-mails',
  completed: true
}, {
  title: 'clean room',
  completed: false
}]

//creating a function that will render the notes according to each letter typed into the search field.
const filters = {
  searchText: ''
}
//this object was created so that the searchText receives what the user types.
//searchText is compared to the to-do title down below.

const renderTodos = function (todosArray, filters) { 
  //renderTodos should repeat every time a letter is typed by the user.
  //refreshing every time a letter is typed.
  const filteredTodos = todosArray.filter(function (todo) { 
    //filter here is a function that takes a todo. 
    // Since this is going to be a loop, 
    //it is going to check every to-do to return what is on the next line
    return todo.title.toLowerCase().includes(filters.searchText.toLowerCase()) 
    //here we say that the title of each to-do is going to be checked and compared to the filter.
    //both are converted to lower case, so that it is not case sensitive.
    //remember the filter will be changed every time the user types a letter.
  })
  
  document.querySelector('#to-dos').innerHTML = ''

  filteredTodos.forEach(function (todo) {
    const todoElement = document.createElement('p')
    todoElement.textContent = todo.title  
    document.querySelector('#to-dos').appendChild(todoElement)
  })
}

renderTodos(todos, filters)
//this function is called here so that it receives the latest todos and filters.

//Creating 'add task' button.
document.querySelector('#add-task').addEventListener('click', function () {
  console.log('Your new task will be added here')
})
//creating 'remove all tasks' button.
document.querySelector('#remove-all-tasks').addEventListener('click', function () {
  console.log('This will remove all tasks')
})
//listen for 'add-task' element
document.querySelector('#add-todo').addEventListener('input', function (taskInput) {
  console.log(taskInput.target.value)
  //taskInput.target.value is pointing exactly where the information to be shown is.
    filters.searchText = taskInput.target.value
    renderTodos(todos, filters)
    //renderTodos is being called again to ake sure we rerender every time the filter changes.
})