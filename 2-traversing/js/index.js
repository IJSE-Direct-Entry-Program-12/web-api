const h1Elm = document
    .querySelector("h1");

console.log(h1Elm.previousElementSibling);

const ulElm = h1Elm.nextElementSibling;
console.log(ulElm);

console.log(ulElm.children[1]);
console.log(ulElm.children.item(1));

console.log(ulElm.children[0].nextElementSibling
    .nextElementSibling);

console.log(ulElm.firstElementChild)
console.log(ulElm.lastElementChild)

console.log("=====================");

console.log(1, document.body);
console.log(2, document.body.firstElementChild);
console.log(3, document.body.firstElementChild
    .nextElementSibling);
console.log(4, document.body.firstElementChild
    .nextElementSibling.children[2]);
console.log(5, document.body.firstElementChild
    .nextElementSibling.children[2].previousElementSibling);
console.log(6, document.body.firstElementChild
    .nextElementSibling.children[2].previousElementSibling
    .firstElementChild);
console.log(7, document.body.firstElementChild
    .nextElementSibling.children[2].previousElementSibling
    .firstElementChild.firstElementChild);
console.log(8, document.body.firstElementChild
    .nextElementSibling.children[2].previousElementSibling
    .firstElementChild.firstElementChild.nextElementSibling);
console.log(9, document.body.firstElementChild
    .nextElementSibling.children[2].previousElementSibling
    .firstElementChild.firstElementChild.nextElementSibling
    .firstElementChild);

const markElm = document
    .querySelector("mark");

console.log(markElm.parentElement.parentElement
    .parentElement.parentElement);

console.log(markElm.closest("ul"));

console.log(ulElm.querySelector("ol > li:last-child"));