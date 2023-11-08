const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

function displayProductById(productId){
    fetch('http://localhost:3000/museum')
        .then(res=>res.json())
        .then(data=>{
        console.log('product',data)
        const product = data.find(item=> item.id === parseInt(productId));
        if(product){
            const productNameElement = document.getElementById('product-name');
            const productDescriptionElement = document.getElementById('product-description');

            productNameElement.textContent = product.name;
            productDescriptionElement.textContent = product.firstDescribe;
        }else{
             // Không tìm thấy sản phẩm
            console.log("Không tìm thấy sản phẩm với ID " + productId);
        }
        })
        .catch(error => console.error("Lỗi trong quá trình tải dữ liệu: " + error));
}
displayProductById(productId);

