var user =
    [
        {
            id: "1",
            username: "Hoành hồ",
            email: "hoanhho@gmail.com",
            password: "12345678",
            role: "user"

        },
    ]
// Lấy các phần tử HTML
const loginButton = document.getElementById("login-button");
const loginForm = document.querySelector(".loginForm");
const signupForm = document.querySelector(".wrap");

// Hiển thị biểu mẫu đăng nhập
function showLoginForm() {
  loginForm.style.display = "block";
  signupForm.style.display = "none";
}

// Xử lý sự kiện khi người dùng submit biểu mẫu đăng nhập
loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn chặn hành vi mặc định của form

  // Lấy giá trị từ các trường input
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Thực hiện xử lý đăng nhập ở đây (ví dụ: in giá trị đăng nhập ra console)
  console.log("Đăng nhập - Tên đăng nhập: " + username);
  console.log("Đăng nhập - Mật khẩu: " + password);

  // Sau khi xử lý đăng nhập, chuyển hướng người dùng đến trang khác
  if (username === "Hoành hồ" && password === "12345678") {
    window.location.href = "../html/home.html";
  } else {
    alert("Đăng nhập không hợp lệ. Vui lòng thử lại!");
  }
});

// Xử lý sự kiện khi người dùng submit biểu mẫu đăng ký
signupForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn chặn hành vi mặc định của form

  // Lấy giá trị từ các trường input
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm").value;
  const phone = document.getElementById("phone").value;

  // Thực hiện xử lý đăng ký ở đây (ví dụ: in giá trị đăng ký ra console)
  console.log("Đăng ký - Tên đăng nhập: " + username);
  console.log("Đăng ký - Email: " + email);
  console.log("Đăng ký - Mật khẩu: " + password);
  console.log("Đăng ký - Xác nhận mật khẩu: " + confirmPassword);
  console.log("Đăng ký - Số điện thoại: " + phone);

  // Sau khi xử lý đăng ký, bạn có thể chuyển hướng người dùng đến trang khác hoặc thực hiện các hành động khác
});


// đẩy mảng user vào local
    var saveUser =function (){
         localStorage.setItem('listUser',JSON.stringify(user))
     }
    //lấy list user 
     var loadUser = function(){
         user = JSON.parse(localStorage.getItem('listUser'))
     }
     if (localStorage.getItem("listUser")!=null){
        
        loadUser();
     }
     saveUser();
// chức năng đăng kí
     var signIn = function (){
         var User = {
             id: "USER"+parseInt( user.length+1),
             username: document.getElementById("username").value,
             mail: document.getElementById("email").value,
             password:  document.getElementById("password").value,
             confirm:  document.getElementById("confirm").value,
             phone:  document.getElementById("phone").value,
             role : "user",
         }
         alert("Đăng kí thành công");
         user.push(User);
         localStorage.setItem('listUser',JSON.stringify(user));
         Save();
         window.location.href ='trangChu.html';
      window.location.reload();
     }
   // chức năng cập nhật thông tin của người dùng
     var signupArr = [];
     var saveLogin =function (){
        localStorage.setItem('Signup',JSON.stringify(signupArr))
    }
     var loadLogin = function(){
        signupArr = JSON.parse(localStorage.getItem('Signup'))
    }
    if (localStorage.getItem("Signup")!=null){
       
        loadLogin();
    }
// saveLogin();

        var signUp = function(){
            var k=-1;
            for (var i in user){
                var data = JSON.parse(JSON.stringify(user[i]))
                if (
                    ((document.getElementById("username").value == data.username) &&
                        (document.getElementById("password").value == data.password)
                        && (data.role == "admin")
                    )
                ) {
                    k = i;
                    alert("đăng nhập thành công");
        
                    window.location.href = '../html/trangChu.html'; 
                }
                if (
                    ((document.getElementById("name").value == data.username) &&
                        (document.getElementById("password").value == data.password)
                        && (data.role == "user")
                    )
                ) {
                            alert("đăng nhập thành công");
                               k=i; 
                                window.location.href = '../user/info.html';
                                var userLogin = {
                                    username: document.getElementById("name").value,
                                    password: document.getElementById("password").value
                                }     
                                signupArr.push(userLogin);

                                localStorage.setItem('Signup',JSON.stringify(signupArr));
                                
                                saveLogin();
                }
            }

            if (k == -1) {
                alert("đăng nhập không thành công");
            }
        }