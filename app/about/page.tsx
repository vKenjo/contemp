import Link from "next/link";

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & AI Ethics Expert",
      description: "Former tech executive dedicated to making AI accessible and safe for everyone.",
    },
    {
      name: "Michael Torres",
      role: "Community Director",
      description: "20+ years in senior services, passionate about bridging the digital divide.",
    },
    {
      name: "Linda Williams",
      role: "Education Lead",
      description: "Former teacher specializing in adult education and technology literacy.",
    },
    {
      name: "Robert Kim",
      role: "Privacy Advocate",
      description: "Cybersecurity expert focused on protecting vulnerable communities.",
    },
  ];

  const values = [
    {
      icon: "💡",
      title: "Clarity",
      description: "We explain complex topics in simple, jargon-free language that everyone can understand.",
    },
    {
      icon: "🤝",
      title: "Respect",
      description: "We honor the wisdom and experience of our senior community members.",
    },
    {
      icon: "🔒",
      title: "Privacy",
      description: "We practice what we preach—your data is always protected with us.",
    },
    {
      icon: "❤️",
      title: "Empowerment",
      description: "We believe everyone deserves to feel confident in the digital world.",
    },
  ];

  const milestones = [
    { year: "2023", event: "WiseGuard AI founded with a mission to help seniors" },
    { year: "2023", event: "Launched first pilot program with 100 seniors" },
    { year: "2024", event: "Expanded to 50 communities nationwide" },
    { year: "2024", event: "Released mobile app for easier access" },
    { year: "2025", event: "Reached 10,000+ active community members" },
    { year: "2025", event: "Partnered with major senior centers across the country" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: "80px 24px 60px",
          textAlign: "center",
          background: "linear-gradient(180deg, var(--gray-50) 0%, var(--background) 100%)",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="badge badge-blue" style={{ marginBottom: "16px" }}>
            🛡️ About WiseGuard AI
          </div>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Empowering Seniors in the{" "}
            <span className="text-gradient">Age of AI</span>
          </h1>
          <p className="text-accessible" style={{ color: "var(--gray-500)" }}>
            We believe everyone deserves to feel safe and confident navigating 
            artificial intelligence—regardless of age or technical background.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "64px",
              alignItems: "center",
            }}
          >
            <div>
              <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Our Mission</h2>
              <p className="text-accessible" style={{ color: "var(--gray-500)", marginBottom: "20px" }}>
                WiseGuard AI was created with one simple goal: to help elderly community 
                members understand and safely use artificial intelligence while protecting 
                their most precious digital assets—their memories and personal data.
              </p>
              <p className="text-accessible" style={{ color: "var(--gray-500)" }}>
                We recognized that seniors are often left behind in conversations about 
                technology and AI. But your photos, your data, and your digital presence 
                matter. You deserve to understand how they are being used and how to 
                protect them.
              </p>
            </div>
            <div
              style={{
                background: "var(--gray-100)",
                borderRadius: "24px",
                padding: "48px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "80px", marginBottom: "24px" }}>🛡️</div>
              <p style={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px" }}>
                Our Promise
              </p>
              <p style={{ color: "var(--gray-500)", fontSize: "16px", lineHeight: 1.7, margin: 0 }}>
                No jargon. No judgment. Just clear, compassionate guidance to help you 
                thrive in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>Our Values</h2>
            <p style={{ color: "var(--gray-500)", fontSize: "18px" }}>
              The principles that guide everything we do
            </p>
          </div>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
            }}
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="card"
                style={{ padding: "32px", textAlign: "center" }}
              >
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>{value.icon}</div>
                <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>{value.title}</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "15px", margin: 0, lineHeight: 1.6 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Photo Protection Matters */}
      <section className="section-padding">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
              Why We Focus on Photo Protection
            </h2>
          </div>
          
          <div className="card" style={{ padding: "40px" }}>
            <p className="text-accessible" style={{ color: "var(--gray-500)", marginBottom: "24px" }}>
              Your photos are more than just images—they are your memories, your family 
              history, and your life story. In the age of AI, these precious memories 
              have become valuable data.
            </p>
            <p className="text-accessible" style={{ color: "var(--gray-500)", marginBottom: "24px" }}>
              Many seniors have decades of photos that they have lovingly preserved—wedding 
              photos, baby pictures, family reunions, and milestone celebrations. When 
              these photos are shared online without understanding the implications, they 
              can be used to:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
              {[
                "Train facial recognition AI systems",
                "Create AI-generated content using your likeness",
                "Build profiles about your family and habits",
                "Target you with personalized scams",
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "12px",
                    fontSize: "17px",
                  }}
                >
                  <span style={{ color: "var(--warning)" }}>⚠️</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-accessible" style={{ color: "var(--gray-500)", margin: 0 }}>
              We are here to help you understand these risks and take simple steps to 
              protect what matters most—without giving up the joy of sharing memories 
              with loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>Our Journey</h2>
            <p style={{ color: "var(--gray-500)", fontSize: "18px" }}>
              From a small idea to a thriving community
            </p>
          </div>
          
          <div style={{ position: "relative" }}>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "24px",
                  marginBottom: index < milestones.length - 1 ? "32px" : 0,
                }}
              >
                <div
                  style={{
                    width: "80px",
                    flexShrink: 0,
                    textAlign: "right",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color: "var(--primary)",
                      fontSize: "15px",
                    }}
                  >
                    {milestone.year}
                  </span>
                </div>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "var(--primary)",
                    flexShrink: 0,
                    marginTop: "6px",
                  }}
                />
                <div className="card" style={{ flex: 1, padding: "16px 20px" }}>
                  <p style={{ fontSize: "16px", margin: 0 }}>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>Meet Our Team</h2>
            <p style={{ color: "var(--gray-500)", fontSize: "18px" }}>
              Dedicated professionals who care about your digital wellbeing
            </p>
          </div>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {team.map((member, index) => (
              <div
                key={index}
                className="card"
                style={{ padding: "32px", textAlign: "center" }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                    margin: "0 auto 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "32px",
                  }}
                >
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 style={{ fontSize: "18px", marginBottom: "4px" }}>{member.name}</h3>
                <p style={{ color: "var(--primary)", fontSize: "14px", marginBottom: "12px" }}>
                  {member.role}
                </p>
                <p style={{ color: "var(--gray-500)", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Mission Statement */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>
            WiseGuard AI: A Mobile App for Community Engagement
          </h2>
          <p className="text-accessible" style={{ color: "var(--gray-500)", marginBottom: "32px" }}>
            WiseGuard AI is more than an educational platform—it is a mobile application 
            designed to improve community engagement among elderly users. By providing 
            accessible AI safety education, photo protection tools, and a supportive 
            community hub, we help seniors stay connected, informed, and protected in 
            the digital age.
          </p>
          <div
            className="card"
            style={{
              padding: "32px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "24px",
              textAlign: "center",
            }}
          >
            {[
              { icon: "📱", label: "Mobile-First Design" },
              { icon: "👴👵", label: "Senior-Friendly" },
              { icon: "🌐", label: "Community-Driven" },
              { icon: "🔒", label: "Privacy-Focused" },
            ].map((item, index) => (
              <div key={index}>
                <div style={{ fontSize: "36px", marginBottom: "8px" }}>{item.icon}</div>
                <p style={{ fontSize: "14px", fontWeight: 500, margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
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
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: "18px", marginBottom: "40px", opacity: 0.9 }}>
            Join thousands of seniors who are taking control of their digital lives. 
            It is free, friendly, and designed with you in mind.
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
              Start Learning
            </Link>
            <Link
              href="/community"
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
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
