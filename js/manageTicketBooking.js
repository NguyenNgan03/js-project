// import { getDataFromLocalStore, setDataToLocalStor, addObjDataToLocalStore } from './localStorage.js';
function total(){
    var totalTicket = document.getElementById("quantity-ticket").value;
    var priceTicket = document.getElementById("price").textContent;
    var totalPriceElement = Number(totalTicket) * Number(priceTicket);
    return totalPriceElement;
}
let message;

// let ticketList = getDataFromLocalStore("ticketList", []);
let ticketList = load() || [];
function load(){
    return JSON.parse(localStorage.getItem("ticketList"));
}
function Save() {
    localStorage.setItem("ticketList", JSON.stringify(ticketList));
}
function displayTicket() {
    const tableTicket = document.querySelector("#tbl tbody");
    var id = 1;
    let row = "";
    ticketList.forEach(ticket => {
        row += `
            <tr>
            <td> ${id++} </td>
            <td> ${ticket.museumName} </td>
            <td> ${ticket.customerName} </td>
            <td> ${ticket.address} </td>
            <td> ${ticket.quantity} </td>
            <td> ${ticket.total} </td>
            <td> ${ticket.date} </td>
            <td> ${ticket.phone} </td>
            <td> ${ticket.email} </td>
            <td> ${ticket.paymentMethod} </td>
            <td> </td>
            <td> <button onclick="deleteTicket(${ticket.ID})">Delete</button> </td>
            </tr>
        `;
    });

    tableTicket.innerHTML = row;
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
    localStorage.setItem("mail", JSON.stringify(email));
    const totalPrice = total();
    const paymentMethod = document.getElementById("payment").value;
    message = "Chào "+ customerName + ", " + "Bạn đã đặt "+quantity+" vé đi "+ museumName+"\nTổng thanh toán là "+totalPrice+" VNĐ";
    if (customerName.trim() === "") {
        alert("Please enter a customer name.");
        return;
    }
    
    if (address.trim() === "") {
        alert("Please enter an address.");
        return;
    }
    
    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity of tickets.");
        return;
    }
    
    if (phone.trim() === "" || !(/^\d{10}$/.test(phone))) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    
    if (email.trim() === "" || !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email))) {
        alert("Please enter a valid email address.");
        return;
    }
    
    if (isNaN(totalPrice)) {
        alert("Invalid total price.");
        return;
    }

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
    
    // setDataToLocalStore("ticketList", ticketList);
    
    document.getElementById("booking").innerHTML = 
    `<h3> Xin chào ${customerName} </h3>
    <h4> Bạn đã đặt ${quantity} vé đi ${museumName} </h4>
    <h4> Tổng thanh toán là ${total()} VNĐ</h4>
    <h4>Thanh toán qua số tài khoản </h4>
    <button style="background-color: #f6dd55; color: black " type="submit" onclick="sendMail()">Xác nhận</button>

    `;
}   
function sendMail(){
    const serviceID = 'default_service';
   const templateID = 'template_cz7xux9';

   emailjs.send(serviceID, templateID, {message: message, mail: JSON.parse(localStorage.getItem("mail"))})
    .then(() => {
      alert('Chúng tôi đã gửi thông tin về email, vui lòng check email để thanh toán');
    }, (err) => {
      alert(JSON.stringify(err));
    });
    Save()
    
}

// function deleteTicket() {
//     ticketList.length = 0;
//     // console.log(ticketList);
//     Save();
// }
// function deleteTicket(id){
//     for(let i =0; i<ticketList.length; i++){
//         if(ticketList[i].ID == id){
//             ticketList.splice(i,1);
//             Save();

//             return;
//         }
//     }

// }

// function editTicket(id) {

// }

function ticketproduct(){
    
}
    


    