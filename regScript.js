document.addEventListener('DOMContentLoaded', function() {
    var mobileNav = document.querySelector('.mobile-navbar-container')
    var mNavBtn = document.querySelector('.mobile-nav-btn')
    var mNavBtnIcon = mNavBtn.querySelector('.mobile-nav-btn img')
  
    mNavBtn.addEventListener('click', function() {
      const visibility = mobileNav.getAttribute('data-visible')
  
      if (visibility == 'false') {
        mobileNav.setAttribute('data-visible', true)
        mNavBtn.setAttribute('aria-expanded', true)
        mNavBtnIcon.src = 'images/logo/Close.svg'
      } else {
        mobileNav.setAttribute('data-visible', false)
        mNavBtn.setAttribute('aria-expanded', false)
        mNavBtnIcon.src = 'images/logo/Menu.svg'
      }
    })
})

// Selecting form and input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to validate name (each word should start with an uppercase letter)
const isValidName = (name) => {
    const words = name.split(' ');
    for (const word of words) {
        if (word.length === 0) continue;
        if (word[0] !== word[0].toUpperCase()) {
            return false;
        }
    }
    return true;
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const firstnameInput = document.getElementById("firstname");
    const lastnameInput = document.getElementById("lastname");
    const emailInput = document.getElementById("email");
    const genderInput = document.getElementById("gender");
    const passwordInput = document.getElementById("password");
    const addressInput = document.getElementById("address");

    // Getting trimmed values from input fields
    const firstname = firstnameInput.value.trim();
    const lastname = lastnameInput.value.trim();
    const email = emailInput.value.trim();
    const gender = genderInput.value;
    const password = passwordInput.value.trim();
    const address = addressInput.value.trim();

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (firstname === "") {
        showError(firstnameInput, "Enter your first name");
    } else if (!isValidName(firstname)) {
        showError(firstnameInput, "First name should start with an uppercase letter");
    }

    if (lastname === "") {
        showError(lastnameInput, "Enter your last name");
    } else if (!isValidName(lastname)) {
        showError(lastnameInput, "Last name should start with an uppercase letter");
    }

    if (!isValidEmail(email)) {
        showError(emailInput, "Enter a valid email address. It must contain '@', a domain, and 'zen' in the local part.");
    }
    

    if (password === "") {
        showError(passwordInput, "Enter your password");
    }

    if (gender === "") {
        showError(genderInput, "Select your gender");
    }

    if (address === "") {
        showError(addressInput, "Enter your address");
    }

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
}

// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Handling form submission event
form.addEventListener("submit", handleFormData);

// Function to validate email address
function isValidEmail(email) {
    // Check if email contains '@' and '.'
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        return false;
    }

    // Check if '@' comes before '.'
    if (email.indexOf('@') > email.lastIndexOf('.')) {
        return false;
    }

    // Check if there are characters before '@' and after '.'
    if (email.indexOf('@') === 0 || email.lastIndexOf('.') === email.length - 1) {
        return false;
    }

    // Split the email into parts to check for 'zen'
    const [localPart, domain] = email.split('@');
    
    if (!localPart || !domain) {
        return false;
    }

    // Ensure 'zen' is part of the local part before the '@'
    if (!localPart.includes('zen')) {
        return false;
    }

    return true;
}
