const userTable = document.getElementById("userTable");
const addUserForm = document.getElementById("addUserForm");

function displayUsers() {
  fetch("http://localhost:3000/user")
    .then(response => response.json())
    .then(users => {
      // Xóa các dòng dữ liệu hiện tại trong bảng
      while (userTable.rows.length > 2) {
        userTable.deleteRow(2);
      }

      // Hiển thị thông tin của tất cả người dùng lên bảng
      users.forEach((user, index) => {
        const row = userTable.insertRow();

        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.password}</td>
          <td>${user.phone}</td>
          <td>
            <button onclick="editUser(${user.id})">Edit</button>
            <button onclick="deleteUser(${user.id})">Delete</button>
          </td>
        `;
      });
    })
    .catch(error => console.error("Error:", error));
}

function showAddUserForm() {
  addUserForm.style.display = "block";
}

function hideAddUserForm() {
  addUserForm.style.display = "none";
  clearForm();
}

function clearForm() {
  document.getElementById("userNameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("passwordInput").value = "";
  document.getElementById("phoneInput").value = "";
}

function addUser(event) {
  event.preventDefault();

  const userNameInput = document.getElementById("userNameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const phoneInput = document.getElementById("phoneInput");

  const newUser = {
    username: userNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    phone: phoneInput.value
  };

  fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  })
    .then(response => response.json())
    .then(() => {
      clearForm();
      hideAddUserForm();
      displayUsers();
    })
    .catch(error => console.error("Error:", error));
}

function editUser(id) {
  fetch(`http://localhost:3000/user/${id}`)
    .then(response => response.json())
    .then(user => {
      const userNameInput = document.getElementById("userNameInput");
      const emailInput = document.getElementById("emailInput");
      const passwordInput = document.getElementById("passwordInput");
      const phoneInput = document.getElementById("phoneInput");

      userNameInput.value = user.username;
      emailInput.value = user.email;
      passwordInput.value = user.password;
      phoneInput.value = user.phone;

      showAddUserForm();
    })
    .catch(error => console.error("Error:", error));
}

function deleteUser(id) {
  fetch(`http://localhost:3000/user/${id}`, {
    method: "DELETE"
  })
    .then(() => {
      displayUsers();
    })
    .catch(error => console.error("Error:", error));
}

displayUsers();