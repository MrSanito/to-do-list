const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskInput === "") return; // ignore empty input

  // create list item

  const taskItem = document.createElement("li");
  taskItem.className =
    "flex justify-between items-center bg-gray-200 p-2 rounded";

  // Task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // complete button
  const completeButton = document.createElement("button");
  completeButton.textContent = "✓";
  completeButton.className = "bg-green-500 text-white px-2 rounded";
  completeButton.addEventListener("click", () => {
    taskSpan.classList.toggle("line-through");
  });

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "✗";
  deleteButton.className = "bg-red-500 text-white px-2 rounded";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  // Append elements
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(completeButton);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = "";
});
