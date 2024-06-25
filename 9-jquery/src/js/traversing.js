import $ from 'jquery';

const li2Elm = $("#li-2");
li2Elm.css('background-color', 'yellow');

// previousSiblingElement
li2Elm.prev().css('background-color', 'green');
// nextSiblingElement
li2Elm.next().css('background-color', 'red');
// parentElement
li2Elm.parent().css('border', '1px solid red');
// li2Elm.parent().parent().remove();

// closets()
li2Elm.parents("body").css('background-color', 'lightblue');

// $(li2Elm.parent().children().get(3))
//     .css('border', '2px solid black');

li2Elm.parent().children().eq(3)
    .css('border', '2px solid black');

li2Elm.parents("body").find("span").css('font-size', '2rem');