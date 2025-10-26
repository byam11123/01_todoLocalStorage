document.addEventListener("DOMContentLoaded", () => {
  // Select input, button, and list elements
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  // Load tasks from localStorage, or create an empty array if first visit
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // On page load, render all saved tasks
  tasks.forEach((task) => renderTasks(task));

  // Add Task button handler (Challenge 1)
  addTaskButton.addEventListener("click", function (e) {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks(newTask);
    todoInput.value = "";

    console.log(tasks);
  });

  // Allow Enter key to add task
  todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTaskButton.click();
    }
  });

  // Render a task, enable complete/delete, update Tailwind classes
  function renderTasks(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    // Tailwind base classes for the task item
    li.className =
      "bg-gray-800 p-2 mb-2 rounded flex justify-between items-center transition-shadow shadow";

    // If completed, add Tailwind's line-through and opacity classes
    if (task.completed) {
      li.classList.add("line-through", "opacity-70");
    }

    li.innerHTML = `
      <span>${task.text}</span>
      <button class="ml-4 px-2 py-1 rounded bg-red-600 text-white hover:bg-red-800 transition-colors">Delete</button>
    `;

    // Mark complete/incomplete when clicking anywhere but the delete button
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("line-through");
      li.classList.toggle("opacity-70");
      saveTasks();
    });

    // Delete the task when clicking the delete button
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent also toggling complete!
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
    });

    todoList.appendChild(li);
  }

  // Save tasks to browser localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
