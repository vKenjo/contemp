"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Accordion from "../components/Accordion";
import { Eye, Shield, Search, AlertTriangle, CheckCircle, Lock, PlayCircle, Clock, Award } from "lucide-react";
import { courses } from "../lib/courseData";
import { useLanguage } from "../lib/LanguageContext";

export default function LearnPage() {
  const { t } = useLanguage();
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
      title: t.learn.checkHands,
      detail: t.learn.checkHandsDetail,
      icon: <AlertTriangle size={24} />,
    },
    {
      title: t.learn.examineFaces,
      detail: t.learn.examineFacesDetail,
      icon: <Eye size={24} />,
    },
    {
      title: t.learn.readText,
      detail: t.learn.readTextDetail,
      icon: <Search size={24} />,
    },
    {
      title: t.learn.trustInstincts,
      detail: t.learn.trustInstinctsDetail,
      icon: <Shield size={24} />,
    },
  ];

  const faqs = [
    {
      question: t.learn.faq1Q,
      answer: t.learn.faq1A,
    },
    {
      question: t.learn.faq2Q,
      answer: t.learn.faq2A,
    },
    {
      question: t.learn.faq3Q,
      answer: t.learn.faq3A,
    },
    {
      question: t.learn.faq4Q,
      answer: t.learn.faq4A,
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
            {t.learn.heroTitle} <span className="text-gradient">{t.learn.heroHighlight}</span>
          </h1>
          <p style={{ fontSize: "22px", color: "var(--gray-600)", lineHeight: 1.6, marginBottom: "32px" }}>
            {t.learn.heroSubtitle}
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
                <h3 style={{ fontSize: "20px", marginBottom: "4px" }}>{t.learn.yourProgress}</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "16px", margin: 0 }}>
                  {completedCourses.length} {t.learn.of} {totalCourses} {t.learn.coursesCompleted}
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
              {t.learn.coursesTitle}
            </h2>
            <p style={{ fontSize: "20px", color: "var(--gray-600)" }}>
              {t.learn.coursesSubtitle}
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
                        <span style={{ fontSize: "14px", fontWeight: 500 }}>{t.learn.startCourse}</span>
                      </div>
                    )}
                  </div>

                  {/* Course Content */}
                  <div style={{ padding: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <div className="badge badge-blue">
                        {course.lessons.length} {t.learn.lessons}
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
                <h4 style={{ fontSize: "18px", marginBottom: "8px" }}>{t.learn.learnAtOwnPace}</h4>
                <p style={{ fontSize: "15px", color: "var(--gray-600)", margin: 0 }}>
                  {t.learn.allCoursesSelfPaced}
                </p>
              </div>
            </div>

            {/* Tips Side */}
            <div>
              <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>
                {t.learn.quickDetectionTips}
              </h2>
              <p style={{ fontSize: "19px", color: "var(--gray-600)", marginBottom: "32px", lineHeight: 1.7 }}>
                {t.learn.quickTipsSubtitle}
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
                {t.learn.redFlagsTitle}
              </h2>
              <p style={{ fontSize: "19px", color: "var(--gray-600)", maxWidth: "700px", margin: "0 auto" }}>
                {t.learn.redFlagsSubtitle}
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
                  title: t.learn.redFlag1Title,
                  description: t.learn.redFlag1Desc,
                },
                {
                  title: t.learn.redFlag2Title,
                  description: t.learn.redFlag2Desc,
                },
                {
                  title: t.learn.redFlag3Title,
                  description: t.learn.redFlag3Desc,
                },
                {
                  title: t.learn.redFlag4Title,
                  description: t.learn.redFlag4Desc,
                },
                {
                  title: t.learn.redFlag5Title,
                  description: t.learn.redFlag5Desc,
                },
                {
                  title: t.learn.redFlag6Title,
                  description: t.learn.redFlag6Desc,
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
              {t.learn.commonQuestions}
            </h2>
            <p style={{ fontSize: "20px", color: "var(--gray-600)" }}>
              {t.learn.faqSubtitle}
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
            {t.learn.ctaTitle}
          </h2>
          <p style={{ fontSize: "20px", marginBottom: "32px", lineHeight: 1.6, opacity: 0.95 }}>
            {t.learn.ctaSubtitle}
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
              {t.learn.startFirstCourse}
            </Link>
            <Link href="/community" className="btn-secondary" style={{ background: "transparent", border: "2px solid white", color: "white" }}>
              {t.learn.joinWorkshop}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
