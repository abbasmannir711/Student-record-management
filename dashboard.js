const API_URL = "https://student-record-4qy2.onrender.com/api/students";

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


async function loadStudents() {

    try {

        const response = await fetch(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const students = await response.json();

        document.getElementById("totalStudents").textContent = students.length;

        const studentList = document.getElementById("studentList");

        studentList.innerHTML = "";

        students.forEach(student => {

            studentList.innerHTML += `
                <tr>
                    <td>${student.rollNo}</td>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.department}</td>
                    <td>${student.faculty}</td>
                </tr>
            `;

        });

    } catch (err) {

        console.log(err);

        alert("Unable to load students.");

    }

}

loadStudents();
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    const rows = document.querySelectorAll("#studentList tr");

    rows.forEach(row => {

        row.style.display = row.textContent
            .toLowerCase()
            .includes(keyword)
            ? ""
            : "none";

    });

});
