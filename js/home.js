function displayProduct(){
  fetch('http://localhost:3000/museum')
  .then(res=>res.json())
  .then(data=>{
    console.log('product',data)
    let pro=``;
    // const  museum = data.museum;
    for (const item of data) {
      pro+=`
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
      `;
    }
    document.getElementById('product1').innerHTML=pro;
  })
}
displayProduct();