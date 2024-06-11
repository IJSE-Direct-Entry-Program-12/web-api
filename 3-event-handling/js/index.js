const btnElm = document
    .querySelector("button");

function btnElmOnClick(event) {
    console.log(event);
    // this = event.currentTarget
    console.log(this, event.currentTarget, event.target);
}

btnElm.addEventListener('click', btnElmOnClick);

document.addEventListener('mousemove',
    (event) => {
        //console.log("Mouse is moving", event.x, event.y);
    });

const txtElm = document
    .querySelector("input");

const spnElm = document
    .querySelector("h1 > span");

txtElm.addEventListener('keydown', () => {
    //console.log("Key down");
    spnElm.style.color = 'red';
});

txtElm.addEventListener('keyup', () => {
    // console.log("Key up");
    spnElm.style.color = 'initial';
});

const rowElms = document
    .querySelectorAll("tr");
for (const rowElm of rowElms) {
    rowElm.addEventListener('click',
        (event) => {
            console.log(event.currentTarget, event.target);
        });
}

/*===================================================*/

const btnAttach = document
    .querySelector("#btn-attach");

const btnDetach = document
    .querySelector("#btn-detach");

const h2Elm = document
    .querySelector("section > h2");

const h2OnClick = () => {
    alert("Message!");
}

btnAttach.addEventListener('click', () => {
    h2Elm.addEventListener('click', h2OnClick);
});

btnDetach.addEventListener('click', () => {
    h2Elm.removeEventListener('click', h2OnClick);
});

const h1Elm = document
    .querySelector("h1");

const h1OnClick1 = (e) => {
    alert("Clicked 1");
    e.stopImmediatePropagation();
};

const h1OnClick2 = (e) => {
    alert("Clicked 2");
    //e.stopImmediatePropagation();
};

const h1OnClick3 = () => {
    alert("Clicked 3");
};

h1Elm.addEventListener('click', h1OnClick1);
h1Elm.addEventListener('click', h1OnClick2);
h1Elm.addEventListener('click', h1OnClick3);

document.body.addEventListener('click', () => {
    alert("Body Clicked");
});

txtElm.addEventListener('click', (e) => {
    alert("Text Clicked");
    e.stopPropagation();
});

const aElm = document
    .querySelector("a");
aElm.addEventListener('click',
    (e) => {
        e.stopPropagation();
        e.preventDefault();
        alert("Link Clicked");
    });

txtElm.addEventListener('keypress',
        e=>{
    e.preventDefault();
});











