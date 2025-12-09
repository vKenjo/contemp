interface FeatureCardProps {
  icon: string;
  iconColor: "blue" | "green" | "orange" | "purple" | "red";
  title: string;
  description: string;
}

export default function FeatureCard({ icon, iconColor, title, description }: FeatureCardProps) {
  const colorClass = `icon-${iconColor}`;
  
  return (
    <div className="card" style={{ padding: "32px" }}>
      <div className={`icon-container ${colorClass}`} style={{ marginBottom: "20px" }}>
        {icon}
      </div>
      <h3 style={{ fontSize: "20px", marginBottom: "12px", fontWeight: 600 }}>
        {title}
      </h3>
      <p style={{ color: "var(--gray-500)", fontSize: "16px", lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
    </div>
  );
}
