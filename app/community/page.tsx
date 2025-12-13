"use client";

import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

export default function CommunityPage() {
  const { t } = useLanguage();
  const upcomingEvents = [
    {
      title: t.community.event1Title,
      date: "December 15, 2025",
      time: "2:00 PM",
      location: t.community.communityCenter,
      type: t.community.inPerson,
      description: t.community.event1Desc,
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
    },
    {
      title: t.community.event2Title,
      date: "December 18, 2025",
      time: "10:00 AM",
      location: t.community.onlineMeeting,
      type: t.community.virtual,
      description: t.community.event2Desc,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      title: t.community.event3Title,
      date: "December 20, 2025",
      time: "3:00 PM",
      location: t.community.localLibrary,
      type: t.community.inPerson,
      description: t.community.event3Desc,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    },
  ];

  return (
    <div>
      {/* Hero Section with Gradient and Logo */}
      <section
        style={{
          padding: "80px 24px",
          textAlign: "center",
          background: "linear-gradient(135deg, #57d2e1 0%, #0957b1 100%)",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img 
            src="/authentika_logo_white.svg" 
            alt="Authentika Logo" 
            style={{ width: "150px", marginBottom: "32px", height: "auto" }} 
          />
          <h1 style={{ fontSize: "52px", marginBottom: "24px", color: "white" }}>
            {t.community.heroTitle} <span style={{ opacity: 0.95 }}>{t.community.heroHighlight}</span>
          </h1>
          <p style={{ fontSize: "22px", lineHeight: 1.6, opacity: 0.95 }}>
            {t.community.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Upcoming Events - Large Image Cards */}
      <section className="section-padding">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px", textAlign: "center" }}>
            <h2 style={{ fontSize: "40px", marginBottom: "12px" }}>
              {t.community.upcomingWorkshops}
            </h2>
            <p style={{ fontSize: "20px", color: "var(--gray-600)" }}>
              {t.community.registerFree}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: "0",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: index % 2 === 0 ? "1fr 1.2fr" : "1.2fr 1fr",
                  alignItems: "center",
                  gap: "0",
                }}
              >
                {/* Image Side */}
                {index % 2 === 0 && (
                  <div style={{ height: "100%", minHeight: "320px", position: "relative" }}>
                    <img
                      src={event.image}
                      alt={event.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  </div>
                )}

                {/* Content Side */}
                <div style={{ padding: "40px" }}>
                  <div
                    className={`badge ${event.type === "Virtual" ? "badge-blue" : "badge-green"}`}
                    style={{ marginBottom: "20px" }}
                  >
                    {event.type}
                  </div>

                  <h3 style={{ fontSize: "28px", marginBottom: "16px" }}>
                    {event.title}
                  </h3>

                  <p style={{ fontSize: "18px", color: "var(--gray-600)", marginBottom: "28px", lineHeight: 1.7 }}>
                    {event.description}
                  </p>

                  <div style={{ marginBottom: "28px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      <Calendar size={22} style={{ color: "var(--primary)" }} />
                      <span style={{ fontSize: "17px", color: "var(--gray-600)" }}>
                        {event.date}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      <Clock size={22} style={{ color: "var(--primary)" }} />
                      <span style={{ fontSize: "17px", color: "var(--gray-600)" }}>
                        {event.time}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <MapPin size={22} style={{ color: "var(--primary)" }} />
                      <span style={{ fontSize: "17px", color: "var(--gray-600)" }}>
                        {event.location}
                      </span>
                    </div>
                  </div>

                  <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {t.community.registerNow}
                    <ArrowRight size={20} />
                  </button>
                </div>

                {/* Image Side (alternate) */}
                {index % 2 !== 0 && (
                  <div style={{ height: "100%", minHeight: "320px", position: "relative" }}>
                    <img
                      src={event.image}
                      alt={event.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Methods - Image Grid */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontSize: "40px", marginBottom: "16px" }}>
              {t.community.waysToLearn}
            </h2>
            <p style={{ fontSize: "20px", color: "var(--gray-600)" }}>
              {t.community.chooseMethod}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              {
                title: t.community.onlineWorkshops,
                description: t.community.onlineWorkshopsDesc,
                image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80",
              },
              {
                title: t.community.callForHelp,
                description: t.community.callForHelpDesc,
                image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
              },
              {
                title: t.community.inPersonMeetings,
                description: t.community.inPersonMeetingsDesc,
                image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
              },
              {
                title: t.community.emailTips,
                description: t.community.emailTipsDesc,
                image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: "0",
                  overflow: "hidden",
                }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "28px" }}>
                  <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "17px", color: "var(--gray-600)", lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Photos */}
      <section className="section-padding">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontSize: "40px", marginBottom: "16px" }}>
              {t.community.whatPeopleSay}
            </h2>
            <p style={{ fontSize: "20px", color: "var(--gray-600)" }}>
              {t.community.realStories}
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
                quote: t.community.testimonial1,
                author: "Mary, 72",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
              },
              {
                quote: t.community.testimonial2,
                author: "Robert, 68",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
              },
              {
                quote: t.community.testimonial3,
                author: "Linda, 75",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="glass-card"
                style={{ padding: "32px", textAlign: "center" }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "0 auto 24px",
                    border: "3px solid var(--primary)",
                  }}
                />
                <div style={{ fontSize: "48px", marginBottom: "16px", opacity: 0.3, color: "var(--primary)" }}>&quot;</div>
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                    color: "var(--gray-600)",
                  }}
                >
                  {testimonial.quote}
                </p>
                <p style={{ fontWeight: 600, fontSize: "17px", margin: 0 }}>
                  {testimonial.author}
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
          background: "var(--gray-50)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
            {t.community.readyToJoin}
          </h2>
          <p style={{ fontSize: "20px", color: "var(--gray-600)", marginBottom: "32px", lineHeight: 1.6 }}>
            {t.community.ctaSubtitle}
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" className="btn-primary">
              {t.community.verifyImage}
            </Link>
            <Link href="/learn" className="btn-secondary">
              {t.community.learnSkills}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
