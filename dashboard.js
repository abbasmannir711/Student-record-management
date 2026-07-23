const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

const student = JSON.parse(localStorage.getItem("student"));

document.getElementById("welcome").textContent =
`Welcome, ${student.name}`;

document.getElementById("logoutBtn").addEventListener("click", () => {

    localStorage.removeItem("token");

    localStorage.removeItem("student");

    window.location.href = "login.html";

});
