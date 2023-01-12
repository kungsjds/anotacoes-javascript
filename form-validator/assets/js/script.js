"use strict";
let OpytexValidator = {
    handleSubmit: (event) => {
        // Disable the default event. For forms, will disable the submit event.
        event.preventDefault();
        let send = true;
        let inputs = form.querySelectorAll('input[type=text]');
        OpytexValidator.clearErrors(inputs);
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = OpytexValidator.checkInput(input);
            if (check !== true) {
                send = false;
                OpytexValidator.showError(input, check);
            }
        }
        if (send) {
            form.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');
        if (rules !== null) {
            let rulesList = rules.split('|');
            for (let k in rulesList) {
                let rulesDetails = rulesList[k].split('=');
                switch (rulesDetails[0]) {
                    case 'required':
                        if (input.value == '') {
                            return 'This field cannot be empty.';
                        }
                        break;
                    case 'min':
                        if (input.value.length < parseInt(rulesDetails[1])) {
                            return `Must be at least ${rulesDetails[1]} digits`;
                        }
                        break;
                    case 'email':
                        if (input.value != '') {
                            // Regular expression for e-mail
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if (!regex.test(input.value.toLowerCase())) {
                                return 'Invalid email!';
                            }
                        }
                        break;
                }
                ;
            }
            ;
        }
        ;
        return true;
    },
    showError: (input, error) => {
        var _a;
        input.style.borderColor = '#FF0000';
        let errorMessage = document.createElement('div');
        errorMessage.classList.add('error');
        errorMessage.innerHTML = error;
        (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(errorMessage, input.nextElementSibling);
    },
    clearErrors: (inputs) => {
        let errorElements = document.querySelectorAll('.error');
        for (let i = 0; i < errorElements.length; i++) {
            errorElements[i].remove();
        }
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute('style', '');
            // Style property not working for nodelist
        }
    }
};
let form = document.querySelector('.opytexvalidator');
form.addEventListener('submit', OpytexValidator.handleSubmit);
