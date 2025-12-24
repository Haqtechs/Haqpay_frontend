// script.js
const API_BASE = 'https://haqpay-backend.onrender.com';

// Signup
async function signup(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    const res = await fetch(`${API_BASE}/signup`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    });

    const data = await res.json();
    alert(data.message);
    if(res.status === 201) window.location.href = 'login.html';
}

// Login
async function login(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    });

    const data = await res.json();
    alert(data.message);
    if(res.status === 200) window.location.href = 'index.html';
}

// Homepage fetch (optional)
async function loadHome() {
    const res = await fetch(`${API_BASE}/home`);
    const data = await res.json();
    document.getElementById('home-message').innerText = data.message;
}
