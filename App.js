let btn = document.querySelector("#addtask");
let inp = document.querySelector("#input");
let boxes = document.querySelectorAll(".scroll");
let description = document.getElementById("description");
let currTasksDesc;
let drag = null;
btn.onclick = function () {
  if (inp.value != '') {
    const newTask = document.createElement("div");
    newTask.classList.add("TaskWrapper", "item")
    newTask.setAttribute("draggable", "true");
    const pin = document.createElement("div");
    pin.classList.add("pin");

    const task = document.createElement("div");
    task.innerHTML = inp.value;
    task.classList.add("task");

    const paraDiv = document.createElement("div");
    paraDiv.setAttribute("id", "paraDiv");

    const para = document.createElement("p");
    para.classList.add("para");

    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.innerHTML="x";
    circle.addEventListener("click", () => {
      document.getElementById("popup-1").classList.add("active");
      newTask.classList.add("delete");
    });
    newTask.appendChild(pin);
    newTask.appendChild(task);
    newTask.appendChild(paraDiv);
    paraDiv.appendChild(para);
    newTask.appendChild(circle);
    inp.value = '';
    boxes[0].appendChild(newTask);
    newTask.addEventListener("click", () => {
      document.getElementById("popup-1").classList.toggle("active");
      description.focus();
      currTasksDesc = para;
    });
  }

  dragItem();
}

function dragItem() {
  let items = document.querySelectorAll('.item');

  items.forEach(item => {
    item.addEventListener('dragstart', function () {
      drag = item;
      item.style.opacity = '0.5';
    })
    item.addEventListener('dragend', function () {
      rag = null;
      item.style.opacity = '1';
    })
    boxes.forEach(box => {
      box.addEventListener('dragover', function (e) {
        e.preventDefault();
       
      })
      box.addEventListener('dragleave', function () {
       
      })
      box.addEventListener('drop', function () {
        box.append(drag);

      })
    })
  })
}


const togglePopup = () => {
  document.getElementById("popup-1").classList.toggle("active");
}

function save() {
  currTasksDesc.innerHTML=description.value;
  description.value = "";
  togglePopup();
}
