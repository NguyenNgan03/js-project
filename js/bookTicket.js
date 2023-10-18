
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

var ticketList = [  
    {
        ID: 1,
        MuseumName: "Bảo tàng A",
        CustomerName: "Khách hàng 1",
        Address: "Địa chỉ 1",
        Quantity: 2,
        Date: "2023-10-11",
        Phone: "123456789",
        Email: "email1@example.com",
        Total: 100,
        PaymentMethod: "Cash"
    },
    {
        ID: 2,
        MuseumName: "Bảo tàng B",
        CustomerName: "Khách hàng 2",
        Address: "Địa chỉ 2",
        Quantity: 1,
        Date: "2023-10-12",
        Phone: "987654321",
        Email: "email2@example.com",
        Total: 50,
        PaymentMethod: "Credit Card"
    },
    {
        ID: 3,
        MuseumName: "Bảo tàng A",
        CustomerName: "Khách hàng 1",
        Address: "Địa chỉ 1",
        Quantity: 2,
        Date: "2023-10-11",
        Phone: "123456789",
        Email: "email1@example.com",
        Total: 100,
        PaymentMethod: "Cash"
    }
];


var tableBody = document.getElementById("tbl");

// Hàm để thêm một dòng mới vào bảng và cập nhật Local Storage
function addTicketToTable(ticket) {
    // Tạo một hàng mới
    var newRow = tableBody.insertRow();

    // Tạo các ô dữ liệu cho hàng mới
    var cellID = newRow.insertCell(0);
    var cellMuseumName = newRow.insertCell(1);
    var cellCustomerName = newRow.insertCell(2);
    var cellAddress = newRow.insertCell(3);
    var cellQuantity = newRow.insertCell(4);
    var cellDate = newRow.insertCell(5);
    var cellPhone = newRow.insertCell(6);
    var cellEmail = newRow.insertCell(7);
    var cellTotal = newRow.insertCell(8);
    var cellPaymentMethod = newRow.insertCell(9);
    var cellAction = newRow.insertCell(10);

    // Gán giá trị từ dữ liệu vào các ô dữ liệu
    cellID.innerText = ticket.ID;
    cellMuseumName.innerText = ticket.MuseumName;
    cellCustomerName.innerText = ticket.CustomerName;
    cellAddress.innerText = ticket.Address;
    cellQuantity.innerText = ticket.Quantity;
    cellDate.innerText = ticket.Date;
    cellPhone.innerText = ticket.Phone;
    cellEmail.innerText = ticket.Email;
    cellTotal.innerText = ticket.Total;
    cellPaymentMethod.innerText = ticket.PaymentMethod;
    cellAction.innerHTML = "<button>Thêm </button> <button>Xóa</button> <button>Sửa</button>";

    // Thêm đối tượng dữ liệu vào mảng ticketList và lưu vào Local Storage
    // ticketList.push(ticket);
    localStorage.setItem("ticketList", JSON.stringify(ticketList));
}

// Thêm dữ liệu từ mảng ticketList vào bảng
ticketList.forEach(function (ticket) {
    addTicketToTable(ticket);
});


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