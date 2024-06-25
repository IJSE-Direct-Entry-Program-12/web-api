import $ from 'jquery';

const target = $("#target");

$("#btn-show").on('click', ()=>{
    target.show(500);
});

$("#btn-hide").on('click', ()=>{
    target.hide(500);      // display: none
});

$("#btn-fade-in").on('click', ()=>{
   target.removeAttr('style').hide().fadeIn(1000);
});

$("#btn-fade-out").on('click', ()=>{
    target.fadeOut(1000, ()=>{
        target.css('display', 'block').css('opacity', '0');
        //console.log("Fade out completed");
    });
});

$("#btn-slide-up").on('click', ()=>{
   target.slideUp(1000, ()=>{
       console.log("Slide up completed");
   });
});

$("#btn-slide-down").on('click', ()=>{
    target.slideDown();
});

$(window).on('load', ()=>{
    $("#overlay").fadeOut(1000, ()=>{
        $("body").css("overflow", "auto");
    });
});

// Web API
// document.addEventListener('DOMContentLoaded', ()=>{
//    console.log("DOM Tree is completed");
// });

// $(document).on('DOMContentLoaded', ()=> alert("Working"));
// $(document).ready( ()=> alert("Working"));
$(()=> alert("Working"));
