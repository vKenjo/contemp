"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, Upload, AlertCircle, Shield, Users, BookOpen, Camera, TrendingUp, Brain, Lock } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "verifying" | "verified" | "ai-generated">("idle");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setVerificationStatus("idle");
    }
  };

  const handleVerify = () => {
    if (!selectedFile) return;

    setVerificationStatus("verifying");

    // Simulate verification process
    setTimeout(() => {
      const isAI = Math.random() > 0.7;
      setVerificationStatus(isAI ? "ai-generated" : "verified");
    }, 2000);
  };

  return (
    <div>
      {/* Combined Hero and Upload Section */}
      <section
        style={{
          padding: "80px 24px 120px",
          background: `linear-gradient(135deg, rgba(91, 140, 219, 0.05) 0%, rgba(124, 141, 181, 0.05) 100%)`,
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "800px", width: "100%", margin: "0 auto", textAlign: "center" }}>
          
          {/* Condensed Hero Text */}
          <div style={{ marginBottom: "48px" }}>
            <h1
              style={{
                fontSize: "64px",
                fontWeight: 700,
                marginBottom: "24px",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Is this <span className="text-gradient">real</span> or <span className="text-gradient">AI</span>?
            </h1>

            <p
              style={{
                fontSize: "24px",
                color: "var(--gray-600)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Simple tools to help you stay safe online. Just upload a photo to check if it is real.
            </p>
          </div>

          {/* Upload Card - Moved up and centered */}
          <div
            className="glass-card"
            style={{
              padding: "48px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            }}
          >
            {!previewUrl ? (
              <div>
                <label
                  htmlFor="photo-upload"
                  className="upload-area"
                  style={{
                    display: "block",
                    cursor: "pointer",
                    background: "white",
                  }}
                >
                  <Upload size={64} style={{ margin: "0 auto 16px", color: "var(--primary)" }} />
                  <p style={{ fontSize: "22px", fontWeight: 600, marginBottom: "8px", color: "var(--primary)" }}>
                    Tap here to Check a Photo
                  </p>
                  <p style={{ fontSize: "18px", color: "var(--gray-500)" }}>
                    We&apos;ll tell you if it&apos;s real or not
                  </p>
                </label>
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
            ) : (
              <div>
                <div
                  style={{
                    marginBottom: "24px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    maxHeight: "400px",
                    display: "flex",
                    justifyContent: "center",
                    background: "var(--gray-100)",
                  }}
                >
                  <img
                    src={previewUrl}
                    alt="Preview"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>

                {verificationStatus === "idle" && (
                  <button
                    onClick={handleVerify}
                    className="btn-primary"
                    style={{ width: "100%", marginBottom: "16px", fontSize: "20px" }}
                  >
                    Check if Real
                  </button>
                )}

                {verificationStatus === "verifying" && (
                  <div
                    style={{
                      padding: "24px",
                      background: "rgba(91, 140, 219, 0.1)",
                      borderRadius: "16px",
                      marginBottom: "16px",
                    }}
                  >
                    <div className="animate-pulse" style={{ marginBottom: "12px" }}>
                      <Shield size={48} style={{ margin: "0 auto", color: "var(--primary)" }} />
                    </div>
                    <p style={{ fontSize: "20px", fontWeight: 500 }}>
                      Checking...
                    </p>
                  </div>
                )}

                {verificationStatus === "verified" && (
                  <div
                    style={{
                      padding: "32px",
                      background: "rgba(82, 196, 26, 0.1)",
                      borderRadius: "16px",
                      marginBottom: "16px",
                    }}
                  >
                    <CheckCircle2 size={64} style={{ margin: "0 auto 16px", color: "var(--success)" }} />
                    <h3 style={{ fontSize: "24px", marginBottom: "12px", color: "var(--success)" }}>
                      It&apos;s Authentic!
                    </h3>
                    <p style={{ fontSize: "18px", color: "var(--gray-600)" }}>
                      Good news! This photo looks real.
                    </p>
                  </div>
                )}

                {verificationStatus === "ai-generated" && (
                  <div
                    style={{
                      padding: "32px",
                      background: "rgba(255, 149, 0, 0.1)",
                      borderRadius: "16px",
                      marginBottom: "16px",
                    }}
                  >
                    <AlertCircle size={64} style={{ margin: "0 auto 16px", color: "var(--warning)" }} />
                    <h3 style={{ fontSize: "24px", marginBottom: "12px", color: "var(--warning)" }}>
                      Be Careful
                    </h3>
                    <p style={{ fontSize: "18px", color: "var(--gray-600)" }}>
                      This might be fake or AI-created. Don&apos;t trust it immediately.
                    </p>
                  </div>
                )}

                <button
                  onClick={() => {
                    setSelectedFile(null);
                    setPreviewUrl("");
                    setVerificationStatus("idle");
                  }}
                  className="btn-secondary"
                  style={{ width: "100%" }}
                >
                  Check Another Photo
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section - Banner Style */}
      <section style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))", padding: "64px 24px", color: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "48px",
              textAlign: "center",
            }}
          >
            {[
              { number: "78%", label: "of seniors concerned about AI", icon: <TrendingUp size={40} /> },
              { number: "3.2B", label: "AI images created daily", icon: <Brain size={40} /> },
              { number: "65%", label: "can't identify AI photos", icon: <Camera size={40} /> },
              { number: "100%", label: "of your safety is our priority", icon: <Lock size={40} /> },
            ].map((stat, index) => (
              <div key={index}>
                <div style={{ marginBottom: "16px", opacity: 0.9 }}>
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  {stat.number}
                </div>
                <p style={{ fontSize: "17px", opacity: 0.9, margin: 0 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Side-by-Side Layout */}
      <section className="section-padding">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "64px",
              alignItems: "center",
            }}
          >
            {/* Image Side */}
            <div>
              <Image
                src="/landing_data.svg"
                alt="Data Protection"
                width={500}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            {/* Content Side */}
            <div>
              <h2 style={{ fontSize: "40px", marginBottom: "24px" }}>
                Why AuthentiKa Matters
              </h2>
              <p style={{ fontSize: "19px", color: "var(--gray-600)", lineHeight: 1.7, marginBottom: "24px" }}>
                AuthentiKa was created with one simple goal: to help elderly community members detect
                AI-generated content and stay safe from fake photos and videos.
              </p>
              <p style={{ fontSize: "19px", color: "var(--gray-600)", lineHeight: 1.7, marginBottom: "32px" }}>
                We recognized that seniors are often left behind in conversations about technology and AI.
                But your photos, your memories, and your digital presence matter. You deserve to understand
                how AI is being used and how to protect yourself from fake content.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Detect AI-generated images instantly",
                  "Learn through simple, clear courses",
                  "Join a supportive community",
                  "Stay protected from AI scams",
                ].map((item, index) => (
                  <div key={index} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <CheckCircle2 size={24} style={{ color: "var(--success)", flexShrink: 0 }} />
                    <span style={{ fontSize: "18px" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help - Three Column Cards */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontSize: "40px", marginBottom: "16px" }}>
              How We Help You Stay Safe
            </h2>
            <p style={{ fontSize: "20px", color: "var(--gray-600)" }}>
              Three simple ways to protect yourself from AI-generated content
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              {
                icon: <Camera size={40} />,
                title: "Detect AI Content",
                description: "Upload any photo or video to check if it's real or AI-generated. Get results in seconds with our advanced detection system.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
              },
              {
                icon: <BookOpen size={40} />,
                title: "Learn Detection Skills",
                description: "Take our step-by-step courses designed for seniors. Learn to spot fake images and protect yourself from scams.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
              },
              {
                icon: <Users size={40} />,
                title: "Join Workshops",
                description: "Connect with others at community workshops. Learn together in a supportive, welcoming environment.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: "0",
                  overflow: "hidden",
                }}
              >
                {/* Feature Image */}
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Feature Content */}
                <div style={{ padding: "32px" }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      marginBottom: "20px",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: "17px", color: "var(--gray-600)", lineHeight: 1.6 }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner with SVG Assets */}
      <section className="section-padding" style={{ background: "white" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: "48px" }}>
            <Image
              src="/landing_trust_star.svg"
              alt="Trust"
              width={100}
              height={100}
              style={{ margin: "0 auto 24px" }}
            />
            <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
              Trusted by Thousands of Seniors
            </h2>
            <p style={{ fontSize: "20px", color: "var(--gray-600)", maxWidth: "700px", margin: "0 auto" }}>
              Join a growing community of elderly people learning to navigate the digital world safely and confidently.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              { label: "Active Users", value: "10,000+" },
              { label: "Photos Verified", value: "2.5M+" },
              { label: "Workshops Held", value: "500+" },
              { label: "Satisfaction Rate", value: "98%" },
            ].map((item, index) => (
              <div key={index} className="glass-card" style={{ padding: "28px" }}>
                <div style={{ fontSize: "36px", fontWeight: 700, color: "var(--primary)", marginBottom: "8px" }}>
                  {item.value}
                </div>
                <p style={{ fontSize: "16px", color: "var(--gray-600)", margin: 0 }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: "20px", color: "var(--gray-600)", marginBottom: "40px", lineHeight: 1.6 }}>
            Start detecting AI-generated content today and learn how to stay safe online.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="#upload" className="btn-primary">
              Verify an Image Now
            </Link>
            <Link href="/learn" className="btn-secondary">
              Start Learning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
