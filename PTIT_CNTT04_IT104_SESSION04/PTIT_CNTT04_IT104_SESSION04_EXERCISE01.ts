let students: string[] = ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C", "Phạm Thị D", "Nguyễn Thị E"];
function printStudents(students: string[]): void {
    for (let i = 0; i < students.length; i++) {
        console.log(`Sinh viên ${i + 1}: ${students[i]}`);
    }
}
printStudents(students);