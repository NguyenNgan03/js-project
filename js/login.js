document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn gửi form mặc định

  // Lấy giá trị từ ô input
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
        // Lưu thông tin đăng nhập vào Local Storage
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

        // Kiểm tra vai trò của người dùng
        if (foundUser.role === 'admin') {
          // Nếu là admin, chuyển hướng đến trang admin.html
          window.location.href = '../html/dashBoard.html';
        } else {
          // Nếu không phải admin, chuyển hướng đến trang home.html
          window.location.href = '../html/home.html';
        }
      } else {
        // Hiển thị thông báo lỗi
        alert('Invalid username or password. Try again or create an account');
      }
    })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
}