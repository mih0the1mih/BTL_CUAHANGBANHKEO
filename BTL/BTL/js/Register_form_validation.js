function validateForm() {
    var name = document.Form.name.value;
    var phone = document.Form.phone.value;
    var pass = document.Form.pass.value;

    var phoneError = passError = nameError = false;
    // validate username
    var regex = /^[a-zA-Z]+$/;
    if (regex.test(name) == false) {
        printError("nameError", "Please enter a valid user name");
        var elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
        nameError = true;
    } else {
        printError("nameError", "");
        var elem = document.getElementById("name");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
        nameError = false;
    }
    // validate phone number
    var regex = /^[0-9]\d{9}$/;
    if (regex.test(phone) == false) {
        printError("phoneError", "Please enter a valid 10-digit phone number");
        var elem = document.getElementById("phone");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
        phoneError = true;
    } else {
        printError("phoneError", "");
        var elem = document.getElementById("phone");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
        phoneError = false;
    }
    // validate password
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (regex.test(pass) == false) {
        printError("passError", "Please enter a valid password");
        var elem = document.getElementById("pass");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
        passError = true;
    } else {
        printError("passError", "");
        var elem = document.getElementById("pass");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
        passError = false;
    }
   
    if (!phoneError && !passError && !nameError) {
        window.location.href = "Login.html";
    } else {
        return false;
    }
}
