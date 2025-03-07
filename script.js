document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript telah dimuat!");

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah reload halaman

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (username === "admin" && password === "1234") {
            alert("Login berhasil! Selamat datang, " + username);
        } else {
            alert("Username atau password salah!");
        }
    });
});
