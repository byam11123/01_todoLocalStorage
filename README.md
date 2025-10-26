# 📝 To-Do List (Local Storage)

A beautiful, modern, and interactive to-do list application built with **HTML**, **Tailwind CSS**, and **JavaScript**. This project is perfect for beginners learning web development, featuring a stunning dark mode interface with glass morphism effects and persistent data storage using the browser's localStorage.

![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## ✨ Features

- ✅ **Add Tasks** - Easily add new tasks with the button or press Enter
- ✅ **Mark Complete** - Click on any task to mark it as completed (with a strikethrough effect)
- ✅ **Delete Tasks** - Remove tasks with a smooth fade animation
- ✅ **Beautiful Dark Mode UI** - Modern glass morphism design with gradient accents
- ✅ **Persistent Storage** - Your tasks are saved automatically and persist even after closing the browser
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ✅ **Smooth Animations** - Hover effects, scale transforms, and fade animations
- ✅ **Professional Styling** - Purple and pink gradient accents with elegant shadows

## 🛠️ Technologies Used

- **HTML5** - Structure and layout of the application
- **Tailwind CSS** - Modern utility-first CSS framework for styling
- **JavaScript (ES6+)** - Application logic and interactivity
- **LocalStorage API** - Persistent data storage in the browser
- **Node.js & npm** - Package management and build tools

## 📂 Project Structure

```
01_todoLocalStorage/
│
├── node_modules/          # Dependencies (auto-generated)
├── public/                # Production files
│   ├── index.html        # Main HTML file
│   └── script.js         # JavaScript logic
├── src/                   # Source files
│   ├── input.css         # Tailwind input CSS
│   └── output.css        # Compiled Tailwind
├── package.json           # Project dependencies
├── package-lock.json      # Locked dependency versions
├── tailwind.config.js     # Tailwind configuration (if exists)
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)

### Installation

1. **Clone or Download the Project**

   ```bash
   git clone <project-https-url>
   cd 01_todoLocalStorage
   ```

2. **Initialize npm (if not already done)**
   ```bash
   npm init -y
   ```

## 🎨 Tailwind CSS Setup (Using Tailwind CLI)

This project uses the **Tailwind CSS CLI** for building styles. Follow these steps:

### Step 1: Install Tailwind CSS and CLI

```bash
npm install tailwindcss @tailwindcss/cli
```

This installs:

- `tailwindcss` - The CSS framework
- `@tailwindcss/cli` - Command-line tool for compiling CSS

### Step 2: Create Input CSS File

Create a file at `src/input.css` with the following content:

```css
@import "tailwindcss";
```

This imports all Tailwind CSS directives (base, components, and utilities).

### Step 3: Build Your CSS

Run the Tailwind CLI tool to scan your HTML files and generate the compiled CSS:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

**What this command does:**

- `-i ./src/input.css` - Input file location
- `-o ./src/output.css` - Output file location (where compiled CSS goes)
- `--watch` - Automatically rebuilds when you change HTML/JS files

**Output:**
The compiled CSS will be saved to `src/output.css` (~50KB)

### Step 4: Link CSS in HTML

In your `public/index.html`, link the compiled CSS file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="../src/output.css" rel="stylesheet" />
    <title>To-Do List</title>
  </head>
  <body>
    <!-- Your HTML content here -->
  </body>
</html>
```

### Step 5: Open the Application

Navigate to the `public` folder and open `index.html` in your browser, or use a live server.

---

## 📖 How to Use

### Adding a Task

1. Type your task in the input field that says "Add a new task..."
2. Click the **"Add"** button OR press **Enter** key
3. Your task will appear in the list below with a smooth animation

### Marking a Task as Complete

1. Click on any task in the list
2. The task will get a strikethrough effect and fade slightly
3. Click again to mark it as incomplete

### Deleting a Task

1. Hover over any task to reveal the delete button (trash icon)
2. Click the red **trash icon** button
3. The task will fade out and be removed from your list

### Automatic Saving

- All your tasks are automatically saved to your browser's localStorage
- Close and reopen the browser - your tasks will still be there!
- Clear browser data to reset tasks

## 💡 Learning Path & Code Challenges

This project is structured in **learning challenges** to help beginners understand web development step-by-step:

### Challenge 1: Adding Tasks to an Array

**What You Learn:** Event listeners, DOM selection, object creation, array methods

The first challenge teaches you how to:

- Select HTML elements using `document.getElementById()`
- Listen to user clicks with `addEventListener('click')`
- Create task objects with unique IDs using `Date.now()`
- Store tasks in a JavaScript array using `push()`
- Clear the input field after adding a task
- Handle Enter key presses for better UX

**Key Code:**

```javascript
const newTask = {
  id: Date.now(), // Unique identifier for each task
  text: taskText, // The task text entered by the user
  completed: false, // Whether the task is done
};

tasks.push(newTask); // Add the task to our array
```

---

### Challenge 2: Rendering Tasks to the DOM & LocalStorage

**What You Learn:** DOM manipulation, localStorage API, event delegation, Tailwind CSS classes

The second challenge teaches you how to:

- Create HTML elements dynamically using `document.createElement()`
- Add attributes to elements using `setAttribute()`
- Insert tasks into the webpage with `appendChild()`
- Save tasks to the browser's memory using `localStorage.setItem()`
- Retrieve saved tasks when the page loads with `JSON.parse()`
- Toggle completed status when clicking a task
- Delete tasks from the array and DOM
- Prevent event bubbling with `stopPropagation()`
- Apply Tailwind CSS classes dynamically with `classList`
- Add smooth animations with CSS transitions

**Key Code:**

```javascript
// Save tasks to browser storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render each task as HTML
function renderTasks(task) {
  const li = document.createElement("li");
  li.setAttribute("data-id", task.id);
  li.className =
    "bg-gray-700/50 p-4 rounded-lg flex justify-between items-center";
  // Add task text and delete button
  todoList.appendChild(li);
}
```

---

## 🧩 Understanding the Code

### HTML Structure (`public/index.html`)

The HTML file provides:

- A gradient background with purple and gray tones
- A centered card with glass morphism effect
- An input field for entering new tasks
- An "Add" button with gradient styling
- An empty `<ul>` list that will be populated with tasks dynamically
- A footer with credit line and animated heart

### JavaScript Logic (`public/script.js`)

#### Part 1: Setting Up

```javascript
const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
```

This grabs HTML elements and loads previously saved tasks from storage.

#### Part 2: Adding Tasks

When you click the "Add Task" button or press Enter:

1. Get the text from the input field
2. Check if it's empty (if empty, stop)
3. Create a new task object with a unique ID
4. Add it to the tasks array
5. Save everything to localStorage
6. Display it on the page
7. Clear the input field

#### Part 3: Rendering Tasks

For each task:

1. Create a new `<li>` element
2. Add the task ID as a data attribute
3. Apply Tailwind CSS classes for styling
4. Fill it with the task text and a delete button (SVG icon)
5. If the task is completed, add the `completed` classes
6. Add click listeners for toggling and deleting

#### Part 4: Toggle Complete & Delete

- **Click on task text** → Toggle completion status
- **Click delete button** → Remove task from array and page with animation
- **Save after every change** → Always keep localStorage updated

---

## 🎓 Key JavaScript Concepts Explained

### Event Listeners

```javascript
addTaskButton.addEventListener("click", function (e) {
  // This code runs whenever the button is clicked
});

todoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTaskButton.click();
  }
});
```

### DOM Manipulation

```javascript
const li = document.createElement("li"); // Create new element
li.setAttribute("data-id", task.id); // Add attribute
li.classList.add("line-through"); // Add CSS class
li.classList.toggle("opacity-50"); // Toggle CSS class
li.remove(); // Remove from page
todoList.appendChild(li); // Add to parent
```

### LocalStorage

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks)); // Save
const tasks = JSON.parse(localStorage.getItem("tasks")); // Load
```

### Array Methods

```javascript
tasks.push(newTask)              // Add item to array
tasks.filter(t => t.id !== id)   // Create new array without item
tasks.forEach(task => ...)       // Loop through each task
```

---

## 🐛 Troubleshooting

### Tailwind CSS not compiling

```bash
# Make sure you're in the project root directory
# Stop any running watch process (Ctrl + C)
# Run the CLI tool again with the correct paths
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

