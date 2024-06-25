var currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (currentUser) {
    document.getElementById('text').innerHTML = `Welcome, ${currentUser.name}!`;
} else {
    document.getElementById('text').innerHTML = 'No user is currently logged in.';
}
function logout(){
  currentUser=""
  
}