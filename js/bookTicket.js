
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

function createTicketInfo() {
    var ticketInfo = {
        MuseumName: document.getElementById("msu-name").textContent,
        CustomerName: document.getElementById("name").value,
        Birthdate : document.getElementById("birthdate").value,
        Address: document.getElementById("address").value,
        Quantity: document.getElementById("quantity-ticket").value,
        Date: document.getElementById("date").value,
        Phone: document.getElementById("phone").value,
        Pmail: document.getElementById("email").value,
        TotalPrice: document.getElementById("total-price").value,
        PaymentMethod: document.getElementById("payment").value,
    };
    return ticketInfo;
}

function saveTicketToLocalStorage() {
    var ticketInfo = createTicketInfo();
    localStorage.setItem('ticketInfo', JSON.stringify(ticketInfo));
}

function getTicketFromLocalStorage() {
    var storedTicketInfo = localStorage.getItem('ticketInfo');
    if (storedTicketInfo) {
        return JSON.parse(storedTicketInfo);
    }
    return null;
}