// src/scripts/form.ts
export const setupFormHandler = () => {
  const form = document.getElementById("contact-form") as HTMLFormElement;
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const messageInput = document.getElementById("message") as HTMLTextAreaElement;

  if (!form || !nameInput || !emailInput || !messageInput) {
    console.error("Form elements not found!");
    return;
  }

  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }

    // Example: Log form data or send it to an API
    console.log("Form submitted:", { name, email, message });

    alert("Form submitted successfully!");
    form.reset();
  });
};
