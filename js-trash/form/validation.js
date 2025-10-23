
class formValidation {
    selectors = {
        form: "[data-js-form]",
        fieldErrors: "[data-js-form-field-errors]",
    }

    errorMessages = {
        valueMissing: () => "Поле обязательное для ввода",
        patternMismatch: ({ title }) => title ? title : "Данные не соответсвуют формату",
        tooShort: ({ minLength }) => `Слишком короткое значение - ${minLength}`,
        tooLong: ({ maxLength }) => `Слишком длинное значение - ${maxLength}`,
    }
    constructor() {
        this.bindEvents();
    }

    validateField(fieldControlElement) {
        const errors = fieldControlElement.validity;
        const errorMessages = [];

        Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
            if(errors[errorType]) {
                errorMessages.push(getErrorMessage(fieldControlElement));
            }
        })

        console.log(errorMessages)
    }

    onBlur(event) {
        const { target } = event;
        const isFormField = target.closest(this.selectors.form);
        const isRequired = target.required;

        if(isFormField && isRequired) {
            this.validateField(target)
        }
    }

    bindEvents() {
        document.addEventListener("blur", (event) => {
            this.onBlur(event)
        }, {capture: true})
    }
};

new formValidation();