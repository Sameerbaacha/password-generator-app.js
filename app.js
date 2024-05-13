function generatePassword() {
    var character = "";
    var upercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var special = "~!@#$%^&*()-+=:;<>/{}|'";

    
    if (document.getElementById("upercase").checked) {
        character += upercase;
    }
    if (document.getElementById("lowercase").checked) {
        character += lowercase;
    }
    if (document.getElementById("number").checked) {
        character += numbers;
    }
    if (document.getElementById("special").checked) {
        character += special;
    }

    var passwordLength = document.getElementById("range").value;
    var password = "";

    //at least one character type is selected
    if (character === "") {
        alert("Please select at least one character type.");
        return;
    }

    // Include at least one character from each selected type
    if (document.getElementById("upercase").checked) {
        password += upercase[Math.floor(Math.random() * upercase.length)];
    }
    if (document.getElementById("lowercase").checked) {
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
    }
    if (document.getElementById("number").checked) {
        password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (document.getElementById("special").checked) {
        password += special[Math.floor(Math.random() * special.length)];
    }

    // Generate the remaining characters for the password
    for (var i = password.length; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * character.length);
        password += character[randomIndex];
    }

    document.getElementById("inpt").value = password;
}

function updateRangeValue() {
    document.getElementById("rangeValue").textContent = document.getElementById("range").value;
}