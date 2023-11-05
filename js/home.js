const categories = [{
    id: 2,
    name: 'Recomened Meseum',
  },{
    id: 1,
    name: 'Best sale',
  },]

const product1 = [{
  id: '1',
  name: 'Museum of cham sculptur',
  imgSrc: '../image/1.jpg',
  desc: "Some quick example text to build on the card title and make up the bulk of the card's content.<br><br>",
  categoryType: 1,

},{
  id: '2',
  name: 'Museum of military zone 5',
  imgSrc: '../image/2.jpg',
  desc: "Museum of Military Zone 5, Da Nang is a military museum located at No. <br><br><br>",
  categoryType: 1,
},{
  id: '2',
  name: 'Da Nang fine arts museum',
  imgSrc: '../image/3.jpg',
  desc: "Danang Fine Arts Museum is the first art museum in Danang. Currently, this Danang museum is storing more than 600 valuable artworks.",
  categoryType: 1,
},{
  id: '2',
  name: 'Da Nang Museum',
  imgSrc: '../image/4.jpg',
  desc: "Danang Museum is located on the site of Dien Hai Ancient Palace, preserving typical memorabilia of the history, culture, and people in Danang.",
  categoryType: 1,
}]

const product2 = [{
  id: '5',
  name: 'War Remnants Museum',
  imgSrc: '../image/6.jpg',
  price: '150.000',
  location: '28 Đ. Võ Văn Tần, Võ Thị Sáu, TP.Hồ Chí Minh<br>',
  categoryType: 2,
}, {
  id: '6',
  name: 'Vietnam National Museum of History',
  imgSrc: '../image/7.jpg',
  price: '200.000',
  location: '216 Đ. Trần Quang Khải, Tràng Tiền, Hà Nội',
  categoryType: 2,
}, {
  id: '7',
  name: 'Thanh Ha Terracotta Park',
  imgSrc: '../image/8.jpg',
  price: '120.000',
  location: 'Phạm Phán, Thanh Hà, Hội An, Quảng Nam<br>',
  categoryType: 2,
}, {
  id: '8',
  name: 'Ho Chi Minh Museum',
  imgSrc: '../image/9.jpg',
  price: '200.000',
  location: '19 Ngọc Hà, Đội Cấn, Ba Đình, Hà Nội,<br>',
  categoryType: 2,
}]

fetch('http://localhost:3000/product1').then(response => response.json())
.then(data => {
  console.log(data); // This will print the data from data.json
})
.catch(function(error) {
    console.log(error);
    // Xử lý lỗi nếu có
    alert('An error occurred while registering the user.');
  });

function checkAPI(){
  fetch('http://localhost:3000/product1/1',{method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Ho Chi Minh Museum',
    imgSrc: '../image/9.jpg',
    price: '200.000',
    location: '19 Ngọc Hà, Đội Cấn, Ba Đình, Hà Nội,<br>',
    categoryType: 2,
  })} )
.then(data => {
  console.log(data); // This will print the data from data.json
})
.catch(function(error) {
    console.log(error);
    // Xử lý lỗi nếu có
    alert('An error occurred while registering the user.');
  });
}
const getProductByCategory = (categoryType = 1) => {
  const filteredProds =product1.filter((prod)=>prod.categoryType === categoryType)
  let elementCategory = document.getElementById(`category_${categoryType}`);
for(let i=0; i<filteredProds.length; i++){
  const elementProd = 
    ` <div class="col-sm-3">
      <div class="card">
        <img src="${filteredProds[i].imgSrc}" class="rounded-top-4">
        <div class="card-body">
            <h5 class="card-title text-info">${filteredProds[i].name}</h5>
            <p class="card-text">${filteredProds[i].desc}</p>
            <br>
            <div class="text-end">
              <a href="detail.html?id=${filteredProds[i].id}" class="btn btn-primary">Booking </a>
            </div>
          </div>
        </div>
      </div>
    </div> `

  elementCategory.innerHTML+= (elementProd);
  }
}

const getProductByCategory2 = (categoryType = 2) => {
  const filteredProds =product2.filter((prod)=>prod.categoryType === categoryType)
  let elementCategory = document.getElementById(`category_${categoryType}`);
for(let i=0; i<filteredProds.length; i++){
  const elementProd = 
    ` <div class="col-sm-3">
        <div class="card ">
          <img src="${filteredProds[i].imgSrc}" class="rounded-top-4">
          <div class="card-body">
            <h5 class="card-title text-info">${filteredProds[i].name}</h5>
            <i class="fa-solid fa-location-dot" style="color:#FFC300;"></i> ${filteredProds[i].location}
            <br>
            <i class="fa-solid fa-dollar-sign" style="color: #FFC300;"></i> ${filteredProds[i].price}
            <div class="text-end">
              <br>
              <a href="detail.html?id=${filteredProds[i].id}" class="btn btn-primary">Booking </a>
            </div>
          </div>
        </div>
      </div>`
    elementCategory.innerHTML+= (elementProd);
  }
}


const render = () => {
  let container = document.getElementById('container');
  for(let i=0; i<categories.length; i++){
      const filteredProds =product1.filter((prod)=>prod.categoryType === categories[i].id)
      if(filteredProds.length >0) {
        const elementProd =
          `
          <h1 class="fw-bold">${categories[i].name}</h1>
          <br>
          <div class="row" id="category_${categories[i].id}"></div>
          `
    container.innerHTML+= (elementProd);
    getProductByCategory(categories[i].id)
    }
  }

  let containers = document.getElementById('containers');
  for(let i=0; i<categories.length; i++){
      const filteredProds =product2.filter((prod)=>prod.categoryType === categories[i].id)
      if(filteredProds.length >0) {
        const elementProd =
          `
          <h5 class="fw-bold">${categories[i].name}</h5>
          <h1 class="fw-bold">Meseum of the month</h1>
          <br>
          <div class="row" id="category_${categories[i].id}"></div>
          `
    containers.innerHTML+= (elementProd);
    getProductByCategory2(categories[i].id)
    }
  }
}
const getDetail = () => {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(window)
  console.log(urlParams.get('id'))
}
getDetail()
render()