const btnXhrReadElm = document
    .getElementById('btn-xhr-read');

btnXhrReadElm.addEventListener('click', () => {
    // 1. Create a xhr instance
    const xhr = new XMLHttpRequest();

    // 2. Set up a call back fn
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    });

    // 3. Open the request
    xhr.open('GET',
        'https://jsonplaceholder.typicode.com/posts',
        true);

    // 4. Append additional request headers and prepare request payload

    // 5. Send the request
    xhr.send();
});

const btnXhrWriteElm = document
    .getElementById('btn-xhr-write');

btnXhrWriteElm.addEventListener('click', () => {
    // 1. Create a xhr instance
    const xhr = new XMLHttpRequest();

    // 2. Set up a call back fn
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === XMLHttpRequest.DONE &&
            xhr.status === 201) {
            alert("Saved!")
        }
    });

    // 3. Open the request
    xhr.open('POST',
        'https://jsonplaceholder.typicode.com/todos',
        true);

    // 4. Add additional headers and prepare the request payload
    const newTodoItem = {
      userId: 11,
      id: 500,
      title: "New Task",
      completed: false
    };
    const jsonNewTodoItem = JSON.stringify(newTodoItem);
    xhr.setRequestHeader("Content-Type",
        "application/json");

    // 5. Send the request with the payload
    xhr.send(jsonNewTodoItem);
});