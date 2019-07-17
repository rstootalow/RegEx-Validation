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
