const btnElm = document.querySelector("button");

const colors = ['red', 'green', 'blue', 'black', 'orange'];
let i = 0;

btnElm.addEventListener("click", () => {
    // for (let i = 0; i < 20; i++) {
    //     const clonedElm = btnElm.cloneNode();
    //     clonedElm.innerText = "Button";
    //     document.body.append(clonedElm);
    // }

    // document.querySelector("h1").remove();
    document.querySelector("h1").style.color = `${colors[i++]}`;
    if (i === colors.length) i = 0;
});