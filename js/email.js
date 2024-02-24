var emailField = document.getElementById("email-field");
var emailError = document.getElementById("email-error");

function subscribe() {
    var emailField = document.getElementById("email-field");
    var emailError = document.getElementById("email-error");
    var email = emailField.value.trim();

    if (emailError.textContent !== "") {
        return; // Älä tee mitään, jos email-errorissa on sisältöä
    }

    if (email === "") {
        alert("Please enter your email.");
    } else {
        alert("Thank you for your subscription.");
    }
}

emailField.addEventListener("blur", function() {
    var email = emailField.value.trim(); // Poista tyhjät merkit alusta ja lopusta
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = ""; // Tyhjennä virheilmoitus, jos kenttä on tyhjä
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please check your email address.";
    } else {
        emailError.textContent = "";
    }
});