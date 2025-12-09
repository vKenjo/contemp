interface ChecklistItemProps {
  text: string;
  checked?: boolean;
}

export default function ChecklistItem({ text, checked = true }: ChecklistItemProps) {
  return (
    <div className="checklist-item">
      <div
        className="checklist-icon"
        style={{
          background: checked ? "var(--success)" : "var(--gray-300)",
        }}
      >
        {checked ? "✓" : "○"}
      </div>
      <p style={{ fontSize: "17px", lineHeight: 1.6, margin: 0 }}>{text}</p>
    </div>
  );
}
