
export default function FormatName() {
  function formatName(user: { firstName: string; lastName: string }) {
    return `${user.firstName} ${user.lastName}`;
  }
  const user = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",
  };

  return (
    <div>
      <h2>Họ và tên: {formatName(user)}</h2>
    </div>
  )
}
