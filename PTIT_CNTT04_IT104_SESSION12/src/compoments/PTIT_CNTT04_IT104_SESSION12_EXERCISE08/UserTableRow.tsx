import ActionButtons from "./ActionButtons";
interface User {
  name: string;
  dob: string;
  gender: string;
  address: string;
}

interface UserTableRowProps {
  index: number;
  user: User;
  onEdit: () => void;
  onDelete: () => void;
}

export default function UserTableRow({ index, user, onEdit, onDelete }: UserTableRowProps) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.dob}</td>
      <td>{user.gender}</td>
      <td>{user.address}</td>
      <td>
        <ActionButtons onEdit={onEdit} onDelete={onDelete} />
      </td>
    </tr>
  );
}