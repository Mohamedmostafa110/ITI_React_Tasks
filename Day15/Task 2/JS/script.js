let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let tasksContainer = document.getElementById("tasksContainer");

let tasks = [];

getTasksFromStorage();

addBtn.addEventListener("click", addTask);

function addTask() {
  let taskName = taskInput.value.trim();

  if (taskName === "") return;

  let task = {
    id: Date.now(),
    name: taskName,
  };

  tasks.push(task);

  saveToStorage();
  displayTasks();

  taskInput.value = "";
}

function displayTasks() {
  let cartona = "";

  for (let i = 0; i < tasks.length; i++) {
    cartona += `
        
        <div class="d-flex justify-content-between align-items-center border-bottom py-2">

            <span>${tasks[i].name}</span>

            <div>

                <button
                    onclick="editTask(${tasks[i].id})"
                    class="btn btn-sm text-warning"
                >
                    <i class="fa-solid fa-pen"></i>
                </button>

                <button
                    onclick="deleteTask(${tasks[i].id})"
                    class="btn btn-sm text-danger"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>

        </div>
        
        `;
  }

  tasksContainer.innerHTML = cartona;
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);

  saveToStorage();
  displayTasks();
}

function editTask(id) {
  let newTaskName = prompt("Enter New Task");

  if (!newTaskName || newTaskName.trim() === "") return;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i].name = newTaskName;
      break;
    }
  }

  saveToStorage();
  displayTasks();
}

function saveToStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromStorage() {
  let data = localStorage.getItem("tasks");

  if (data) {
    tasks = JSON.parse(data);
  }

  displayTasks();
}
