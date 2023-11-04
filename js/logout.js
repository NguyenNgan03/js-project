// Hiển thị form đăng xuất khi người dùng nhấp vào icon logout
function showLogoutForm() {
  const logoutForm = document.getElementById('logout-form');
  logoutForm.style.display = 'block';
}

// Ẩn form đăng xuất
function hideLogoutForm() {
  const logoutForm = document.getElementById('logout-form');
  logoutForm.style.display = 'none';
}

// Xử lý khi người dùng nhấp vào nút "Đồng ý"
function handleConfirmLogout() {
  localStorage.removeItem("loggedInUser");
  // Thực hiện đăng xuất và chuyển hướng đến trang login
  window.location.href = '../html/login.html';
}

// Xử lý khi người dùng nhấp vào nút "Không đồng ý"
function handleCancelLogout() {
  // Chuyển hướng về trang chủ
  window.location.href = '../html/home.html';
}

// Gắn kết sự kiện cho nút "Không đồng ý" và nút "Đồng ý"
document.addEventListener('DOMContentLoaded', function () {
  const cancelLogoutButton = document.getElementById('cancel-logout');
  const confirmLogoutButton = document.getElementById('confirm-logout');

  cancelLogoutButton.addEventListener('click', handleCancelLogout);
  confirmLogoutButton.addEventListener('click', handleConfirmLogout);
});