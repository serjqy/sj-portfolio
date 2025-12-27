export const initForm = () => {
  const nameRegex = /^[A-Za-zÀ-ž' -]{2,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const subjectRegex = /^.{3,50}$/;
  const messageRegex = /^[\s\S]{10,250}$/;

  const form = document.getElementById("form");

  const fields = [
    {
      id: "firstName",
      regex: nameRegex,
      error: "First name is in invalid format",
    },
    {
      id: "lastName",
      regex: nameRegex,
      error: "Last name is in invalid format",
    },
    {
      id: "email",
      regex: emailRegex,
      error: "Email is in invalid format",
    },
    {
      id: "subject",
      regex: subjectRegex,
      error: "Subject must be between 3 & 50 characters",
    },
    {
      id: "message",
      regex: messageRegex,
      error: "Message must be between 10 & 250 characters",
    },
  ];

  fields.forEach(({ id, regex, error }) => {
    const input = document.getElementById(id);
    const errorEl = input.closest(".form__field").querySelector(".form__error");

    input.addEventListener("input", () => {
      if (regex.test(input.value.trim())) {
        errorEl.textContent = "";
        return;
      } else {
        errorEl.textContent = error;
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    fields.forEach(({ id, regex, error }) => {
      const input = document.getElementById(id);
      const value = input.value.trim();
      const errorEl = input
        .closest(".form__field")
        .querySelector(".form__error");

      errorEl.textContent = "";

      if (!regex.test(value)) {
        errorEl.textContent = error;
        isValid = false;
      }
    });

    if (!isValid) return;

    setTimeout(() => {
      const success = document.createElement("p");
      success.classList.add("form__success");
      success.textContent = "Form has been successfully sent";
      form.appendChild(success);
      setTimeout(() => {
        success.remove();
      }, 3000);
      // form.submit();
      form.reset();
    }, 0);
  });
};
