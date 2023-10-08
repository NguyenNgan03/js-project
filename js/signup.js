function signup(){
    event.preventDefault();
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var re_password = document.getElementById("re_password");
    var phone = document.getElementById("phone");
    var user = {
        username : username,
        email : email,
        password : password,
        re_password : re_password,
        phone : phone,   
    }
    var json = JSON.stringify(user);
    localStorage.set
}