### CSS file not found in HTML

- Check that the path in `index.html` matches your folder structure
- If `index.html` is in `public/`, use: `<link href="../src/output.css" rel="stylesheet">`
- If `index.html` is in root, use: `<link href="./src/output.css" rel="stylesheet">`

### Styles not applying

- Make sure the Tailwind CLI is running (you should see "Watching for changes...")
- Clear your browser cache (Ctrl + Shift + Delete)
- Make sure you're saving your HTML files (this triggers CSS rebuild)
- Check browser console for CSS loading errors (F12)

### Tasks are not saving

- Make sure your browser allows localStorage (not disabled in privacy settings)
- Check the browser console for any error messages (F12 → Console tab)
- Try using a different browser

### npm install fails

- Make sure Node.js is installed: `node --version`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Check your internet connection

### Delete button is not visible

- The delete button appears when you hover over a task
- Make sure Tailwind CSS is properly loaded
- Check browser console for errors

---

## 📚 Learn More

### Resources for Beginners

- [Tailwind CSS CLI Installation Guide](https://tailwindcss.com/docs/installation/tailwind-cli)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [FreeCodeCamp - Web Development](https://www.freecodecamp.org/)
- [JavaScript.info - Modern JavaScript Tutorial](https://javascript.info/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

---

## 🎯 Challenge Yourself - Enhancement Ideas

1. **Add a Light Mode Toggle** - Switch between dark and light themes
2. **Edit Tasks** - Allow users to double-click and edit tasks
3. **Due Dates** - Add a date picker for deadlines
4. **Priority Levels** - Add high, medium, low priority badges
5. **Filter Tasks** - Show completed, pending, or all tasks
6. **Search Feature** - Live search/filter tasks
7. **Categories** - Organize tasks into categories
8. **Export/Import** - Download/upload tasks as JSON
9. **Drag & Drop** - Reorder tasks
10. **Progress Bar** - Show completion percentage
11. **Task Statistics** - Show total, completed, pending counts
12. **Animations** - Add more advanced CSS animations

---

## 📝 License

This project is open source and available for educational purposes. Feel free to use, modify, and share it!

## 🤝 Contributing

Have improvements? Here's how to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add improvement'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Open a Pull Request

---

## 👨‍💻 Author Notes

This project is designed specifically for **non-technical students** who are just starting their web development journey. Each challenge builds upon the previous one, teaching fundamental concepts in a practical way.

Remember:

- **Start small** - Understand each line of code
- **Experiment** - Change values and see what happens
- **Break things** - That's how you learn!
- **Ask questions** - Every developer started as a beginner
- **Build more projects** - Practice is the best teacher

---

## 📊 Project Stats

- **Lines of HTML:** ~60
- **Lines of JavaScript:** ~100
- **Tailwind Classes Used:** 50+
- **Browser Support:** All modern browsers
- **Mobile Friendly:** ✅ Yes
- **Accessibility:** WCAG 2.1 Level AA
- **Learning Time:** 2-3 hours
- **Difficulty Level:** Beginner

---

## 🌟 If You Found This Helpful

Please give this project a **⭐ star on GitHub!** It helps other beginners find this resource.

---

**Built with ❤️ by [Byamkesh Kaiwartya](https://github.com/byam11123)**

_Making web development accessible to everyone, one project at a time._

---

## 📞 Need Help?

If you're stuck on something:

1. **Check the console** - Press F12 in browser, click Console tab
2. **Read the error message** - JavaScript tells you what's wrong
3. **Check Tailwind CLI output** - Watch for compilation messages
4. **Search the documentation** - Tailwind CSS CLI docs are excellent
5. **Ask on Stack Overflow** - Tag with `javascript`, `tailwindcss`, `html`
6. **Join coding communities** - Discord servers, Reddit r/webdev
7. **Open an issue** - Use GitHub Issues for bug reports

---

**Happy Coding! 🚀**
