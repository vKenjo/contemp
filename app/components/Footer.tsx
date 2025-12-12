import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

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
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <Image
                src="/authentika_logo.svg"
                alt="AuthentiKa"
                width={140}
                height={40}
                style={{ height: "40px", width: "auto" }}
              />
            </div>
            <p
              style={{
                color: "var(--gray-600)",
                fontSize: "17px",
                lineHeight: 1.6,
              }}
            >
              Helping elderly communities detect AI-generated content and stay safe online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "20px", color: "var(--gray-600)" }}>
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <Link href="/" style={{ color: "var(--gray-600)", textDecoration: "none", fontSize: "17px" }}>
                Home
              </Link>
              <Link href="/learn" style={{ color: "var(--gray-600)", textDecoration: "none", fontSize: "17px" }}>
                Learn to Detect AI
              </Link>
              <Link href="/community" style={{ color: "var(--gray-600)", textDecoration: "none", fontSize: "17px" }}>
                Community Workshops
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "20px", color: "var(--gray-600)" }}>
              Need Help?
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gray-600)", fontSize: "17px" }}>
                <Mail size={20} />
                <span>help@authentika.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gray-600)", fontSize: "17px" }}>
                <Phone size={20} />
                <span>1-800-AUTH-HELP</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gray-600)", fontSize: "17px" }}>
                <MessageCircle size={20} />
                <span>We're here to help</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--gray-300)",
            paddingTop: "24px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "var(--gray-500)", fontSize: "16px", margin: 0 }}>
            © 2025 AuthentiKa. Made with care for our elderly community.
          </p>
        </div>
      </div>
    </footer>
  );
}
