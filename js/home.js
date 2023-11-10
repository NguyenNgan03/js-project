// Đợi cho trang tải xong
document.addEventListener("DOMContentLoaded", function () {
  // Bạn cần thay đổi URL này để thực hiện yêu cầu tới API của bạn
  const apiUrl = 'http://localhost:3000/museum';

  // Lấy dữ liệu sản phẩm từ API
  function fetchProducts() {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        // Hiển thị sản phẩm ban đầu khi trang tải
        displayProduct(data);
      })
      .catch((error) => {
        console.error('Lỗi khi tải dữ liệu sản phẩm:', error);
      });
  }

  // Hiển thị sản phẩm
  function displayProduct(data) {
    let product = ``;
    let productCount = 0;

    for (const item of data) {
      if (productCount % 4 === 0) {
        product += '<div class = "row">';
      }

      product += `
      <div class="col-md-3">
        <a href="./index.html?id=${item.id}" class="change">
          <div class="card" style="width: 18rem;">
            <img src="${item.img1}" class="card-img-top imagge1" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title title">${item.name}</h5>
              <p class="card-text description">${item.firstDescribe}</p>
              <p class="card-text"> ${item.location}</p>
              <p class="card-text"> ${item.price} <span> VND </span></p>
              <a href="./index.html?id=${item.id}" class="btn btn-primary booking">Booking</a>
            </div>
          </div>
        </a>
      </div>
      `;

      if (productCount % 4 === 3 || productCount === data.length - 1) {
        product += '</div>';
      }

      if (productCount === 7) {
        break;
      }

      productCount++;
    }

    document.getElementById('product1').innerHTML = product;
  }

  // Bắt sự kiện click nút tìm kiếm
  document.getElementById('searchButton').addEventListener('click', function () {
    const keyword = document.getElementById('searchInput').value;
    searchProducts(keyword);
  });

  // Tạo hàm tìm kiếm sản phẩm
  function searchProducts(keyword) {
    // Lấy dữ liệu sản phẩm
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        // Lọc sản phẩm theo từ khóa tìm kiếm
        const filteredProducts = data.filter((product) => {
          return (
            product.name.toLowerCase().includes(keyword.toLowerCase()) ||
            product.location.toLowerCase().includes(keyword.toLowerCase()) ||
            product.firstDescribe.toLowerCase().includes(keyword.toLowerCase())
          );
        });
        let display=``;
        const imagePath = "../image/anhweb.jpg";
        if (filteredProducts.length > 0) {
          // Hiển thị kết quả tìm kiếm nếu tìm thấy sản phẩm
          displayProduct(filteredProducts);
        } else {
          // Hiển thị thông báo nếu không tìm thấy sản phẩm
          display += `<div class="display" >
          <h2> Không tìm thấy sản phẩm phù hợp </h2>
          <img src="${imagePath}" alt="No matching products image" />
          </div>`;
          document.getElementById('product1').innerHTML = display;
        }
      })
      .catch((error) => {
        console.error('Lỗi khi tải dữ liệu sản phẩm:', error);
      });
  }

  // Gọi hàm để tải dữ liệu sản phẩm ban đầu
  fetchProducts();
});