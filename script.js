
const darkModeBtn = document.getElementById('dark-mode-btn');
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
 (localStorage.getItem('darkModeEnabled')) {
 enableDarkMode();
}


darkModeBtn.addEventListener('click', () => {
 if (localStorage.getItem('darkModeEnabled')) {
  localStorage.removeItem('darkModeEnabled');
 } else {
  localStorage.setItem('darkModeEnabled', true);
 }
 enableDarkMode();
});


function enableDarkMode() {
 document.body.classList.toggle('dark-mode');
}