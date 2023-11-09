function displayProduct(){
  fetch('http://localhost:3000/museum')
  .then(res=>res.json())
  .then(data=>{
    console.log('product',data)
    let product=``;
    let productCount = 0;
    // const  museum = data.museum;
    for (const item of data) {
      if(productCount % 4 === 0){
        product += '<div class = "row">';
      }
      product+=`
      <div class="col-md-3">
      <a href="./index.html?id=${item.id}" class="change">
      <div class="card" style="width: 18rem;">
        <img src="${item.img1}" class="card-img-top imagge1" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title title">${item.name}</h5>
          <p class="card-text description">${item.firstDescribe}</p>
          <p class="card-text"> ${item.location}</p>
          <p class="card-text"> ${item.price}</p>
          <a href="./index.html?id=${item.id}" class="btn btn-primary booking">Booking</a>
        </div>
      </div>
      </a>
      </div>
      `;
      if (productCount % 4 === 3 || productCount === data.length - 1) {
        // Đóng hàng sau mỗi 4 sản phẩm hoặc khi đã hiển thị hết sản phẩm
        product += '</div>';
      }
      if(productCount===7){
        break;
      }
      productCount++;
    }
    document.getElementById('product1').innerHTML=product;
  })
}
displayProduct();

// Đợi cho trang tải xong
document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  // Tạo hàm tìm kiếm sản phẩm
  function searchProducts(keyword) {
      // Lọc sản phẩm theo từ khóa tìm kiếm
      const filteredProducts = data.filter(product => {
          // Ở đây, bạn có thể chọn các trường thông tin để tìm kiếm, ví dụ: name, location, firstDescribe, ...
          return product.name.toLowerCase().includes(keyword.toLowerCase()) ||
                 product.location.toLowerCase().includes(keyword.toLowerCase()) ||
                 product.firstDescribe.toLowerCase().includes(keyword.toLowerCase());
      });

      // Hiển thị kết quả tìm kiếm
      displaySearchResults(filteredProducts);
  }

  // Hiển thị kết quả tìm kiếm
  function displaySearchResults(results) {
      let searchResultContainer = ``;

      if (results.length > 0) {
          results.forEach(product => {
              searchResultContainer += `
              <!-- Tạo giao diện hiển thị sản phẩm tìm kiếm -->
              <div class="col-md-3">
                <div class="card" style="width: 18rem;">
                  <img src="${item.img1}" class="card-img-top" alt="${item.img1}">
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.firstDescribe}</p>
                    <p class="card-text"> ${item.location}</p>
                    <p class="card-text"> ${item.price}</p>
                    <a href="./index.html?id=${item.id}" class="btn btn-primary">Booking</a>
                  </div>
                </div>
              </div>
              `;
          });
      } else {
          searchResultContainer = "Không tìm thấy kết quả.";
      }

      document.getElementById('search-results').innerHTML = searchResultContainer;
  }

  // Bắt sự kiện click nút tìm kiếm
  document.getElementById('searchButton').addEventListener('click', function() {
      const keyword = document.getElementById('searchInput').value;
      searchProducts(keyword);
  });
});