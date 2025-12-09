import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--gray-100)",
        padding: "64px 24px 32px",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                🛡️
              </div>
              <span style={{ fontWeight: 600, fontSize: "18px" }}>WiseGuard AI</span>
            </div>
            <p
              style={{
                color: "var(--gray-500)",
                fontSize: "15px",
                lineHeight: 1.6,
              }}
            >
              Empowering seniors to navigate AI safely and protect their digital memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "16px", color: "var(--gray-400)" }}>
              QUICK LINKS
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/learn" style={{ color: "var(--gray-600)", textDecoration: "none", fontSize: "15px" }}>
                Learn About AI
              </Link>
              <Link href="/photo-protection" style={{ color: "var(--gray-600)", textDecoration: "none", fontSize: "15px" }}>
                Photo Protection
              </Link>
              <Link href="/community" style={{ color: "var(--gray-600)", textDecoration: "none", fontSize: "15px" }}>
                Community Hub
              </Link>
              <Link href="/tips" style={{ color: "var(--gray-600)", textDecoration: "none", fontSize: "15px" }}>
                Safety Tips
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "16px", color: "var(--gray-400)" }}>
              RESOURCES
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/about" style={{ color: "var(--gray-600)", textDecoration: "none", fontSize: "15px" }}>
                About Us
              </Link>
              <Link href="/tips#faq" style={{ color: "var(--gray-600)", textDecoration: "none", fontSize: "15px" }}>
                FAQ
              </Link>
              <Link href="/community#events" style={{ color: "var(--gray-600)", textDecoration: "none", fontSize: "15px" }}>
                Events
              </Link>
              <Link href="/learn#glossary" style={{ color: "var(--gray-600)", textDecoration: "none", fontSize: "15px" }}>
                AI Glossary
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "16px", color: "var(--gray-400)" }}>
              GET IN TOUCH
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ color: "var(--gray-600)", fontSize: "15px", margin: 0 }}>
                📧 support@wiseguardai.app
              </p>
              <p style={{ color: "var(--gray-600)", fontSize: "15px", margin: 0 }}>
                📞 1-800-WISE-GUARD
              </p>
              <p style={{ color: "var(--gray-600)", fontSize: "15px", margin: 0 }}>
                💬 24/7 Help Available
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--gray-200)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <p style={{ color: "var(--gray-400)", fontSize: "14px", margin: 0 }}>
            © 2025 WiseGuard AI. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="#" style={{ color: "var(--gray-400)", textDecoration: "none", fontSize: "14px" }}>
              Privacy Policy
            </Link>
            <Link href="#" style={{ color: "var(--gray-400)", textDecoration: "none", fontSize: "14px" }}>
              Terms of Service
            </Link>
            <Link href="#" style={{ color: "var(--gray-400)", textDecoration: "none", fontSize: "14px" }}>
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
