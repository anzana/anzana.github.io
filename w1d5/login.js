"use strict";

let btnSubmit = document.getElementById("submit");

btnSubmit.onclick = function() {
    let txtEmail = document.getElementById("email").value;
    
    let txtPassword = document.getElementById("password").value;
    let txtWebsite = document.getElementById("website").value;
    let chkCheckBox = document.getElementById("checkbox").value;
    console.log("Email: " +txtEmail);
    console.log("Password: " +txtPassword);
    console.log("Website: " +txtWebsite);
    console.log("Checkbox checked: " +chkCheckBox);
}
