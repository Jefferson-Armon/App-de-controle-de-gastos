
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
//Creating 'add task' button.
document.querySelector('#add-task').addEventListener('click', function () {
  console.log('Your new task will be added here')
})
//creating 'remove all tasks' button.
document.querySelector('#remove-all-tasks').addEventListener('click', function () {
  console.log('This will remove all tasks')
})
//listen for 'add-task' element
document.querySelector('#add-todo').addEventListener('input', function (task) {
  console.log(task.target.value)
})