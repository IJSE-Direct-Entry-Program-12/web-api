const timeoutElm = document
    .getElementById("timeout");

const btnStartElm = document
    .getElementById("btn-start");

const btnStopElm = document
    .getElementById("btn-stop");

let tmrId1;

btnStartElm.addEventListener('click', ()=>{
    tmrId1 = setTimeout(function(){
       timeoutElm.style.color = 'red';
   }, 3000);
});

btnStopElm.addEventListener('click', ()=>{
    clearTimeout(tmrId1);
    timeoutElm.style.color = 'initial';
});

//==============================================

const btnStart2Elm = document
    .getElementById("btn-start2");

const btnStop2Elm = document
    .getElementById("btn-stop2");

const intervalElm = document
    .getElementById("interval");

let tmrId2;

btnStart2Elm.addEventListener('click', ()=>{
    tmrId2 = setInterval(function(){
        const r = Math.floor(256 * Math.random());
        const g  = Math.floor(256 * Math.random());
        const b = Math.floor(256 * Math.random());
        intervalElm.style.color = `rgb(${r}, ${g}, ${b})`;
        const size = 10 + (Math.random() * 60);
        intervalElm.style.fontSize = `${size}px`;
    }, 200);
});

btnStop2Elm.addEventListener('click', ()=>{
   clearInterval(tmrId2);
   intervalElm.style.color = 'initial';
   intervalElm.style.fontSize = 'initial';
});


