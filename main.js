document.addEventListener("DOMContentLoaded", function () {
  // Task data structure (array of task objects)
  let tasks = [];

  const newTaskInput = document.getElementById("new-task");
  const addButton = document.getElementById("add-button");

  // Function to add a task to the list
  function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
      // Push new task object; we will handle display in later tasks
      tasks.push({ text: taskText, completed: false });
      newTaskInput.value = "";
      // For now, log tasks to console for debugging
      console.log("Task added:", tasks);
    }
  }

  // Event listeners for adding tasks
  addButton.addEventListener("click", addTask);

  newTaskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
