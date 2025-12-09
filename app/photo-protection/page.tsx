import Link from "next/link";
import ChecklistItem from "../components/ChecklistItem";

export default function PhotoProtectionPage() {
  const protectionSteps = [
    {
      title: "Check Photo Sharing Settings",
      description: "Review and limit who can see your photos on social media. Set albums to 'Friends Only' or 'Private' instead of 'Public'.",
    },
    {
      title: "Turn Off Location Data",
      description: "Disable geotagging on your phone's camera. This prevents your photos from revealing where you live or frequently visit.",
    },
    {
      title: "Review App Permissions",
      description: "Check which apps have access to your photos. Remove access from apps you do not recognize or no longer use.",
    },
    {
      title: "Be Selective About Uploads",
      description: "Think twice before uploading photos online. Once shared, they can be copied and used in ways you did not intend.",
    },
    {
      title: "Use Secure Photo Storage",
      description: "Consider keeping precious family photos on local storage or trusted cloud services with strong privacy policies.",
    },
  ];

  const dataInPhotos = [
    { icon: "📍", label: "GPS Location", risk: "Reveals where you live, work, and travel" },
    { icon: "📅", label: "Date & Time", risk: "Shows your daily routines and patterns" },
    { icon: "📱", label: "Device Information", risk: "Identifies what phone/camera you use" },
    { icon: "👤", label: "Facial Data", risk: "Can identify you across the internet" },
    { icon: "🏠", label: "Background Details", risk: "Reveals home layout, valuables, neighborhood" },
    { icon: "👨‍👩‍👧‍👦", label: "Family Members", risk: "Identifies and tracks your loved ones" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: "80px 24px 60px",
          textAlign: "center",
          background: "linear-gradient(180deg, rgba(52, 199, 89, 0.05) 0%, var(--background) 100%)",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="badge badge-green" style={{ marginBottom: "16px" }}>
            📸 Photo Safety
          </div>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Protect Your{" "}
            <span className="text-gradient">Precious Memories</span>
          </h1>
          <p className="text-accessible" style={{ color: "var(--gray-500)" }}>
            Your photos are more valuable than you think. Learn how AI uses your images 
            and how to keep your memories safe.
          </p>
        </div>
      </section>

      {/* Why Photos Matter Section */}
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
              <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
                Why Your Photos Have Real Value
              </h2>
              <p className="text-accessible" style={{ color: "var(--gray-500)", marginBottom: "24px" }}>
                Every photo you take contains hidden information. When you share photos online, 
                AI companies can use them to train systems that recognize faces, places, and objects.
              </p>
              <div
                className="card"
                style={{
                  padding: "24px",
                  background: "rgba(255, 149, 0, 0.1)",
                  border: "1px solid rgba(255, 149, 0, 0.2)",
                }}
              >
                <p style={{ fontSize: "17px", margin: 0, lineHeight: 1.7 }}>
                  <strong>Did you know?</strong> A single clear photo of your face can be worth 
                  up to $3 to AI training companies. If you have 1,000 photos online, that is 
                  $3,000 worth of data—and you are not seeing a penny of it.
                </p>
              </div>
            </div>
            
            <div
              style={{
                background: "var(--gray-100)",
                borderRadius: "24px",
                padding: "32px",
              }}
            >
              <h3 style={{ fontSize: "20px", marginBottom: "24px", textAlign: "center" }}>
                Hidden Data in Every Photo
              </h3>
              {dataInPhotos.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: index < dataInPhotos.length - 1 ? "1px solid var(--gray-200)" : "none",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: "4px", margin: 0 }}>{item.label}</p>
                    <p style={{ color: "var(--gray-500)", fontSize: "14px", margin: 0 }}>{item.risk}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How AI Uses Photos */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
              How AI Uses Your Photos
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "18px" }}>
              Understanding the process helps you make informed decisions.
            </p>
          </div>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                step: "1",
                title: "Collection",
                description: "When you upload photos to social media or websites, they become accessible to AI systems.",
                icon: "📤",
              },
              {
                step: "2",
                title: "Analysis",
                description: "AI scans your photos, identifying faces, locations, objects, and even emotions.",
                icon: "🔍",
              },
              {
                step: "3",
                title: "Training",
                description: "Your photos help AI systems learn to recognize similar content more accurately.",
                icon: "🧠",
              },
              {
                step: "4",
                title: "Application",
                description: "The trained AI is used for facial recognition, targeted ads, and content generation.",
                icon: "⚡",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card"
                style={{ padding: "28px", textAlign: "center" }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    margin: "0 auto 20px",
                  }}
                >
                  {item.icon}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--primary)",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  STEP {item.step}
                </div>
                <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "15px", margin: 0, lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Checklist */}
      <section className="section-padding">
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
              Your Photo Protection Checklist
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "18px" }}>
              Follow these steps to better protect your photos and privacy.
            </p>
          </div>
          
          {protectionSteps.map((step, index) => (
            <div key={index} className="checklist-item" style={{ marginBottom: "16px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "var(--gray-200)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {index + 1}
              </div>
              <div>
                <h3 style={{ fontSize: "17px", fontWeight: 600, marginBottom: "4px" }}>
                  {step.title}
                </h3>
                <p style={{ color: "var(--gray-500)", fontSize: "15px", margin: 0, lineHeight: 1.6 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Tips */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "32px", textAlign: "center" }}>
            Quick Safety Tips
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: "✅",
                title: "Do This",
                items: [
                  "Keep family photos on private accounts",
                  "Remove location data before sharing",
                  "Regularly review who can see your photos",
                  "Use strong passwords on photo apps",
                ],
                color: "var(--success)",
              },
              {
                icon: "❌",
                title: "Avoid This",
                items: [
                  "Sharing photos of grandchildren publicly",
                  "Posting photos that show your home address",
                  "Using the same password for all accounts",
                  "Accepting unknown friend requests",
                ],
                color: "var(--danger)",
              },
              {
                icon: "⚠️",
                title: "Be Careful With",
                items: [
                  "Photo editing apps asking for permissions",
                  "Free photo storage services",
                  "Links that ask you to upload photos",
                  "AI-powered photo 'enhancement' tools",
                ],
                color: "var(--warning)",
              },
            ].map((category, index) => (
              <div key={index} className="card" style={{ padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "24px" }}>{category.icon}</span>
                  <h3 style={{ fontSize: "20px", margin: 0 }}>{category.title}</h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      style={{
                        padding: "10px 0",
                        borderBottom: itemIndex < category.items.length - 1 ? "1px solid var(--gray-100)" : "none",
                        fontSize: "15px",
                        color: "var(--gray-600)",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "80px 24px",
          background: "linear-gradient(135deg, var(--success), #2da44e)",
          textAlign: "center",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "16px", color: "white" }}>
            Connect With Our Community
          </h2>
          <p style={{ fontSize: "18px", marginBottom: "32px", opacity: 0.9 }}>
            Join others who are learning to protect their digital lives. Share tips and 
            get support from people just like you.
          </p>
          <Link
            href="/community"
            style={{
              background: "white",
              color: "var(--success)",
              padding: "16px 32px",
              borderRadius: "12px",
              fontWeight: 500,
              fontSize: "17px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Join the Community →
          </Link>
        </div>
      </section>
    </div>
  );
}
