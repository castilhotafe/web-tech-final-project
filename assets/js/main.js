document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let isValid = true;

  let nameRegex = /^[a-zA-Z\s'.-]+$/;
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  } else if (name.length < 2) {
    document.getElementById("nameError").textContent =
      "Name must be at least 2 characters";
    isValid = false;
  } else if (!nameRegex.test(name)) {
    document.getElementById("nameError").textContent =
      "Name contains invalid characters";
    isValid = false;
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Valid email is required";
    isValid = false;
  }

  let messageRegex = /^[a-zA-Z0-9\s.,!?'-]+$/;
  if (message === "") {
    document.getElementById("messageError").textContent =
      "Message cannot be empty";
    isValid = false;
  } else if (message.length < 10 || message.length > 200) {
    document.getElementById("messageError").textContent =
      "Message must be between 10 and 200 characters";
    isValid = false;
  } else if (!messageRegex.test(message)) {
    document.getElementById("messageError").textContent =
      "Message contains invalid characters";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
});
