const fetchProductData = async () => {
  try {
    const response  = await fetch('http://localhost:3000/product1');
    console.log("Product",response);
    if (!response.ok) {
      throw new Error('Error fetching product data');
    }
    const products = await response.json();
     // Hiển thị danh sách sản phẩm
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      productItem.innerHTML = `
        <div class="col-sm-3">
          <div class="card">
            <img src="${product.imgSrc}" class="rounded-top-4">
            <div class="card-body">
              <h5 class="card-title text-info">${product.name}</h5>
              <i class="fa-solid fa-location-dot" style="color:#FFC300;"></i> ${product.location}
              <br>
              <i class="fa-solid fa-dollar-sign" style="color: #FFC300;"></i> ${product.price}
              <div class="text-end">
                <br>
                <a href="../html/index.html?id=${product.id}" class="btn btn-primary">Booking</a>
              </div>
            </div>
          </div>
        </div>`;

      productItem.addEventListener('click', () => {
        showProductDetail(product);
      });

      productList.appendChild(productItem);
    });
  } catch (error) {
    console.log('Error:', error);
  }
};


fetchProductData();
