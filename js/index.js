const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
function displayProductById(productId){
    fetch('http://localhost:3000/museum')
        .then(res=>res.json())
        .then(data=>{
        console.log('product',data)
        let  productContainer = ``;
        const product = data.find(item=> item.id === parseInt(productId));
        if(product){
           productContainer += `

           <div class = "card-wrapper">
            <div class = "card">
            <!-- card left -->
            <div class = "product-imgs">
                <div class = "img-display">
                    <h1>${product.name}</h1>
                    <div class = "img-showcase">
                        <img src = "${product.img1}" alt = "shoe image">
                        <img src = "${product.img2}" alt = "shoe image">
                        <img src = "${product.img3}" alt = "shoe image">
                        <img src = "${product.img4}" alt = "shoe image">
                    </div>
                </div>
                <div class = "img-select">
                    <div class = "img-item">
                        <a href = "#" data-id = "1">
                        <img src = "${product.img1}" alt = "shoe image">
                        </a>
                    </div>
                    <div class = "img-item">
                        <a href = "#" data-id = "2">
                        <img src = "${product.img2}" alt = "shoe image">
                        </a>
                    </div>
                    <div class = "img-item">
                        <a href = "#" data-id = "3">
                        <img src = "${product.img3}" alt = "shoe image">
                        </a>
                    </div>
                    <div class = "img-item">
                        <a href = "#" data-id = "4">
                        <img src = "${product.img4}" alt = "shoe image">
                        </a>
                    </div>
                </div>
            </div>
            <!-- card right -->
            <div class = "product-content">
                <a href = "#" class = "product-title">${product.firstDescribe}</a>
                <div class = "product-price">
                    <p class="new-price"> Price: <span>${product.price}</span></p>
                    <p><i class="fa fa-clock"></i>Tình trạng: <span>Đang mở cửa</span></p>
                        <div class = "product-rating">
                            <p><i class="fa fa fa-check-circle"></i> Đánh giá: 
                                <i style="color: yellow;"> ${product.asess}</i>
                            </p>
                        </div>
                    <p><i class="fa fa-map-marker-alt"></i> Địa chỉ: <span>123 Đường ABC, Thành phố XYZ</span></p>
                    <p><i class="fa fa-phone"></i> Hotline: <span>${product.hotline}</span></p>
                </div>
                <div>
                    <p class="title">Description</p>
                    <P> ${product.seconDescribe} </P>
                </div>
                <div class="purchase-info">
                    <a href="../html/bookTicket.html">
                        <button type = "button" class = "btn"> <a href="./bookTicket.html?id=${product.id}"> Booking </a> </button>
                    </a>
                </div>
            </div>

        </div>
    </div>
           `;
        }else{
             // Không tìm thấy sản phẩm
            console.log("Không tìm thấy sản phẩm với ID " + productId);
        }
        document.getElementById('detail').innerHTML = productContainer;
        const imgs = document.querySelectorAll('.img-select a');
        const imgBtns = [...imgs];
        let imgId = 1;

        imgBtns.forEach((imgItem) => {
            imgItem.addEventListener('click', (event) => {
                event.preventDefault();
                imgId = imgItem.dataset.id;
                slideImage();
            });
        });

        function slideImage() {
            const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

            document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
        }

        window.addEventListener('resize', slideImage);
        })
        .catch(error => console.error("Lỗi trong quá trình tải dữ liệu: " + error));
}
displayProductById(productId);

