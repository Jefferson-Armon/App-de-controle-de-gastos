
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

let todosLeft = todos.filter(function (todo) {
  return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${todosLeft.length} to-dos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.title
  document.querySelector('body').appendChild(p)
})