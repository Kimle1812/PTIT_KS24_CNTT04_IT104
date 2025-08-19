//generic
//giúp viết mã linh hoạt, tái sử dụng cao
function generic(){

}
//Các loại generic
//1.Kiểu mảng
let number:Array<number> = [1,2,3,4];
let studentName:Array<string> = ["kimkim", "nguyenle"];
//2.Kiểu Record(mô tả kiểu dữ liệu của key và value)
let user_info: Record<string,string|number> = {
    name:"nhung",
    agr:20
}
//3.Kiểu Partial(kiểu tùy chọn, lựa chọn)
interface Contact {
    email:string,
    phone:string
}
let partitalUser:Partial<Contact> = {
    email:"hsdbjhd@gmail.com"
}
//4.Kiểu Readonly (chỉ đọc, hiển thị, không được cập nhập chỉnh sửa)
interface Score{
    math:number,
    phylic:number
}
let score1:Readonly<Score> = {
    math:10,
    phylic:5
}
//5.Pick(tùy chọn)
interface User {
    id:number,
    name:string,
    email:string,
    address:string
}
let user1:Pick<User,"name" | "id"> = {
    name:"hoa",
    id:3
}
//6.Omit(loại bỏ một số key không cần thiết)
let user2:Omit<User,"salary"> = {
    id:8,
    name:"hoa",
    email:"jhgfdghj",
    address:"jhdhbhsdbh"
}