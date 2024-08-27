var input = document.getElementById("task_inp");
var task_list = document.getElementById("task_list");
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
    editBtn.setAttribute("id","edit_btn");
    editBtn.setAttribute("click","editInput(this)");
    // Create delete button
    var delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    li.appendChild(delBtn);
    delBtn.setAttribute("id","del_btn");


  }
}

function editInput(e) {
    let modifyInput = e.parentElement
    console.log(modifyInput);
    
}

// Delete All List
function delAll() {
  task_list.innerHTML = "";
}
