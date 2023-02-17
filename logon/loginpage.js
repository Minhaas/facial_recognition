const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (username.value === "praj" && password.value === "praj") {
    errorMessage.textContent = "";
    alert("Login successful");
  } else {
    errorMessage.textContent = "Incorrect username or password";
  }
});
