document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn gửi form mặc định

  // Kiểm tra các trường nhập liệu
  var usernameInput = document.getElementById('username');
  var passwordInput = document.getElementById('password');

  var usernameError = document.getElementById('usernameError');
  var passwordError = document.getElementById('passwordError');

  // Reset thông báo lỗi trước đó
  usernameError.textContent = '';
  passwordError.textContent = '';

  // Kiểm tra từng trường nhập liệu
  if (usernameInput.value === '') {
    usernameError.textContent = 'Please enter a username';

    usernameInput.addEventListener('input', function() {
      usernameError.textContent = '';
    });

    usernameInput.focus();
    return; // Dừng lại nếu có lỗi
  }

  if (passwordInput.value === '') {
    passwordError.textContent = 'Please enter a password';

    passwordInput.addEventListener('input', function() {
      passwordError.textContent = '';
    });

    passwordInput.focus();
    return;
  }

  // Nếu không có lỗi, tiến hành xác thực người dùng
  var user = {
    username: usernameInput.value,
    password: passwordInput.value
  };

  // Gọi hàm xác thực người dùng từ json_server
  authenticateUser(user);
  
  // Reset form đăng nhập
  document.getElementById('loginForm').reset();
});

// Hàm xác thực người dùng từ json_server
function authenticateUser(user) {
  // Gửi yêu cầu đến json_server
  fetch('http://localhost:3000/user')
    .then(response => response.json())
    .then(users => {
      // Tìm kiếm người dùng theo username và password
      var foundUser = users.find(function(u) {
        return u.username === user.username && u.password === user.password;
      });

      if (foundUser) {
        // Xác thực thành công, thực hiện các hành động sau đăng nhập
        alert('Login successful!'); // Thay bằng hành động mong muốn sau đăng nhập
        window.location.href = '../html/home.html';
      } else {
        // Xác thực thất bại, hiển thị thông báo lỗi
        alert('Invalid username or password. Try again or create account'); // Thay bằng thông báo lỗi mong muốn
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}