let OpytexValidator = {
    handleSubmit: (event: any) => {
        // Disable the default event. For forms, will disable the submit event.
        event.preventDefault();

        let send = true;

        let inputs: NodeListOf<HTMLInputElement> = form.querySelectorAll('input[type=text]');

        OpytexValidator.clearErrors(inputs);

        for (let i = 0; i < inputs.length; i++) {
            let input: HTMLInputElement = inputs[i];
            let check: boolean | string = OpytexValidator.checkInput(input);

            if (check !== true) {
                send = false;
                OpytexValidator.showError(input, check);
            } 
        }

        if (send) {
            form.submit();
        }
    },
    checkInput: (input: HTMLInputElement) => {
        let rules: string | null = input.getAttribute('data-rules');

        if (rules !== null) {
            let rulesList: string[] = rules.split('|');

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
                };
            };
        }; 
        
        return true;

    },
    showError: (input: HTMLInputElement, error: string) => {
        input.style.borderColor = '#FF0000';

        let errorMessage: HTMLDivElement = document.createElement('div');
        errorMessage.classList.add('error');
        errorMessage.innerHTML = error;

        input.parentElement?.insertBefore(errorMessage, input.nextElementSibling);
    },
    clearErrors: (inputs: NodeListOf<HTMLInputElement>) => {

        let errorElements: NodeListOf<HTMLDivElement> = document.querySelectorAll('.error');
        for(let i = 0; i < errorElements.length; i++){
            errorElements[i].remove();
        }

        for(let i = 0; i < inputs.length; i++)  {
            inputs[i].setAttribute('style', '');
            // Style property not working for nodelist
        }
    }
};

let form = document.querySelector('.opytexvalidator') as HTMLFormElement;
form.addEventListener('submit', OpytexValidator.handleSubmit);