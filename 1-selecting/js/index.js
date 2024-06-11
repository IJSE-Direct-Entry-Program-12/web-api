console.log("Working?");

console.log(document);
console.log(document.head);
console.log(document.body);

console.log("=================");

const elm1 = document
    .getElementById("p-1");
console.log(elm1);

const elm2 = document
    .getElementById("second");
console.log(elm2);

console.log("=================");

const elements = document
    .getElementsByClassName('my-class');
for (const elm of elements){
    console.log(elm);
}

console.log("=================");

const elm3 = document.querySelector('#p-1');
console.log(elm3);

const elm4 = document.querySelector(".my-class");
console.log(elm4);

const elements2 = document
    .querySelectorAll("li");
for (const elm of elements2) {
    console.log(elm);
}

console.log(document.querySelector("li:last-child"));
console.log(document.querySelector("p+p"));

console.log("=================");

const elements3 = document
    .getElementsByClassName("my-class");

const elements4 = document
    .querySelectorAll(".my-class");

console.log(elements3);
console.log(elements4);

setTimeout(function(){
    document.querySelector("p.my-class").remove();
    console.log(elements3);
    console.log(elements4);
}, 3000);