import Link from "next/link";
import InfoCard from "../components/InfoCard";
import Accordion from "../components/Accordion";

export default function LearnPage() {
  const modules = [
    {
      number: "1",
      title: "What is Artificial Intelligence?",
      description: "AI is like a smart helper that learns from information to make decisions. Think of it as teaching a computer to think—but it still needs humans to guide it!",
      badge: "Beginner",
      badgeColor: "green" as const,
    },
    {
      number: "2",
      title: "How AI Uses Your Information",
      description: "AI systems learn from data—including your photos, messages, and online activity. Understanding this helps you make informed choices about what you share.",
      badge: "Important",
      badgeColor: "blue" as const,
    },
    {
      number: "3",
      title: "AI in Your Daily Life",
      description: "From smartphone assistants to email spam filters, AI is already helping you! Learn to recognize and use these tools safely and effectively.",
      badge: "Practical",
      badgeColor: "green" as const,
    },
    {
      number: "4",
      title: "Recognizing AI-Generated Content",
      description: "AI can now create realistic images, videos, and text. Learn the signs to spot fake content and protect yourself from misinformation.",
      badge: "Essential",
      badgeColor: "blue" as const,
    },
    {
      number: "5",
      title: "Your Rights and AI",
      description: "You have rights when it comes to how companies use your data. Learn what questions to ask and how to protect your privacy.",
      badge: "Know Your Rights",
      badgeColor: "blue" as const,
    },
  ];

  const glossary = [
    {
      question: "What is Machine Learning?",
      answer: "Machine learning is a type of AI that improves through experience, similar to how we learn from practice. Instead of being programmed with specific instructions, these systems learn patterns from examples. For instance, after seeing thousands of cat photos, a machine learning system can recognize cats in new photos it has never seen before.",
    },
    {
      question: "What is Facial Recognition?",
      answer: "Facial recognition is technology that can identify or verify a person by analyzing their face. It maps facial features from a photo or video and compares them against a database. This technology is used for unlocking phones, tagging photos on social media, and security systems. Your photos can be used to improve these systems.",
    },
    {
      question: "What is Data Privacy?",
      answer: "Data privacy refers to your right to control how your personal information is collected, used, and shared. This includes your photos, location, messages, and online activity. Good data privacy practices mean companies should ask your permission before using your information and tell you how they will use it.",
    },
    {
      question: "What are Deepfakes?",
      answer: "Deepfakes are AI-generated videos or images that make it look like someone said or did something they never actually did. They can be very convincing and are a concern because they can spread misinformation. Always verify surprising videos from trusted news sources.",
    },
    {
      question: "What is an Algorithm?",
      answer: "An algorithm is a set of step-by-step instructions that a computer follows to complete a task. Think of it like a recipe. Social media uses algorithms to decide what posts you see, which is why understanding them helps you understand your online experience.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: "80px 24px 60px",
          textAlign: "center",
          background: "linear-gradient(180deg, rgba(0, 122, 255, 0.05) 0%, var(--background) 100%)",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="badge badge-blue" style={{ marginBottom: "16px" }}>
            📚 Learning Center
          </div>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Understanding AI,{" "}
            <span className="text-gradient">Step by Step</span>
          </h1>
          <p className="text-accessible" style={{ color: "var(--gray-500)" }}>
            No technical background needed. We will explain everything in simple, 
            friendly language that makes sense.
          </p>
        </div>
      </section>

      {/* Progress Section */}
      <section style={{ padding: "40px 24px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div className="card" style={{ padding: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span style={{ fontWeight: 500 }}>Your Learning Progress</span>
              <span style={{ color: "var(--primary)", fontWeight: 600 }}>0% Complete</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "0%" }}></div>
            </div>
            <p style={{ color: "var(--gray-400)", fontSize: "14px", marginTop: "12px", marginBottom: 0 }}>
              Start your first lesson to begin tracking your progress!
            </p>
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="section-padding">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "32px", textAlign: "center" }}>
            Learning Modules
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {modules.map((module, index) => (
              <InfoCard key={index} {...module} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
              Key Concepts Explained Simply
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "18px" }}>
              Understand the important terms without the confusing jargon.
            </p>
          </div>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: "🧠",
                title: "AI Learns from Data",
                description: "Just like you learn from experience, AI learns from information. The more data it sees, the better it gets—including your photos!",
              },
              {
                icon: "👁️",
                title: "AI Can See Faces",
                description: "AI can recognize faces in photos, even picking out individuals in group photos. Your face in photos helps train these systems.",
              },
              {
                icon: "📝",
                title: "AI Can Write & Create",
                description: "AI can now write text, create images, and even generate videos. It is important to verify what you see online.",
              },
              {
                icon: "🔒",
                title: "Your Data Has Value",
                description: "Companies profit from your information. Understanding this helps you make better choices about what you share.",
              },
            ].map((concept, index) => (
              <div
                key={index}
                className="card"
                style={{ padding: "28px", textAlign: "center" }}
              >
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>{concept.icon}</div>
                <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>{concept.title}</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "15px", margin: 0, lineHeight: 1.6 }}>
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Section */}
      <section className="section-padding" id="glossary">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
              AI Glossary
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "18px" }}>
              Common terms explained in plain language.
            </p>
          </div>
          <Accordion items={glossary} />
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "80px 24px",
          background: "var(--gray-50)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
            Ready to Protect Your Photos?
          </h2>
          <p style={{ color: "var(--gray-500)", fontSize: "18px", marginBottom: "32px" }}>
            Now that you understand AI basics, learn how to protect your precious memories.
          </p>
          <Link href="/photo-protection" className="btn-primary">
            Photo Protection Guide →
          </Link>
        </div>
      </section>
    </div>
  );
}
