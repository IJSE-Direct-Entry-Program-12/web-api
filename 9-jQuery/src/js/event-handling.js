import $ from 'jquery';

const btnSetEvents = $("#btn-set-events");
const btnOffEvent1 = $("#btn-off-event-1");
const btnOffEvent2 = $("#btn-off-event-2");
const btnClearEvents = $("#btn-clear-events");
const btnClickMe = $("#btn-click-me");

const fn1 = () => console.log("Call back fn 1");
const fn2 = () => console.log("Call back fn 2");

let event1 = false;
let event2 = false;

btnSetEvents.on('click', () => {
    if (event1 || event2){
        alert("Events listeners have been already attached");
        return;
    }
    btnClickMe.on('click', fn1);
    btnClickMe.on('click', fn2);
    event1 = true;
    event2 = true;
});

btnOffEvent1.on('click', ()=>{
    btnClickMe.off('click', fn1);
    event1 = false;
});

btnOffEvent2.on('click', ()=>{
    btnClickMe.off('click', fn2);
    event2 = false;
});

btnClearEvents.on('click', ()=>{
   btnClickMe.off('click');
   event1 = false;
   event2 = false;
});

const liElm = $("ul > li:first-child").clone();

$("#btn-generate-more-items").on('click', ()=>{
    for (let i = 0; i < 5; i++) {
        $("ul").append(liElm.clone());
    }
});

$("#btn-clear-all-items").on('click', ()=>{
    $("ul > li").remove();
});

$("ul").on("click", "li > button", (e)=>{
    $(e.target).parent().remove();
});

$("#txt-number").on('keyup', (e)=>{
   if (e.which === 13){
       $("#btn-validate").trigger('click');
   }
});

$("#btn-validate").on('click', ()=>{
   if (!/^\d+$/.test($("#txt-number").val().trim())){
       // $("#txt-number").trigger('focus');
       // $("#txt-number").trigger('select');

       $("#txt-number").trigger('focus').trigger('select');
   }else{
       alert("Validated");
   }
});

/* If you want to trigger an event programmatically then use
* trigger API instead of using click(), focus(), select(), etc.
* because those API are now deprecated
* */