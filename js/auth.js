document.getElementById("registerForm").addEventListener('submit', function(event) {
  event.preventDefault()
  event.stopPropagation()
  event.stopImmediatePropagation()
  // Kiểm tra các trường nhập liệu
  var usernameInput = document.getElementById('username');
  var emailInput = document.getElementById('email');
  var phoneInput = document.getElementById('phone');
  var passwordInput = document.getElementById('password');
  var confirmPasswordInput = document.getElementById('confirmPassword');

  var usernameError = document.getElementById('usernameError');
  var emailError = document.getElementById('emailError');
  var phoneError = document.getElementById('phoneError');
  var passwordError = document.getElementById('passwordError');
  var confirmPasswordError = document.getElementById('confirmPasswordError');

  // Reset thông báo lỗi trước đó
  usernameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  // Kiểm tra từng trường nhập liệu
  if (usernameInput.value.trim() === '') {
    usernameError.textContent = 'Please enter a username';

    usernameInput.addEventListener('input', function() {
      usernameError.textContent = '';
    });

    usernameInput.focus();
    return; // Dừng lại nếu có lỗi
  }

  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Please enter an email';

    emailInput.addEventListener('input', function() {
      emailError.textContent = '';
    });

    emailInput.focus();
    return;
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email';

    emailInput.addEventListener('input', function() {
      emailError.textContent = '';
    });

    emailInput.focus();
    return;
  }

  if (phoneInput.value.trim() === '') {
    phoneError.textContent = 'Please enter a phone number';

    phoneInput.addEventListener('input', function() {
      phoneError.textContent = '';
    });

    phoneInput.focus();
    return;
  }

  if (passwordInput.value === '') {
    passwordError.textContent = 'Please enter a password';

    passwordInput.addEventListener('input', function() {
      passwordError.textContent = '';
    });

    passwordInput.focus();
    return;
  }

  if (confirmPasswordInput.value === '') {
    confirmPasswordError.textContent = 'Please confirm your password';

    confirmPasswordInput.addEventListener('input', function() {
      confirmPasswordError.textContent = '';
    });

    confirmPasswordInput.focus();
    return;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = 'Passwords do not match';

    confirmPasswordInput.addEventListener('input', function() {
      confirmPasswordError.textContent = '';
    });

    confirmPasswordInput.focus();
    return;
  }

  var user = {
    username: usernameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    password: passwordInput.value
  };

  // Hàm kiểm tra địa chỉ email đã tồn tại hay chưa
  function checkExistingEmail(email) {
    return fetch('http://localhost:3000/user?email=' + email)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Do you already have an account');
        }
      })
      .then(function(data) {
        return data.length > 0; // Trả về true nếu địa chỉ email đã tồn tại
      })
  }

    // checkExistingEmail(emailInput.value)

    const postUser = () => {
      // Gửi yêu cầu POST đến JSON Server
        fetch('http://localhost:3000/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        }).then(function(response) {
          console.log(response)
          if (response.ok) {

            // Nếu không có lỗi, hiển thị thông báo đăng ký thành công
            alert('Registration successful!');
            

          } else {
            throw new Error('An error occurred while registering the user.');
          }
        })
    }

  // Kiểm tra xem địa chỉ email đã tồn tại hay chưa
  checkExistingEmail(emailInput.value)
    .then(function(existingEmail) {
      if (existingEmail) {
        emailError.textContent = 'An account with this email already exists. Please log in.';
        emailInput.addEventListener('input', function() {
          emailError.textContent = '';
        });
        emailInput.focus();
        return;
      } else {
        postUser()
          window.location.assign("../html/home.html")
      }
    })
});

// Hàm kiểm tra định dạng email
function isValidEmail(email) {
  // Sử dụng một biểu thức chính quy đơn giản để kiểm tra
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}