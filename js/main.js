//Sign In  ----->
document.getElementById('signInBtn').addEventListener('click', function() {
    // Retrieve input values
    let AccNameInput = document.getElementById('Name').value;
    let AccEmailInput = document.getElementById('email').value;
    let AccPassInput = document.getElementById('pass').value;
    let valid = true;
  
    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    if (!AccNameInput) { // Validate name
      document.getElementById('nameError').textContent = 'Name is required';
      valid = false;
    }
    if (!AccEmailInput) {    // Validate for email
      document.getElementById('emailError').textContent = 'Email is required';
      valid = false;
    } else if (!validateEmail(AccEmailInput)) {
      document.getElementById('emailError').textContent = 'Invalid email format';
      valid = false;
    }
if (!AccPassInput) { // Validation for pass
      document.getElementById('passwordError').textContent = 'Password is required';
      valid = false;
    } else {
      validatePassword(AccPassInput);
    }
    if (valid) {
      let users = JSON.parse(localStorage.getItem('users')) || [];
      let userExists = false;
      for (let i = 0; i < users.length; i++) { //  check user mwgog wla la
        if (users[i].email === AccEmailInput) {
          userExists = true;
          break;
        }
      }
    if (userExists) {
        document.getElementById('emailError').textContent = 'Email is already registered. Please use a different email.';
      } else {
        users.push({ name: AccNameInput, email: AccEmailInput, password: AccPassInput });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Sign in successful! You can now log in.');
     }
    }
    function validateEmail(email) {
      let emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailTest.test(email.toLowerCase());
    }
  
    function validatePassword(password) {
      let passErrorText = [];
      if (password.length < 8) {
        passErrorText.push('Password must be at least 8 characters long');
      }
      if (!/[A-Z]/.test(password)) {
        passErrorText.push('Password must contain at least one uppercase letter');
      }
      if (/\s/.test(password)) {
        passErrorText.push('Password must not contain spaces');
      }
      if (passErrorText.length > 0) {
        document.getElementById('passwordError').textContent = passErrorText.join('. ');
        valid = false;
      }
    }
  });
// log in -------->
function login() {
    var email = document.getElementById('emailLog').value;
    var password = document.getElementById('passwordLog').value;
    var users = JSON.parse(localStorage.getItem('users')) || [];
    console.log("Stored Users:", users);
    // bdwr 3la al user
    var user = users.find(user => user.email === email && user.password === password);
    console.log("Found User:", user);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user)); // h-Save current user 3lshan agybo fe page home b3d keda
      window.location.href = `home.html?name=${user.name}&email=${user.email}`;
    } else {
      window.alert('Invalid email or password. Please try again.');
    }
  }

//a-show div and hide another
function showSignIn() {
    document.getElementById('signIn').style.display = 'block';
    document.getElementById('logIn').style.display = 'none';
  }
  
  function showLogIn() {
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('logIn').style.display = 'block';
  }
  function startbtn() {
    document.getElementById('contentContainer').style.cssText = 'display: none !important;';

}

document.getElementById('startbtn').addEventListener('click', startbtn);