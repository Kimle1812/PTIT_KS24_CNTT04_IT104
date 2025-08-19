export default function UserInfo() {
    let user = {name:"Nguyễn Văn A", genre:"Nam", date:"06/03/2024", email:"nva@gmail.com", address:"Thanh Xuân, Hà Nội"}
  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <ul>
        <li>Họ và tên: <b>{user.name}</b></li>
        <li>Giới tính: <b>{user.genre}</b></li>
        <li>Ngày sinh: <b>{user.date}</b></li>
        <li>Email: <b>{user.email}</b></li>
        <li>Địa chỉ: <b>{user.address}</b></li>
      </ul>

    </div>
  )
}
