interface InfoCardProps {
  number?: string;
  title: string;
  description: string;
  badge?: string;
  badgeColor?: "blue" | "green";
}

export default function InfoCard({ number, title, description, badge, badgeColor = "blue" }: InfoCardProps) {
  return (
    <div
      className="card"
      style={{
        padding: "28px",
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
      }}
    >
      {number && (
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--primary), var(--secondary))",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          {number}
        </div>
      )}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: 600, margin: 0 }}>{title}</h3>
          {badge && (
            <span className={`badge badge-${badgeColor}`}>{badge}</span>
          )}
        </div>
        <p style={{ color: "var(--gray-500)", fontSize: "16px", lineHeight: 1.6, margin: 0 }}>
          {description}
        </p>
      </div>
    </div>
  );
}
