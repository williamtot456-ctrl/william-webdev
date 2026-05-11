function InqModal() {
  const submit = document.getElementById("submit");
  const submit_modal = document.getElementById("submit_modal");
  const form = document.getElementById("Inquire-form");
  const submit_close = document.getElementById("submit_close");

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    // check if valid
    const isFirstNameValid = validateName("Inq-fname", "firstNameError");
    const isLastNameValid = validateName("Inq-lname", "lastNameError");
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isFormValid = form.checkValidity();

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isFormValid
    ) {
      submit_modal.classList.add("show");
      document.documentElement.classList.add("no-scroll-submit");
      form.reset();
    } else {
      form.reportValidity();
    }
  });

  submit_close.addEventListener("click", () => {
    submit_modal.classList.remove("show");
    document.documentElement.classList.remove("no-scroll-submit");
  });
}

InqModal();
