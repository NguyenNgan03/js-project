let users = [
    { id: 1, firstName: "Nhi", lastName: "Tuong", phone: "123456789", email: "nhi@gmail.com" },
    { id: 2, firstName: "Hoai", lastName: "Nguyen", phone: "987654321", email: "hoai@gmail.com" }
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
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
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
    document.getElementById("firstNameInput").value = "";
    document.getElementById("lastNameInput").value = "";
    document.getElementById("phoneInput").value = "";
    document.getElementById("emailInput").value = "";

    document.getElementById("idInput").value = "";
}

// Tiếp tục phần mã JavaScript (script.js):

function addUser(event) {
    event.preventDefault();

    const firstNameInput = document.getElementById("firstNameInput");
    const lastNameInput = document.getElementById("lastNameInput");
    const phoneInput = document.getElementById("phoneInput");
    const emailInput = document.getElementById("emailInput");
    const idInput = document.getElementById("idInput");

    const newUser = {
        id: idInput || users.length + 1,
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        phone: phoneInput.value,
        email: emailInput.value
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

    const firstNameInput = document.getElementById("firstNameInput");
    const lastNameInput = document.getElementById("lastNameInput");
    const phoneInput = document.getElementById("phoneInput");
    const emailInput = document.getElementById("emailInput");
    const idInput = document.getElementById("idInput");

    firstNameInput.value = user.firstName;
    lastNameInput.value = user.lastName;
    phoneInput.value = user.phone;
    emailInput.value = user.email;
    idInput.value = user.id;

    showAddUserForm();
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    displayUsers();
}

displayUsers();


