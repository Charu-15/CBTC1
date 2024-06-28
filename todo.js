const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const todoList = document.getElementById('todo-items');
const completedTasksList = document.getElementById('completed-tasks');

addTaskButton.addEventListener('click', function() {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        listItem.classList.add('completed-task');
        completedTasksList.appendChild(listItem);
        todoList.removeChild(listItem);
      } else {
        listItem.classList.remove('completed-task');
        todoList.appendChild(listItem);
        completedTasksList.removeChild(listItem);
      }
    });
    
    const taskText = document.createTextNode(newTask);
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    
    todoList.appendChild(listItem);
    newTaskInput.value = '';
  }
});
