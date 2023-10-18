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
let ticketList = [
    {
        ID: 1,
        museumName: "Bảo tàng A",
        customerName: "Khách hàng 1",
        address: "Địa chỉ 1",
        quantity: 2,
        date: "2023-10-11",
        phone: "123456789",
        email: "email1@example.com",
        total: 100,
        paymentMethod: "Cash"
    },
    {
        ID: 2,
        museumName: "Bảo tàng B",
        customerName: "Khách hàng 2",
        address: "Địa chỉ 2",
        quantity: 1,
        date: "2023-10-12",
        phone: "987654321",
        email: "email2@example.com",
        total: 50,
        paymentMethod: "Credit Card"
    },
    {
        ID: 3,
        museumName: "Bảo tàng A",
        customerName: "Khách hàng 1",
        address: "Địa chỉ 1",
        quantity: 2,
        date: "2023-10-11",
        phone: "123456789",
        email: "email1@example.com",
        total: 100,
        paymentMethod: "Cash"
    }
];

const tableTicket = document.getElementById("tbl");
console.log(tableTicket);
var id = 0;

function displayTicket() {
    ticketList.forEach(ticket => {
        const row = tableTicket.insertRow();
        row.innerHTML = `
            <td>${id++}</td>
            <td>${ticket.museumName}</td>
            <td>${ticket.customerName}</td>
            <td>${ticket.address}</td>
            <td>${ticket.quantity}</td>
            <td>${ticket.date}</td>
            <td>${ticket.phone}</td>
            <td>${ticket.email}</td>
            <td>${ticket.total}</td>
            <td>${ticket.paymentMethod}</td>
            <td>
                <button onclick="addTicket(${ticket.ID})">Add</button>
                <button onclick="deleteTicket(${ticket.ID})">Delete</button>
                <button onclick="editTicket(${ticket.ID})">Edit</button>
            </td>
        `;
    });

}

function createTicketInfo(){
    console.log("Button clicked");
    const museumName = document.getElementById("msu-name").textContent;
    const customerName = document.getElementById("name").value;
    
    const address = document.getElementById("address").value;
    const quantity = document.getElementById("quantity-ticket").value;
    const date = document.getElementById("date").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const totalPrice = document.getElementById("total-price").value;
    const paymentMethod = document.getElementById("payment").value;

    const newTicket = {
        ID: ticketList.length + 1, 
        museumName: museumName,
        customerName: customerName,
        address: address,
        quantity: quantity,
        date: date,
        phone: phone,
        email: email,
        total: parseFloat(totalPrice), 
        paymentMethod: paymentMethod
    }

    ticketList.push(newTicket);

    while (tableTicket.row.length > 1) {
        tableTicket.deleteRow(1);
    }

    displayTicket();

    document.getElementById("name").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("address").value = "";
    document.getElementById("quantity-ticket").value = "";
    document.getElementById("date").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("total-price").value = "";
    document.getElementById("payment").value = "card";

    localStorage.setItem('ticketList', JSON.stringify(ticketList));
}

// function addTicket() {
   
    

// }

// function deleteTicket(id) {
    
// }

// function editTicket(id) {
   
// }

displayTicket();