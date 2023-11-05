// function forgetpassword() {
//   var email1 = document.getElementById("loginEmail").value;
//   fetch("http://localhost:3000/user")
//     .then(res => res.json())
//     .then(data => {
//       var user = data.find(function(x) {
//         return x.email === email1;
//       });
//       if (!user) {
//         alert("User not found");
//         return;
//       }

//       // Check if the email is empty
//       if (email1 === "") {
//         alert("Please re-enter");
//         return;
//       }

//       // Send email using SendGrid
//       const msg = {
//         to: user.email,
//         from: 'eunwoo565@gmail.com', // Replace with your email address
//         subject: 'Forgot Password',
//         text: `We are sending you this notification because you forgot your password. Your password is: ${user.password}`,
//       };

//       sgMail.send(msg)
//         .then(() => {
//           alert("Email has been sent");
//         })
//         .catch((error) => {
//           console.error(error);
//           alert("Email could not be sent");
//         });
//     })
//     .catch(function(error) {
//       console.error('Error:', error);
//       alert("An error occurred while fetching user data");
//     });
// }
var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'eunwoo565@gmail.com',
      pass: 'Aa11;;@@'
    }
  });
  // hung.nguyenvan2507@gmail.com
  var mailOptions = {
    from: 'eunwoo565@gmail.com',
    to: 'hoai.nguyen25@student.passerellesnumeriques.org',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
function forgetpassword() {
  console.log("product");
  

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
