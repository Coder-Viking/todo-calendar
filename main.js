document.addEventListener("DOMContentLoaded", function () {
  // Load tasks from localStorage or start with an empty array
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const taskList = document.getElementById("task-list");
  const newTaskInput = document.getElementById("new-task");
  const addButton = document.getElementById("add-button");

  // Save tasks to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Render tasks in the UI
  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      if (task.completed) {
        li.classList.add("completed");
      }

      const span = document.createElement("span");
      span.textContent = task.text;
      span.addEventListener("click", function () {
        toggleTask(index);
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", function () {
        deleteTask(index);
      });

      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  // Add a new task
  function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
      tasks.push({ text: taskText, completed: false });
      newTaskInput.value = "";
      saveTasks();
      renderTasks();
    }
  }

  // Toggle task completion
  function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
  }

  // Delete a task
  function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }

  addButton.addEventListener("click", addTask);
  newTaskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

  // Initial render
  renderTasks();
});
