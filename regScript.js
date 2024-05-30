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

    const form = document.querySelector("form");
    const eyeicon = document.getElementById("eyeicon");
    const passwordInput = document.getElementById("password");

    eyeicon.onclick = function() {
        if(passwordInput.type == "password") {
            passwordInput.type = "text"
            eyeicon.src = "images/eye-open.png";
        }else {
            passwordInput.type = "password"
            eyeicon.src = "images/eye-close.png";
        }
    }

    // Function to validate email address
    function isValidEmail(email) {
        return email.includes('@') && 
            email.includes('.') &&
            email.endsWith('@gmail.com');
    }
    

    // Function to validate password
    function isValidPassword(password) {
        let containDigits = false;
        let containCapital = false;
        let containLower = false;

        for (let i = 0; i < password.length; i++) {
            const c = password[i];
            if (c >= '0' && c <= '9') containDigits = true;
            if (c >= 'A' && c <= 'Z') containCapital = true;
            if (c >= 'a' && c <= 'z') containLower = true;
        }

        return containDigits && containCapital && containLower;
    }

    // Function to validate capital
    function isCapital(input) {
        let containCapital = false
    
        for (let i=0;i<input.length;i++) {
            const c = input[i];
            if (c >= 'A' && c <= 'Z') {
                containCapital = true;
            }
        }
    
        return containCapital
    }

    function countCommas(address) {
        let commaCount = 0;
        for (let i = 0; i < address.length; i++) {
            if (address[i] === ',') {
                commaCount++;
            }
        }
        return commaCount;
    }
    

    // Function to validate address
    function isValidAddress(address) {
        const commaCount = countCommas(address);
        if (commaCount !== 2) {
            return false;
        }

        const parts = address.split(',').map(part => part.trim());
    
        if (parts.length !== 3) {
            return false;
        }
    
        return true;
    }
    

    // Function to handle form submission
    const handleFormData = (e) => {
        e.preventDefault();
    
        const firstnameInput = document.getElementById("firstname");
        const lastnameInput = document.getElementById("lastname");
        const emailInput = document.getElementById("email");
        const genderInput = document.getElementById("gender");
        const passwordInput = document.getElementById("password");
        const addressInput = document.getElementById("address");
        const errorText = document.getElementById("error-txt");
    
        errorText.innerText = "";
    
        if (firstnameInput.value.length === 0) {
            errorText.innerText = "First name cannot be empty!";
        } else if (!isCapital(firstnameInput.value)) {
            errorText.innerText = "First name must contain only capital letters!";
        } else if (lastnameInput.value.length === 0) {
            errorText.innerText = "Last name cannot be empty!";
        } else if (!isCapital(lastnameInput.value)) {
            errorText.innerText = "Last name must contain only capital letters!";
        } else if (!isValidEmail(emailInput.value)) {
            errorText.innerText = "Email must be valid and endswith: @gmail.com!";
        } else if (passwordInput.value.length < 6) {
            errorText.innerText = "Password must be at least 6 characters!";
        } else if (!isValidPassword(passwordInput.value)) {
            errorText.innerText = "Password needs 1 capital, 1 lower, and 1 digit!";
        } else if (genderInput.value === "") {
            errorText.innerText = "Select your gender!";
        } else if (addressInput.value.trim() === "") {
            errorText.innerText = "Address cannot be empty!";
        } else if(!isValidAddress(addressInput.value)){
            errorText.innerText = "Invalid address format! Please enter in the format: street, province, country";
        }else {
            alert("Register Completed!");
            window.location.href = "home.html";
        }
    }

    // Handling form submission event
    form.addEventListener("submit", handleFormData);
});
