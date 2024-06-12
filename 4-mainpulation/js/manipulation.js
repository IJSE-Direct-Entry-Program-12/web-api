const btnAddBeforeElm = document
    .getElementById("btn-add-before");

const btnAddAfterElm = document
    .getElementById("btn-add-after");

const listElm = document
    .getElementById("list");

const thirdElm = listElm.children.item(2);
const fourthElm = listElm.children.item(3);

btnAddBeforeElm.addEventListener('click', ()=>{
   const liElement = document
       .createElement("li");
   liElement.innerText = "Before Third";
   thirdElm.before(liElement);
});

btnAddAfterElm.addEventListener('click', ()=>{
    const liElement = document
        .createElement("li");
    liElement.innerText = "After Fourth";
    fourthElm.after(liElement);
});

//================================================

const btnCloneElm = document
    .getElementById("btn-clone");

// const lastLiElm = listElm.children[listElm.children.length - 1];
const lastLiElm = listElm
    .querySelector("li:last-child");

// lastLiElm.remove();

btnCloneElm.addEventListener('click', ()=>{
    const clone1Elm = lastLiElm.cloneNode();
    const clone2Elm = lastLiElm.cloneNode(true);

    // listElm.append(clone1Elm);
    listElm.append(clone2Elm);
});

//=============================================

const btnReplaceChildrenElm = document
    .getElementById("btn-replace-children");

const btnReplaceWithElm = document
    .getElementById("btn-replace-with");

const targetDivElm
    = document.getElementById("target");

btnReplaceChildrenElm.addEventListener('click', ()=>{
    const pElm = document
        .createElement("p");
    pElm.innerHTML = `
        <input type="text"> <button>Click Me</button><br>
        Select Color <input type="color"> 
    `;
    targetDivElm.replaceChildren(pElm, pElm.cloneNode(true));
});

btnReplaceWithElm.addEventListener('click', ()=>{
    const pElm = document
        .createElement("p");
    pElm.innerHTML = `
        <input type="text"> <button>Click Me</button><br>
        Select Color <input type="color"> 
    `;
    targetDivElm.replaceWith(pElm, pElm.cloneNode(true));
});

//=============================================

const btnReplaceChildElm = document
    .getElementById("btn-replace-child");

const clone = lastLiElm.cloneNode(true);

btnReplaceChildElm.addEventListener("click", ()=>{
    //listElm.children.item(0).replaceWith(clone);
    listElm.replaceChild(
        clone, listElm.children.item(0)
    );
});


