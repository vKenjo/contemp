import Link from "next/link";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  const features = [
    {
      icon: "📚",
      iconColor: "blue" as const,
      title: "Learn About AI",
      description: "Simple, easy-to-understand lessons about artificial intelligence and how it affects your daily life.",
    },
    {
      icon: "📸",
      iconColor: "green" as const,
      title: "Photo Protection",
      description: "Understand the value of your photos and learn how to protect your precious memories from AI misuse.",
    },
    {
      icon: "👥",
      iconColor: "purple" as const,
      title: "Community Hub",
      description: "Connect with others, share experiences, and learn together in a safe, supportive environment.",
    },
    {
      icon: "🛡️",
      iconColor: "orange" as const,
      title: "Safety Tips",
      description: "Practical advice for staying safe online and using AI tools responsibly in your daily life.",
    },
  ];

  const stats = [
    { number: "78%", label: "of seniors concerned about AI privacy" },
    { number: "3.2B", label: "photos shared online daily" },
    { number: "65%", label: "unaware of photo data usage" },
    { number: "100%", label: "of your memories worth protecting" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: "100px 24px 80px",
          textAlign: "center",
          background: "linear-gradient(180deg, var(--gray-50) 0%, var(--background) 100%)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            className="badge badge-blue"
            style={{ marginBottom: "24px" }}
          >
            🌟 Empowering Seniors in the Age of AI
          </div>
          
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 700,
              marginBottom: "24px",
              lineHeight: 1.1,
            }}
          >
            Navigate AI with{" "}
            <span className="text-gradient">Confidence</span>
          </h1>
          
          <p
            className="text-accessible"
            style={{
              color: "var(--gray-500)",
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            WiseGuard AI helps elderly community members understand, use, and stay safe 
            with artificial intelligence. Learn to protect your photos, your data, and 
            your digital life.
          </p>
          
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/learn" className="btn-primary">
              Start Learning →
            </Link>
            <Link href="/photo-protection" className="btn-secondary">
              Protect Your Photos
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: "40px 24px" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
            textAlign: "center",
          }}
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: 700,
                  color: "var(--primary)",
                  marginBottom: "8px",
                }}
              >
                {stat.number}
              </div>
              <p style={{ color: "var(--gray-500)", fontSize: "15px", margin: 0 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "40px", marginBottom: "16px" }}>
              Everything You Need to Stay Safe
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
              Our app provides comprehensive resources designed specifically for seniors 
              to navigate the world of AI safely.
            </p>
          </div>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Value Section */}
      <section className="section-padding">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "64px",
              alignItems: "center",
            }}
          >
            <div>
              <div className="badge badge-green" style={{ marginBottom: "16px" }}>
                📸 Your Photos Have Value
              </div>
              <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
                Your Memories Are Precious—And Valuable
              </h2>
              <p className="text-accessible" style={{ color: "var(--gray-500)", marginBottom: "24px" }}>
                Did you know? Every photo you share online could be used to train AI systems. 
                Your family photos, your life moments—they have real value in the digital world.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "AI companies use photos to train facial recognition",
                  "Your images can be used without your knowledge",
                  "Family photos may appear in AI-generated content",
                  "Your likeness has monetary value to tech companies",
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      marginBottom: "16px",
                      fontSize: "16px",
                    }}
                  >
                    <span style={{ color: "var(--warning)", fontSize: "18px" }}>⚠️</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/photo-protection" className="btn-primary" style={{ marginTop: "16px" }}>
                Learn How to Protect Your Photos
              </Link>
            </div>
            
            <div
              style={{
                background: "linear-gradient(135deg, var(--gray-100), var(--gray-200))",
                borderRadius: "24px",
                padding: "48px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "80px", marginBottom: "24px" }}>📷</div>
              <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>
                The Data Behind Your Photos
              </h3>
              <div style={{ textAlign: "left" }}>
                {[
                  { label: "Location Data", icon: "📍" },
                  { label: "Date & Time", icon: "📅" },
                  { label: "Device Info", icon: "📱" },
                  { label: "Facial Features", icon: "👤" },
                  { label: "Background Details", icon: "🏠" },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 0",
                      borderBottom: index < 4 ? "1px solid var(--gray-300)" : "none",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>{item.icon}</span>
                    <span style={{ fontSize: "16px" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
            Join Our Caring Community
          </h2>
          <p className="text-accessible" style={{ color: "var(--gray-500)", marginBottom: "40px" }}>
            You are not alone in this journey. Connect with thousands of seniors who are 
            learning together, sharing experiences, and supporting each other.
          </p>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            {[
              { icon: "👨‍👩‍👧‍👦", label: "10,000+ Members" },
              { icon: "💬", label: "24/7 Support" },
              { icon: "📖", label: "Weekly Workshops" },
              { icon: "🤝", label: "Local Meetups" },
            ].map((item, index) => (
              <div
                key={index}
                className="card"
                style={{ padding: "24px", textAlign: "center" }}
              >
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>{item.icon}</div>
                <p style={{ fontSize: "16px", fontWeight: 500, margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
          
          <Link href="/community" className="btn-primary">
            Join the Community →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "100px 24px",
          background: "linear-gradient(135deg, var(--primary), var(--secondary))",
          textAlign: "center",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px", marginBottom: "20px", color: "white" }}>
            Start Your AI Safety Journey Today
          </h2>
          <p style={{ fontSize: "18px", marginBottom: "40px", opacity: 0.9 }}>
            It is never too late to learn. Take control of your digital life and 
            protect what matters most to you.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/learn"
              style={{
                background: "white",
                color: "var(--primary)",
                padding: "16px 32px",
                borderRadius: "12px",
                fontWeight: 500,
                fontSize: "17px",
                textDecoration: "none",
              }}
            >
              Begin Learning
            </Link>
            <Link
              href="/tips"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                color: "white",
                padding: "16px 32px",
                borderRadius: "12px",
                fontWeight: 500,
                fontSize: "17px",
                textDecoration: "none",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              View Safety Tips
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
