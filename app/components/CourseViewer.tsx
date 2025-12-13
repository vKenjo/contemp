"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Play, 
  Pause, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle, 
  Clock, 
  BookOpen,
  Lightbulb,
  AlertTriangle,
  FileText,
  Award
} from "lucide-react";
import { Course, Lesson, ContentBlock } from "../lib/courseData";
import { useLanguage } from "../lib/LanguageContext";

interface CourseViewerProps {
  course: Course;
  onComplete: () => void;
}

export default function CourseViewer({ course, onComplete }: CourseViewerProps) {
  const { t } = useLanguage();
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentLesson = course.lessons[currentLessonIndex];
  const progressPercentage = (completedLessons.length / course.lessons.length) * 100;
  const allLessonsComplete = completedLessons.length === course.lessons.length;

  const markLessonComplete = () => {
    if (!completedLessons.includes(currentLesson.id)) {
      setCompletedLessons([...completedLessons, currentLesson.id]);
    }
  };

  const goToNextLesson = () => {
    markLessonComplete();
    if (currentLessonIndex < course.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToLesson = (index: number) => {
    setCurrentLessonIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startQuiz = () => {
    markLessonComplete();
    setShowQuiz(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case "tip":
        return (
          <div
            key={index}
            style={{
              padding: "20px 24px",
              background: "rgba(82, 196, 26, 0.08)",
              borderRadius: "16px",
              border: "1px solid rgba(82, 196, 26, 0.2)",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <Lightbulb size={22} style={{ color: "var(--success)" }} />
              <strong style={{ fontSize: "17px", color: "var(--success)" }}>{block.title}</strong>
            </div>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.7, color: "var(--gray-600)" }}>
              {block.content}
            </p>
          </div>
        );
      case "warning":
        return (
          <div
            key={index}
            style={{
              padding: "20px 24px",
              background: "rgba(255, 149, 0, 0.08)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 149, 0, 0.2)",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <AlertTriangle size={22} style={{ color: "var(--warning)" }} />
              <strong style={{ fontSize: "17px", color: "#b8860b" }}>{block.title}</strong>
            </div>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.7, color: "var(--gray-600)" }}>
              {block.content}
            </p>
          </div>
        );
      case "example":
        return (
          <div
            key={index}
            style={{
              padding: "20px 24px",
              background: "rgba(9, 87, 177, 0.06)",
              borderRadius: "16px",
              border: "1px solid rgba(9, 87, 177, 0.15)",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <FileText size={22} style={{ color: "var(--primary)" }} />
              <strong style={{ fontSize: "17px", color: "var(--primary)" }}>{block.title}</strong>
            </div>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.7, color: "var(--gray-600)" }}>
              {block.content}
            </p>
          </div>
        );
      default:
        return (
          <p
            key={index}
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "var(--gray-600)",
              marginBottom: "20px",
            }}
          >
            {block.content}
          </p>
        );
    }
  };

  if (showQuiz) {
    return (
      <CourseQuiz 
        course={course} 
        onComplete={onComplete}
        onBack={() => setShowQuiz(false)}
      />
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)", paddingTop: "100px" }}>
      {/* Top Progress Bar */}
      <div
        style={{
          position: "sticky",
          top: "100px",
          zIndex: 50,
          background: "var(--background)",
          borderBottom: "1px solid var(--gray-200)",
          padding: "16px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <Link
              href="/learn"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--gray-500)",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              <ChevronLeft size={18} />
              {t.course.backToCourses}
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontSize: "14px", color: "var(--gray-500)" }}>
                {completedLessons.length} {t.course.of} {course.lessons.length} {t.course.lessonsCompleted}
              </span>
              <span style={{ fontSize: "18px", fontWeight: 600, color: "var(--primary)" }}>
                {Math.round(progressPercentage)}%
              </span>
            </div>
          </div>
          <div
            style={{
              height: "8px",
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

      {/* Main Content */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: "40px",
          }}
          className="course-layout"
        >
          {/* Left Sidebar - Lesson List */}
          <div
            style={{
              position: "sticky",
              top: "180px",
              alignSelf: "start",
              maxHeight: "calc(100vh - 220px)",
              overflowY: "auto",
            }}
            className="lesson-sidebar"
          >
            <h3 style={{ fontSize: "18px", marginBottom: "16px", color: "var(--gray-600)" }}>
              {t.course.courseContents}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {course.lessons.map((lesson, index) => {
                const isComplete = completedLessons.includes(lesson.id);
                const isCurrent = index === currentLessonIndex;

                return (
                  <button
                    key={lesson.id}
                    onClick={() => goToLesson(index)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "none",
                      background: isCurrent ? "rgba(9, 87, 177, 0.1)" : "transparent",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: isComplete
                          ? "var(--success)"
                          : isCurrent
                          ? "var(--primary)"
                          : "var(--gray-200)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {isComplete ? (
                        <CheckCircle size={16} style={{ color: "white" }} />
                      ) : (
                        <span style={{ fontSize: "12px", fontWeight: 600, color: isCurrent ? "white" : "var(--gray-500)" }}>
                          {index + 1}
                        </span>
                      )}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "14px",
                          fontWeight: isCurrent ? 600 : 500,
                          color: isCurrent ? "var(--primary)" : "var(--foreground)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {lesson.title}
                      </p>
                      <p style={{ margin: "2px 0 0", fontSize: "12px", color: "var(--gray-400)" }}>
                        {lesson.duration}
                      </p>
                    </div>
                  </button>
                );
              })}
              
              {/* Quiz Button */}
              <button
                onClick={startQuiz}
                disabled={!allLessonsComplete}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "2px dashed",
                  borderColor: allLessonsComplete ? "var(--primary)" : "var(--gray-300)",
                  background: allLessonsComplete ? "rgba(9, 87, 177, 0.05)" : "transparent",
                  cursor: allLessonsComplete ? "pointer" : "not-allowed",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  marginTop: "8px",
                  opacity: allLessonsComplete ? 1 : 0.6,
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: allLessonsComplete ? "var(--primary)" : "var(--gray-200)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Award size={14} style={{ color: allLessonsComplete ? "white" : "var(--gray-400)" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      fontWeight: 600,
                      color: allLessonsComplete ? "var(--primary)" : "var(--gray-400)",
                    }}
                  >
                    {t.course.takeAssessment}
                  </p>
                  <p style={{ margin: "2px 0 0", fontSize: "12px", color: "var(--gray-400)" }}>
                    {allLessonsComplete ? t.course.earnCertificate : t.course.completeFirst}
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div>
            {/* Video Section */}
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%",
                background: "var(--gray-900)",
                borderRadius: "20px",
                overflow: "hidden",
                marginBottom: "32px",
              }}
            >
              <img
                src={currentLesson.videoThumbnail}
                alt={currentLesson.title}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.95)",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  {isPlaying ? (
                    <Pause size={32} style={{ color: "var(--primary)" }} />
                  ) : (
                    <Play size={32} style={{ color: "var(--primary)", marginLeft: "4px" }} />
                  )}
                </button>
              </div>
              
              {/* Video Duration Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  background: "rgba(0,0,0,0.7)",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Clock size={14} style={{ color: "white" }} />
                <span style={{ fontSize: "14px", color: "white", fontWeight: 500 }}>
                  {currentLesson.duration}
                </span>
              </div>
            </div>

            {/* Lesson Content */}
            <div style={{ maxWidth: "800px" }}>
              <div style={{ marginBottom: "24px" }}>
                <div className="badge badge-blue" style={{ marginBottom: "12px" }}>
                  {t.course.lesson} {currentLessonIndex + 1} {t.course.of} {course.lessons.length}
                </div>
                <h1 style={{ fontSize: "36px", marginBottom: "8px", lineHeight: 1.3 }}>
                  {currentLesson.title}
                </h1>
              </div>

              {/* Content Blocks */}
              <div style={{ marginBottom: "40px" }}>
                {currentLesson.content.map((block, index) => renderContentBlock(block, index))}
              </div>

              {/* Navigation Buttons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "24px",
                  borderTop: "1px solid var(--gray-200)",
                }}
              >
                <button
                  onClick={goToPreviousLesson}
                  disabled={currentLessonIndex === 0}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 24px",
                    borderRadius: "12px",
                    border: "2px solid var(--gray-200)",
                    background: "white",
                    cursor: currentLessonIndex === 0 ? "not-allowed" : "pointer",
                    opacity: currentLessonIndex === 0 ? 0.5 : 1,
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  <ChevronLeft size={20} />
                  {t.course.previousLesson}
                </button>

                {currentLessonIndex < course.lessons.length - 1 ? (
                  <button
                    onClick={goToNextLesson}
                    className="btn-primary"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {t.course.nextLesson}
                    <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={startQuiz}
                    className="btn-primary"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "linear-gradient(135deg, var(--success), #2da44e)",
                    }}
                  >
                    <Award size={20} />
                    {t.course.takeAssessment}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style jsx global>{`
        @media (max-width: 900px) {
          .course-layout {
            grid-template-columns: 1fr !important;
          }
          .lesson-sidebar {
            position: relative !important;
            top: 0 !important;
            max-height: none !important;
            margin-bottom: 24px;
          }
        }
      `}</style>
    </div>
  );
}

// Course Quiz Component
interface CourseQuizProps {
  course: Course;
  onComplete: () => void;
  onBack: () => void;
}

function CourseQuiz({ course, onComplete, onBack }: CourseQuizProps) {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const questions = course.quiz;
  const question = questions[currentQuestion];
  const passingScore = Math.ceil(questions.length * 0.7);
  const passed = score >= passingScore;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === question.correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (showCertificate) {
    return (
      <Certificate 
        courseName={course.title}
        certificateTitle={course.certificateTitle}
        score={score}
        totalQuestions={questions.length}
        onBack={onComplete}
      />
    );
  }

  if (quizComplete) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--background)", padding: "120px 24px 80px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <div
            className="card"
            style={{
              padding: "48px",
              background: passed
                ? "linear-gradient(135deg, rgba(82, 196, 26, 0.05), rgba(82, 196, 26, 0.1))"
                : "white",
            }}
          >
            <div style={{ fontSize: "72px", marginBottom: "24px" }}>
              {passed ? "🎉" : "📚"}
            </div>
            <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
              {passed ? t.course.congratulations : t.course.keepLearning}
            </h2>
            <p style={{ fontSize: "18px", color: "var(--gray-500)", marginBottom: "32px" }}>
              {passed
                ? t.course.passedMessage
                : t.course.failedMessage.replace("{score}", String(passingScore))}
            </p>

            <div
              style={{
                background: "var(--gray-50)",
                borderRadius: "16px",
                padding: "24px",
                marginBottom: "32px",
              }}
            >
              <div style={{ fontSize: "56px", fontWeight: 700, color: passed ? "var(--success)" : "var(--primary)" }}>
                {score}/{questions.length}
              </div>
              <p style={{ color: "var(--gray-500)", margin: "8px 0 0" }}>
                {t.course.questionsCorrect}
              </p>
              <div
                style={{
                  marginTop: "16px",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  background: passed ? "rgba(82, 196, 26, 0.1)" : "rgba(255, 149, 0, 0.1)",
                  display: "inline-block",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: 600, color: passed ? "var(--success)" : "#b8860b" }}>
                  {passed ? t.course.passed : t.course.needMore.replace("{count}", String(passingScore - score))}
                </span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              {passed ? (
                <button
                  onClick={() => setShowCertificate(true)}
                  className="btn-primary"
                  style={{
                    background: "linear-gradient(135deg, var(--success), #2da44e)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Award size={20} />
                  {t.course.viewCertificate}
                </button>
              ) : (
                <>
                  <button onClick={handleRetry} className="btn-primary">
                    {t.course.tryAgain}
                  </button>
                  <button onClick={onBack} className="btn-secondary">
                    {t.course.reviewLessons}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)", padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        {/* Quiz Header */}
        <div style={{ marginBottom: "32px", textAlign: "center" }}>
          <div className="badge badge-blue" style={{ marginBottom: "12px" }}>
            <Award size={14} style={{ marginRight: "6px" }} />
            {t.course.courseAssessment}
          </div>
          <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
            {course.title}
          </h1>
          <p style={{ color: "var(--gray-500)" }}>
            {t.course.passWithScore.replace("{score}", String(passingScore))}
          </p>
        </div>

        {/* Progress */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span style={{ fontSize: "14px", color: "var(--gray-500)" }}>
              {t.course.question} {currentQuestion + 1} {t.course.of} {questions.length}
            </span>
            <span style={{ fontSize: "14px", color: "var(--primary)", fontWeight: 600 }}>
              {t.course.score}: {score}
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="card" style={{ padding: "32px" }}>
          <h3 style={{ fontSize: "22px", marginBottom: "24px", lineHeight: 1.4 }}>
            {question.question}
          </h3>

          {/* Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {question.options.map((option, index) => {
              let optionStyle: React.CSSProperties = {
                padding: "16px 20px",
                borderRadius: "12px",
                border: "2px solid var(--gray-200)",
                background: "var(--background)",
                cursor: showResult ? "default" : "pointer",
                textAlign: "left",
                fontSize: "16px",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              };

              if (showResult) {
                if (index === question.correctAnswer) {
                  optionStyle = {
                    ...optionStyle,
                    border: "2px solid var(--success)",
                    background: "rgba(82, 196, 26, 0.1)",
                  };
                } else if (index === selectedAnswer && index !== question.correctAnswer) {
                  optionStyle = {
                    ...optionStyle,
                    border: "2px solid var(--danger)",
                    background: "rgba(255, 77, 79, 0.1)",
                  };
                }
              } else if (selectedAnswer === index) {
                optionStyle = {
                  ...optionStyle,
                  border: "2px solid var(--primary)",
                  background: "rgba(9, 87, 177, 0.05)",
                };
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  style={optionStyle}
                  disabled={showResult}
                >
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      border: "2px solid currentColor",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: 600,
                      flexShrink: 0,
                      color: showResult
                        ? index === question.correctAnswer
                          ? "var(--success)"
                          : index === selectedAnswer
                          ? "var(--danger)"
                          : "var(--gray-400)"
                        : selectedAnswer === index
                        ? "var(--primary)"
                        : "var(--gray-400)",
                    }}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          {/* Result Explanation */}
          {showResult && (
            <div
              style={{
                marginTop: "24px",
                padding: "20px",
                borderRadius: "12px",
                background:
                  selectedAnswer === question.correctAnswer
                    ? "rgba(82, 196, 26, 0.1)"
                    : "rgba(255, 149, 0, 0.1)",
                border: `1px solid ${
                  selectedAnswer === question.correctAnswer
                    ? "rgba(82, 196, 26, 0.3)"
                    : "rgba(255, 149, 0, 0.3)"
                }`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <span style={{ fontSize: "20px" }}>
                  {selectedAnswer === question.correctAnswer ? "✅" : "💡"}
                </span>
                <strong>
                  {selectedAnswer === question.correctAnswer ? t.course.correct : t.course.notQuiteRight}
                </strong>
              </div>
              <p style={{ margin: 0, lineHeight: 1.6, color: "var(--gray-600)" }}>
                {question.explanation}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ marginTop: "24px", display: "flex", gap: "12px", justifyContent: "flex-end" }}>
            {!showResult ? (
              <button
                onClick={handleSubmitAnswer}
                className="btn-primary"
                disabled={selectedAnswer === null}
                style={{
                  opacity: selectedAnswer === null ? 0.5 : 1,
                  cursor: selectedAnswer === null ? "not-allowed" : "pointer",
                }}
              >
                {t.course.checkAnswer}
              </button>
            ) : (
              <button onClick={handleNextQuestion} className="btn-primary">
                {currentQuestion < questions.length - 1 ? t.course.nextQuestion : t.course.seeResults}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Certificate Component
interface CertificateProps {
  courseName: string;
  certificateTitle: string;
  score: number;
  totalQuestions: number;
  onBack: () => void;
}

function Certificate({ courseName, certificateTitle, score, totalQuestions, onBack }: CertificateProps) {
  const { t } = useLanguage();
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-100)", padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }} className="no-print">
          <Link
            href="/learn"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--gray-500)",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            <ChevronLeft size={18} />
            {t.course.backToCourses}
          </Link>
          <button
            onClick={handlePrint}
            className="btn-primary"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            {t.course.printCertificate}
          </button>
        </div>

        {/* Certificate */}
        <div
          className="certificate-container"
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "64px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
            border: "8px solid var(--primary)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative Background */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 0% 0%, rgba(9, 87, 177, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 100% 100%, rgba(87, 210, 225, 0.05) 0%, transparent 50%)
              `,
              pointerEvents: "none",
            }}
          />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Logo/Icon */}
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <Award size={40} style={{ color: "white" }} />
            </div>

            <h3 style={{ fontSize: "16px", color: "var(--primary)", letterSpacing: "3px", marginBottom: "8px" }}>
              {t.course.certificateOfCompletion}
            </h3>

            <h1 style={{ fontSize: "42px", marginBottom: "16px", color: "var(--foreground)" }}>
              {certificateTitle}
            </h1>

            <p style={{ fontSize: "18px", color: "var(--gray-500)", marginBottom: "32px" }}>
              {t.course.certifyThat}
            </p>

            <div
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "var(--primary)",
                marginBottom: "32px",
                padding: "16px 32px",
                borderBottom: "3px solid var(--primary)",
                display: "inline-block",
              }}
            >
              {t.course.courseParticipant}
            </div>

            <p style={{ fontSize: "18px", color: "var(--gray-500)", marginBottom: "16px" }}>
              {t.course.completedCourse}
            </p>

            <h2 style={{ fontSize: "28px", marginBottom: "32px", color: "var(--foreground)" }}>
              {courseName}
            </h2>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(82, 196, 26, 0.1)",
                padding: "12px 24px",
                borderRadius: "30px",
                marginBottom: "32px",
              }}
            >
              <CheckCircle size={20} style={{ color: "var(--success)" }} />
              <span style={{ fontSize: "16px", fontWeight: 600, color: "var(--success)" }}>
                {t.course.assessmentScore}: {score}/{totalQuestions} ({Math.round((score / totalQuestions) * 100)}%)
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "48px", marginTop: "40px" }}>
              <div>
                <p style={{ fontSize: "14px", color: "var(--gray-400)", marginBottom: "8px" }}>{t.course.dateIssued}</p>
                <p style={{ fontSize: "16px", fontWeight: 600 }}>{currentDate}</p>
              </div>
              <div>
                <p style={{ fontSize: "14px", color: "var(--gray-400)", marginBottom: "8px" }}>{t.course.issuedBy}</p>
                <p style={{ fontSize: "16px", fontWeight: 600 }}>AuthentiKa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Learning */}
        <div style={{ textAlign: "center", marginTop: "32px" }} className="no-print">
          <p style={{ color: "var(--gray-500)", marginBottom: "16px" }}>
            {t.course.continueJourney}
          </p>
          <Link href="/learn" className="btn-secondary">
            {t.course.exploreMore}
          </Link>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
          }
          .certificate-container {
            box-shadow: none !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
