import Link from "next/link";

export default function CommunityPage() {
  const upcomingEvents = [
    {
      title: "AI Safety Workshop for Beginners",
      date: "December 15, 2025",
      time: "2:00 PM - 3:30 PM",
      type: "Virtual",
      spots: "28 spots left",
    },
    {
      title: "Protecting Your Photos Online",
      date: "December 18, 2025",
      time: "10:00 AM - 11:00 AM",
      type: "Virtual",
      spots: "42 spots left",
    },
    {
      title: "Monthly Community Meetup",
      date: "December 20, 2025",
      time: "3:00 PM - 4:30 PM",
      type: "In-Person",
      spots: "15 spots left",
    },
  ];

  const discussions = [
    {
      title: "How do I remove location from iPhone photos?",
      author: "Margaret T.",
      replies: 23,
      lastActive: "2 hours ago",
    },
    {
      title: "Is it safe to use AI photo editors?",
      author: "Robert M.",
      replies: 45,
      lastActive: "5 hours ago",
    },
    {
      title: "Tips for talking to grandchildren about online safety",
      author: "Dorothy L.",
      replies: 67,
      lastActive: "1 day ago",
    },
    {
      title: "Facebook privacy settings guide - step by step",
      author: "William H.",
      replies: 89,
      lastActive: "2 days ago",
    },
  ];

  const successStories = [
    {
      quote: "I finally understand why my grandson was worried about my Facebook photos. Now I know how to protect our family memories!",
      author: "Eleanor, 72",
      location: "Chicago, IL",
    },
    {
      quote: "The community workshops gave me confidence to use technology without fear. I even help my friends now!",
      author: "James, 68",
      location: "Austin, TX",
    },
    {
      quote: "Learning about AI was intimidating at first, but WiseGuard made it simple. My digital life is much safer now.",
      author: "Patricia, 75",
      location: "Seattle, WA",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: "80px 24px 60px",
          textAlign: "center",
          background: "linear-gradient(180deg, rgba(88, 86, 214, 0.05) 0%, var(--background) 100%)",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="badge badge-blue" style={{ marginBottom: "16px" }}>
            👥 Community Hub
          </div>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Learn & Grow{" "}
            <span className="text-gradient">Together</span>
          </h1>
          <p className="text-accessible" style={{ color: "var(--gray-500)" }}>
            Join a supportive community of seniors navigating the digital world. 
            Share experiences, ask questions, and help each other stay safe.
          </p>
        </div>
      </section>

      {/* Community Stats */}
      <section style={{ padding: "40px 24px" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "24px",
            textAlign: "center",
          }}
        >
          {[
            { number: "10,547", label: "Active Members" },
            { number: "2,340", label: "Topics Discussed" },
            { number: "156", label: "Workshops Held" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index} className="card" style={{ padding: "24px" }}>
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "var(--primary)",
                  marginBottom: "4px",
                }}
              >
                {stat.number}
              </div>
              <p style={{ color: "var(--gray-500)", fontSize: "14px", margin: 0 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding" id="events">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <h2 style={{ fontSize: "32px", marginBottom: "8px" }}>
                Upcoming Events
              </h2>
              <p style={{ color: "var(--gray-500)", margin: 0 }}>
                Free workshops and meetups for our community
              </p>
            </div>
            <button className="btn-secondary">View All Events</button>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="card"
                style={{
                  padding: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{event.title}</h3>
                  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    <span style={{ color: "var(--gray-500)", fontSize: "14px" }}>
                      📅 {event.date}
                    </span>
                    <span style={{ color: "var(--gray-500)", fontSize: "14px" }}>
                      🕐 {event.time}
                    </span>
                    <span
                      className={`badge ${event.type === "Virtual" ? "badge-blue" : "badge-green"}`}
                    >
                      {event.type}
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ color: "var(--gray-400)", fontSize: "14px" }}>
                    {event.spots}
                  </span>
                  <button className="btn-primary" style={{ padding: "10px 20px", fontSize: "15px" }}>
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discussion Forum Preview */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <h2 style={{ fontSize: "32px", marginBottom: "8px" }}>
                Community Discussions
              </h2>
              <p style={{ color: "var(--gray-500)", margin: 0 }}>
                Ask questions and share your knowledge
              </p>
            </div>
            <button className="btn-primary">Start a Discussion</button>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {discussions.map((discussion, index) => (
              <div
                key={index}
                className="card"
                style={{
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "16px", marginBottom: "6px", fontWeight: 500 }}>
                    {discussion.title}
                  </h3>
                  <p style={{ color: "var(--gray-400)", fontSize: "14px", margin: 0 }}>
                    Started by {discussion.author} • {discussion.lastActive}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--gray-500)",
                    fontSize: "14px",
                  }}
                >
                  💬 {discussion.replies} replies
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
              Success Stories
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "18px" }}>
              Real experiences from our community members
            </p>
          </div>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {successStories.map((story, index) => (
              <div
                key={index}
                className="card"
                style={{ padding: "32px" }}
              >
                <div style={{ fontSize: "48px", marginBottom: "16px", opacity: 0.2 }}>"</div>
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                    color: "var(--gray-600)",
                  }}
                >
                  {story.quote}
                </p>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: "4px", margin: 0 }}>{story.author}</p>
                  <p style={{ color: "var(--gray-400)", fontSize: "14px", margin: 0 }}>
                    {story.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Connect */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
              Ways to Connect
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "18px" }}>
              Choose how you would like to engage with our community
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
                icon: "💻",
                title: "Virtual Workshops",
                description: "Join live online sessions from the comfort of your home. No travel needed!",
              },
              {
                icon: "📞",
                title: "Phone Support",
                description: "Prefer talking? Call our friendly support line for one-on-one help.",
              },
              {
                icon: "🤝",
                title: "Local Meetups",
                description: "Meet other community members in person at locations near you.",
              },
              {
                icon: "📧",
                title: "Email Newsletter",
                description: "Get weekly tips and updates delivered straight to your inbox.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card"
                style={{ padding: "28px", textAlign: "center" }}
              >
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "15px", margin: 0, lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "80px 24px",
          background: "linear-gradient(135deg, var(--secondary), var(--primary))",
          textAlign: "center",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "16px", color: "white" }}>
            Ready to Join Us?
          </h2>
          <p style={{ fontSize: "18px", marginBottom: "32px", opacity: 0.9 }}>
            Become part of our supportive community today. It is free, friendly, and 
            focused on helping you succeed.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              style={{
                background: "white",
                color: "var(--primary)",
                padding: "16px 32px",
                borderRadius: "12px",
                fontWeight: 500,
                fontSize: "17px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Join for Free
            </button>
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
              Browse Safety Tips
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
