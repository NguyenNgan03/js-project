
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

// Hiển thị trang chi tiết sản phẩm
// const showProductDetail = (product) => {
//   const productDetail = document.querySelector('.product-detail');
//   const productDetailName = document.getElementById('product-detail-name');
//   const productDetailImage = document.getElementById('product-detail-image');
//   const productDetailPrice = document.getElementById('product-detail-price');
//   const productDetailLocation = document.getElementById('product-detail-location');

//   productDetailName.textContent = product.name;
//   productDetailImage.src = product.imgSrc;
//   productDetailPrice.textContent = `Price: ${product.price}`;
//   productDetailLocation.textContent = `Location: ${product.location}`;
//   const productList = document.querySelector('.product-list');
//   productList.style.display = 'none';
//   productDetail.style.display = 'block';
// };

  // Hiển thị trang chi tiết sản phẩm
//   function showProductDetail(productId) {
//     const product = product.find(item => item.id === productId);
//     if (product) {
//       const productContainer = document.getElementById("product-container");
//       productContainer.innerHTML = "";
  
//       const productDetail = document.createElement("div");
//       productDetail.classList.add("product-detail");
  
//       const productDetailContent = document.createElement("div");
//       productDetailContent.classList.add("product-detail-content");
  
//       const productTitle = document.createElement("h1");
//       productTitle.textContent = product.productTitle;
  
//       const oldPrice = document.createElement("p");
//       oldPrice.innerHTML = `Giá cũ: <span>${product.oldPrice}</span>`;
  
//       const newPrice = document.createElement("p");
//       newPrice.innerHTML = `Giá mới: <span>${product.newPrice}</span>`;
  
//       const status = document.createElement("p");
//       status.innerHTML = `Tình trạng: <span>${product.status}</span>`;
  
//       const rating = document.createElement("p");
//       rating.innerHTML = `Đánh giá: <span>${product.rating}</span>`;
  
//       const address = document.createElement("p");
//       address.innerHTML = `Địa chỉ: <span>${product.address}</span>`;
  
//       const hotline = document.createElement("p");
//       hotline.innerHTML = `Hotline: <span>${product.hotline}</span>`;
  
//       const description = document.createElement("p");
//       description.textContent = product.description;
  
//       productDetailContent.appendChild(productTitle);
//       productDetailContent.appendChild(oldPrice);
//       productDetailContent.appendChild(newPrice);
//       productDetailContent.appendChild(status);
//       productDetailContent.appendChild(rating);
//       productDetailContent.appendChild(address);
//       productDetailContent.appendChild(hotline);
//       productDetailContent.appendChild(description);
  
//       productDetail.appendChild(productDetailContent);
//       productContainer.appendChild(productDetail);
//     }
//   }
fetchProductData();