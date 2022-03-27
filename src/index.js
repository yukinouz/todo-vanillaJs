import "./styles.css";

const incompleteList = document.getElementById("incomplete-list");
const completeList = document.getElementById("complete-list");

const onClickAdd = () => {
  let inputArea = document.getElementById("add-text");
  const inputText = inputArea.value;
  inputArea.value = "";

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    deleteFromIncompleteList(completeTarget);
    const addTarget = completeTarget;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const paragraph = document.createElement("p");
    addTarget.appendChild(paragraph);
    paragraph.innerText = text;
    addTarget.appendChild(backButton);
    completeList.appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    const backTarget = backButton.parentNode;
    completeList.removeChild(backTarget);
    const text = backTarget.firstElementChild.innerText;
    const paragraph = document.createElement("p");
    backTarget.textContent = null;
    backTarget.appendChild(paragraph);
    paragraph.innerText = text;
    backTarget.appendChild(completeButton);
    backTarget.appendChild(deleteButton);
    incompleteList.appendChild(backTarget);
  });

  const list = document.createElement("li");
  const paragraph = document.createElement("p");
  list.className = "area-list";
  paragraph.innerText = inputText;

  list.appendChild(paragraph);
  list.appendChild(completeButton);
  list.appendChild(deleteButton);

  if (inputText === "") {
    return;
  } else {
    incompleteList.appendChild(list);
  }
};

const deleteFromIncompleteList = (target) => {
  incompleteList.removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
