function adicionarItem() {
    let listItem = document.createElement("li");
    listItem.className = "listModule";
    let text = document.createTextNode(" ");
    listItem.appendChild(text);
    let list = document.querySelector(".list");
    list.appendChild(listItem);
}

const addButton = document.getElementById("addButton");

addButton.addEventListener("click", adicionarItem);