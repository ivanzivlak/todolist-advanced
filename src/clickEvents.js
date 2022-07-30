const sidebar = document.body.querySelector(".sidebar");
const nav = document.body.querySelector(".nav");
const content = document.body.querySelector(".content");
// const modalTodoBtn = document.body.querySelector("#todo-btn");
// const modalProjectBtn = document.body.querySelector("#project-btn");
// const modalNoteBtn = document.body.querySelector("#note-btn");

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
  if (clicked.dataset.name === "todo") {
    document.body
      .querySelector(".modal-content-todo")
      .classList.remove("hidden");

    document.body
      .querySelector(".modal-content-project")
      .classList.add("hidden");

    document.body.querySelector(".modal-content-note").classList.add("hidden");
  }

  if (clicked.dataset.name === "project") {
    document.body
      .querySelector(".modal-content-project")
      .classList.remove("hidden");

    document.body.querySelector(".modal-content-todo").classList.add("hidden");

    document.body.querySelector(".modal-content-note").classList.add("hidden");
  }

  if (clicked.dataset.name === "note") {
    document.body
      .querySelector(".modal-content-note")
      .classList.remove("hidden");

    document.body.querySelector(".modal-content-todo").classList.add("hidden");

    document.body
      .querySelector(".modal-content-project")
      .classList.add("hidden");
  }
}

export { openCreation, modalOption };
