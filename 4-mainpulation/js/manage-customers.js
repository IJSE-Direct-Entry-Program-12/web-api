const txtIdElm = document
    .getElementById("txt-id");

const txtNameElm = document
    .getElementById("txt-name");

const btnAddElm = document
    .getElementById("btn-add");

const tblCustomerElm = document
    .getElementById("tbl-customer");

const tfootElm = tblCustomerElm
    .querySelector("tfoot");

btnAddElm.addEventListener('click', ()=>{
   const id = txtIdElm.value.trim();
   const name = txtNameElm.value.trim();

   if (!id || !/^C\d{3}$/.test(id)){
       txtIdElm.focus();
       txtIdElm.select();
       return;
   }else if (!name || !/[A-Za-z ]+/.test(name)){
       txtNameElm.focus();
       txtNameElm.select();
       return;
   }

   const trElm = document
       .createElement('tr');
   trElm.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td><ion-icon name="trash-outline"></ion-icon></td>
            `;
   tblCustomerElm.querySelector("tbody").append(trElm);

   // const trElm = tblCustomerElm.tBodies[0].insertRow();
   // const tdIdElm = trElm.insertCell();
   // const tdNameElm = trElm.insertCell();
   // const tdDeleteElm = trElm.insertCell();
   //
   //  const ionIconElm = document
   //      .createElement('ion-icon');
   //  const idNode = document.createTextNode(id);
   //  const nameNode = document.createTextNode(name);
   //
   //  ionIconElm.setAttribute("name",
   //      'trash-outline');
   //  tdIdElm.append(idNode);
   //  tdNameElm.append(nameNode);
   //  tdDeleteElm.append(ionIconElm);

    if (tblCustomerElm.contains(tfootElm)){
        tfootElm.remove();
    }
});

tblCustomerElm.querySelector("tbody")
    .addEventListener('click', (e)=>{
        if (e.target.tagName.toLowerCase() === 'ion-icon'){
            e.target.closest("tr").remove();
            if (!tblCustomerElm.tBodies[0].rows.length){
                tblCustomerElm.append(tfootElm);
            }
        }
    });

// ===================================

const abcElm = document
    .getElementById("abc");

console.log(abcElm.innerHTML);
console.log(abcElm.innerText);

// abcElm.innerHTML = `<input type="text">
//                     <button>Hello Click Me!</button>`;

abcElm.innerText = `<input type="text">
                    <button>Hello Click Me!</button>`;