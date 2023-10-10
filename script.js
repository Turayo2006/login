function switchForm(className, e){
  e.preventDefault();
  const allForm = document.querySelectorAll('form');
  const form = document.querySelector(`form.${className}`);
  
  allForm.forEach(item=> {
    item.classList.remove('active');
  })
  
  form.classList.add('active');
}



function myfunc(){
  var username = document.getElementById("username").value
  
   var password = document.getElementById("password").value
   var confirm_password = document.getElementById("confirm_password").value
   if(username == "" || password == "" || confirm_password == ""){
     alert("Field is blank")
   }
  else{
    // setSuccessFor(username);
  }
}


