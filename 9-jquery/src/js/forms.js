import $ from 'jquery';

const txtId = $("#txt-id");
const txtName = $("#txt-name");
const txtAddress = $("#txt-address");
const cbMembershipType = $("#cb-membership-type");

$("form").on('submit', (e)=>{
    e.preventDefault();
    console.log("ID: ", txtId.val());
    console.log("Name: ", txtName.val());
    console.log("Address: ", txtAddress.val());
    console.log("Membership Type: ", cbMembershipType.val());
    // txtId.val("");
    // txtName.val("");
    // txtAddress.val("");
    // cbMembershipType.val("silver");
    console.log($("form").serialize());
    console.log($("form").serializeArray());
});