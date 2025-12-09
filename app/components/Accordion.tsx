"use client";

import { useState } from "react";

interface AccordionProps {
  items: {
    question: string;
    answer: string;
  }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {items.map((item, index) => (
        <div
          key={index}
          className="card"
          style={{
            overflow: "hidden",
            cursor: "pointer",
          }}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div
            style={{
              padding: "20px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: openIndex === index ? "var(--gray-50)" : "transparent",
            }}
          >
            <h3 style={{ fontSize: "17px", fontWeight: 600, margin: 0 }}>
              {item.question}
            </h3>
            <span
              style={{
                fontSize: "20px",
                color: "var(--gray-400)",
                transform: openIndex === index ? "rotate(180deg)" : "rotate(0)",
                transition: "transform 0.3s ease",
              }}
            >
              ▼
            </span>
          </div>
          {openIndex === index && (
            <div
              style={{
                padding: "0 24px 24px",
                color: "var(--gray-500)",
                fontSize: "16px",
                lineHeight: 1.7,
              }}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
