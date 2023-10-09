function total(){
    var totalTicket = document.getElementById("quantity-ticket").value;
    var priceTicket = document.getElementById("price").textContent;
    var totalPriceElement = document.getElementById("total-price");

    if (!isNaN(totalTicket)) {
        var total = Number(totalTicket) * Number(priceTicket); 
        document.getElementById("total-price").value = total;
        console.log(totalTicket,priceTicket)
        document.getElementById("total-price").innerHTML = total;
        totalPriceElement.value = total;
    } else {
        document.getElementById("total-price").value = "Nhập sai thông tin vé hoặc giá vé";
    }
    
}