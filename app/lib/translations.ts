export type Language = "en" | "tl";

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      learn: "Learn",
      community: "Community",
    },

    // Footer
    footer: {
      tagline: "Helping elderly communities detect AI-generated content and stay safe online.",
      quickLinks: "Quick Links",
      learnToDetect: "Learn to Detect AI",
      communityWorkshops: "Community Workshops",
      needHelp: "Need Help?",
      hereToHelp: "We're here to help",
      copyright: "© 2025 AuthentiKa. Made with care for our elderly community.",
    },

    // Home Page
    home: {
      heroTitle: "Is this",
      heroReal: "real",
      heroOr: "or",
      heroAI: "AI",
      heroQuestion: "?",
      heroSubtitle: "Simple tools to help you stay safe online. Just upload a photo to check if it is real.",
      tapToCheck: "Tap here to Check a Photo",
      tellYouIfReal: "We'll tell you if it's real or not",
      checkIfReal: "Check if Real",
      checking: "Checking...",
      itsAuthentic: "It's Authentic!",
      goodNews: "Good news! This photo looks real.",
      beCareful: "Be Careful",
      mightBeFake: "This might be fake or AI-created. Don't trust it immediately.",
      checkAnother: "Check Another Photo",
      
      // Stats
      seniorsConcerned: "of seniors concerned about AI",
      aiImagesDaily: "AI images created daily",
      cantIdentify: "can't identify AI photos",
      safetyPriority: "of your safety is our priority",
      
      // About Section
      whyMatters: "Why AuthentiKa Matters",
      aboutP1: "AuthentiKa was created with one simple goal: to help elderly community members detect AI-generated content and stay safe from fake photos and videos.",
      aboutP2: "We recognized that seniors are often left behind in conversations about technology and AI. But your photos, your memories, and your digital presence matter. You deserve to understand how AI is being used and how to protect yourself from fake content.",
      detectInstantly: "Detect AI-generated images instantly",
      learnSimple: "Learn through simple, clear courses",
      joinSupportive: "Join a supportive community",
      stayProtected: "Stay protected from AI scams",
      
      // How We Help
      howWeHelp: "How We Help You Stay Safe",
      threeWays: "Three simple ways to protect yourself from AI-generated content",
      detectAI: "Detect AI Content",
      detectAIDesc: "Upload any photo or video to check if it's real or AI-generated. Get results in seconds with our advanced detection system.",
      learnSkills: "Learn Detection Skills",
      learnSkillsDesc: "Take our step-by-step courses designed for seniors. Learn to spot fake images and protect yourself from scams.",
      joinWorkshops: "Join Workshops",
      joinWorkshopsDesc: "Connect with others at community workshops. Learn together in a supportive, welcoming environment.",
      
      // Trust Section
      trustedBy: "Trusted by Thousands of Seniors",
      trustSubtitle: "Join a growing community of elderly people learning to navigate the digital world safely and confidently.",
      activeUsers: "Active Users",
      photosVerified: "Photos Verified",
      workshopsHeld: "Workshops Held",
      satisfactionRate: "Satisfaction Rate",
      
      // CTA
      readyToStart: "Ready to Get Started?",
      startDetecting: "Start detecting AI-generated content today and learn how to stay safe online.",
      verifyNow: "Verify an Image Now",
      startLearning: "Start Learning",
    },

    // Learn Page
    learn: {
      heroTitle: "Learn to",
      heroHighlight: "Detect AI Content",
      heroSubtitle: "Master the skills to spot fake images and videos with our step-by-step courses designed for seniors.",
      yourProgress: "Your Learning Progress",
      coursesCompleted: "courses completed",
      of: "of",
      
      // Courses Section
      coursesTitle: "AI Detection Courses",
      coursesSubtitle: "Complete these courses to become an expert at spotting AI-generated content",
      lessons: "Lessons",
      startCourse: "Start Course",
      
      // Tips
      quickDetectionTips: "Quick Detection Tips",
      quickTipsSubtitle: "Keep these key points in mind when checking if an image might be AI-generated",
      checkHands: "Check the Hands",
      checkHandsDetail: "AI often gets hands wrong - look for extra fingers, missing fingers, or fingers in impossible positions.",
      examineFaces: "Examine Faces Closely",
      examineFacesDetail: "Look at eyes, teeth, and ears. Are they symmetrical? Do glasses or jewelry look realistic?",
      readText: "Read Any Text",
      readTextDetail: "AI-generated images often have gibberish text, misspelled words, or letters that don't make sense.",
      trustInstincts: "Trust Your Instincts",
      trustInstinctsDetail: "If something feels off or too perfect, it probably is. Verify before sharing or believing.",
      
      // Learn at own pace
      learnAtOwnPace: "Learn at Your Own Pace",
      allCoursesSelfPaced: "All courses are self-paced and can be completed anytime",
      
      // Red Flags
      redFlagsTitle: "Red Flags to Watch For",
      redFlagsSubtitle: "These are the most common signs that an image might be AI-generated",
      redFlag1Title: "Distorted Hands",
      redFlag1Desc: "Extra fingers, missing thumbs, or hands in unnatural positions",
      redFlag2Title: "Blurry Backgrounds",
      redFlag2Desc: "Objects that blend together or backgrounds that seem smudged",
      redFlag3Title: "Nonsense Text",
      redFlag3Desc: "Gibberish words, backwards letters, or misspelled signs",
      redFlag4Title: "Too Perfect",
      redFlag4Desc: "Images that look flawless but somehow don't feel real",
      redFlag5Title: "Strange Lighting",
      redFlag5Desc: "Shadows that don't match or impossible light sources",
      redFlag6Title: "Weird Details",
      redFlag6Desc: "Jewelry, glasses, or accessories that look distorted",
      
      // FAQs
      commonQuestions: "Common Questions",
      faqSubtitle: "Everything you need to know about our AI detection courses",
      faq1Q: "What are the signs that a photo might be AI-generated?",
      faq1A: "Look for these warning signs: unusual or extra fingers on hands, distorted facial features, strange reflections or shadows, text that doesn't make sense, objects that seem to blend together oddly, or backgrounds that look blurry or unrealistic. AI often struggles with fine details like jewelry, teeth, and hair strands.",
      faq2Q: "Why should I care about AI-generated images?",
      faq2A: "AI-generated images can be used to spread false information, create fake news, impersonate real people, or scam you out of money. Learning to identify them helps you avoid being misled and protects you from potential fraud. What you see online isn't always real.",
      faq3Q: "How long does it take to complete all courses?",
      faq3A: "The complete program takes about 100 minutes total (less than 2 hours). However, you can learn at your own pace and complete courses whenever you have time. Each course is broken into short, easy-to-follow lessons.",
      faq4Q: "Do I need any special skills to take these courses?",
      faq4A: "No special skills required! Our courses are designed specifically for seniors with no technical background. Everything is explained in simple, clear language with plenty of examples.",
      
      // CTA
      ctaTitle: "Ready to Start Learning?",
      ctaSubtitle: "Begin your first course today and learn to spot AI-generated content with confidence.",
      startFirstCourse: "Start First Course",
      joinWorkshop: "Join a Workshop",
    },

    // Community Page
    community: {
      heroTitle: "Join Our",
      heroHighlight: "Community",
      heroSubtitle: "Learn together with others in a supportive environment. Free workshops to help you detect AI-generated content and stay safe online.",
      
      // Events
      upcomingWorkshops: "Upcoming Workshops",
      registerFree: "Register for free workshops in your area or join us online",
      registerNow: "Register Now",
      
      // Event details
      event1Title: "Learn to Spot AI Photos",
      event1Desc: "Hands-on workshop where you'll learn to identify AI-generated images and protect yourself from fake content.",
      event2Title: "AI Detection for Beginners",
      event2Desc: "Join from home to learn the basics of detecting AI-generated photos and videos. No tech experience needed.",
      event3Title: "Coffee & Discussion Group",
      event3Desc: "Casual meetup to share experiences, ask questions, and learn from others about staying safe from AI scams.",
      
      inPerson: "In-Person",
      virtual: "Virtual",
      communityCenter: "Community Center",
      onlineMeeting: "Online Meeting",
      localLibrary: "Local Library",
      
      // Learning Methods
      waysToLearn: "Ways to Learn with Us",
      chooseMethod: "Choose the learning method that works best for you",
      onlineWorkshops: "Online Workshops",
      onlineWorkshopsDesc: "Join from home using your computer or tablet. We'll guide you step by step through detecting AI content.",
      callForHelp: "Call for Help",
      callForHelpDesc: "Prefer talking on the phone? Call us for one-on-one assistance with any questions about AI detection.",
      inPersonMeetings: "In-Person Meetings",
      inPersonMeetingsDesc: "Meet face-to-face at community centers and libraries. Learn together with others in your area.",
      emailTips: "Email Tips",
      emailTipsDesc: "Get helpful tips and workshop reminders delivered to your inbox weekly. Stay informed and safe.",
      
      // Testimonials
      whatPeopleSay: "What People Are Saying",
      realStories: "Real stories from community members",
      testimonial1: "The workshop helped me spot fake photos my grandchildren send me. Now I can tell what's real and what's AI-generated!",
      testimonial2: "I never understood AI before. Now I know how to protect myself from scams and fake images. Thank you AuthentiKa!",
      testimonial3: "The staff is patient and explains everything clearly. I feel confident using the internet now and can spot fakes easily.",
      
      // CTA
      readyToJoin: "Ready to Join?",
      ctaSubtitle: "Start detecting AI-generated content today and learn how to stay safe online.",
      verifyImage: "Verify an Image",
      learnSkills: "Learn Detection Skills",
    },

    // Course Viewer
    course: {
      backToCourses: "Back to Courses",
      lessonsCompleted: "lessons completed",
      courseContents: "Course Contents",
      takeAssessment: "Take Assessment",
      earnCertificate: "Earn your certificate",
      completeFirst: "Complete all lessons first",
      previousLesson: "Previous Lesson",
      nextLesson: "Next Lesson",
      lesson: "Lesson",
      of: "of",
      
      // Quiz
      courseAssessment: "Course Assessment",
      passWithScore: "Pass with {score} or more correct answers to earn your certificate",
      question: "Question",
      score: "Score",
      checkAnswer: "Check Answer",
      nextQuestion: "Next Question",
      seeResults: "See Results",
      correct: "Correct!",
      notQuiteRight: "Not quite right",
      
      // Results
      congratulations: "Congratulations!",
      keepLearning: "Keep Learning!",
      passedMessage: "You've passed the assessment and earned your certificate!",
      failedMessage: "You need {score} correct answers to pass. Review the lessons and try again.",
      questionsCorrect: "Questions Correct",
      passed: "PASSED",
      needMore: "Need {count} more to pass",
      viewCertificate: "View Certificate",
      tryAgain: "Try Again",
      reviewLessons: "Review Lessons",
      
      // Certificate
      certificateOfCompletion: "CERTIFICATE OF COMPLETION",
      certifyThat: "This is to certify that",
      courseParticipant: "Course Participant",
      completedCourse: "has successfully completed the course",
      assessmentScore: "Assessment Score",
      dateIssued: "DATE ISSUED",
      issuedBy: "ISSUED BY",
      printCertificate: "Print Certificate",
      continueJourney: "Ready to continue your learning journey?",
      exploreMore: "Explore More Courses",
    },
  },

  tl: {
    // Navigation
    nav: {
      home: "Bahay",
      learn: "Matuto",
      community: "Komunidad",
    },

    // Footer
    footer: {
      tagline: "Tumutulong sa mga nakatatandang komunidad na makita ang AI-generated na nilalaman at manatiling ligtas online.",
      quickLinks: "Mabilis na Link",
      learnToDetect: "Matuto Makita ang AI",
      communityWorkshops: "Mga Workshop sa Komunidad",
      needHelp: "Kailangan ng Tulong?",
      hereToHelp: "Nandito kami para tumulong",
      copyright: "© 2025 AuthentiKa. Ginawa nang may pagmamahal para sa ating nakatatandang komunidad.",
    },

    // Home Page
    home: {
      heroTitle: "Ito ba ay",
      heroReal: "totoo",
      heroOr: "o",
      heroAI: "AI",
      heroQuestion: "?",
      heroSubtitle: "Simpleng mga kasangkapan para manatili kang ligtas online. Mag-upload lang ng larawan para malaman kung totoo ito.",
      tapToCheck: "Pindutin dito para Suriin ang Larawan",
      tellYouIfReal: "Sasabihin namin kung totoo o hindi",
      checkIfReal: "Suriin kung Totoo",
      checking: "Sinusuri...",
      itsAuthentic: "Totoo Ito!",
      goodNews: "Magandang balita! Mukhang totoo ang larawang ito.",
      beCareful: "Mag-ingat",
      mightBeFake: "Maaaring peke o gawa ng AI ito. Huwag agad paniwalaan.",
      checkAnother: "Suriin ang Ibang Larawan",
      
      // Stats
      seniorsConcerned: "ng mga nakatatanda ang nag-aalala sa AI",
      aiImagesDaily: "AI na larawan ang nagagawa araw-araw",
      cantIdentify: "hindi makilala ang AI na larawan",
      safetyPriority: "ng iyong kaligtasan ang prayoridad namin",
      
      // About Section
      whyMatters: "Bakit Mahalaga ang AuthentiKa",
      aboutP1: "Ang AuthentiKa ay ginawa na may isang simpleng layunin: tulungan ang mga nakatatandang miyembro ng komunidad na makita ang AI-generated na nilalaman at manatiling ligtas mula sa mga pekeng larawan at video.",
      aboutP2: "Napagtanto namin na ang mga nakatatanda ay madalas naiiwanan sa mga usapan tungkol sa teknolohiya at AI. Ngunit ang iyong mga larawan, ang iyong mga alaala, at ang iyong digital presence ay mahalaga. Dapat mong maunawaan kung paano ginagamit ang AI at kung paano protektahan ang iyong sarili mula sa pekeng nilalaman.",
      detectInstantly: "Makita agad ang AI-generated na mga larawan",
      learnSimple: "Matuto sa pamamagitan ng simple at malinaw na kurso",
      joinSupportive: "Sumali sa isang suportibong komunidad",
      stayProtected: "Manatiling protektado mula sa mga AI scam",
      
      // How We Help
      howWeHelp: "Paano Ka Namin Tinutulungang Manatiling Ligtas",
      threeWays: "Tatlong simpleng paraan para protektahan ang iyong sarili mula sa AI-generated na nilalaman",
      detectAI: "Makita ang AI na Nilalaman",
      detectAIDesc: "Mag-upload ng anumang larawan o video para suriin kung totoo o gawa ng AI. Makuha ang resulta sa ilang segundo gamit ang aming advanced detection system.",
      learnSkills: "Matuto ng Detection Skills",
      learnSkillsDesc: "Kumuha ng aming step-by-step na kurso na dinisenyo para sa mga nakatatanda. Matuto makita ang mga pekeng larawan at protektahan ang iyong sarili mula sa mga scam.",
      joinWorkshops: "Sumali sa mga Workshop",
      joinWorkshopsDesc: "Makipag-ugnayan sa iba sa mga community workshop. Matuto kasama ang iba sa isang suportibo at malugod na kapaligiran.",
      
      // Trust Section
      trustedBy: "Pinagkakatiwalaan ng Libu-libong Nakatatanda",
      trustSubtitle: "Sumali sa lumalaking komunidad ng mga nakatatandang natututo na ligtas at may kumpiyansang mag-navigate sa digital world.",
      activeUsers: "Aktibong Gumagamit",
      photosVerified: "Larawan na Nasuri",
      workshopsHeld: "Workshop na Ginanap",
      satisfactionRate: "Rate ng Kasiyahan",
      
      // CTA
      readyToStart: "Handa Ka Na Bang Magsimula?",
      startDetecting: "Simulan ang pagtukoy ng AI-generated na nilalaman ngayon at matuto kung paano manatiling ligtas online.",
      verifyNow: "Suriin ang Larawan Ngayon",
      startLearning: "Magsimulang Matuto",
    },

    // Learn Page
    learn: {
      heroTitle: "Matuto",
      heroHighlight: "Makita ang AI na Nilalaman",
      heroSubtitle: "Mastering ang mga kasanayan para makita ang pekeng larawan at video sa aming step-by-step na kurso na dinisenyo para sa mga nakatatanda.",
      yourProgress: "Ang Iyong Progreso sa Pag-aaral",
      coursesCompleted: "kurso ang natapos",
      of: "sa",
      
      // Courses Section
      coursesTitle: "Mga Kurso sa AI Detection",
      coursesSubtitle: "Tapusin ang mga kursong ito para maging eksperto sa pagtukoy ng AI-generated na nilalaman",
      lessons: "Aralin",
      startCourse: "Simulan ang Kurso",
      
      // Tips
      quickDetectionTips: "Mabilis na Mga Tip sa Pagtukoy",
      quickTipsSubtitle: "Tandaan ang mga puntong ito kapag sinusuri kung ang isang larawan ay maaaring gawa ng AI",
      checkHands: "Suriin ang mga Kamay",
      checkHandsDetail: "Madalas mali ang AI sa mga kamay - maghanap ng sobrang daliri, kulang na daliri, o daliri sa imposibleng posisyon.",
      examineFaces: "Suriin ang mga Mukha ng Mabuti",
      examineFacesDetail: "Tingnan ang mga mata, ngipin, at tainga. Pareho ba sila? Mukhang totoo ba ang salamin o alahas?",
      readText: "Basahin ang Anumang Teksto",
      readTextDetail: "Ang mga AI-generated na larawan ay madalas may walang katuturang teksto, maling spelling, o mga titik na walang saysay.",
      trustInstincts: "Magtiwala sa Iyong Kutob",
      trustInstinctsDetail: "Kung may kakaiba o sobrang perpekto, malamang totoo nga. Suriin bago ibahagi o paniwalaan.",
      
      // Learn at own pace
      learnAtOwnPace: "Matuto sa Sariling Bilis",
      allCoursesSelfPaced: "Lahat ng kurso ay self-paced at maaaring tapusin anumang oras",
      
      // Red Flags
      redFlagsTitle: "Mga Palatandaan na Dapat Bantayan",
      redFlagsSubtitle: "Ito ang mga pinaka-karaniwang palatandaan na ang isang larawan ay maaaring gawa ng AI",
      redFlag1Title: "Sira na mga Kamay",
      redFlag1Desc: "Sobrang daliri, kulang na hinlalaki, o kamay sa hindi natural na posisyon",
      redFlag2Title: "Malabo na Background",
      redFlag2Desc: "Mga bagay na pinagsasama o background na mukhang smudged",
      redFlag3Title: "Walang Saysay na Teksto",
      redFlag3Desc: "Mga salitang gibberish, nakabaligtad na letra, o maling spelling na karatula",
      redFlag4Title: "Sobrang Perpekto",
      redFlag4Desc: "Mga larawan na mukhang walang kapintasan ngunit parang hindi totoo",
      redFlag5Title: "Kakaibang Ilaw",
      redFlag5Desc: "Mga anino na hindi tugma o imposibleng pinagmulan ng ilaw",
      redFlag6Title: "Kakaibang mga Detalye",
      redFlag6Desc: "Alahas, salamin, o mga accessories na mukhang sira",
      
      // FAQs
      commonQuestions: "Mga Karaniwang Tanong",
      faqSubtitle: "Lahat ng kailangan mong malaman tungkol sa aming mga kurso sa AI detection",
      faq1Q: "Ano ang mga palatandaan na ang isang larawan ay maaaring gawa ng AI?",
      faq1A: "Maghanap ng mga warning signs na ito: hindi karaniwan o sobrang daliri sa kamay, sira na mga tampok ng mukha, kakaibang reflections o anino, teksto na walang saysay, mga bagay na mukhang pinagsasama ng kakaiba, o background na malabo o hindi realistic. Madalas nahihirapan ang AI sa mga fine details tulad ng alahas, ngipin, at buhok.",
      faq2Q: "Bakit dapat kong pag-intindihan ang mga AI-generated na larawan?",
      faq2A: "Ang mga AI-generated na larawan ay maaaring gamitin para ikalat ang maling impormasyon, gumawa ng fake news, magpanggap bilang tunay na tao, o mandaya para sa pera. Ang pag-aaral na kilalanin sila ay tumutulong sa iyo na maiwasang malinlang at nagpoprotekta sa iyo mula sa posibleng pandaraya. Hindi lahat ng nakikita mo online ay totoo.",
      faq3Q: "Gaano katagal para tapusin ang lahat ng kurso?",
      faq3A: "Ang buong programa ay tumatagal ng mga 100 minuto sa kabuuan (wala pang 2 oras). Gayunpaman, maaari kang matuto sa sariling bilis at tapusin ang mga kurso kahit kailan mo gusto. Ang bawat kurso ay nahahati sa mga maikling aralin na madaling sundin.",
      faq4Q: "Kailangan ko ba ng espesyal na kasanayan para kumuha ng mga kursong ito?",
      faq4A: "Walang espesyal na kasanayan na kailangan! Ang aming mga kurso ay dinisenyo para sa mga nakatatanda na walang technical background. Lahat ay ipinaliwanag sa simple at malinaw na wika na may maraming halimbawa.",
      
      // CTA
      ctaTitle: "Handa Ka Na Bang Magsimulang Matuto?",
      ctaSubtitle: "Simulan ang iyong unang kurso ngayon at matuto na makita ang AI-generated na nilalaman nang may kumpiyansa.",
      startFirstCourse: "Simulan ang Unang Kurso",
      joinWorkshop: "Sumali sa Workshop",
    },

    // Community Page
    community: {
      heroTitle: "Sumali sa Aming",
      heroHighlight: "Komunidad",
      heroSubtitle: "Matuto kasama ang iba sa isang suportibong kapaligiran. Libreng mga workshop para tulungan kang makita ang AI-generated na nilalaman at manatiling ligtas online.",
      
      // Events
      upcomingWorkshops: "Mga Paparating na Workshop",
      registerFree: "Mag-register para sa libreng workshop sa iyong lugar o sumali online",
      registerNow: "Mag-register Ngayon",
      
      // Event details
      event1Title: "Matuto Makita ang AI na Larawan",
      event1Desc: "Hands-on workshop kung saan matututunan mong kilalanin ang AI-generated na mga larawan at protektahan ang sarili mula sa pekeng nilalaman.",
      event2Title: "AI Detection para sa mga Baguhan",
      event2Desc: "Sumali mula sa bahay para matutunan ang mga basics ng pagtukoy ng AI-generated na mga larawan at video. Walang tech experience na kailangan.",
      event3Title: "Coffee at Diskusyon",
      event3Desc: "Kaswal na meetup para magbahagi ng karanasan, magtanong, at matuto mula sa iba tungkol sa pagiging ligtas mula sa AI scams.",
      
      inPerson: "Personal",
      virtual: "Online",
      communityCenter: "Community Center",
      onlineMeeting: "Online Meeting",
      localLibrary: "Lokal na Library",
      
      // Learning Methods
      waysToLearn: "Mga Paraan para Matuto sa Amin",
      chooseMethod: "Piliin ang paraan ng pag-aaral na pinakabagay sa iyo",
      onlineWorkshops: "Online Workshop",
      onlineWorkshopsDesc: "Sumali mula sa bahay gamit ang iyong computer o tablet. Gagabayan ka namin step by step sa pagtukoy ng AI na nilalaman.",
      callForHelp: "Tumawag para sa Tulong",
      callForHelpDesc: "Mas gusto mong makipag-usap sa telepono? Tawagan kami para sa one-on-one na tulong sa anumang tanong tungkol sa AI detection.",
      inPersonMeetings: "Personal na Pagkikita",
      inPersonMeetingsDesc: "Magkita nang harapan sa mga community center at library. Matuto kasama ang iba sa iyong lugar.",
      emailTips: "Mga Tip sa Email",
      emailTipsDesc: "Makakuha ng mga kapaki-pakinabang na tip at paalala ng workshop na ipapadala sa iyong inbox linggu-linggo. Manatiling informed at ligtas.",
      
      // Testimonials
      whatPeopleSay: "Ano ang Sinasabi ng mga Tao",
      realStories: "Mga tunay na kwento mula sa mga miyembro ng komunidad",
      testimonial1: "Tinulungan ako ng workshop na makita ang mga pekeng larawan na pinapadala ng mga apo ko. Ngayon alam ko na kung ano ang totoo at kung ano ang gawa ng AI!",
      testimonial2: "Hindi ko naiintindihan ang AI dati. Ngayon alam ko na kung paano protektahan ang sarili ko mula sa mga scam at pekeng larawan. Salamat AuthentiKa!",
      testimonial3: "Matiyaga ang staff at malinaw na nagpapaliwanag ng lahat. Kumpiyansa na ako ngayon sa paggamit ng internet at madali kong nakikita ang mga peke.",
      
      // CTA
      readyToJoin: "Handa Ka Na Bang Sumali?",
      ctaSubtitle: "Simulan ang pagtukoy ng AI-generated na nilalaman ngayon at matuto kung paano manatiling ligtas online.",
      verifyImage: "Suriin ang Larawan",
      learnSkills: "Matuto ng Detection Skills",
    },

    // Course Viewer
    course: {
      backToCourses: "Bumalik sa mga Kurso",
      lessonsCompleted: "aralin ang tapos",
      courseContents: "Nilalaman ng Kurso",
      takeAssessment: "Kumuha ng Pagsusulit",
      earnCertificate: "Makuha ang iyong sertipiko",
      completeFirst: "Tapusin muna ang lahat ng aralin",
      previousLesson: "Nakaraang Aralin",
      nextLesson: "Susunod na Aralin",
      lesson: "Aralin",
      of: "ng",
      
      // Quiz
      courseAssessment: "Pagsusulit ng Kurso",
      passWithScore: "Pumasa na may {score} o higit pang tamang sagot para makuha ang iyong sertipiko",
      question: "Tanong",
      score: "Puntos",
      checkAnswer: "Suriin ang Sagot",
      nextQuestion: "Susunod na Tanong",
      seeResults: "Tingnan ang mga Resulta",
      correct: "Tama!",
      notQuiteRight: "Hindi pa tama",
      
      // Results
      congratulations: "Binabati Kita!",
      keepLearning: "Magpatuloy Matuto!",
      passedMessage: "Pumasa ka sa pagsusulit at nakuha mo ang iyong sertipiko!",
      failedMessage: "Kailangan mo ng {score} tamang sagot para pumasa. Balikan ang mga aralin at subukan muli.",
      questionsCorrect: "Tamang Sagot",
      passed: "PUMASA",
      needMore: "Kailangan pa ng {count} para pumasa",
      viewCertificate: "Tingnan ang Sertipiko",
      tryAgain: "Subukan Muli",
      reviewLessons: "Balikan ang mga Aralin",
      
      // Certificate
      certificateOfCompletion: "SERTIPIKO NG PAGKUMPLETO",
      certifyThat: "Ito ay nagpapatunay na",
      courseParticipant: "Kalahok sa Kurso",
      completedCourse: "ay matagumpay na nakumpleto ang kurso",
      assessmentScore: "Puntos sa Pagsusulit",
      dateIssued: "PETSA NG PAGBIBIGAY",
      issuedBy: "INILABAS NG",
      printCertificate: "I-print ang Sertipiko",
      continueJourney: "Handa ka na bang ituloy ang iyong paglalakbay sa pag-aaral?",
      exploreMore: "Tuklasin ang Higit pang Kurso",
    },
  },
};

export type TranslationKeys = typeof translations.en;
