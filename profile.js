
const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

const student = JSON.parse(localStorage.getItem("student"));

if (!student) {
    alert("Student information not found.");
    window.location.href = "login.html";
}

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const rollNoInput = document.getElementById("rollNo");
const departmentInput = document.getElementById("department");
const facultyInput = document.getElementById("faculty");

const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");

// Load student data
nameInput.value = student.name;
emailInput.value = student.email;
rollNoInput.value = student.rollNo;
departmentInput.value = student.department;
facultyInput.value = student.faculty;

// Edit button
editBtn.addEventListener("click", () => {

    nameInput.disabled = false;
    emailInput.disabled = false;
    departmentInput.disabled = false;
    facultyInput.disabled = false;

    // Matric Number ba za a canja ba
    rollNoInput.disabled = true;

    editBtn.style.display = "none";
    saveBtn.style.display = "block";

});

// Save button (za mu haɗa da backend a mataki na gaba)
document.getElementById("profileForm").addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Perfect! Form is ready. Next step: Save to MongoDB 🚀");

});
