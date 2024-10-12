const todos = [
  { id: 1, content: "Task A", completed: false, priority: 2 },
  { id: 2, content: "Task B", completed: true, priority: 1 },
  { id: 3, content: "Task C", completed: false, priority: 3 },
  { id: 4, content: "Task D", completed: false, priority: 3 },
];

let temporaryTodo = [...todos];

function renderTodo(listTodo) {
  const tbody = document.querySelector("#todos");
  tbody.innerHTML = "";

  listTodo.forEach((todo) => {
    const row = document.createElement("tr");

    const content = document.createElement("td");
    content.textContent = todo.content;

    const priority = document.createElement("td");
    priority.textContent = todo.priority;

    const completed = document.createElement("td");
    const completedButton = document.createElement("button");
    completedButton.textContent = todo.completed ? "Completed" : "Doing";
    completedButton.style.backgroundColor = todo.completed ? "green" : "red";
    completedButton.onclick = () => toggleCompleted(todo.id);
    completed.appendChild(completedButton);

    const actions = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTodo(todo.id);
    actions.appendChild(deleteButton);
    row.appendChild(content);
    row.appendChild(priority);
    row.appendChild(completed);
    row.appendChild(actions);
    tbody.appendChild(row);
  });
}

function deleteTodo(id) {
  temporaryTodo = temporaryTodo.filter((todo) => todo.id !== id);
  renderTodo(temporaryTodo);
}

function toggleCompleted(id) {
  const todo = temporaryTodo.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    renderTodo(temporaryTodo);
  }
}

document.querySelector("#priority-sort").onclick = () => {
  temporaryTodo.sort((a, b) => b.priority - a.priority);
  renderTodo(temporaryTodo);
};

document.querySelector("#filter-completed").onclick = () => {
  temporaryTodo = todos.filter((todo) => todo.completed);
  renderTodo(temporaryTodo);
};

document.querySelector("#filter-doing").onclick = () => {
  temporaryTodo = todos.filter((todo) => !todo.completed);
  renderTodo(temporaryTodo);
};

document.querySelector("#reset").onclick = () => {
  temporaryTodo = [...todos];
  renderTodo(temporaryTodo);
};

renderTodo(temporaryTodo);
