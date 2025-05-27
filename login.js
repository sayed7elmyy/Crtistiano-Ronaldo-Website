function validateLogin() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
    
    if (username === storedUsername && password === storedPassword) {
        alert("Signed in Successfully");
        return true;
    } else {
        alert("Incorrect username or password");
        return false;
    }
}

function registerUser() {
    var username = document.getElementById("signup-username").value;
    var password = document.getElementById("signup-password").value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert("Registration successful. You can now log in.");
    toggleForms();
    return false;
}

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}