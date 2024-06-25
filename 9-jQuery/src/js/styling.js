import $ from 'jquery';

const boxElm = $("#box");

$("#btn-change-color").on('click', ()=>{
    const r1 = Math.random() * 256;
    const g1 = Math.random() * 256;
    const b1 = Math.random() * 256;

    const r2 = Math.random() * 256;
    const g2 = Math.random() * 256;
    const b2 = Math.random() * 256;
    boxElm.css('background-color', `rgb(${r1}, ${g1}, ${b1})`)
    .css('border-color', `rgb(${r2}, ${g2}, ${b2})`);
});

$("#btn-get-color").on('click', ()=>{
    console.log("border-color: ", boxElm.css("border-color"));
    console.log("background-color: ",
        boxElm.css("background-color"));
});

$("#btn-get-dimensions").on('click', ()=>{
    console.log("Width:", boxElm.css("width"));
    console.log("Height:", boxElm.css("height"));
});

//==============================================

console.log("Width: ", $("#elm").width(), "100px");
console.log("Height: ", $("#elm").height(), "100px");
console.log("InnerWidth: ", $("#elm").innerWidth(), "140px");
console.log("InnerHeight: ", $("#elm").innerHeight(), "140px");
console.log("OuterWidth: ", $("#elm").outerWidth(), "170px");
console.log("OuterWidth: ", $("#elm").outerHeight(), "170px");
console.log("MarginWidth: ", $("#elm").outerWidth(true), "210px");
console.log("MarginHeight: ", $("#elm").outerHeight(true), "210px");

console.log($("#elm").offset());
console.log($("#elm").position());

$("#elm").offset({left: 200, top: 400});

$(window).on('scroll', ()=>{
   console.log($(window).scrollTop());
});

const h1Target = $("#h1-target");

$("#btn-add-class").on('click', ()=>{
    h1Target.addClass('red bg-orange');
});

$("#btn-remove-class").on('click', ()=>{
   h1Target.removeClass('red');
});

$("#btn-has-class").on('click', ()=>{
   alert(`
     red class? : ${h1Target.hasClass('red')}
     bg-orange class? : ${h1Target.hasClass('bg-orange')}
          `);
});

$("#btn-toggle-class").on('click', ()=>{
    h1Target.toggleClass('bg-orange');
});
