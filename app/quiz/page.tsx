import Quiz from "../components/Quiz";
import Link from "next/link";

export default function QuizPage() {
  const aiSafetyQuiz = [
    {
      id: 1,
      question: "What hidden information can be embedded in your photos when you take them with your smartphone?",
      options: [
        "Only the date the photo was taken",
        "GPS location, date, time, and device information",
        "Just the file name",
        "Nothing—photos don't contain hidden data",
      ],
      correctAnswer: 1,
      explanation:
        "Photos contain 'metadata' including GPS coordinates, timestamps, camera settings, and device information. This data, known as EXIF data, can reveal your location, daily routines, and even what device you use. According to a 2023 study by the International Computer Science Institute, 85% of smartphone photos contain geolocation data by default.",
      learnMoreLink: "/photo-protection",
      learnMoreText: "Learn how to protect your photo data →",
      source: "International Computer Science Institute, 2023",
    },
    {
      id: 2,
      question: "According to research, approximately how much is a single clear facial photo worth to AI training companies?",
      options: ["Less than $0.01", "About $0.50", "Up to $3", "Over $100"],
      correctAnswer: 2,
      explanation:
        "Research from MIT Technology Review indicates that high-quality facial images can be worth up to $3 each for AI training purposes. Companies use these images to improve facial recognition algorithms. With thousands of photos online, this represents significant unrealized value for individuals.",
      learnMoreLink: "/photo-protection",
      learnMoreText: "Understand your photo's value →",
      source: "MIT Technology Review, 2023",
    },
    {
      id: 3,
      question: "What is 'facial recognition' technology?",
      options: [
        "A camera feature that makes faces look better",
        "Technology that can identify or verify people by analyzing their faces",
        "A filter that adds faces to photos",
        "Software that only law enforcement can use",
      ],
      correctAnswer: 1,
      explanation:
        "Facial recognition uses AI to identify individuals by analyzing facial features. It's used in phone unlocking, social media tagging, and security systems. According to the Electronic Frontier Foundation (EFF), these systems are trained using millions of photos often collected without explicit consent.",
      learnMoreLink: "/learn",
      learnMoreText: "Learn more about AI technology →",
      source: "Electronic Frontier Foundation",
    },
    {
      id: 4,
      question: "What percentage of seniors have reported concerns about AI and privacy according to AARP research?",
      options: ["About 25%", "Around 50%", "Nearly 78%", "Less than 10%"],
      correctAnswer: 2,
      explanation:
        "AARP's 2023 Technology and Aging Report found that 78% of adults over 65 express concern about AI and data privacy. This concern is well-founded, as seniors are often targeted by AI-powered scams that use personal information gathered from online sources.",
      learnMoreLink: "/tips",
      learnMoreText: "See safety tips for seniors →",
      source: "AARP Technology and Aging Report, 2023",
    },
    {
      id: 5,
      question: "What is a 'deepfake'?",
      options: [
        "A type of computer virus",
        "An AI-generated video or image making someone appear to do or say something they didn't",
        "A secure way to store photos",
        "A privacy protection tool",
      ],
      correctAnswer: 1,
      explanation:
        "Deepfakes are AI-generated media that can convincingly show people saying or doing things they never did. The FBI has warned that deepfakes are increasingly used in scams targeting seniors. In 2023, the Federal Trade Commission reported that AI-enhanced scams cost Americans over $2.7 billion.",
      learnMoreLink: "/tips",
      learnMoreText: "Learn to spot AI-generated content →",
      source: "Federal Trade Commission, 2023",
    },
    {
      id: 6,
      question: "What should you do before sharing photos of your grandchildren online?",
      options: [
        "Share immediately—family photos are always safe",
        "Ask the parents' permission and use private sharing settings",
        "Tag their school location so family can find them",
        "Post publicly so everyone can enjoy them",
      ],
      correctAnswer: 1,
      explanation:
        "The American Academy of Pediatrics recommends getting parental consent before sharing children's photos online. Photos should be shared privately, without location data or identifying information about schools or activities. Children's photos are particularly valuable to AI systems for training purposes.",
      learnMoreLink: "/photo-protection",
      learnMoreText: "Learn about family photo safety →",
      source: "American Academy of Pediatrics",
    },
    {
      id: 7,
      question: "According to the Federal Trade Commission, what was the most common type of fraud reported by seniors in 2023?",
      options: [
        "Credit card fraud",
        "Imposter scams (including AI-enhanced voice cloning)",
        "Lottery scams",
        "Real estate fraud",
      ],
      correctAnswer: 1,
      explanation:
        "The FTC reports that imposter scams are the #1 fraud type affecting seniors, with AI voice cloning making these scams more convincing. Scammers can now clone a family member's voice from just a few seconds of audio found online, making urgent 'grandparent scams' increasingly believable.",
      learnMoreLink: "/tips",
      learnMoreText: "Learn to protect yourself from scams →",
      source: "FTC Consumer Sentinel Network, 2023",
    },
    {
      id: 8,
      question: "What is the best practice for managing passwords according to cybersecurity experts?",
      options: [
        "Use the same password everywhere so you don't forget it",
        "Write all passwords on a sticky note on your computer",
        "Use unique, complex passwords and consider a password manager",
        "Use simple passwords like '123456' for easy memory",
      ],
      correctAnswer: 2,
      explanation:
        "The Cybersecurity and Infrastructure Security Agency (CISA) recommends using unique passwords of at least 12 characters for each account. Password managers can help seniors securely store and generate strong passwords without having to remember them all.",
      learnMoreLink: "/tips",
      learnMoreText: "See password security tips →",
      source: "CISA Cybersecurity Best Practices",
    },
    {
      id: 9,
      question: "How many photos are shared online globally every day, according to recent estimates?",
      options: [
        "About 1 million",
        "Around 100 million",
        "Over 3.2 billion",
        "About 500,000",
      ],
      correctAnswer: 2,
      explanation:
        "Over 3.2 billion photos are shared online daily across social media platforms, messaging apps, and cloud storage services. This massive volume of images provides enormous training data for AI systems, with the majority of users unaware their photos may be used for machine learning purposes.",
      learnMoreLink: "/learn",
      learnMoreText: "Understand AI and your data →",
      source: "Statista Digital Photo Sharing Report, 2024",
    },
    {
      id: 10,
      question: "What percentage of people are unaware that their photos may be used for AI training?",
      options: ["About 20%", "Around 35%", "Nearly 65%", "Less than 10%"],
      correctAnswer: 2,
      explanation:
        "A Pew Research Center study found that approximately 65% of Americans are not aware that their photos shared on social media may be used to train AI systems. This lack of awareness highlights the importance of education about AI and digital privacy rights.",
      learnMoreLink: "/learn",
      learnMoreText: "Start your AI education →",
      source: "Pew Research Center, 2023",
    },
  ];

  const quickFactsQuiz = [
    {
      id: 1,
      question: "True or False: Once you delete a photo from social media, it's completely gone from the internet.",
      options: [
        "True—deleting removes it everywhere",
        "False—copies may exist on servers, in backups, or already downloaded by others",
      ],
      correctAnswer: 1,
      explanation:
        "Unfortunately, deleting a photo from social media doesn't guarantee it's gone forever. Copies may exist on company servers, in search engine caches, or may have already been downloaded or screenshotted by others. This is why being careful about what you share initially is so important.",
      source: "Internet Society Digital Footprint Report",
    },
    {
      id: 2,
      question: "True or False: You need special technical skills to adjust privacy settings on your phone.",
      options: [
        "True—only experts can change these settings",
        "False—most privacy settings are accessible in your phone's Settings app",
      ],
      correctAnswer: 1,
      explanation:
        "Privacy settings on smartphones are designed to be user-friendly. You can easily control location services, app permissions, and photo access through your Settings app. Our Photo Protection guide provides step-by-step instructions for both iPhone and Android devices.",
      learnMoreLink: "/photo-protection",
      learnMoreText: "See our step-by-step guides →",
    },
    {
      id: 3,
      question: "True or False: AI voice cloning requires hours of recorded audio to create a convincing fake.",
      options: [
        "True—extensive recordings are needed",
        "False—modern AI can clone voices from just a few seconds of audio",
      ],
      correctAnswer: 1,
      explanation:
        "According to researchers at McAfee, modern AI voice cloning technology can create convincing voice replicas from just 3 seconds of audio. This means voicemails, social media videos, or public recordings can potentially be used to clone anyone's voice for scam calls.",
      source: "McAfee Voice Cloning Research, 2023",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: "80px 24px 60px",
          textAlign: "center",
          background: "linear-gradient(180deg, rgba(88, 86, 214, 0.05) 0%, var(--background) 100%)",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="badge badge-blue" style={{ marginBottom: "16px" }}>
            📝 Test Your Knowledge
          </div>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            AI Safety{" "}
            <span className="text-gradient">Quiz</span>
          </h1>
          <p className="text-accessible" style={{ color: "var(--gray-500)" }}>
            Test what you&apos;ve learned about AI, photo protection, and digital safety. 
            Each question includes helpful explanations and links to learn more.
          </p>
        </div>
      </section>

      {/* Main Quiz */}
      <section className="section-padding">
        <Quiz
          questions={aiSafetyQuiz}
          title="AI Safety Challenge"
          description="Answer 10 questions to test your understanding of AI, data privacy, and photo protection."
        />
      </section>

      {/* Quick Facts Quiz */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>Quick True or False</h2>
          <p style={{ color: "var(--gray-500)" }}>
            Test your knowledge with these quick fact-checking questions
          </p>
        </div>
        <Quiz
          questions={quickFactsQuiz}
          title="True or False Challenge"
          description="Quick questions to test common AI and privacy misconceptions."
        />
      </section>

      {/* Sources and Citations */}
      <section className="section-padding">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px", textAlign: "center" }}>
            📚 Our Sources
          </h2>
          <p style={{ color: "var(--gray-500)", textAlign: "center", marginBottom: "32px" }}>
            All quiz content is based on research from trusted organizations
          </p>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              { name: "AARP", description: "Technology and Aging Research", url: "https://www.aarp.org" },
              { name: "Federal Trade Commission", description: "Consumer Protection Data", url: "https://www.ftc.gov" },
              { name: "Electronic Frontier Foundation", description: "Digital Privacy Research", url: "https://www.eff.org" },
              { name: "Pew Research Center", description: "Technology Adoption Studies", url: "https://www.pewresearch.org" },
              { name: "MIT Technology Review", description: "AI Industry Analysis", url: "https://www.technologyreview.com" },
              { name: "CISA", description: "Cybersecurity Best Practices", url: "https://www.cisa.gov" },
            ].map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{
                  padding: "20px",
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <h4 style={{ margin: "0 0 4px", fontSize: "16px", color: "var(--primary)" }}>
                  {source.name}
                </h4>
                <p style={{ margin: 0, fontSize: "14px", color: "var(--gray-500)" }}>
                  {source.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding"
        style={{
          background: "linear-gradient(135deg, var(--primary), var(--secondary))",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>Ready to Learn More?</h2>
          <p style={{ fontSize: "18px", opacity: 0.9, marginBottom: "32px" }}>
            Explore our comprehensive learning modules and protection guides to deepen your understanding.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/learn"
              style={{
                padding: "14px 28px",
                background: "white",
                color: "var(--primary)",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Start Learning
            </Link>
            <Link
              href="/photo-protection"
              style={{
                padding: "14px 28px",
                background: "rgba(255, 255, 255, 0.2)",
                color: "white",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 600,
                border: "2px solid white",
              }}
            >
              Protect Your Photos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
