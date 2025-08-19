import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";

interface User {
  name: string;
  dob: string;
  gender: string;
  address: string;
}

export default function UserTable() {
  const users: User[] = [
    { name: "Malcolm Lockyer", dob: "21/03/1961", gender: "Nam", address: "New york" },
    { name: "Maria", dob: "11/02/1990", gender: "Nữ", address: "London" },
  ];

  const handleEdit = (user: User) => alert(`Sửa: ${user.name}`);
  const handleDelete = (user: User) => alert(`Xóa: ${user.name}`);

  return (
    <div className="table-container">
      <table className="user-table">
        <UserTableHeader />
        <tbody>
          {users.map((user, index) => (
            <UserTableRow
              key={index}
              index={index}
              user={user}
              onEdit={() => handleEdit(user)}
              onDelete={() => handleDelete(user)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
