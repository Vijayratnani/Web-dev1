document.addEventListener("DOMContentLoaded", () => {
    // const taskInput = document.getElementById("taskInput");
    // const addTaskButton = document.getElementById("addTask");
    // const taskList = document.getElementById("taskList");

    // Load tasks from local storage (if available)
    const taska = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // Function to render tasks
    function renderTasks() {
        document.getElementById("taskList").innerHTML = "";
        taska.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${task}
                <button class="edit" data-index="${index}">Edit</button>
                <button class="delete" data-index="${index}">Delete</button>   
            `;//edit and are the js defined fuctions(class)
            document.getElementById("taskList").appendChild(li);
        });
        saveTasks();
    }

    // Function to save tasks to local storage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(taska));
    }

    // "Event listener" to add a new task
    document.getElementById("addTask").addEventListener("click", () => {
        const newTask = document.getElementById("taskInput").value;   //.trim()
        if (newTask !== "") {
            taska.push(newTask);
            renderTasks();
            document.getElementById("taskInput").value = "";
        }
    });

    // Event delegation for editing and deleting tasks
    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("edit")) {
            const index = e.target.getAttribute("data-index");
            const updatedTask = prompt("Edit the task:", taska[index]);
            if (updatedTask !== null) {
                taska[index] = updatedTask;
                renderTasks();
            }
        } else if (e.target.classList.contains("delete")) {
            const index = e.target.getAttribute("data-index");
            if (confirm("Are you sure you want to delete this task?")) {
                taska.splice(index, 1);
                renderTasks();
            }
        }
    });

    // Initial rendering of tasks(To Load Saved Tasks)
    renderTasks();
});
