
const productTable = document.getElementById("productTable");
const addProductForm = document.getElementById("addProductForm");
const apiUrl = "http://localhost:3000/product1";

function displayProducts() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(products => {
      while (productTable.rows.length > 2) {
        productTable.deleteRow(2);
      }
      products.forEach(product1 => {
        const row = productTable.insertRow();
        row.innerHTML = `
          <td>${product1.id}</td>
          <td>${product1.productName}</td>
          <td>${product1.quantity}</td>
          <td>${product1.price}</td>
          <td>${product1. discount}</td>
          <td>${product1. location}</td>
          <td>
              <button onclick="editProduct(${product1.id})">Edit</button>
              <button onclick="deleteProduct(${product1.id})">Delete</button>
          </td>
      `;
      });
    })
    .catch(error => {
      console.error("Lỗi khi lấy danh sách người dùng:", error);
    });
}

function showAddProductForm() {
  addProductForm.style.display = "block";
}

function hideAddProductForm() {
  addProductForm.style.display = "none";
  clearForm();
}

function clearForm() {
  document.getElementById("productNameInput").value = "";
  document.getElementById("quantityInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("discountInput").value = "";
  document.getElementById("locationInput").value = "";
  document.getElementById("idInput").value = "";
}

function addProduct(event) {
  event.preventDefault();

  const productNameInput = document.getElementById("productNameInput");
  const  quantityInput= document.getElementById("quantityInput");
  const priceInput = document.getElementById("priceInput");
  const discountInput = document.getElementById("discountInput");
  const locationInput = document.getElementById("locationInput");
  const idInput = document.getElementById("idInput");

  const newProduct = {
    productName:productNameInput.value,
    quantity : quantityInput.value,
    price : priceInput.value,
    discount :discountInput.value,
    location : locationInput.value

  };

  if (idInput.value) {
    // Edit existing product
    const url = `${apiUrl}/${idInput.value}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(product1 => {
        console.log("Người dùng đã được sửa:", product1);
        clearForm();
        hideAddProductForm();
        displayProducts();
      })
      .catch(error => {
        console.error("Lỗi khi sửa người dùng:", error);
      });
  } else {
    // Add new product
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(product1 => {
        console.log("Người dùng đã được thêm:", product1);
        clearForm();
        hideAddProductForm();
        displayProducts();
      })
      .catch(error => {
        console.error("Lỗi khi thêm người dùng:", error);
      });
  }
}

function editProduct(id) {
  const url = `${apiUrl}/${id}`;
  fetch(url)
    .then(response => response.json())
    .then(product1 => {
      const productNameInput = document.getElementById("productNameInput");
      const quantityInput = document.getElementById("quantityInput");
      const priceInput = document.getElementById("priceInput");
      const discountInput = document.getElementById("discountInput");
      const locationInput = document.getElementById("locationInput ");
      const idInput = document.getElementById("idInput");

      productNameInput.value = product1.productName;
      quantityInput.value = product1.quantity;
      priceInput.value = product1.price;
      discountInput.value = product1.discount;
      locationInput.value = product1.location;
      idInput.value = product1.id;

      showAddProductForm();
    })
    .catch(error => {
      console.error("Lỗi khi lấy thông tin người dùng:", error);
    });
}

function deleteProduct(id) {
  const url = `${apiUrl}/${id}`;
  fetch(url, {
    method: "DELETE",
  })
    .then(response => {
      response.data;
      console.log("Người dùng đã bị xóa");
      displayProducts();
    })
    .catch(error => {
      console.error("Lỗi khi xóa người dùng:", error);
    });
}

displayProducts();