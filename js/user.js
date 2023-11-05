
const userTable = document.getElementById("userTable");
const addUserForm = document.getElementById("addUserForm");
const apiUrl = "http://localhost:3000/user";

function displayUsers() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(users => {
      while (userTable.rows.length > 2) {
        userTable.deleteRow(2);
      }
      users.forEach(user => {
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
    .catch(error => {
      console.error("Lỗi khi lấy danh sách người dùng:", error);
    });
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
  document.getElementById("idInput").value = "";
}

function addUser(event) {
  event.preventDefault();

  const userNameInput = document.getElementById("userNameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const phoneInput = document.getElementById("phoneInput");
  const idInput = document.getElementById("idInput");

  const newUser = {
    username: userNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    phone: phoneInput.value,
  };

  if (idInput.value) {
    // Edit existing user
    const url = `${apiUrl}/${idInput.value}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(user => {
        console.log("Người dùng đã được sửa:", user);
        clearForm();
        hideAddUserForm();
        displayUsers();
      })
      .catch(error => {
        console.error("Lỗi khi sửa người dùng:", error);
      });
  } else {
    // Add new user
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(user => {
        console.log("Người dùng đã được thêm:", user);
        clearForm();
        hideAddUserForm();
        displayUsers();
      })
      .catch(error => {
        console.error("Lỗi khi thêm người dùng:", error);
      });
  }
}

function editUser(id) {
  const url = `${apiUrl}/${id}`;
  fetch(url)
    .then(response => response.json())
    .then(user => {
      const userNameInput = document.getElementById("userNameInput");
      const emailInput = document.getElementById("emailInput");
      const passwordInput = document.getElementById("passwordInput");
      const phoneInput = document.getElementById("phoneInput");
      const idInput = document.getElementById("idInput");

      userNameInput.value = user.username;
      emailInput.value = user.email;
      passwordInput.value = user.password;
      phoneInput.value = user.phone;
      idInput.value = user.id;

      showAddUserForm();
    })
    .catch(error => {
      console.error("Lỗi khi lấy thông tin người dùng:", error);
    });
}

function deleteUser(id) {
  const url = `${apiUrl}/${id}`;
  fetch(url, {
    method: "DELETE",
  })
    .then(response => {
      response.data;
      console.log("Người dùng đã bị xóa");
      displayUsers();
    })
    .catch(error => {
      console.error("Lỗi khi xóa người dùng:", error);
    });
}

displayUsers();