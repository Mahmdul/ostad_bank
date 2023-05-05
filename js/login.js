
// Elements
const loginSubmit = document.getElementById('login-submit');
const userEmail= document.getElementById('user-email');
const userPassword = document.getElementById('user-password');


loginSubmit.addEventListener('click', function(){
   const userEmailText=userEmail.value;  
  const userPasswordText=userPassword.value;

  if(userEmailText=="laravel@ostad.com" && userPasswordText=="1234"){
    window.location.href = "banking.html"
  }
  
})

