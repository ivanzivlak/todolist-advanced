import * as clickEvent from "./clickEvents";

const createNewBtn = document.body.querySelector(".add-thing-btn");
const addNewTodoBtn = document.body.querySelector(".add-todo-btn");
// const deleteBtn = document.body.querySelectorAll(".delete-btn");

createNewBtn.onclick = clickEvent.openCreation;
document.onclick = clickEvent.modalOption;
addNewTodoBtn.onclick = clickEvent.addItem;
// document.onclick = clickEvent.deleteList;
