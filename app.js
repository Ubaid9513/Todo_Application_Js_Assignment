var input = document.getElementById("task_inp");
var task_list = document.getElementById("task_list");
var addInputTask = document.getElementById("addInputTask");
var newEdit = document.getElementById("newEditBtn");
function addTask() {
  if (input.value === "") {
    alert("Plz Enter Your Task");
  } else {
    // Create Li for adding todoList
    var li = document.createElement("li");
    task_list.appendChild(li);
    li.innerText = input.value;
    input.value = "";
    // Create Edit button
    var editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    li.appendChild(editBtn);
    editBtn.setAttribute("id", "edit_btn");

    editBtn.addEventListener("click", () => {
      addInputTask.style.display = "none";
      newEdit.style.display = "inline-block";

      // console.log(task_list.firstChild.nextSibling.firstChild.nodeValue);
      
      input.value = task_list.firstChild.nextSibling.firstChild.nodeValue;
      console.log("input", input.value);

      newEdit.addEventListener("click", () => {
        // console.log(task_list.firstChild.nextSibling.firstChild.nodeValue);
        var newInputVal = input.value;
        console.log("new input val", newInputVal);
        task_list.firstChild.nextSibling.firstChild.nodeValue = newInputVal;
        addInputTask.style.display = "inline-block";
        newEdit.style.display = "none";
        input.value = "";
      });
    });

    // function editInput(e) {}
    // Create delete button
    var delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    li.appendChild(delBtn);
    delBtn.setAttribute("id", "del_btn");
    delBtn.setAttribute("onclick", "delLi(this)");
  }
}
// function editInput(e) {
//   addInputTask.style.display = "none";
//   newEdit.style.display = "inline-block";

//   input.value = e.parentNode.firstChild.nodeValue;
//   // console.log("input", input.value);

//   newEdit.addEventListener("click", () => {
//     // console.log(task_list.firstChild.nextSibling.firstChild.nodeValue);
//     var newInputVal = input.value;
//     console.log("new input val", newInputVal);
//     task_list.firstChild.nextSibling.firstChild.nodeValue = newInputVal;
//     addInputTask.style.display = "inline-block";
//     newEdit.style.display = "none";
//     input.value = "";
//   });
// }

function delLi(e) {
  e.parentNode.remove();
}

// Delete All List
function delAll() {
  task_list.innerHTML = "";
}
