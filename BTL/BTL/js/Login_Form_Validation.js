
function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
    var phonenum = document.Form.phonenum.value;
    var passw = document.Form.passw.value;

    var phonenumError = passwError = false;

    // Phone number
    var regex = /^[0-9]\d{9}$/;
    if (regex.test(phonenum) == false) {
        printError("phonenumError", "Please enter a valid 10-digit phone number");
        var elem = document.getElementById("phonenum");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
        phonenumError = true;
    } else {
        printError("phonenumError", "");
        var elem = document.getElementById("phonenum");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
        phonenumError = false;
    }

    // Password
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (regex.test(passw) == false) {
        printError("passwError", "Please enter a valid password");
        var elem = document.getElementById("passw");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
        passwError = true;
    } else {
        printError("passwError", "");
        var elem = document.getElementById("passw");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
        passwError = false;
    }

    console.log('Huynh check phonenum, pass: ', phonenumError, passwError)

    if (!phonenumError && !passwError) {
        window.location.href = "giaodien.html";
    } else {
        return false;
    }
};
