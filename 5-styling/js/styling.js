console.log("InnerWidth: ", innerWidth);
console.log("OuterWidth: ", outerWidth);
console.log("ScrollWidth: ", document.body.scrollWidth);

console.log("InnerHeight: ", innerHeight);
console.log("OuterHeight: ", outerHeight);
console.log("ScrollHeight: ", document.body.scrollHeight);

const innerBoxElm = document
    .getElementById("inner-box");
console.log("offsetWidth: ", innerBoxElm.offsetWidth);
console.log("clientWidth: ", innerBoxElm.clientWidth);
console.log("offsetHeight: ", innerBoxElm.offsetHeight);
console.log("clientHeight: ", innerBoxElm.clientHeight);
console.log("scrollWidth: ", innerBoxElm.scrollWidth);
console.log("scrollHeight: ", innerBoxElm.scrollHeight);

console.log("Screen Width: ", screen.width);
console.log("Screen Height: ", screen.height);

addEventListener('scroll', ()=>{
   console.log("ScrollX: ", scrollX);
   console.log("ScrollY: ", scrollY);
});
