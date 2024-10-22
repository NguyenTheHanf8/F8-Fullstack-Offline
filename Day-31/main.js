const todoList = document.querySelector("#todo-list");
const title = document.querySelector("#newTitle");
const description = document.querySelector("#newDescription");
const search = document.querySelector("#search");
const filter = document.querySelector("#filter");
const apiUrl = "http://localhost:3000/todos";

function fetchTodos() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((todos) => {
      displayTodos(todos);
    });
}
fetchTodos();

function displayTodos(todos) {
  todoList.innerHTML = "";

  if (todos.length === 0) {
    const noDataElement = document.createElement("li");
    noDataElement.textContent = "Không tìm thấy công việc";
    todoList.appendChild(noDataElement);
    return;
  }

  todos.forEach((todo) => {
    const liElement = document.createElement("li");
    liElement.textContent = `${todo.title} - ${todo.description} (${
      todo.status ? "Completed" : "Pending"
    })`;
    todoList.appendChild(liElement);
  });
}

function addTodo() {
  const titleValue = title.value;
  const descriptionValue = description.value;

  const newTodo = {
    title: titleValue,
    description: descriptionValue,
    status: false,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  }).then(() => {
    titleValue = "";
    descriptionValue = "";
    fetchTodos();
  });
}

function searchTodos() {
  const searchKey = search.value.trim().toLowerCase();

  fetch(apiUrl)
    .then((response) => response.json())
    .then((todos) => {
      const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchKey)
      );

      displayTodos(filteredTodos);
    });
}

const isCompleted = (todo) => {
  return todo.status === true;
};

const isPending = (todo) => {
  return todo.status === false;
};

function filterTodos() {
  const filterValue = filter.value;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((todos) => {
      let filteredTodos;
      if (filterValue === "completed") {
        filteredTodos = todos.filter(isCompleted);
      } else if (filterValue === "pending") {
        filteredTodos = todos.filter(isPending);
      } else {
        filteredTodos = todos;
      }
      displayTodos(filteredTodos);
    });
}
