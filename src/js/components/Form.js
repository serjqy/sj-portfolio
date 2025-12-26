export const initForm = () => {
  const nameRegex = /^[A-Za-zÀ-ž' -]{2,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const subjectRegex = /^.{3,50}$/;
  const messageRegex = /^[\s\S]{10,250}$/;

  const form = document.getElementById("form");
  const errorBox = document.querySelector(".form__errors");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    errorBox.innerHTML = "";

    const inputFirstName = document.getElementById("firstName").value.trim();
    const inputLastName = document.getElementById("lastName").value.trim();
    const inputEmail = document.getElementById("email").value.trim();
    const inputSubject = document.getElementById("subject").value.trim();
    const inputMessage = document.getElementById("message").value.trim();

    const errors = [];

    if (!nameRegex.test(inputFirstName)) {
      errors.push("First name is in invalid format");
    }
    if (!nameRegex.test(inputLastName)) {
      errors.push("Last name is in invalid format");
    }

    if (!emailRegex.test(inputEmail)) {
      errors.push("Email is in invalid format");
    }

    if (!subjectRegex.test(inputSubject)) {
      errors.push("Subject must be between 3 & 50 characters");
    }

    if (!messageRegex.test(inputMessage)) {
      errors.push("Message must be between 10 & 250 characters");
    }
    if (errors.length > 0) {
      errors.forEach((error) => {
        const mssg = document.createElement("p");
        mssg.classList.add("error");
        mssg.textContent = error;

        errorBox.appendChild(mssg);
      });
      return;
    }
    setTimeout(() => {
      errorBox.innerHTML = "";

      const success = document.createElement("p");
      success.classList.add("success");
      success.textContent = "Form has been successfully sent";

      errorBox.appendChild(success);

      setTimeout(() => {
        success.remove();
      }, 2000);

      form.reset();
    });
  });
};
