"use client";

import Link from "next/link";
import { useState } from "react";
import { X, Menu, Globe } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/learn", label: t.nav.learn },
    { href: "/community", label: t.nav.community },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tl" : "en");
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: "95%",
          maxWidth: "1100px",
        }}
      >
        <div className="floating-header"
          style={{
            padding: "16px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Image
              src="/authentika_logo.svg"
              alt="AuthentiKa"
              width={140}
              height={40}
              style={{ height: "40px", width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: "var(--gray-600)",
                  fontSize: "18px",
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-600)")}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                borderRadius: "20px",
                border: "2px solid var(--gray-200)",
                background: "white",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--primary)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.background = "rgba(9, 87, 177, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--gray-200)";
                e.currentTarget.style.background = "white";
              }}
            >
              <Globe size={16} />
              {language === "en" ? "EN" : "TL"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--foreground)",
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="glass-card"
            style={{
              marginTop: "12px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "var(--foreground)",
                  fontSize: "18px",
                  fontWeight: 500,
                  padding: "16px",
                  borderRadius: "12px",
                  background: "rgba(9, 87, 177, 0.05)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(9, 87, 177, 0.15)";
                  e.currentTarget.style.color = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(9, 87, 177, 0.05)";
                  e.currentTarget.style.color = "var(--foreground)";
                }}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                background: "rgba(9, 87, 177, 0.1)",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--primary)",
              }}
            >
              <Globe size={20} />
              {language === "en" ? "Switch to Tagalog" : "Switch to English"}
            </button>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div style={{ height: "100px" }} />

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
