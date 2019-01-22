document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZipCode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('contact_number').addEventListener('blur', validateContactNumber);

// functions

function validateName() {
    const name = document.getElementById('name');
    const regExp = /^[a-zA-Z]{6,10}$/;

    if (!regExp.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZipCode() {
    const zipCode = document.getElementById('zipcode');
    const regExp = /^[0-9]{6}(-[3-6]{2})?$/;

    if (!regExp.test(zipCode.value)) {
        zipCode.classList.add('is-invalid');
    } else {
        zipCode.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const regExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z]+)(\.[a-zA-Z]{2,5})$/;

    if (!regExp.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validateContactNumber() {
    const contact = document.getElementById('contact_number');
    // const regExp = /^[0-9]{10}$/; Indian Phone Number
    // abroad pattern - (555) 555-5555 or 555-555-5555 or 5555555555
    const regExp = /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;

    if (!regExp.test(contact.value)) {
        contact.classList.add('is-invalid');
    } else {
        contact.classList.remove('is-invalid');
    }
}