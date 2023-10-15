// Log form ra từ trang chủ
document.addEventListener('DOMContentLoaded', function() {
    var icon = document.querySelector('.fa-circle-user');
    var loginForm = document.querySelector('.loginForm-hidden');

    // icon.addEventListener('click', function() {
    //     loginForm.classList.toggle('hidden');
    // });
});

// get all required elements
function validateForm() {
    // Reset previous error messages
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate username
    if (username.trim() === "") {
      document.getElementById("usernameError").innerHTML = "Please enter a username";
      return false; // Prevent form submission
    }

    // Validate password
    if (password === "") {
      document.getElementById("passwordError").innerHTML = "Please enter a password";
      return false; // Prevent form submission
    }

    // If all validations pass, allow form submission
    return true;
  }
