class Student1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents1 = [];
class Classroom1 {
    constructor() {
        this.students = [];
    }
    showStudents() {
        if (this.students.length === 0) {
            console.log("Không có học sinh nào trong lớp.");
            return;
        }
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
        allStudents1.push(student);
    }
    addStudentInClass(indexId) {
        let index = allStudents1.findIndex(student => student.getId() === indexId);
        if (index !== -1) {
            this.students.push(allStudents1[index]);
            allStudents1.splice(index, 1);
        }
        else {
            console.log("Không tìm thấy học sinh với ID này.");
        }
    }
    removeStudent(id) {
        const index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            allStudents1.push(this.students[index]);
            this.students.splice(index, 1);
        }
        else {
            console.log("Không tìm thấy học sinh với ID này trong lớp.");
        }
    }
    editStudent(id, newName) {
        const student = this.students.find(student => student.getId() === id);
        if (student) {
            student['name'] = newName;
        }
        else {
            console.log("Không tìm thấy học sinh với ID này trong lớp.");
        }
    }
}
allStudents1.push(new Student1(1, "Nguyễn Văn A"));
allStudents1.push(new Student1(2, "Trần Thị B"));
allStudents1.push(new Student1(3, "Lê Văn C"));
allStudents1.push(new Student1(4, "Phạm Thị D"));
allStudents1.push(new Student1(5, "Nguyễn Thị E"));
allStudents1.push(new Student1(6, "Trần Văn F"));
let classroom1A = new Classroom1();
let classroom1B = new Classroom1();
classroom1A.addStudentInClass(1);
classroom1A.addStudentInClass(2);
classroom1A.addStudentInClass(3);
classroom1B.addStudentInClass(4);
classroom1B.addStudentInClass(5);
classroom1B.addStudentInClass(6);
console.log(`=== Lớp A ===`);
classroom1A.showStudents();
console.log(`=== Lớp B ===`);
classroom1B.showStudents();
classroom1A.removeStudent(2);
console.log(`=== Lớp A sau khi xóa học sinh ===`);
classroom1A.showStudents();
classroom1B.editStudent(5, "Nguyễn Thị X");
console.log(`=== Lớp B sau khi sửa tên học sinh  ===`);
classroom1B.showStudents();
