import $ from 'jquery';

/* 1. Creating and Inserting */

$("#btn-insert-before").on('click', () => {
    const jQueryHtml = $("<li>Before Second</li>");
    $("#list-1 > li.second").before(jQueryHtml);
});

$("#btn-insert-after").on('click', () => {
    $("#list-1 > li.second").after("<li>After Second</li>");
});

$("#btn-append").on('click', () => {
    $("#list-1").append("<li>Last</li>");
});

$("#btn-prepend").on('click', () => {
    const jQueryHtml = "<li>First</li>";
    $("#list-1").prepend(jQueryHtml);
});

/* 2.  Cloning and Removing */

$("#list-2 > li").first().children("a").on('click', () => {
    alert("Hello");
});

$("#btn-clone").on('click', () => {
    const cloneLi = $("#list-2 > li").first().clone(true);
    $("#list-2").append(cloneLi);
});

$("#btn-remove").on('click', () => {
    $("#list-2 li:not(#list-2 li:first-child)").remove();
});

/* 3. Replacing */

$("#btn-replace").on('click', () => {
    $(".target-1").html("Random: " + Math.random() + "<button>Reset</button>");
});

$("#btn-replace-with").on('click', () => {
    //$(".target-2").replaceWith("<Button>Reset</Button>");
    $("<Button>Reset</Button>").replaceAll(".target-2");
});

console.log($("body").html());
console.log($("body").text());

/* 4. Attributes and Properties */

$("#btn-set-tooltip-text").on('click', ()=>{
    $("h2").attr("title", "Hello Manipulation");
});

$("#btn-get-tooltip-text").on('click', ()=>{
    alert($("h2").attr("title"));
});

$("#btn-set-image-src").on('click', ()=>{
    //$("#picture").attr("src", "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
    $("#picture").prop("src", "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
});

$("#btn-clear-image-src").on('click', ()=>{
    // $("#picture").removeAttr("src");
    $("#picture").prop("src", "");
});

/* 5. Example */

$("#btn-browse").on('click', ()=>{
    $("#fl-picture").trigger('click');
});

$("#fl-picture").on('change', ()=>{
    if ($("#fl-picture").prop("files").length){
        const imageFile = $("#fl-picture").prop("files")[0];
        const dataUrl = URL.createObjectURL(imageFile);
        $("#picture-2").prop("src", dataUrl);
    }else{
        $("#picture-2").prop("src", "");
    }
});