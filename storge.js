document.querySelector("#save").addEventListener("click", () => {
    const studentName = document.getElementById('defaultStudentName').value;
    const studentID = document.getElementById('defaultStudentID').value;
    const teamNumber = document.getElementById('defaultTeam').value;
    if(studentName && studentID && teamNumber) {
        const studentData = {
            name: studentName,
            id: studentID,
            team: teamNumber
        };
        localStorage.setItem(studentID, JSON.stringify(studentData));
    }
    console.log(localStorage.getItem('studentID'));

    // Lưu toàn bộ danh sách sinh viên vào localStorage
    localStorage.setItem('students', JSON.stringify(students));
});

document.querySelector('#delete').addEventListener('click', () => {
   localStorage.removeItem('studentID');
});
