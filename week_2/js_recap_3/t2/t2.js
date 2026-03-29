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

for (const item of todoList) {
	const itemHtml = document.createElement('li');

	const checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	checkBox.id = `todo-${item.id}`;
	checkBox.checked = item.completed;

	const label = document.createElement('label');
	label.textContent = item.task;
	label.htmlFor = `todo-${item.id}`;

	itemHtml.append(checkBox, label);

	todoListHtml.append(itemHtml);
};