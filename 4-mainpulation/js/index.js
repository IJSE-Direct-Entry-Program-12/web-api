const btnAddElm = document
    .querySelector('#btn-add');

const txtInputElm = document
    .querySelector('#txt-input');

const itemListElm = document
    .querySelector('#item-list');

btnAddElm.addEventListener('click', ()=>{
    const input = txtInputElm.value;
    if (!input) return;

    const liElm = document
        .createElement('li');

    const textNode = document.createTextNode(input + " ");

    const iconElm = document
        .createElement('ion-icon');
    iconElm.setAttribute("name",
        "trash-outline");

    liElm.append(textNode);
    liElm.append(iconElm);

    itemListElm.append(liElm);
    txtInputElm.value = "";
    txtInputElm.focus();
});

itemListElm.addEventListener('click', (e)=>{
    if (e.target.getAttribute("name")
            === 'trash-outline'){
        e.target.parentElement.remove();
    }
});