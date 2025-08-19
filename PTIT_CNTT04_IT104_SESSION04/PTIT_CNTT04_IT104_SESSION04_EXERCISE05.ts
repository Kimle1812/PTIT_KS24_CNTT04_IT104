interface Person {
    name: string;
    age: number;
}
interface Employee  {
    employeeId: string;
    department: string;
}

type StaffMember = Person & Employee;

let staff1: StaffMember = {
    name: "Nguyễn Văn A",
    age: 30,
    employeeId: "EMP001",
    department: "Kế toán"
};
function printStaffInfo(staff: StaffMember): void {
    console.log(`Nhân viên: ${staff.name} (${staff.age}), Mã nhân viên: ${staff.employeeId} - Phòng ban: ${staff.department}`);
}
printStaffInfo(staff1);