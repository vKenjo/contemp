"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Accordion from "../components/Accordion";
import { Eye, Shield, Search, AlertTriangle, CheckCircle, Lock, PlayCircle, Clock, Award } from "lucide-react";
import { courses } from "../lib/courseData";

export default function LearnPage() {
  const [completedCourses, setCompletedCourses] = useState<number[]>([]);

  // Load completed courses from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("completedCourses");
    if (saved) {
      setCompletedCourses(JSON.parse(saved));
    }
  }, []);

  const totalCourses = courses.length;
  const progressPercentage = (completedCourses.length / totalCourses) * 100;

  const detectionTips = [
    {
      title: "Check the Hands",
      detail: "AI often gets hands wrong - look for extra fingers, missing fingers, or fingers in impossible positions.",
      icon: <AlertTriangle size={24} />,
    },
    {
      title: "Examine Faces Closely",
      detail: "Look at eyes, teeth, and ears. Are they symmetrical? Do glasses or jewelry look realistic?",
      icon: <Eye size={24} />,
    },
    {
      title: "Read Any Text",
      detail: "AI-generated images often have gibberish text, misspelled words, or letters that don't make sense.",
      icon: <Search size={24} />,
    },
    {
      title: "Trust Your Instincts",
      detail: "If something feels off or too perfect, it probably is. Verify before sharing or believing.",
      icon: <Shield size={24} />,
    },
  ];

  const faqs = [
    {
      question: "What are the signs that a photo might be AI-generated?",
      answer: "Look for these warning signs: unusual or extra fingers on hands, distorted facial features, strange reflections or shadows, text that doesn't make sense, objects that seem to blend together oddly, or backgrounds that look blurry or unrealistic. AI often struggles with fine details like jewelry, teeth, and hair strands.",
    },
    {
      question: "Why should I care about AI-generated images?",
      answer: "AI-generated images can be used to spread false information, create fake news, impersonate real people, or scam you out of money. Learning to identify them helps you avoid being misled and protects you from potential fraud. What you see online isn't always real.",
    },
    {
      question: "How long does it take to complete all courses?",
      answer: "The complete program takes about 100 minutes total (less than 2 hours). However, you can learn at your own pace and complete courses whenever you have time. Each course is broken into short, easy-to-follow lessons.",
    },
    {
      question: "Do I need any special skills to take these courses?",
      answer: "No special skills required! Our courses are designed specifically for seniors with no technical background. Everything is explained in simple, clear language with plenty of examples.",
    },
  ];

  return (
    <div>
      {/* Hero Section with Background */}
      <section
        style={{
          padding: "60px 24px",
          textAlign: "center",
          background: "linear-gradient(180deg, var(--gray-50) 0%, var(--background) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "48px", marginBottom: "24px" }}>
            Learn to <span className="text-gradient">Detect AI Content</span>
          </h1>
          <p style={{ fontSize: "22px", color: "var(--gray-600)", lineHeight: 1.6, marginBottom: "32px" }}>
            Master the skills to spot fake images and videos with our step-by-step courses designed for seniors.
          </p>

          {/* Progress Section - Prominent */}
          <div
            className="glass-card"
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              padding: "32px",
              textAlign: "left",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div>
                <h3 style={{ fontSize: "20px", marginBottom: "4px" }}>Your Learning Progress</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "16px", margin: 0 }}>
                  {completedCourses.length} of {totalCourses} courses completed
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Award size={32} style={{ color: progressPercentage === 100 ? "var(--warning)" : "var(--gray-400)" }} />
                <span style={{ fontSize: "32px", fontWeight: 700, color: "var(--primary)" }}>
                  {Math.round(progressPercentage)}%
                </span>
              </div>
            </div>
            <div
              style={{
                height: "16px",
                background: "var(--gray-200)",
                borderRadius: "100px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, var(--primary), var(--secondary))",
                  borderRadius: "100px",
                  width: `${progressPercentage}%`,
                  transition: "width 0.5s ease",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section - Grid with Images */}
      <section className="section-padding">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "36px", marginBottom: "12px" }}>
              AI Detection Courses
            </h2>
            <p style={{ fontSize: "20px", color: "var(--gray-600)" }}>
              Complete these courses to become an expert at spotting AI-generated content
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "32px",
            }}
          >
            {courses.map((course) => {
              const isCompleted = completedCourses.includes(course.id);

              return (
                <Link
                  key={course.id}
                  href={`/courses/${course.slug}`}
                  className="glass-card"
                  style={{
                    padding: "0",
                    overflow: "hidden",
                    cursor: "pointer",
                    opacity: isCompleted ? 0.8 : 1,
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {/* Course Thumbnail */}
                  <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {isCompleted && (
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          background: "rgba(82, 196, 26, 0.95)",
                          borderRadius: "50%",
                          width: "80px",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CheckCircle size={48} style={{ color: "white" }} />
                      </div>
                    )}
                    {!isCompleted && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: "12px",
                          right: "12px",
                          background: "rgba(0, 0, 0, 0.7)",
                          borderRadius: "8px",
                          padding: "8px 12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "white",
                        }}
                      >
                        <PlayCircle size={20} />
                        <span style={{ fontSize: "14px", fontWeight: 500 }}>Start Course</span>
                      </div>
                    )}
                  </div>

                  {/* Course Content */}
                  <div style={{ padding: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <div className="badge badge-blue">
                        {course.lessons.length} Lessons
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--gray-500)", fontSize: "15px" }}>
                        <Clock size={16} />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
                      {course.title}
                    </h3>
                    <p style={{ fontSize: "17px", color: "var(--gray-600)", lineHeight: 1.6 }}>
                      {course.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Tips - Different Layout with Image */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* Image Side */}
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80"
                alt="Person learning"
                style={{
                  width: "100%",
                  borderRadius: "24px",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "24px",
                  right: "24px",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <h4 style={{ fontSize: "18px", marginBottom: "8px" }}>Learn at Your Own Pace</h4>
                <p style={{ fontSize: "15px", color: "var(--gray-600)", margin: 0 }}>
                  All courses are self-paced and can be completed anytime
                </p>
              </div>
            </div>

            {/* Tips Side */}
            <div>
              <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>
                Quick Detection Tips
              </h2>
              <p style={{ fontSize: "19px", color: "var(--gray-600)", marginBottom: "32px", lineHeight: 1.7 }}>
                Keep these key points in mind when checking if an image might be AI-generated
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {detectionTips.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                      padding: "20px",
                      background: "white",
                      borderRadius: "16px",
                      border: "2px solid var(--gray-200)",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "19px", marginBottom: "6px" }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: "16px", color: "var(--gray-600)", margin: 0, lineHeight: 1.6 }}>
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs - Banner Style */}
      <section className="section-padding">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #fff5f5 0%, #fff8f0 100%)",
              borderRadius: "24px",
              padding: "48px",
              border: "2px solid var(--warning)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <AlertTriangle size={48} style={{ color: "var(--warning)", marginBottom: "16px" }} />
              <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
                Red Flags to Watch For
              </h2>
              <p style={{ fontSize: "19px", color: "var(--gray-600)", maxWidth: "700px", margin: "0 auto" }}>
                These are the most common signs that an image might be AI-generated
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
                  title: "Distorted Hands",
                  description: "Extra fingers, missing thumbs, or hands in unnatural positions",
                },
                {
                  title: "Blurry Backgrounds",
                  description: "Objects that blend together or backgrounds that seem smudged",
                },
                {
                  title: "Nonsense Text",
                  description: "Gibberish words, backwards letters, or misspelled signs",
                },
                {
                  title: "Too Perfect",
                  description: "Images that look flawless but somehow don't feel real",
                },
                {
                  title: "Strange Lighting",
                  description: "Shadows that don't match or impossible light sources",
                },
                {
                  title: "Weird Details",
                  description: "Jewelry, glasses, or accessories that look distorted",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "white",
                    padding: "24px",
                    borderRadius: "16px",
                    border: "1px solid var(--gray-200)",
                  }}
                >
                  <h3 style={{ fontSize: "19px", marginBottom: "10px", color: "var(--warning)" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "16px", color: "var(--gray-600)", lineHeight: 1.6, margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
              Common Questions
            </h2>
            <p style={{ fontSize: "20px", color: "var(--gray-600)" }}>
              Everything you need to know about our AI detection courses
            </p>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA Section with Image Background */}
      <section
        style={{
          padding: "80px 24px",
          background: `linear-gradient(rgba(91, 140, 219, 0.95), rgba(124, 141, 181, 0.95)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px", marginBottom: "20px", color: "white" }}>
            Ready to Start Learning?
          </h2>
          <p style={{ fontSize: "20px", marginBottom: "32px", lineHeight: 1.6, opacity: 0.95 }}>
            Begin your first course today and learn to spot AI-generated content with confidence.
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/courses/intro-to-ai-images" className="btn-primary" style={{ background: "white", color: "var(--primary)" }}>
              Start First Course
            </Link>
            <Link href="/community" className="btn-secondary" style={{ background: "transparent", border: "2px solid white", color: "white" }}>
              Join a Workshop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
