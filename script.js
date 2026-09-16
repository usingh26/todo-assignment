const todoList = document.getElementById("todo-list");


const submitBtn = document.getElementById("submit-btn");
const taskInput = document.getElementById("new-todo-input");
const errorMessage = document.getElementById("error-message");

submitBtn.addEventListener("click", function() {

    const text = taskInput.value;

    if (text.trim() === "") {
      errorMessage.textContent = "Please enter a task.";
        return;
    }
    errorMessage.textContent = "";

    addTask(text);

    taskInput.value = "";
});

function addTask(text) {

  // if we add task then we have to remove placeholder from main section
  const emptyMessage = document.getElementById("empty-message");

    if (emptyMessage) {
        emptyMessage.remove();
    }

  // creating list of item here
    const li = document.createElement("li");

    //  adding text in the list
    const taskText = document.createElement("span");
    taskText.textContent = text;

    const statusBtn = document.createElement("button");
    statusBtn.textContent = "Pending";
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    statusBtn.addEventListener("click", function() {

        if (statusBtn.textContent === "Pending") {
            statusBtn.textContent = "Done";
        } else {
            statusBtn.textContent = "Pending";
        }

    });

    // Deleting task here
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Puting all in the DOM
    li.appendChild(taskText);
    li.appendChild(statusBtn);
    li.appendChild(deleteBtn);

    // Puting above li in the ul
    todoList.appendChild(li);
}
