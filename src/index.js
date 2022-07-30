import * as clickEvent from "./clickEvents";

const createNewBtn = document.body.querySelector(".add-thing-btn");

createNewBtn.onclick = clickEvent.openCreation;
document.onclick = clickEvent.modalOption;
