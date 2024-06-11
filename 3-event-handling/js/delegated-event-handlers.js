const btnAdd = document
    .getElementById("btn-add");

const pElm = document
    .querySelector("section > p");

btnAdd.addEventListener('click', () => {
    document.querySelector("section")
        .append(pElm.cloneNode(true));
});

const sectionElm = document
    .querySelector("section");

sectionElm.addEventListener('click', (e)=>{
   if (e.target instanceof HTMLButtonElement){
       e.target.parentElement.remove();
   }
});

// const btnRemoveButtonElms = document
//     .querySelectorAll("section > p > button");
//
// for (const btnRemove of btnRemoveButtonElms) {
//     btnRemove.addEventListener('click',
//         (e) => {
//             e.target.parentElement.remove();
//         });
// }