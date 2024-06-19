const downloadImageUrl = 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?cs=srgb&dl=pexels-vladalex94-1402787.jpg&fm=jpg&w=6000&h=4000&_gl=1*3vfm9z*_ga*NjUyNTU3NjYuMTcxODcyNTkxMw..*_ga_8JE65Q40S6*MTcxODc4MjQwMC4zLjEuMTcxODc4MjQwOC4wLjAuMA..';

const btnDownloadElm = document
    .getElementById('btn-download');
const imageElm = document
    .querySelector("img");
const loaderElm = document
    .getElementById('loader');
const progressBarElm = document
    .getElementById("progress-bar");

// btnDownloadElm.addEventListener('click', ()=>{
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'arraybuffer';
//     xhr.addEventListener('load',
//         ()=>{
//             const byteArray = [xhr.response];
//             const blob = new Blob(byteArray,
//                 {type: 'image/jpeg'});
//             const dataUrl = URL.createObjectURL(blob);
//             imageElm.src = dataUrl;
//     });
//     xhr.open('GET', downloadImageUrl, true);
//     xhr.send();
// });

btnDownloadElm.addEventListener('click', () => {
    loaderElm.classList.remove('hide');
    imageElm.classList.add('hide');

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.addEventListener('load',
        () => {
            const dataUrl = URL
                .createObjectURL(xhr.response);
            imageElm.src = dataUrl;
    });
    xhr.addEventListener('loadend', () => {
        setTimeout(()=>{
            imageElm.classList.remove('hide');
            loaderElm.classList.add('hide');
            progressBarElm.style.width = '0';
        },300);
    });
    xhr.addEventListener('progress',
        (e)=>{
        if (e.lengthComputable){
            const progress = e.loaded / e.total * 100;
            progressBarElm.style.width = `${progress}%`;
        }
    });
    xhr.open('GET', downloadImageUrl, true);
    xhr.send();
});

