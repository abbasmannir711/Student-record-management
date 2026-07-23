const API_URL = "https://student-record-4qy2.onrender.com/api/auth/login";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const user = {
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value
    };

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Login Failed");
            return;
        }

        // Save JWT Token
        localStorage.setItem("token", data.token);

        // Save logged-in student
        localStorage.setItem("student", JSON.stringify(data.student));

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } catch (err) {

        console.error(err);
        alert("Unable to connect to server.");

    }

});
