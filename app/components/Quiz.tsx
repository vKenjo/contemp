"use client";

import { useState } from "react";
import Link from "next/link";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  learnMoreLink?: string;
  learnMoreText?: string;
  source?: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  title: string;
  description: string;
}

export default function Quiz({ questions, title, description }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);

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

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
    setQuizComplete(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) {
      return {
        emoji: "🌟",
        title: "Excellent!",
        message: "You have a great understanding of AI safety!",
      };
    } else if (percentage >= 60) {
      return {
        emoji: "👍",
        title: "Good job!",
        message: "You're on the right track. Review our learning materials to strengthen your knowledge.",
      };
    } else {
      return {
        emoji: "📚",
        title: "Keep learning!",
        message: "We recommend exploring our learning modules to build your AI safety knowledge.",
      };
    }
  };

  if (quizComplete) {
    const result = getScoreMessage();
    return (
      <div className="card" style={{ padding: "40px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ fontSize: "64px", marginBottom: "20px" }}>{result.emoji}</div>
        <h2 style={{ fontSize: "32px", marginBottom: "12px" }}>{result.title}</h2>
        <p style={{ color: "var(--gray-500)", fontSize: "18px", marginBottom: "24px" }}>
          {result.message}
        </p>
        <div
          style={{
            background: "var(--gray-50)",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "32px",
          }}
        >
          <div style={{ fontSize: "48px", fontWeight: 700, color: "var(--primary)" }}>
            {score}/{questions.length}
          </div>
          <p style={{ color: "var(--gray-500)", margin: "8px 0 0" }}>
            Questions Correct
          </p>
        </div>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={handleRestartQuiz} className="btn-primary">
            Try Again
          </button>
          <Link href="/learn" className="btn-secondary">
            Continue Learning
          </Link>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      {/* Quiz Header */}
      <div style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>{title}</h2>
        <p style={{ color: "var(--gray-500)" }}>{description}</p>
      </div>

      {/* Progress Bar */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "14px", color: "var(--gray-500)" }}>
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span style={{ fontSize: "14px", color: "var(--primary)", fontWeight: 600 }}>
            Score: {score}
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100}%` }}
          ></div>
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
                  background: "rgba(52, 199, 89, 0.1)",
                };
              } else if (index === selectedAnswer && index !== question.correctAnswer) {
                optionStyle = {
                  ...optionStyle,
                  border: "2px solid var(--danger)",
                  background: "rgba(255, 59, 48, 0.1)",
                };
              }
            } else if (selectedAnswer === index) {
              optionStyle = {
                ...optionStyle,
                border: "2px solid var(--primary)",
                background: "rgba(0, 122, 255, 0.05)",
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
                  ? "rgba(52, 199, 89, 0.1)"
                  : "rgba(255, 149, 0, 0.1)",
              border: `1px solid ${
                selectedAnswer === question.correctAnswer
                  ? "rgba(52, 199, 89, 0.3)"
                  : "rgba(255, 149, 0, 0.3)"
              }`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span style={{ fontSize: "20px" }}>
                {selectedAnswer === question.correctAnswer ? "✅" : "💡"}
              </span>
              <strong>
                {selectedAnswer === question.correctAnswer ? "Correct!" : "Not quite right"}
              </strong>
            </div>
            <p style={{ margin: 0, lineHeight: 1.6, color: "var(--gray-600)" }}>
              {question.explanation}
            </p>
            {question.source && (
              <p style={{ margin: "12px 0 0", fontSize: "13px", color: "var(--gray-400)" }}>
                Source: {question.source}
              </p>
            )}
            {question.learnMoreLink && (
              <Link
                href={question.learnMoreLink}
                style={{
                  display: "inline-block",
                  marginTop: "12px",
                  color: "var(--primary)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {question.learnMoreText || "Learn more →"}
              </Link>
            )}
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
              Check Answer
            </button>
          ) : (
            <button onClick={handleNextQuestion} className="btn-primary">
              {currentQuestion < questions.length - 1 ? "Next Question →" : "See Results"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
