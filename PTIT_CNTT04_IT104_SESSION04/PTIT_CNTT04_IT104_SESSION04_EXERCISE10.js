function inputStudent() {
    var _a, _b;
    var id = (_a = prompt("Nhập mã học viên:")) !== null && _a !== void 0 ? _a : "";
    var name = (_b = prompt("Nhập tên học viên:")) !== null && _b !== void 0 ? _b : "";
    var scoreStr = prompt("Nhập điểm cuối khóa (hoặc để trống):");
    var hasCompletedStr = prompt("Đã hoàn thành khóa học? (yes/no):");
    return {
        id: id,
        name: name,
        finalScore: scoreStr ? parseFloat(scoreStr) : undefined,
        hasCompleted: (hasCompletedStr === null || hasCompletedStr === void 0 ? void 0 : hasCompletedStr.toLowerCase()) === "yes"
    };
}
function inputCourse() {
    var _a, _b, _c;
    var id = (_a = prompt("Nhập mã khóa học:")) !== null && _a !== void 0 ? _a : "";
    var name = (_b = prompt("Nhập tên khóa học:")) !== null && _b !== void 0 ? _b : "";
    var teacher = (_c = prompt("Nhập tên giảng viên:")) !== null && _c !== void 0 ? _c : "";
    var isOpenStr = prompt("Khóa học đang mở? (yes/no):");
    var studentCountStr = prompt("Số lượng học viên:");
    var students = [];
    var count = parseInt(studentCountStr !== null && studentCountStr !== void 0 ? studentCountStr : "0");
    for (var i = 0; i < count; i++) {
        alert("Nh\u1EADp th\u00F4ng tin h\u1ECDc vi\u00EAn th\u1EE9 ".concat(i + 1));
        students.push(inputStudent());
    }
    return {
        id: id,
        name: name,
        teacher: teacher,
        isOpen: (isOpenStr === null || isOpenStr === void 0 ? void 0 : isOpenStr.toLowerCase()) === "yes",
        students: students
    };
}
function getCompletedStudents(course) {
    return course.students.filter(function (student) { return student.hasCompleted; });
}
function calculateAverageScore(course) {
    var scoredStudents = course.students.filter(function (s) { return typeof s.finalScore === "number"; });
    if (scoredStudents.length === 0)
        return null;
    var totalScore = scoredStudents.reduce(function (sum, s) { var _a; return sum + ((_a = s.finalScore) !== null && _a !== void 0 ? _a : 0); }, 0);
    return parseFloat((totalScore / scoredStudents.length).toFixed(2));
}
function printCourseReport(manager) {
    manager.courses.forEach(function (course, index) {
        var totalStudents = course.students.length;
        var completedStudents = getCompletedStudents(course).length;
        var avgScore = calculateAverageScore(course);
        var status = course.isOpen ? "ĐANG MỞ" : "ĐÃ ĐÓNG";
        console.log("\n".concat(index + 1, ". Kh\u00F3a: ").concat(course.name, " (GV: ").concat(course.teacher, ")"));
        console.log("- T\u1ED5ng h\u1ECDc vi\u00EAn: ".concat(totalStudents));
        console.log("- Ho\u00E0n th\u00E0nh: ".concat(completedStudents, " h\u1ECDc vi\u00EAn"));
        console.log("- Trung b\u00ECnh \u0111i\u1EC3m: ".concat(avgScore !== null ? avgScore : "Chưa có điểm"));
        console.log("- Tr\u1EA1ng th\u00E1i: ".concat(status));
    });
}
// Dữ liệu mới
var courseTS = {
    id: "C101",
    name: "TypeScript Nâng Cao",
    teacher: "Phạm Quốc Hưng",
    isOpen: true,
    students: [
        { id: "ST01", name: "An", finalScore: 9.2, hasCompleted: true },
        { id: "ST02", name: "Bình", finalScore: 8.7, hasCompleted: true },
        { id: "ST03", name: "Chi", finalScore: 9.0, hasCompleted: true },
        { id: "ST04", name: "Duy", hasCompleted: false }
    ]
};
var courseReact = {
    id: "C202",
    name: "React + Redux Chuyên Sâu",
    teacher: "Lê Thị Thu",
    isOpen: false,
    students: [
        { id: "ST05", name: "Hà", finalScore: 8.5, hasCompleted: true },
        { id: "ST06", name: "Khôi", finalScore: 7.8, hasCompleted: true },
        { id: "ST07", name: "Lan", hasCompleted: false }
    ]
};
var manager = {
    courses: [courseTS, courseReact]
};
printCourseReport(manager);
