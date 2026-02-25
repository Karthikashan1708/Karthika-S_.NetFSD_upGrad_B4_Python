const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// ADD TASK FUNCTION
function addTask() {

  //  Browser default validation
  if (!taskInput.checkValidity()) {
    taskInput.reportValidity();
    return;
  }

  const taskText = taskInput.value.trim();

  // CREATE LIST ITEM
  const li = document.createElement("li");
  li.textContent = taskText;

  // CREATE DELETE BUTTON
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // CLEAR INPUT
  taskInput.value = "";
}

// ADD BUTTON EVENT
addBtn.addEventListener("click", addTask);


//  EVENT DELEGATION
taskList.addEventListener("click", function(e) {

  // DELETE TASK
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }

  // MARK AS COMPLETED
  else if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  }

});