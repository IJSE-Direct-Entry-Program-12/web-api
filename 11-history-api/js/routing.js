const btnBack = document
    .getElementById('btn-go-back');
const btnForward = document
    .getElementById('btn-go-forward');

btnBack.addEventListener('click', () => {
    history.back();
});

btnForward.addEventListener('click', () => {
    history.forward();
});

const btnFirstPage = document
    .getElementById("btn-first-page");

const btnSecondPage = document
    .getElementById("btn-second-page");

btnFirstPage.addEventListener('click', () => {
    history.pushState('first', null, 'first');
    displayUI('first');
});

btnSecondPage.addEventListener('click', () => {
    history.pushState('second', null, 'second');
    displayUI('second');
});

const firstUi = document
    .getElementById('first-ui');
const secondUi = document
    .getElementById('second-ui');

addEventListener('popstate',
    (e)=> displayUI(e.state));

function displayUI(state){
    firstUi.classList.add('hide');
    secondUi.classList.add('hide');
    switch (state) {
        case "first":
            firstUi.classList.remove('hide');
            break;
        case "second":
            secondUi.classList.remove('hide');
            break;
    }
}

