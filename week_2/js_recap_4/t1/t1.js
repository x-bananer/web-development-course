// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const todoListHtml = document.querySelector('ul');

const dialog = document.querySelector('dialog');
const addBtn = document.querySelector('.add-btn');
const form = dialog.querySelector('form');
const input = dialog.querySelector('input');

const createTodoItem = (item) => {
  const itemHtml = document.createElement('li');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = `todo-${item.id}`;
  checkBox.checked = item.completed;

  checkBox.addEventListener('change', (e) => {
    item.completed = e.target.checked;
    console.log(todoList);
  })

  const label = document.createElement('label');
  label.textContent = item.task;
  label.htmlFor = checkBox.id;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';

  deleteBtn.addEventListener('click', () => {
    const idx = todoList.findIndex(el => el.id === item.id);
    if (idx !== -1) todoList.splice(idx, 1);

    todoListHtml.removeChild(itemHtml);
    console.log(todoList);
  })

  itemHtml.append(checkBox, label, deleteBtn);
  todoListHtml.append(itemHtml);
};

addBtn.addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const task = input.value.trim();
	if (!task) return;

	const newItem = {
		id: Date.now(),
		task,
		completed: false
	}

	todoList.push(newItem);
	createTodoItem(newItem);

	console.log(todoList);

	input.value = '';
	dialog.close();
});

for (const item of todoList) {
  createTodoItem(item);
};
