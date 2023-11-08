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