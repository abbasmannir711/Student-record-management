
const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

const student = JSON.parse(localStorage.getItem("student"));

if (!student) {
    alert("Student information not found.");
    window.location.href = "login.html";
}

document.getElementById("name").textContent = student.name;
document.getElementById("email").textContent = student.email;
document.getElementById("rollNo").textContent = student.rollNo;
document.getElementById("department").textContent = student.department;
document.getElementById("faculty").textContent = student.faculty;

document.getElementById("editBtn").addEventListener("click", () => {
    alert("Edit Profile feature coming in the next step 🚀");
});
