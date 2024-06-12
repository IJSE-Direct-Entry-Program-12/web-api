const btnAddElm = document
    .getElementById("btn-add");

const btnToggleAElm = document
    .getElementById("btn-toggle-a");

const btnToggleBElm = document
    .getElementById("btn-toggle-b");

const btnToggleCElm = document
    .getElementById("btn-toggle-c");

const btnClearElm = document
    .getElementById("btn-clear");

const h1Elm = document
    .querySelector("h1");

btnAddElm.addEventListener('click', ()=>{
   //h1Elm.setAttribute("class", "a b c");

   // h1Elm.className = "a b c";

   h1Elm.classList.add('a', 'b');
   h1Elm.classList.add('c');
});

btnToggleAElm.addEventListener('click', ()=>{
   // console.log(h1Elm.classList.contains('a'));
   // console.log(h1Elm.classList.contains('c'));
   // h1Elm.classList.remove('a', 'c');
   // console.log(h1Elm.classList.contains('a'));
   // console.log(h1Elm.classList.contains('c'));
   if (h1Elm.classList.contains("a")){
      h1Elm.classList.remove("a");
   }else{
      h1Elm.classList.add("a");
   }
});

btnToggleBElm.addEventListener('click', ()=>{
   // if (h1Elm.classList.contains("b")){
   //    h1Elm.classList.remove("b");
   // }else{
   //    h1Elm.classList.add("b");
   // }
   h1Elm.classList.toggle('b');
});

btnToggleCElm.addEventListener('click', ()=>{
   h1Elm.classList.toggle('c');
   // if (h1Elm.classList.contains("c")){
   //    h1Elm.classList.remove("c");
   // }else{
   //    h1Elm.classList.add("c");
   // }
});

btnClearElm.addEventListener('click', ()=>{
   h1Elm.classList.remove(...h1Elm.classList);
   // h1Elm.className = "";
   // h1Elm.removeAttribute("class");
});

//=========================================================

const btnReadStylesElm = document
    .getElementById("btn-read-styles");

const btnStyle1Elm = document
    .getElementById("btn-style-1");

const btnStyle2Elm = document
    .getElementById("btn-style-2");

const btnStyle3Elm = document
    .getElementById("btn-style-3");

const btnStyle4Elm = document
    .getElementById("btn-style-4");

const h2Elm = document
    .querySelector("h2");

btnReadStylesElm.addEventListener('click', ()=>{
   // console.log(h2Elm.style);

   // console.log("Font Size: ", h2Elm.style.fontSize);
   // console.log("Text Decoration: ", h2Elm.style.textDecoration);
   // console.log("Color: ", h2Elm.style.color);
   // console.log("Background Color: ", h2Elm.style.backgroundColor);

   // This will replace all the inline-styling
   // h2Elm.setAttribute("style", "font-size: 3rem");
   // h2Elm.style = "color: red";

   // h2Elm.style.color = "red";

   console.log("Color: ", h2Elm.style.color);
   console.log("color: ", getComputedStyle(h2Elm).color);
   console.log(getComputedStyle(h2Elm).backgroundColor);
   console.log(getComputedStyle(h2Elm).fontSize);
   console.log(getComputedStyle(h2Elm).textDecoration);
});

btnStyle1Elm.addEventListener('click', ()=>{
   h2Elm.style.backgroundColor = 'aqua';
});

btnStyle2Elm.addEventListener('click', ()=>{
   h2Elm.style.fontSize = '4rem';
});

btnStyle3Elm.addEventListener('click', ()=>{
   h2Elm.style.color = 'black';
});

btnStyle4Elm.addEventListener('click', ()=>{
   h2Elm.style.border = '2px solid red';
   h2Elm.style.setProperty('background-color',
       'white');
});












