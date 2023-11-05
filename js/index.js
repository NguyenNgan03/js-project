// const imgs = document.querySelectorAll('.img-select a');
// const imgBtns = [...imgs];
// let imgId = 1;

// imgBtns.forEach((imgItem) => {
//     imgItem.addEventListener('click', (event) => {
//         event.preventDefault();
//         imgId = imgItem.dataset.id;
//         slideImage();
//     });
// });

// function slideImage(){
//     const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

//     document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
// }

// window.addEventListener('resize', slideImage);

// const categories = [{
//   id: 1,
//   name: '',
// },]
const product3 = [
  {
    id: "1",
    productTitle: "Bảo tàng Chăm",
    oldPrice: "$257.00",
    newPrice: "$249.00 (giảm 5%)",
    status: "Đang mở cửa",
    rating: "4.7 (21)",
    address: "123 Đường ABC, Thành phố XYZ",
    hotline: "123-456-789",
    description: "Bảo tàng Chăm không chỉ là nơi trưng bày các sản phẩm nghệ thuật Chăm mà còn là một trung tâm nghiên cứu và bảo tồn văn hóa Chăm. Bảo tàng cung cấp một môi trường học tập và tiếp cận cho những người quan tâm đến nền văn hóa và lịch sử của người Chăm.",
    imgSrc: "../image/Rectangle 451.png",
  },
  {
    id: "2",
    productTitle: "Bảo tàng Lịch sử Quốc gia",
    oldPrice: "$150.00",
    newPrice: "$129.00 (giảm 14%)",
    status: "Đang mở cửa",
    rating: "4.5 (18)",
    address: "456 Đường XYZ, Thành phố ABC",
    hotline: "987-654-321",
    description: "Bảo tàng Lịch sử Quốc gia là một điểm đến văn hóa quan trọng với nhiều bảo vật quý giá và triển lãm thú vị về lịch sử quốc gia. Đây là nơi hấp dẫn cho những người yêu thích nghiên cứu và khám phá về quá khứ của đất nước.",
    imgSrc: "../image/Rectangle 451.png",
  },
  {
    id: "3",
    productTitle: "Viện Bảo tàng Mỹ thuật",
    oldPrice: "$180.00",
    newPrice: "$169.00 (giảm 6%)",
    status: "Đang mở cửa",
    rating: "4.8 (25)",
    address: "789 Đường DEF, Thành phố GHI",
    hotline: "456-123-789",
    description: "Viện Bảo tàng Mỹ thuật là nơi trưng bày và bảo quản nhiều tác phẩm nghệ thuật quan trọng và đa dạng. Đây là một điểm đến tuyệt vời cho những người yêu thích nghệ thuật và muốn khám phá những tác phẩm nổi tiếng.",
    imgSrc: "../image/Rectangle 451.png",
  }
];

// const getAllProducts = () => {
//   for (const product of product3) {
//     console.log("ID:", product.id);
//     console.log("Title:", product.productTitle);
//     console.log("Old Price:", product.oldPrice);
//     console.log("New Price:", product.newPrice);
//     console.log("Status:", product.status);
//     console.log("Rating:", product.rating);
//     console.log("Address:", product.address);
//     console.log("Hotline:", product.hotline);
//     console.log("Description:", product.description);
//     console.log("Image Source:", product.imgSrc);
//     console.log("---------------------");
//   }
// };

// getAllProducts();

// const productContainer = document.getElementById("productContainer");

//     for (const product of product3) {
//       const productElement = document.createElement("div");
//       productElement.innerHTML = `
//         <h2>${product.productTitle}</h2>
//         <p>Old Price: ${product.oldPrice}</p>
//         <p>New Price: ${product.newPrice}</p>
//         <p>Status: ${product.status}</p>
//         <p>Rating: ${product.rating}</p>
//         <p>Address: ${product.address}</p>
//         <p>Hotline: ${product.hotline}</p>
//         <p>Description: ${product.description}</p>
//         <img src="${product.imgSrc}" alt="Product Image">
//         <hr>
//       `;
//       productContainer.appendChild(productElement);
//     }

const OldPrice = document.getElementById("oldPrice")
const NewPrice = document.getElementById("newPrice")
const Status = document.getElementById("status")
const Rating = document.getElementById("rating")
const Address = document.getElementById("address")
const Hotline = document.getElementById("hotline")
const Description = document.getElementById("description")

OldPrice.valuevalue = product.OldPrice;



// const getProductById = (productId) => {
//   return product3.find((prod) => prod.id === productId);
// };

// const renderProductDetail = (productId) => {
//   const product = getProductById(productId);
//   if (product) {
//     const elementCategory = document.getElementById("product_detail");
//     const elementProd = `
//       <div class="product-imgs">
//         <div class="img-display">
//           <h1>${product.productTitle}</h1>
//           <div class="img-showcase">
//             <img src="${product.imgSrc}">
//             <img src="${product.imgSrc}">
//             <img src="${product.imgSrc}">
//             <img src="${product.imgSrc}">
//           </div>
//         </div>
//         <div class="img-select">
//           <div class="img-item">
//             <a href="#" data-id="1">
//               <img src="${product.imgSrc}">
//             </a>
//           </div>
//           <div class="img-item">
//             <a href="#" data-id="2">
//               <img src="${product.imgSrc}">
//                        </a>
//           </div>
//           <div class="img-item">
//             <a href="#" data-id="3">
//               <img src="${product.imgSrc}">
//             </a>
//           </div>
//           <div class="img-item">
//             <a href="#" data-id="4">
//               <img src="${product.imgSrc}">
//             </a>
//           </div>
//         </div>
//       </div>
//       <div class="product-info">
//         <h2>${product.productTitle}</h2>
//         <h3>${product.newPrice}</h3>
//         <p>${product.status}</p>
//         <div class="rating">
//           <span>${product.rating}</span>
//         </div>
//         <p>${product.address}</p>
//         <p>${product.hotline}</p>
//         <p>${product.description}</p>
//       </div>
//     `;
//     elementCategory.innerHTML = elementProd;
//   }
// };

// const render = () => {
//   let container = document.getElementById('product_detail');
//   for(let i=0; i<product3.length; i++){
//       const filteredProds =product3.filter((prod)=>prod.product3 === product3[i].id)
//       if(filteredProds.length >0) {
//         const elementProd =
//           `
//           <h1 class="fw-bold">${product3[i].name}</h1>
//           <br>
//           <div class="row" id="product3_${product3[i].id}"></div>
//           `
//     container.innerHTML+= (elementProd);
//     getProductByCategory(product3[i].id)
//     }
//   }
// }
// const getDetail = () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   console.log(urlParams.get('id'))
// }

// getDetail()
// render()