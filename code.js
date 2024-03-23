function adicionarItem() {
  let listItem = document.createElement("li");
  listItem.className = "listModule";
  let text = document.createTextNode(" ");
  listItem.appendChild(text);
  let list = document.querySelector(".list");
  list.appendChild(listItem);
}

const addButton = document.getElementById("addButton");
const reloadButton = document.getElementById("resetButton");

addButton.addEventListener("click", adicionarItem);
reloadButton.addEventListener("click", () => {
  window.location.reload();
});
