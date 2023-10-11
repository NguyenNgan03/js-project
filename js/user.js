
  function showLoginForm() {
    document.getElementById('login-button').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  }

var user =
    [
        {
            id: "1",
            username: "Nguyễn Hoài",
            phone: "0395342134",
            email: "hoai.nguyen@gmail.com",
            password: "1",
            confirm_password:"1",
            role: "user"

        },
    ];

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