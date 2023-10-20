const categories = [{
  id: 2,
  name: '',
},{
  id: 1,
  name: 'Best sale',
},]

const product2 = [
{
  id: '1',
  name: 'War Remnants Museum',
  imgSrc: '../image/6.jpg',
  price: '150.000',
  location: '28 Đ. Võ Văn Tần, Võ Thị Sáu, TP.Hồ Chí Minh<br>',
  categoryType: 2,
}, {
  id: '2',
  name: 'Vietnam National Museum of History',
  imgSrc: '../image/7.jpg',
  price: '200.000',
  location: '216 Đ. Trần Quang Khải, Tràng Tiền, Hà Nội',
  categoryType: 2,
  }, {
  id: '3',
  name: 'Thanh Ha Terracotta Park',
  imgSrc: '../image/8.jpg',
  price: '120.000',
  location: 'Phạm Phán, Thanh Hà, Hội An, Quảng Nam<br>',
  categoryType: 2,
}, {
  id: '4',
  name: 'Ho Chi Minh Museum',
  imgSrc: '../image/9.jpg',
  price: '200.000',
  location: '19 Ngọc Hà, Đội Cấn, Ba Đình, Hà Nội,<br>',
  categoryType: 2 ,

}, {
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
let containers = document.getElementById('containers');
for(let i=0; i<categories.length; i++){
    const filteredProds =product2.filter((prod)=>prod.categoryType === categories[i].id)
    if(filteredProds.length >0) {
      const elementProd =
        `
        <h5 class="fw-bold">${categories[i].name}</h5>
        <h1 class="fw-bold">ALL</h1>
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