"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getCourseBySlug } from "../../lib/courseData";
import CourseViewer from "../../components/CourseViewer";
import Link from "next/link";

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>Course Not Found</h1>
          <p style={{ color: "var(--gray-500)", marginBottom: "24px" }}>
            The course you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/learn" className="btn-primary">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const handleCourseComplete = () => {
    // Could save completion to localStorage or a backend
    router.push("/learn");
  };

  return <CourseViewer course={course} onComplete={handleCourseComplete} />;
}
