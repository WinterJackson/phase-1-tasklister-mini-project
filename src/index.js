document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const todoInput = document.querySelector('#new-task-description');
    buildTodoItem(todoInput.value);
  });
});

function buildTodoItem(todo) {
  const p = document.createElement('p');
  const btn = document.createElement('button'); // corrected the 'button' tag name
  btn.textContent = 'x';
  btn.addEventListener('click', handleDelete);
  p.textContent = todo;
  p.appendChild(btn); // appended the button to the paragraph
  document.querySelector('#list').appendChild(p);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
