let users = [
    { id: 1, userName: "Nhi", email: "nhi@gmail.com", password: "123456789", phone: "987654321" },
    { id: 2, userName: "Hoai", email: "hoai@gmail.com", password: "123456789", phone: "987654321" },
    { id: 3, userName: "Ngan", email: "ngan@gmail.com", password: "123456789", phone: "987654321" },
    { id: 4, userName: "Huyen", email: "huyen@gmail.com", password: "123456789", phone: "987654321" },
    { id: 5, userName: "Hung", email: "hung@gmail.com", password: "123456789", phone: "987654321" },
    { id: 6, userName: "Thu", email: "thu@gmail.com", password: "123456789", phone: "987654321" },
    { id: 7, userName: "Sang", email: "sang@gmail.com", password: "123456789", phone: "987654321" },
    { id: 8, userName: "Le", email: "le@gmail.com", password: "123456789", phone: "987654321" },
    { id: 9, userName: "Duyen", email: "duyen@gmail.com", password: "123456789", phone: "987654321" },
    { id: 10, userName: "Quyen", email: "quyen@gmail.com", password: "123456789", phone: "987654321" },
    { id: 11, userName: "Hoanh", email: "hoanh@gmail.com", password: "123456789", phone: "987654321" }
    
];



const userTable = document.getElementById("userTable");
const addUserForm = document.getElementById("addUserForm");

function displayUsers() {
 

  while(userTable.rows.length > 2) {
    userTable.deleteRow(2);
  }
    users.forEach(user => {
    
        const row = userTable.insertRow();

        row.innerHTML = `
            <td>${user.userName}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.phone}</td>
            <td>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
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
        id: idInput || users.length + 1,
        userName: userNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        phone: phoneInput.value
    };
    const userIndex = users.findIndex(user => user.id === Number(idInput.value));
    const hasUser  =  userIndex !== -1

    hasUser ? ( users[userIndex] = newUser) : users.push(newUser)

    clearForm();
    hideAddUserForm();
    displayUsers();
}

function editUser(id) {
    const user = users.find(user => user.id === id);
    if (!user) return;

    const userNameInput = document.getElementById("userNameInput");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const phoneInput = document.getElementById("phoneInput");
    const idInput = document.getElementById("idInput");

    userNameInput.value = user.userName;
    emailInput.value = user.email;
    passwordInput.value = user.password;
    phoneInput.value = user.phone;
    idInput.value = user.id;

    showAddUserForm();
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    displayUsers();
}

displayUsers();


