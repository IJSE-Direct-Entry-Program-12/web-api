console.log(jQuery === $);

const URL = 'https://jsonplaceholder.typicode.com/todos';

$("#btn-send-get-request").on('click', () => {
    fetch(URL)
        .then(async (response) => {
            console.log("FETCH: ", await response.json())
        })
        .catch(err => console.log("FETCH ERROR: ", err))
        .finally(()=> console.log("FETCH: Nawa gilunath ban choon"));


    $.ajax(URL)
        .then((data, status, xhr) => {
            console.log("DATA: ", data);
            console.log("STATUS: ", status);
            console.log("XHR: ", xhr);
        })
        .catch(err => console.log("JQUERY ERROR: ", err))
        .always(()=> console.log("JQUERY: Nawa gilunath ban choon"));
});

$("#btn-send-post-request").on('click', async () => {
    const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
            userId: 1,
            title: "New To-do item",
            completed: false
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(await response.json());

    const data = await $.ajax(URL, {
        method: "POST",
        data: JSON.stringify({
            userId: 1,
            title: "New To-do item",
            completed: false
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(data);
});