import $ from 'jquery';

/*
document.getElementById()
document.getElementsByClassName()
document.querySelector()
document.querySelectorAll()
*/

const h1Elms = $("h1");
const h2Elm = $("#heading-2");
const h3Elm = $(".headings");
const h4Elm = $("[title]");
const h5Elm = $("h5+h5");
const liElm = $("ul > li:first-child + li");

// h2Elm.style.backgroundColor = 'red';
h2Elm.css('background-color', 'red');
