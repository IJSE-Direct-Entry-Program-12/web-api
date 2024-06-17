const txtUserIdElm = document
    .getElementById('txt-user-id');

txtUserIdElm.addEventListener('change', () => {
    // 1. Create a xhr instance
    const xhr = new XMLHttpRequest();

    // 2. Set up call back fn
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === XMLHttpRequest.DONE &&
            xhr.status === 200) {
            const todoItems = JSON.parse(xhr.responseText);
            createTodoItems(todoItems);
        }
    });

    // 3. Open the request
    xhr.open('GET',
        `https://jsonplaceholder.typicode.com/todos?userId=${encodeURIComponent(txtUserIdElm.value)}`,
        true);

    // 4. Add request headers and prepare request payload

    // 5. Send the request
    xhr.send();
});

function createTodoItems(todoItems) {
    const todoListElm = document
        .getElementById('todo-list');
    todoListElm.querySelectorAll('.todo-item')
        .forEach(elm => elm.remove());
    for (const todoItem of todoItems) {
        const todoItemElm = document
            .createElement('p');
        todoItemElm.className = 'd-flex gap-2 todo-item';
        todoItemElm.innerHTML = `
                <input id="chk-${todoItem.id}" 
                 ${todoItem.completed ? 'checked' : ''}
                 type="checkbox" class="form-check-input">
                <label for="chk-${todoItem.id}">
                    ${todoItem.userId}-${todoItem.title}
                </label>`;
        todoListElm.append(todoItemElm);
    }
}