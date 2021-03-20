const button = document.querySelector('.add-todo-btn');
const input = document.getElementById('todo_input');
const container = document.querySelector('.todo-list');
const clearAllBtn = document.querySelector('.clear-all-btn');

button.addEventListener('click', () => {
    const textValue = input.value.trim();
    if (Boolean(textValue.length)) {
        const div = document.createElement('div');
        const todo = document.createElement('input');
        const doneBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        todo.className += ' todo-input';
        doneBtn.className += ' btn';
        editBtn.className += ' btn';
        deleteBtn.className += ' btn';

        doneBtn.textContent = 'done';
        editBtn.textContent = 'Edit';
        deleteBtn.textContent = 'delete';

        todo.value = textValue;

        container.append(div);
        div.append(todo);
        div.append(doneBtn);
        div.append(editBtn);
        div.append(deleteBtn);

        todo.onblur = () => {
            todo.style.border = 'none';
        }

        input.value = '';

        editBtn.addEventListener('click', (event) => {
            todo.style.border = '1px solid #9ce49c';
            todo.focus();
        });

        doneBtn.addEventListener('click', () => {
            todo.style.textDecoration = ' line-through';
        });

        deleteBtn.addEventListener('click', () => {
            div.innerText = '';
        });
    }
});

clearAllBtn.onclick = () => {
    container.innerText = ''
};

