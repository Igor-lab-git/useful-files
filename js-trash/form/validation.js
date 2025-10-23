class formValidation {
  selectors = {
    form: "[data-js-form]",
    fieldErrors: "[data-js-form-field-errors]",
  };

  errorMessages = {
    valueMissing: () => "Поле обязательное для заполнения - 😞",
    patternMismatch: ({ title }) => title ? title : "Данные не соответсвуют формату - 🥺",
    tooShort: ({ minLength }) => `Слишком короткое значение, минимум символов - ${minLength} - 😫`,
    tooLong: ({ maxLength }) => `Слишком длинное значение, ограничение символов - ${maxLength} - 😤`,
  };

  constructor() {
    this.bindEvents();
  }

  addMessageErrorSpan(fieldControlElement, errorMessages) {
    const fieldErrorElement = fieldControlElement.parentElement.querySelector(
      this.selectors.fieldErrors
    );

    fieldErrorElement.innerHTML = errorMessages
      .map((message) => `<span class="lield__error">${message}</span>`)
      .join("");
  }

  validateField(fieldControlElement) {
    const validityState = fieldControlElement.validity;
    const errorMessages = [];

    Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
        if (validityState[errorType]) {
          errorMessages.push(getErrorMessage(fieldControlElement));
        }
      }
    );

    this.addMessageErrorSpan(fieldControlElement, errorMessages);

    const isValid = errorMessages.length === 0;

    fieldControlElement.ariaInvalid = !isValid;

    return isValid;
  }

  onBlur(event) {
    const { target } = event;
    const isFormField = target.closest(this.selectors.form);
    const isRequired = target.required;

    if (isFormField && isRequired) {
      this.validateField(target);
    }
  }

  onChange(event) {
    const { target } = event;
    const isRequired = target.required;
    const isToggleType = ["radio", "checkbox"].includes(target.type);

    if (isRequired && isToggleType) {
      this.validateField(target);
    }
  }

  onSubmit(event) {
    const isFormElement = event.target.matches(this.selectors.form);

    if (!isFormElement) {
      return;
    }

    const requiredControlElements = [...event.target.elements].filter((element) => element.required );

    let isFormValid = true;
    let firstInvalidFieldControl = null;

    requiredControlElements.forEach((element) => {
      const isFieldValid = this.validateField(element);

      if (!isFieldValid) {
        isFormValid = false;

        if(!firstInvalidFieldControl) {
            firstInvalidFieldControl = element;
        }
      }
    });

    if (!isFormValid) {
      event.preventDefault();
      firstInvalidFieldControl.focus();
    }
  }

  bindEvents() {
    document.addEventListener("blur", (event) => {
        this.onBlur(event)},{ capture: true });

    document.addEventListener("change", (event) => {
      this.onChange(event);
    });
    document.addEventListener("submit", (event) => {
      this.onSubmit(event);
    });
  }
}

new formValidation();
