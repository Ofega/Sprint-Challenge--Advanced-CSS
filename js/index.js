const registerBtn = document.querySelector('#registerBtn');
const cancelBtn = document.querySelector('#cancelBtn');
const submitBtn = document.querySelector('#submitBtn');
const formContainer = document.querySelector('#formContainer');
const registerForm = document.querySelector('#registerForm');
const inputFields = document.querySelectorAll('#formContainer input');


//Functions
function openModal(element) {
    element.classList.toggle("d-none");
}

function notFilled(element) {
    element.classList.add('not-filled');
}


//Event Listeners
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
})

registerBtn.addEventListener('click', function() {
    openModal(formContainer);
    for(let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = '';
    }
});

cancelBtn.addEventListener('click', function() {
    openModal(formContainer);
});

submitBtn.addEventListener('click', function() {
    let isFilled = [];

    for(let i = 0; i < inputFields.length; i++) {
        isFilled[i] = inputFields[i].value !== '' ? true : (function() {
            notFilled(inputFields[i]);
            return false;
        })(); 
    }

    isFilled.includes(false) ? null : openModal(formContainer);
});