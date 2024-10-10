let tasks = [];

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function renderTasks() {
  taskList.innerHTML = '';

  const sortedTasks = tasks.sort((a, b) => a.completed - b.completed);

  sortedTasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    const taskDesc = document.createElement('span');
    taskDesc.textContent = task.description;
    if (task.completed) {
      taskDesc.classList.add('completed');
    }
    taskItem.appendChild(taskDesc);

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = task.completed ? 'Unmark' : 'Complete';
    toggleBtn.addEventListener('click', () => {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    });
    taskItem.appendChild(toggleBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTasks();
    });
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
  });
}

addTaskBtn.addEventListener('click', () => {
  const taskDescription = taskInput.value.trim();

  if (taskDescription) {
    tasks.push({ description: taskDescription, completed: false });

    taskInput.value = '';

    renderTasks();
  }
});

renderTasks();
