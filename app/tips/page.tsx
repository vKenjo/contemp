import Link from "next/link";
import Accordion from "../components/Accordion";

export default function TipsPage() {
  const essentialTips = [
    {
      category: "Photo Safety",
      icon: "📸",
      tips: [
        "Turn off location services for your camera app",
        "Review privacy settings on Facebook and Instagram monthly",
        "Avoid sharing photos of grandchildren with location tags",
        "Use 'Friends Only' settings for photo albums",
        "Think twice before using AI photo editing apps",
      ],
    },
    {
      category: "Password Security",
      icon: "🔐",
      tips: [
        "Use different passwords for each important account",
        "Make passwords at least 12 characters long",
        "Include numbers and special characters",
        "Never share passwords over email or text",
        "Consider using a password manager app",
      ],
    },
    {
      category: "Spotting Scams",
      icon: "🚨",
      tips: [
        "Be suspicious of urgent requests for money or information",
        "Verify unexpected calls from banks or government agencies",
        "Never click links in suspicious emails or texts",
        "If it sounds too good to be true, it probably is",
        "When in doubt, ask a trusted family member or friend",
      ],
    },
    {
      category: "AI Awareness",
      icon: "🤖",
      tips: [
        "Verify surprising news from multiple sources",
        "Be cautious of very realistic-looking videos",
        "Check if photos have been edited or AI-generated",
        "Do not trust caller ID completely—it can be faked",
        "Question emails that seem unusual, even from known contacts",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Can AI really use my photos without permission?",
      answer: "Unfortunately, yes. Many social media platforms and apps include terms of service that allow them to use your photos for various purposes, including AI training. When you agree to their terms, you often give them permission to use your content. That's why it's important to read privacy policies and adjust your sharing settings.",
    },
    {
      question: "How do I know if a video or image is AI-generated?",
      answer: "Look for telltale signs: unnatural hand movements, blurry backgrounds, strange lighting, text that doesn't make sense, or audio that doesn't match lip movements. However, AI is getting better, so when in doubt, verify information from trusted news sources before believing or sharing.",
    },
    {
      question: "Is it safe to use AI assistants like Siri or Alexa?",
      answer: "Voice assistants can be helpful, but they do collect data about your requests. To use them safely: review and delete your voice history regularly, turn off the microphone when not in use, and avoid sharing sensitive information like passwords or financial details with them.",
    },
    {
      question: "Should I be worried about facial recognition?",
      answer: "It's reasonable to be aware of facial recognition technology. Your photos can be used to improve these systems. To protect yourself: limit public photos showing your face clearly, adjust privacy settings on social media, and be selective about which apps you give camera access to.",
    },
    {
      question: "How can I protect my grandchildren's photos?",
      answer: "Never share photos of children publicly. Use private family groups or direct messages instead of public posts. Always get parents' permission before sharing. Avoid including location information or details about their school or activities. Consider not showing their faces in public posts.",
    },
    {
      question: "What should I do if I think I've been scammed?",
      answer: "Act quickly: Contact your bank immediately if financial information was shared. Change passwords for affected accounts. Report the scam to the FTC at reportfraud.ftc.gov. Tell family members so they can be alert. Don't be embarrassed—scammers are professionals and target everyone.",
    },
  ];

  const warningSignsAI = [
    "Requests for photos or personal information from unknown sources",
    "Offers that seem too good to be true",
    "Pressure to act quickly without time to think",
    "Messages from 'family members' asking for money urgently",
    "Unexpected calls claiming to be from tech support",
    "Emails with poor grammar claiming to be from major companies",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: "80px 24px 60px",
          textAlign: "center",
          background: "linear-gradient(180deg, rgba(255, 149, 0, 0.05) 0%, var(--background) 100%)",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="badge badge-blue" style={{ marginBottom: "16px" }}>
            🛡️ Safety Tips
          </div>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Stay Safe in the{" "}
            <span className="text-gradient">Digital World</span>
          </h1>
          <p className="text-accessible" style={{ color: "var(--gray-500)" }}>
            Practical, easy-to-follow tips to protect yourself, your family, 
            and your precious memories online.
          </p>
        </div>
      </section>

      {/* Essential Tips */}
      <section className="section-padding">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
              Essential Safety Tips
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "18px" }}>
              Simple steps that make a big difference in your digital safety
            </p>
          </div>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {essentialTips.map((category, index) => (
              <div key={index} className="card" style={{ padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "32px" }}>{category.icon}</span>
                  <h3 style={{ fontSize: "20px", margin: 0 }}>{category.category}</h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {category.tips.map((tip, tipIndex) => (
                    <li
                      key={tipIndex}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        padding: "10px 0",
                        borderBottom: tipIndex < category.tips.length - 1 ? "1px solid var(--gray-100)" : "none",
                        fontSize: "15px",
                      }}
                    >
                      <span style={{ color: "var(--success)", flexShrink: 0 }}>✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
              ⚠️ Warning Signs to Watch For
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "18px" }}>
              If you notice any of these red flags, stop and verify before proceeding
            </p>
          </div>
          
          <div
            className="card"
            style={{
              padding: "32px",
              background: "rgba(255, 59, 48, 0.05)",
              border: "1px solid rgba(255, 59, 48, 0.2)",
            }}
          >
            {warningSignsAI.map((sign, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 0",
                  borderBottom: index < warningSignsAI.length - 1 ? "1px solid rgba(255, 59, 48, 0.1)" : "none",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "var(--danger)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  !
                </span>
                <p style={{ fontSize: "17px", margin: 0 }}>{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference Card */}
      <section className="section-padding">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
              Quick Reference: What To Do
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "18px" }}>
              Keep these steps in mind for common situations
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
                situation: "Suspicious Email",
                icon: "📧",
                color: "var(--primary)",
                steps: [
                  "Do not click any links",
                  "Do not download attachments",
                  "Check the sender's email address carefully",
                  "Contact the company directly using their official website",
                  "Delete the email",
                ],
              },
              {
                situation: "Unexpected Phone Call",
                icon: "📞",
                color: "var(--warning)",
                steps: [
                  "Do not give personal information",
                  "Ask for a callback number",
                  "Hang up and call the organization directly",
                  "Never let them access your computer remotely",
                  "Report suspicious calls",
                ],
              },
              {
                situation: "Social Media Request",
                icon: "👤",
                color: "var(--secondary)",
                steps: [
                  "Check if you actually know the person",
                  "Look at their profile for red flags",
                  "Do not accept requests from strangers",
                  "Message existing friends through other means to verify",
                  "Decline if anything feels off",
                ],
              },
            ].map((item, index) => (
              <div key={index} className="card" style={{ padding: "28px" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    background: `${item.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    marginBottom: "20px",
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "20px", marginBottom: "16px" }}>{item.situation}</h3>
                <ol style={{ paddingLeft: "20px", margin: 0 }}>
                  {item.steps.map((step, stepIndex) => (
                    <li
                      key={stepIndex}
                      style={{
                        fontSize: "15px",
                        color: "var(--gray-600)",
                        marginBottom: "8px",
                        lineHeight: 1.5,
                      }}
                    >
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }} id="faq">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "18px" }}>
              Answers to common concerns about AI and online safety
            </p>
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Emergency Contact Card */}
      <section className="section-padding">
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div
            className="card"
            style={{
              padding: "40px",
              background: "linear-gradient(135deg, var(--primary), var(--secondary))",
              color: "white",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "28px", marginBottom: "16px", color: "white" }}>
              Need Help Right Now?
            </h2>
            <p style={{ fontSize: "17px", marginBottom: "32px", opacity: 0.9 }}>
              If you think you have been scammed or need immediate assistance, these resources can help.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <p style={{ fontWeight: 600, marginBottom: "8px", margin: 0 }}>Report Fraud</p>
                <p style={{ fontSize: "14px", opacity: 0.9, margin: 0 }}>reportfraud.ftc.gov</p>
              </div>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <p style={{ fontWeight: 600, marginBottom: "8px", margin: 0 }}>AARP Fraud Helpline</p>
                <p style={{ fontSize: "14px", opacity: 0.9, margin: 0 }}>1-877-908-3360</p>
              </div>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <p style={{ fontWeight: 600, marginBottom: "8px", margin: 0 }}>WiseGuard Support</p>
                <p style={{ fontSize: "14px", opacity: 0.9, margin: 0 }}>1-800-WISE-GUARD</p>
              </div>
            </div>
          </div>
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
            Keep Learning & Stay Protected
          </h2>
          <p style={{ color: "var(--gray-500)", fontSize: "18px", marginBottom: "32px" }}>
            Join our community for more tips, workshops, and support from people just like you.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/community" className="btn-primary">
              Join the Community
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
