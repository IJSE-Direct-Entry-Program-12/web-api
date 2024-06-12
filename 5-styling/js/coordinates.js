const innerDivElm = document
    .getElementById("inner-div");

console.log("offsetParent: ", innerDivElm.offsetParent);
console.log("offsetLeft: ", innerDivElm.offsetLeft);
console.log("offsetTop: ", innerDivElm.offsetTop);

addEventListener('scroll', ()=>{
    const rect = innerDivElm.getBoundingClientRect();
    console.log("x: ", rect.x);
    console.log("y: ", rect.y);
    // console.log("top: ", rect.top);
    // console.log("left: ", rect.left);
    // console.log("right: ", rect.right);
    // console.log("bottom: ", rect.bottom);
});


