const todoInputs = document.querySelector(".todo-inputs");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTask);
todoList.addEventListener("click", deleteTask);

function addTask(e) {
  e.preventDefault();
  console.log(todoInputs.value.trim());
  if (todoInputs.value.trim() === "") {
    alert("please enter something 🤖");
  } else {
    // create new div
    const newDiv = document.createElement("div");
    newDiv.className = "item-container";

    // create li and buttons and append them in div
    const newLi = document.createElement("li");
    newLi.innerHTML = todoInputs.value;
    newLi.className = "item";
    newDiv.appendChild(newLi);

    // check btn
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.className = "complete-btn";
    newDiv.appendChild(checkBtn);

    //trash btn
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.className = "trash-btn";
    newDiv.appendChild(trashBtn);

    todoList.appendChild(newDiv);
    todoInputs.value = "";
  }
}

function deleteTask(e) {
  const items = e.target;

  if (items.classList.contains("complete-btn")) {
    const parentEl = items.parentElement;
    const liElement = parentEl.querySelector(".item");
    liElement.classList.toggle("checked");
    parentEl.classList.toggle("todochecked");
  }
  if (items.classList.contains("trash-btn")) {
    const parentEl = items.parentElement;
    parentEl.classList.add("fall");
    parentEl.addEventListener("transitionend", function () {
      parentEl.remove();
    });
  }
}
