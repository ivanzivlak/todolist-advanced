const sidebar = document.body.querySelector(".sidebar");
const nav = document.body.querySelector(".nav");
const content = document.body.querySelector(".content");
// const modalTodoBtn = document.body.querySelector("#todo-btn");
// const modalProjectBtn = document.body.querySelector("#project-btn");
// const modalNoteBtn = document.body.querySelector("#note-btn");
const modalTodoTitle = document.body.querySelector(".todo-title");
const modalTodoDesc = document.body.querySelector(".todo-desc");

let listItem = document.body.querySelector(".list-item").cloneNode(true);

//open create new note
function openCreation() {
  const modal = document.body.querySelector(".modal");
  modal.classList.remove("hidden");
  modal.style.zIndex = "1";
  content.classList.add("blurred");
  sidebar.classList.add("blurred");
  nav.classList.add("blurred");
  console.log("hello");
}

function modalOption(e) {
  let clicked = e.target;
  console.log(clicked.classList);
  if (clicked.dataset.name === "todo") {
    document.body
      .querySelector(".modal-content-todo")
      .classList.remove("hidden");

    document.body
      .querySelector(".modal-content-project")
      .classList.add("hidden");

    document.body.querySelector(".modal-content-note").classList.add("hidden");
  } else if (clicked.dataset.name === "project") {
    document.body
      .querySelector(".modal-content-project")
      .classList.remove("hidden");

    document.body.querySelector(".modal-content-todo").classList.add("hidden");

    document.body.querySelector(".modal-content-note").classList.add("hidden");
  } else if (clicked.dataset.name === "note") {
    document.body
      .querySelector(".modal-content-note")
      .classList.remove("hidden");

    document.body.querySelector(".modal-content-todo").classList.add("hidden");

    document.body
      .querySelector(".modal-content-project")
      .classList.add("hidden");
  }

  if (clicked.classList.contains("delete-btn")) {
    clicked.parentNode.parentNode.remove();
    console.log("wrong");
  }
}

function addItem() {
  let titleValue = modalTodoTitle.value;
  let descValue = modalTodoDesc.value;

  let newListItem = listItem.cloneNode(true);
  newListItem.querySelector(".text-content").textContent = titleValue;
  document.body.querySelector(".list-container").appendChild(newListItem);
  //
  (function unblur() {
    sidebar.classList.remove("blurred");
    content.classList.remove("blurred");
    nav.classList.remove("blurred");
    document.body.querySelector(".modal").classList.add("hidden");
  })();
}

// function deleteList(e) {
//   // this.parentNode.parentNode.remove();
//   let clicked = e.target;
//   if (clicked.classList.contains("delete-btn")) {
//     clicked.parentNode.parentNode.remove();
//     console.log("wrong");
//   }
// }

export { openCreation, modalOption, addItem };
