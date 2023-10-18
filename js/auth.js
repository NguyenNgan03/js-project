// Log form ra từ trang chủ
document.addEventListener('DOMContentLoaded', function() {
    var icon = document.querySelector('.fa-circle-user');
    var loginForm = document.querySelector('.loginForm-hidden');

    icon.addEventListener('click', function() {
        loginForm.classList.toggle('hidden');
    });
});

// get all required elements
function validateLoginForm() {
    // Reset previous error messages
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate username
    if (username === "") {
      document.getElementById("usernameError").innerHTML = "Please enter a username";
      return false; // Prevent form submission
    }

    // Validate password
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Please enter a password";
        return false;
    }
    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long";
        return false; 
    }
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
        return false;
     }

     var foundUser = users.find(function(user) {
        return user.username === username && user.password === password;
      });
    
      if (foundUser) {
        // Login successful, redirect to home page or perform other actions
        window.location.href = "../html/home.html";
      } else {
        // Display login error message
        document.getElementById("error").innerHTML = "Invalid username or password";
        return false; // Prevent form submission
      }

  // If all validations pass, allow form submission
  return true;

}


function validateSignupForm() {
  // Lấy giá trị từ các trường nhập liệu
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;
  var phone = document.getElementById("phone").value;
  var termsChecked = document.getElementById("exampleCheck1").checked;

  // Xóa thông báo lỗi cũ
  clearErrors();

  // Biến kiểm tra lỗi
  var hasErrors = false;

  // Kiểm tra các trường dữ liệu
  if (username === "") {
    displayError("usernameError", "Please enter a username");
    hasErrors = true;
  }

  if (email === "") {
    displayError("emailError", "Please enter an email address");
    hasErrors = true;
  } else if (!validateEmail(email)) {
    displayError("emailError", "Please enter a valid email address");
    hasErrors = true;
  }

  if (password === "") {
    displayError("passwordError", "Please enter a password");
    hasErrors = true;
  }
  if (password.length < 8) {
    document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long";
    return false; 
}
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").innerHTML = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
      return false;
  }

  if (confirm === "") {
    displayError("confirmError", "Please confirm your password");
    hasErrors = true;
  } else if (password !== confirm) {
    displayError("confirmError", "Passwords do not match");
    hasErrors = true;
  }

  if (phone === "") {
    displayError("phoneError", "Please enter a phone number");
    hasErrors = true;
  } else if (!validatePhone(phone)) {
    displayError("phoneError", "Please enter a valid phone number");
    hasErrors = true;
  }

  if (!termsChecked) {
    displayError("exampleCheck1", "Please accept the terms and conditions");
    hasErrors = true;
  }

  // Kiểm tra nếu có lỗi, ngăn không cho submit form
  if (hasErrors) {
    return false;
  }

  if (!hasErrors) {
    alert("Đăng ký thành công!");
  }
  return true;
}

// Hiển thị thông báo lỗi
function displayError(elementId, errorMessage) {
  var errorElement = document.getElementById(elementId);
  errorElement.innerHTML = errorMessage;
  errorElement.classList.add("error");
}

// Xóa thông báo lỗi
function clearErrors() {
  var errorElements = document.getElementsByClassName("error");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].innerHTML = "";
  }
}

// Kiểm tra định dạng email
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Kiểm tra định dạng số điện thoại
function validatePhone(phone) {
  var re = /^\d{10}$/;
  return re.test(phone);
}
