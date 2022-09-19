// Start coding here
const inputMessage = document.getElementById("message-text");
const enterButton = document.querySelector(".submit-message-button");
const displayBoard = document.querySelector(".board");

function clickAction() {
  let message = inputMessage.value;
  if (message) {
    let newMessage = document.createElement("h1");
    newMessage.className = "message";
    let newInput = document.createTextNode(message);
    newMessage.appendChild(newInput);
    displayBoard.appendChild(newMessage);
  }
}

enterButton.addEventListener("click", clickAction);
