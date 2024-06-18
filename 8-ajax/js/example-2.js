const downloadImageUrl = 'https://images.pexels.com/photos/730662/pexels-photo-730662.jpeg?cs=srgb&dl=pexels-nextvoyage-730662.jpg&fm=jpg&w=6000&h=4000&_gl=1*1sfq31b*_ga*NjUyNTU3NjYuMTcxODcyNTkxMw..*_ga_8JE65Q40S6*MTcxODcyNTkxMi4xLjEuMTcxODcyNjAzMS4wLjAuMA..';

const btnDownloadElm = document
    .getElementById('btn-download');
const imageElm = document
    .querySelector("img");

btnDownloadElm.addEventListener('click', ()=>{
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',
        ()=>{
        console.log(xhr.responseType);
        console.log(URL.createObjectURL(xhr.responseText));
        // imageElm.src = 'data:image/*;base64,'
        //     + btoa(xhr.responseText);
    });
    xhr.open('GET', downloadImageUrl, true);
    xhr.send();
});
