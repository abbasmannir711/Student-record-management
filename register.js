const API_URL = "https://student-record-4qy2.onrender.com/api/auth/register";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const user = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        rollNo: document.getElementById("rollNo").value.trim(),
        department: document.getElementById("department").value.trim(),
        faculty: document.getElementById("faculty").value.trim(),
        password: password
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

        if (response.ok) {
            alert("Registration Successful!");

            window.location.href = "login.html";
        } else {
            alert(data.message || "Registration Failed");
        }

    } catch (error) {
        console.error(error);
        alert("Unable to connect to server.");
    }
});
