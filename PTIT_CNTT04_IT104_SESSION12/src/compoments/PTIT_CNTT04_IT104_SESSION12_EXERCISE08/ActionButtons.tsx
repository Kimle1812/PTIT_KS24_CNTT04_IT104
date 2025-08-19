interface ActionButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export default function ActionButtons({ onEdit, onDelete }: ActionButtonsProps) {
  return (
    <div className="action-buttons">
      <button onClick={onEdit} className="btn btn-edit">
        Sửa
      </button>
      <button onClick={onDelete} className="btn btn-delete">
        Xóa
      </button>
    </div>
  );
}