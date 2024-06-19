const btnBrowseElm = document
    .getElementById('btn-browse');

const flPictureElm = document
    .getElementById('fl-picture');

const pictureElm = document
    .getElementById('picture');

const progressWrapperElm = document
    .getElementById('progress-wrapper');

const progressBarElm = document
    .getElementById('progress-bar');

const statusElm = document
    .getElementById('status');

const frmElm = document
    .querySelector('form');

const btnClearElm = document
    .getElementById('btn-clear');

flPictureElm.accept = 'image/*';

btnClearElm.addEventListener('click', ()=>{
   pictureElm.style.backgroundImage = '';
});

btnBrowseElm.addEventListener('click', () => {
    flPictureElm.click();
});

flPictureElm.addEventListener('change', () => {
    if (flPictureElm.files.length) {
        const imageFile = flPictureElm.files.item(0);
        // 1. Method (via URL API)
        // const imageBlob = new Blob([imageFile],
        //     {type: imageFile.type});
        const dataUrl = URL.createObjectURL(imageFile);
        pictureElm.style.backgroundImage =
            `url('${dataUrl}')`;

        // 2. Method (via FileReader API)
        // const fileReader = new FileReader();
        // fileReader.addEventListener('load',
        //     (e)=>{
        //         pictureElm.style.backgroundImage =
        //             `url('${e.target.result}')`;
        // });
        // fileReader.readAsDataURL(imageFile);

        // 3. Method (via Canvas API)
        // const canvasElm = document
        //     .createElement('canvas');
        // canvasElm.classList = 'border';
        // document.body.append(canvasElm);

        // const context = canvasElm
        //     .getContext('2d');
        //
        // const image = new Image();
        // image.addEventListener('load', () => {
        //     context.drawImage(image, 0, 0, 150, 150);
        //     context.rect(0,0 , 20 ,20);
        //     context.stroke();
        //     pictureElm.style.backgroundImage =
        //                 `url('${canvasElm.toDataURL()}')`;
        // });
        // image.src = URL.createObjectURL(imageFile);

    } else {
        pictureElm.style.backgroundImage = '';
    }
});

frmElm.addEventListener('submit', (e) => {
    if (!flPictureElm.files.length) {
        e.preventDefault();
        alert("Select a picture");
        btnBrowseElm.focus();
    }
});

frmElm.addEventListener('formdata', (e) => {
    progressWrapperElm.classList.remove('d-none');

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('loadend', () => {
        progressWrapperElm.classList.add('d-none');
        progressBarElm.style.width = '0';
        statusElm.innerText = `Uploading 0%`;
    });
    xhr.upload.addEventListener('progress',
        (e) => {
            if (e.lengthComputable) {
                const progress = e.loaded / e.total * 100;
                progressBarElm.style.width = `${progress}%`;
                statusElm.innerText = `Uploading ${progress.toFixed(2)}%`;
            }
        });
    xhr.upload.addEventListener('load', () => {
        statusElm.innerText = `Successfully Uploaded!`;
    });
    xhr.upload.addEventListener('error', () => {
        statusElm.innerText = `Upload Failure!`;
    });

    const url = "https://5f9fbd28-d38a-417d-844d-d6012f274693.mock.pstmn.io/students";
    xhr.open('POST', url, true);
    xhr.send(e.formData);
});

