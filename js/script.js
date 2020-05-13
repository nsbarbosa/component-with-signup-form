  function validar() {
    var Username = document.getElementById("Username")
    var UserNameError = document.getElementById("UsernameError")
    if (Username.value.length < 1) {
      Username.className = 'input-error'
      UserNameError.className = 'text-error'
    }
    else {
      Username.classList.remove('input-error')
      UserNameError.className = 'display-none'      
    }
    var LastName = document.getElementById("LastName")
    var LastNameError = document.getElementById("LastNameError")
    if (LastName.value.length < 1) {
      LastName.className = 'input-error'
      LastNameError.className = 'text-error'
    }
    else {
      LastName.classList.remove('input-error')
      LastNameError.className = 'display-none'
    }
    var Email = document.getElementById("Email")
    var EmailError = document.getElementById("EmailError")
    if (Email.value.includes('@')){
      var str = Email.value.split("@");
      if(str[0].length < 1 || str[1].length < 1){
        Email.className = 'input-error'
        EmailError.className = 'text-error'
      }
      else {
        Email.classList.remove('input-error')
        EmailError.className = 'display-none'
      }  
    }
    else{
      Email.className = 'input-error'
      EmailError.className = 'text-error'
    }
    var Password = document.getElementById("Password")
    var PasswordError = document.getElementById("PasswordError")
    if (Password.value.length < 1) {
      Password.className = 'input-error'
      PasswordError.className = 'text-error'
    }
    else {
      Password.classList.remove('input-error')
      PasswordError.className = 'display-none'
    }
  }