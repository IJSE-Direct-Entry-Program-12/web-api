const chkProfileElm = document
    .getElementById("chk-profile");

const flProfilePictureElm = document
    .getElementById('fl-profile-picture');

// flProfilePictureElm.accept = "image/*";

chkProfileElm.addEventListener('change', () => {
    flProfilePictureElm.disabled = !chkProfileElm.checked;
});

// const btnSaveElm = document
//     .getElementById('btn-save');

const btnClearElm = document
    .getElementById('btn-clear');

const formElm = document
    .querySelector('form');

btnClearElm.addEventListener('click', () => {
    formElm.reset();
});

// btnSaveElm.addEventListener('click', ()=>{
//    formElm.submit();
// });

formElm.addEventListener('submit',
    (e) => {

        const idElm = document
            .querySelector('[name="id"]');

        const nameElm = document
            .querySelector('[name="name"]');

        if (!/^C\d{3}$/.test(idElm.value)) {
            idElm.focus();
            idElm.select();
            e.preventDefault();
        } else if (!/^[A-Za-z ]+$/.test(nameElm.value.trim())) {
            nameElm.focus();
            nameElm.select();
            e.preventDefault();
        } else if (chkProfileElm.checked &&
            !flProfilePictureElm.files.length){
            flProfilePictureElm.focus();
            e.preventDefault();
        }
    });

formElm.addEventListener('formdata', (e)=>{
    e.formData.append('ijse', 'dep12');
    e.formData.append('esoft', 'blah blah');
    new URLSearchParams(e.formData)
});

/* Multipart/form-data */
const frmData = new FormData();
frmData.append("id", "C001");
frmData.append("name", "Kasun Sampath");
frmData.append("address", "Galle Road, Panadura");

/* Let's encode this form data object to application/x-www-form-urlencoded */
console.log(new URLSearchParams(frmData).toString());

const urlSearchParams = new URLSearchParams();
urlSearchParams.append("param1", "value1");
urlSearchParams.append("param2", "value2");
console.log(urlSearchParams.toString());