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

//==========================================================

const btnGetAllEmployeesElm = document
    .getElementById('btn-get-all-employees');

const API_URL = `https://df1a4e3e-460a-4ac9-b556-0989919ebbfd.mock.pstmn.io`;

btnGetAllEmployeesElm.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === XMLHttpRequest.DONE &&
            xhr.status === 200) {
            console.log(xhr.responseText);
        }
    });

    xhr.open('GET', `${API_URL}/employees`, true);

    xhr.send();
});

//==========================================================

const btnGetAllEmployees2Elm = document
    .getElementById('btn-get-all-employees-2');

btnGetAllEmployees2Elm.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('loadstart', ()=>{
       console.log("Load Start");
    });

    xhr.addEventListener('loadend', ()=>{
       console.log("Load End");
    });

    xhr.addEventListener('load', ()=>{
       console.log("Load");
    });

    xhr.addEventListener('error', ()=>{
       console.log("Error");
    });

    xhr.addEventListener('readystatechange', ()=>{
       console.log("readystate", xhr.readyState);
    });

    xhr.open('GET', `${API_URL}/employees`, true);  // Synchronously
    console.log("Open");

    xhr.send();             // Synchronously
    console.log("Send");
});



