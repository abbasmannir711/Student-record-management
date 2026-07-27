
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

    // Matric Number  za a canja 
    rollNoInput.disabled = false;

    editBtn.style.display = "none";
    saveBtn.style.display = "block";

});

// Save button to backend )
document.getElementById("profileForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    try {

        const response = await fetch(
            "https://student-record-4qy2.onrender.com/api/auth/profile",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    department: departmentInput.value.trim(),
                    faculty: facultyInput.value.trim()
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        localStorage.setItem(
            "student",
            JSON.stringify(data.student)
        );

        alert("✅ Profile Updated Successfully!");

        nameInput.disabled = true;
        emailInput.disabled = true;
        departmentInput.disabled = true;
        facultyInput.disabled = true;

        editBtn.style.display = "block";
        saveBtn.style.display = "none";

    } catch (error) {

        console.log(error);

        

    alert(
        "Name: " + error.name +
        "\nMessage: " + error.message
    );


    }

});
