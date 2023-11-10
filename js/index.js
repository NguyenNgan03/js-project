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
           <div id = "contain">
            <div class = "card">
            <!-- card left -->
            <div class = "" id="change2">
                <div class = "img-display">
                    <h1 id="title1">${product.name}</h1>
                    <div class = "img-showcase second_img_box">
                        <img src = "${product.img1}" alt = "shoe image" class="second_img">
                        <img src = "${product.img2}" alt = "shoe image" class="second_img">
                        <img src = "${product.img3}" alt = "shoe image" class="second_img">
                        <img src = "${product.img4}" alt = "shoe image" class="second_img">
                    </div>
                </div>
                <div class = "img-select" id="change3">
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
            <div class = "product-content" id="change4">
                <a href = "#" id="product_title" class = "product-title">${product.firstDescribe}</a>
                <div class = "product-price">
                    <p class="new-price"> Price: <span>${product.price}</span> <span> VND </span></p>
                    <p><i style = "color:#FFC300" class="fa fa-clock"></i>Tình trạng: <span>Đang mở cửa</span></p>
                        <div class = "product-rating">
                            <p><i style = "color:#FFC300" class="fa fa fa-check-circle"></i> Đánh giá: 
                                <i style="color: black;" > ${product.asess}</i>
                            </p>
                        </div>
                    <p><i style = "color:#FFC300" class="fa fa-map-marker-alt"></i> Địa chỉ: <span>123 Đường ABC, Thành phố XYZ</span></p>
                    <p><i style = "color:#FFC300" class="fa fa-phone"></i> Hotline: <span>${product.hotline}</span></p>
                </div>
                <div>
                    <p class="title">Description</p>
                    <P> ${product.seconDescribe} </P>
                </div>
                <div class="purchase-info">
                    <a href="../html/bookTicket.html">
                        <button type = "button" class = "btn"> <a href="./bookTicket.html?id=${product.id}" class = "booking"> Booking </a> </button>
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

