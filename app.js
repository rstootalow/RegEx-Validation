/* ADD EVENT LISTENER TO ALL FORM ELEMENTS */
document.getElementById('name').addEventListener('blur', validateName);

document.getElementById('zip').addEventListener('blur', validateZip);

document.getElementById('email').addEventListener('blur', validateEmail);

document.getElementById('phone').addEventListener('blur', validatePhone);

// functions for input fields
function validateName() {
    // select name
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;

    // conditional logic to evaluate
    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        // remove invalid class
        name.classList.remove('is-invalid');
    }
}

function validateZip() {
    // select zip code
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?$/;

    //conditional logic to evaluate
    if(!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        // remove invalid class
        zip.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    // conditional logic to evaluate
    if(!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}
