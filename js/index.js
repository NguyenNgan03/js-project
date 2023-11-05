
const cardWrapper = document.createElement('div');
cardWrapper.classList.add('card-wrapper');

const card = document.createElement('div');
card.classList.add('card');

// Card left - product images
const productImgs = document.createElement('div');
productImgs.classList.add('product-imgs');

const imgDisplay = document.createElement('div');
imgDisplay.classList.add('img-display');

const h1 = document.createElement('h1');
h1.textContent = 'BẢO TÀNG ĐIỀU KHẮC';
imgDisplay.appendChild(h1);

const imgShowcase = document.createElement('div');
imgShowcase.classList.add('img-showcase');

const images = [
  [
    '../image/Rectangle 451.png',
    '../image/Rectangle 455.png',
    '../image/Rectangle 457.png',
    '../image/Rectangle 458.png'
  ]
];


for (let i = 0; i < images.length; i++) {
  const img = document.createElement('img');
  img.src = images[i];
  img.alt = 'shoe image';
  imgShowcase.appendChild(img);
}

imgDisplay.appendChild(imgShowcase);
productImgs.appendChild(imgDisplay);

const imgSelect = document.createElement('div');
imgSelect.classList.add('img-select');

for (let i = 0; i < images.length; i++) {
  const imgItem = document.createElement('div');
  imgItem.classList.add('img-item');

  const link = document.createElement('a');
  link.href = '#';
  link.setAttribute('data-id', i + 1);

  const img = document.createElement('img');
  img.src = images[i];
  img.alt = 'shoe image';

  link.appendChild(img);
  imgItem.appendChild(link);
  imgSelect.appendChild(imgItem);
}

productImgs.appendChild(imgSelect);
card.appendChild(productImgs);

// Card right - product content
const productContent = document.createElement('div');
productContent.classList.add('product-content');
const productTitle = document.createElement('a');
productTitle.classList.add('product-title');
productTitle.href = '#';
productTitle.textContent = 'Bảo tàng Chăm là bảo tàng điêu khắc nằm ở thành phố Đà Nẵng, Việt Nam';
productContent.appendChild(productTitle);

const productPrice = document.createElement('div');
productPrice.classList.add('product-price');

const newPrice = document.createElement('p');
newPrice.classList.add('new-price');
newPrice.innerHTML = 'New price: <span>$249.00 (5%)</span>';
productPrice.appendChild(newPrice);

const status = document.createElement('p');
status.innerHTML = '<i class="fa fa-clock"></i> Tình trạng: <span>Đang mở cửa</span>';
productPrice.appendChild(status);

const productRating = document.createElement('div');
productRating.classList.add('product-rating');

const rating = document.createElement('p');
rating.innerHTML = '<i class="fa fa fa-check-circle"></i> Đánh giá: <i class="fa-solid fa-star" style="color: yellow;"></i><i class="fa-solid fa-star" style="color: yellow;"></i><i class="fa-solid fa-star" style="color: yellow;"></i><i class="fa-solid fa-star" style="color: yellow;"></i><i class="fas fa-star-half-alt" style="color: yellow;"></i><span>4.7 (21)</span>';
productRating.appendChild(rating);

productPrice.appendChild(productRating);

const address = document.createElement('p');
address.innerHTML = '<i class="fa fa-map-marker-alt"></i> Địa chỉ: <span>123 Đường ABC, Thành phố XYZ</span>';
productPrice.appendChild(address);

const hotline = document.createElement('p');
hotline.innerHTML = '<i class="fa fa-phone"></i> Hotline: <span>123-456-789</span>';
productPrice.appendChild(hotline);

productContent.appendChild(productPrice);

const descriptionTitle = document.createElement('p');
descriptionTitle.classList.add('title');
descriptionTitle.textContent = 'Description';
productContent.appendChild(descriptionTitle);

const description = document.createElement('p');
description.textContent = 'Bảo tàng Chăm không chỉ là nơi trưng bày các sản phẩm nghệ thuật Chăm mà còn là một trung tâm nghiên cứu và bảo tồn văn hóa Chăm. Bảo tàng cung cấp một môi trường học tập và tiếp cận cho những người quan tâm đến nền văn hóa và lịch sử của người Chăm.';
productContent.appendChild(description);

const purchaseInfo = document.createElement('div');
purchaseInfo.classList.add('purchase-info');
purchaseInfo.appendChild(productContent);
card.appendChild(purchaseInfo);
cardWrapper.appendChild(card);
document.getElementById('container').appendChild(cardWrapper);