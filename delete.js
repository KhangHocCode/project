function deleteStudent(studentID) {
    const studentIndex = students.findIndex((s) => s.id === studentID);

    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
        alert(`Đã xóa sinh viên với mã ${studentID}.`);
    } else {
        alert("Sinh viên không tồn tại.");
    }

    displayTeams(); // Cập nhật giao diện
}

// Shuffle students array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}