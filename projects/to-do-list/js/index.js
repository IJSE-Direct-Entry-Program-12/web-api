const btnAddTaskElm = document
    .querySelector("#btn-add-task");

const txtTaskElm = document
    .querySelector("#txt-task");

const listContainerElm = document
    .querySelector("#list-container");

const noItemsElm = document
    .querySelector("#list-container > div");

btnAddTaskElm.addEventListener('click', (e)=>{
    e.preventDefault();
    const task = txtTaskElm.value.trim();
    if (!task) {
        txtTaskElm.focus();
        txtTaskElm.select();
        return;
    }

    if (listContainerElm.contains(noItemsElm)) {
        noItemsElm.remove();
    }

    const listItemElm = document
        .createElement("div");
    const lblElm = document
        .createElement("label");
    const inputElm = document
        .createElement("input");
    const iconElm = document
        .createElement("i");
    const text = document
        .createTextNode(task);

    lblElm.append(inputElm);
    lblElm.append(text);
    listItemElm.append(lblElm);
    listItemElm.append(iconElm);

    listItemElm.setAttribute("class", "list-item d-flex justify-content-between p-2 align-items-center animate__animated animate__fadeInUp");
    lblElm.setAttribute("class", "d-flex gap-2");
    inputElm.setAttribute("type", "checkbox");
    inputElm.setAttribute("class", "form-check");
    iconElm.setAttribute("class", "bi bi-trash3");

    listContainerElm.append(listItemElm);
    txtTaskElm.value = "";
    txtTaskElm.focus();
});

listContainerElm.addEventListener('click',
    (e)=>{
    if (e.target.getAttribute("class") ===
        'bi bi-trash3'){
        e.target.parentElement.remove();
        if (!listContainerElm.children.length){
            listContainerElm.append(noItemsElm);
        }
    }
});
