// var id = 0;

// function cells() {
//     id++;
//     var msuName = document.getElementById("msu-name").textContent;
//     var cusName = document.getElementById("name").value;
//     var Address = document.getElementById("address").value;
//     var quantityTickets = document.getElementById("ticket").value;
//     var departureDate = document.getElementById("date").value;
//     var phoneCus = document.getElementById("phone").value;
//     var email = document.getElementById("email").value;
//     var totalPrice = document.getElementById("total-price").value;
//     var paymentMethod = document.getElementById("payment").value;
//     var QuantityTickets = document.getElementById("ticket").value;
//     var row = "<tr>";
//     row += "<td>" + id + "</td>";
//     row += "<td>" + msuName + "</td>";
//     row += "<td>" + cusName + "</td>";
//     row += "<td>" + Address + "</td>";
//     row += "<td>" + quantityTickets + "</td>";
//     row += "<td>" + departureDate + "</td>";
//     row += "<td>" + phoneCus + "</td>";
//     row += "<td>" + email + "</td>";
//     row += "<td>" + totalPrice + "</td>";
//     row += "<td>" + paymentMethod + "</td>";
//     row += "<td>" + QuantityTickets + "</td>";
//     row += "<td><button onclick='editRow(this)'><i class='fa fa-edit'></i></button>" +
//            "<button onclick='deleteRow(this)'><i class='fa fa-trash'></i></button></td>";
//     row += "</tr>";
//     document.getElementById("tbl").innerHTML += row;
// }
function total() {
    var totalTicket = document.getElementById("ticket").value;
    var priceTicket = parseFloat(document.getElementById("price").textContent);
    var totalPriceElement = document.getElementById("total-price");

    if (!isNaN(totalTicket) && totalTicket > 0) {
        var total = parseFloat(totalTicket) * priceTicket;
        document.getElementById("total-price").value = total.toFixed(2);
        totalPriceElement.value = total.toFixed(2);
    } else {
        document.getElementById("total-price").value = "Nhập sai thông tin vé hoặc giá vé";
    }
}

function cells() {
    id++;
    var msuName = document.getElementById("msu-name").textContent;
    var cusName = document.getElementById("name").value;
    var Address = document.getElementById("address").value;
    var quantityTickets = parseInt(document.getElementById("quantity-ticket").value);
    var departureDate = document.getElementById("date").value;
    var phoneCus = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var totalPrice = parseFloat(document.getElementById("total-price").value);
    var paymentMethod = document.getElementById("payment").value;

    if (!cusName || !Address || !departureDate || !phoneCus || !email || isNaN(quantityTickets) || quantityTickets <= 0 || isNaN(totalPrice)) {
        alert("Vui lòng điền đầy đủ thông tin và kiểm tra giá trị vé và tổng tiền.");
        return;
    }
    var QuantityTickets = document.getElementById("quantity-ticket").value;
    var ticketInfor = {
        msuName: msuName,
        cusName: cusName,
        Address: Address,
        quantityTickets: quantityTickets,
        departureDate: departureDate,
        phoneCus: phoneCus,
        email: email,
        totalPrice: totalPrice,
        paymentMethod: paymentMethod,
        QuantityTickets: QuantityTickets
    };
     // Kiểm tra xem Local Storage đã chứa dữ liệu chưa
    var ticketList = JSON.parse(localStorage.getItem("ticketList")) || [];

    // Thêm đối tượng vào mảng và cập nhật Local Storage
    ticketList.push(ticketInfor);
    localStorage.setItem("ticketList", JSON.stringify(ticketList));

    // Cập nhật bảng quản lí vé với dữ liệu từ Local Storage
    updateTicketTable();


    function updateTicketTable() {
        var ticketList = JSON.parse(localStorage.getItem("ticketList")) || [];
        var tableBody = document.getElementById("tbl");
        tableBody.innerHTML = "";
    
        ticketList.forEach(function (ticketInfo, index) {
            var row = "<tr>";
            row += "<td>" + (index + 1) + "</td>";
            row += "<td>" + ticketInfo.msuName + "</td>";
            row += "<td>" + ticketInfo.cusName + "</td>";
            row += "<td>" + ticketInfo.Address + "</td>";
            row += "<td>" + ticketInfo.quantityTickets + "</td>";
            row += "<td>" + ticketInfo.departureDate + "</td>";
            row += "<td>" + ticketInfo.phoneCus + "</td>";
            row += "<td>" + ticketInfo.email + "</td>";
            row += "<td>" + ticketInfo.totalPrice.toFixed(2) + "</td>";
            row += "<td>" + ticketInfo.paymentMethod + "</td>";
            row += "<td>" + ticketInfo.QuantityTickets + "</td>";
            row += "<td><button class='edit-btn'><i class='fa fa-edit'></i></button>" +
                "<button class='delete-btn' onclick='deleteTicket(" + index + ")'><i class='fa fa-trash'></i></button></td>";
            row += "</tr>";
            tableBody.innerHTML += row;
        });
    }
    // // Thêm sự kiện cho các nút chỉnh sửa và xóa
    // var editButtons = document.querySelectorAll(".edit-btn");
    // var deleteButtons = document.querySelectorAll(".delete-btn");

    // editButtons.forEach(function (button) {
    //     button.addEventListener("click", function () {
    //         // Xử lý sự kiện chỉnh sửa ở đây
    //     });
    // });

    // deleteButtons.forEach(function (button) {
    //     button.addEventListener("click", function () {
    //         // Xử lý sự kiện xóa ở đây
    //     });
    // });
}

function deleteTicket(index) {
    var ticketList = JSON.parse(localStorage.getItem("ticketList")) || [];
    if (index >= 0 && index < ticketList.length) {
        ticketList.splice(index, 1);
        localStorage.setItem("ticketList", JSON.stringify(ticketList));
        updateTicketTable();
    }
}

// Gọi hàm updateTicketTable khi trang được tải để hiển thị dữ liệu từ Local Storage ban đầu
updateTicketTable();