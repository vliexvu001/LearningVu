document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript telah dimuat!");

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah reload halaman

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        // Cek ID dan Password (contoh: ID = admin, Password = 1234)
        if (username === "admin" && password === "1234") {
            document.getElementById("message").innerText = "Login berhasil!";
            document.getElementById("message").style.color = "green";
        } else {
            document.getElementById("message").innerText = "ID atau password salah.";
            document.getElementById("message").style.color = "red";
        }
    });
});
