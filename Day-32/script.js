const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const titleElement = document.querySelector("#title");
const descriptionEle = document.querySelector("#description");
const titleError = document.querySelector("#title-error");
const filterStatus = document.querySelector("#filter-status");
const searchTitle = document.querySelector("#search-title");
const priorityEle = document.querySelector("#priority");
const sortPriority = document.querySelector("#sort-priority");
let idEditing = null;
let todos = [];
const apiUrl = "http://localhost:3000/todos";

async function fetchTodos() {
  try {
    const response = await fetch(apiUrl);
    todos = await response.json();
    renderTodos();
  } catch (error) {
    alert("Có lỗi xảy ra, vui lòng thử lại sau");
  }
}
fetchTodos();

function renderTodos() {
  let filteredTodos = [...todos];

  const statusFilter = filterStatus.value;
  if (statusFilter === "completed") {
    filteredTodos = filteredTodos.filter((todo) => todo.status);
  } else if (statusFilter === "pending") {
    filteredTodos = filteredTodos.filter((todo) => !todo.status);
  }

  const searchValue = searchTitle.value.toLowerCase();
  filteredTodos = filteredTodos.filter((todo) =>
    todo.title.toLowerCase().includes(searchValue)
  );

  const sortValue = sortPriority.value;
  if (sortValue !== "none") {
    const priorityValue = {
      low: 1,
      medium: 2,
      high: 3,
    };

    filteredTodos.sort((todoA, todoB) => {
      const priorityA = priorityValue[todoA.priority];
      const priorityB = priorityValue[todoB.priority];
      if (priorityA > priorityB) return 1;
      else if (priorityA < priorityB) return -1;
      else return 0;
    });
  }

  const showTodo = filteredTodos
    .map(
      (todo) => `
      <tr>
        <td>${todo.id}</td>
        <td>${todo.title}</td>
        <td>${todo.description}</td>
        <td>
          <button class="btn ${
            todo.status ? "btn-success" : "btn-secondary"
          }" onclick="toggleStatus(${todo.id})">
            ${todo.status ? "Completed" : "Pending"}
          </button>
        </td>
        <td>${todo.priority}</td>
        <td>
          <button class="btn btn-warning" onclick="editTodo(${
            todo.id
          })">Update</button>
          <button class="btn btn-danger" onclick="deleteTodo(${
            todo.id
          })">Remove</button>
        </td>
      </tr>
    `
    )
    .join("");

  todoList.innerHTML = showTodo;
}

async function addTodo() {
  const title = titleElement.value.trim();
  const description = descriptionEle.value.trim();
  const priority = priorityEle.value;
  const newTodo = {
    title,
    description,
    status: false,
    priority,
  };

  if (title === "") {
    titleError.style.display = "block";
    return;
  } else {
    titleError.style.display = "none";
  }
  try {
    if (idEditing === null) {
      await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
    } else {
      await fetch(`${apiUrl}/${idEditing}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      idEditing = null;
    }
    todoForm.reset();
    fetchTodos();
  } catch (error) {
    alert("Không thể lưu việc làm, vui lòng thử lại");
  }
}

async function deleteTodo(id) {
  if (confirm("Bạn có chắc chắn muốn xóa việc làm này không?")) {
    try {
      await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
      fetchTodos();
    } catch (error) {
      alert("Không thể xoá việc làm, vui lòng thử lại");
    }
  }
}

function editTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    titleElement.value = todo.title;
    descriptionEle.value = todo.description;
    priorityEle.value = todo.priority;
    idEditing = id;
  }
}

async function toggleStatus(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.status = !todo.status;
    try {
      await fetch(`${apiUrl}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: todo.status }),
      });
      fetchTodos();
    } catch (error) {
      alert("Không thể cập nhật trạng thái, vuo lòng thử lại");
    }
  }
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});
filterStatus.addEventListener("change", (e) => {
  e.preventDefault();
  renderTodos();
});
searchTitle.addEventListener("input", (e) => {
  e.preventDefault();
  renderTodos();
});
sortPriority.addEventListener("change", (e) => {
  e.preventDefault();
  renderTodos();
});
