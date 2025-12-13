export interface Lesson {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  videoThumbnail: string;
  content: ContentBlock[];
}

export interface ContentBlock {
  type: "text" | "tip" | "warning" | "example";
  title?: string;
  content: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Course {
  id: number;
  slug: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
  certificateTitle: string;
}

export const courses: Course[] = [
  {
    id: 1,
    slug: "intro-to-ai-images",
    title: "Introduction to AI-Generated Images",
    description: "Learn what AI-generated images are and why you should care about them.",
    duration: "15 minutes",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    certificateTitle: "AI Image Awareness",
    lessons: [
      {
        id: 1,
        title: "What is AI-Generated Content?",
        duration: "4 min",
        videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
        videoThumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Artificial Intelligence (AI) can now create images that look incredibly real. These images are made by computers that have learned from millions of real photos. The computer learns patterns in photos and can then create brand new images that never existed before."
          },
          {
            type: "tip",
            title: "Did You Know?",
            content: "AI can create a completely new face of a person who doesn't exist in less than one second. This technology has advanced rapidly in just the past few years."
          },
          {
            type: "text",
            content: "While this technology has many positive uses, like creating art or helping designers, it can also be misused. Scammers and bad actors can use AI images to trick people into believing false information or to impersonate real people."
          },
          {
            type: "warning",
            title: "Stay Alert",
            content: "AI-generated images are becoming harder to spot. Learning to identify them is an important skill for staying safe online."
          }
        ]
      },
      {
        id: 2,
        title: "Why AI Images Matter to You",
        duration: "4 min",
        videoUrl: "https://www.youtube.com/embed/R9OHn5ZF4Uo",
        videoThumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
        content: [
          {
            type: "text",
            content: "You might wonder why you should care about AI-generated images. The truth is, these images can affect your daily life in many ways. From fake news articles with fake photos to scam emails with fabricated faces, AI images are everywhere."
          },
          {
            type: "example",
            title: "Real-World Example",
            content: "Scammers often use AI-generated photos of attractive people to create fake profiles on dating sites or social media. They then use these fake profiles to build trust before asking for money."
          },
          {
            type: "text",
            content: "By learning to spot AI-generated content, you can protect yourself from scams, avoid spreading false information, and make better decisions about what you see online."
          },
          {
            type: "tip",
            title: "Quick Tip",
            content: "If an image seems too perfect or too dramatic, take a moment to question whether it might be AI-generated before sharing it."
          }
        ]
      },
      {
        id: 3,
        title: "The History of Fake Images",
        duration: "4 min",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        videoThumbnail: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Fake images are not new. People have been manipulating photos since the invention of photography. However, AI has made creating convincing fake images much easier and faster than ever before."
          },
          {
            type: "text",
            content: "In the past, creating a fake image required expensive software and professional skills. Today, anyone with an internet connection can create realistic fake images in minutes using free AI tools."
          },
          {
            type: "warning",
            title: "Important",
            content: "The ease of creating AI images means there are more fake images online than ever before. Being skeptical of images you see online is now more important than ever."
          },
          {
            type: "tip",
            title: "Remember",
            content: "Just because something looks real doesn't mean it is real. Always verify important images from trusted sources."
          }
        ]
      },
      {
        id: 4,
        title: "How to Protect Yourself",
        duration: "3 min",
        videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
        videoThumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        content: [
          {
            type: "text",
            content: "The good news is that you can learn to protect yourself from AI-generated images. Throughout this course and the following courses, we will teach you specific techniques to identify fake images."
          },
          {
            type: "tip",
            title: "Key Protection Steps",
            content: "1. Slow down before sharing images. 2. Look for the signs we'll teach you. 3. Verify images with reverse image search. 4. Trust your instincts—if something feels off, investigate further."
          },
          {
            type: "text",
            content: "By completing this course and practicing what you learn, you'll become much better at identifying AI-generated content and protecting yourself from potential scams."
          },
          {
            type: "example",
            title: "Coming Up Next",
            content: "In the following lessons and courses, you'll learn to spot specific flaws in hands, faces, text, and backgrounds that often appear in AI images."
          }
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "What is an AI-generated image?",
        options: [
          "A photo taken by a robot",
          "An image created by a computer that learned from millions of photos",
          "A photo edited with filters",
          "A scanned photograph"
        ],
        correctAnswer: 1,
        explanation: "AI-generated images are created by computers that have learned patterns from millions of real photos, allowing them to create completely new images that never existed before."
      },
      {
        id: 2,
        question: "Why is it important to identify AI-generated images?",
        options: [
          "To win photo contests",
          "To protect yourself from scams and misinformation",
          "To become a photographer",
          "AI images are not important to identify"
        ],
        correctAnswer: 1,
        explanation: "Identifying AI-generated images helps protect you from scams, prevents you from spreading false information, and helps you make better decisions about what you see online."
      },
      {
        id: 3,
        question: "How has AI changed the creation of fake images?",
        options: [
          "It has made creating fake images impossible",
          "It has made creating convincing fake images much easier and faster",
          "It has not changed anything",
          "It only affects professional photographers"
        ],
        correctAnswer: 1,
        explanation: "AI has made creating convincing fake images much easier and faster. Anyone with internet access can now create realistic fake images in minutes using free AI tools."
      },
      {
        id: 4,
        question: "What should you do before sharing an image online?",
        options: [
          "Share it immediately to be first",
          "Add more filters to make it look better",
          "Slow down and verify if it might be AI-generated",
          "Delete it immediately"
        ],
        correctAnswer: 2,
        explanation: "Before sharing any image, it's important to slow down and consider whether it might be AI-generated. Look for signs of AI creation and verify important images from trusted sources."
      }
    ]
  },
  {
    id: 2,
    slug: "spotting-fake-faces",
    title: "Spotting Fake Photos: Hands and Faces",
    description: "Discover the telltale signs in hands and facial features that reveal AI-generated content.",
    duration: "20 minutes",
    thumbnail: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80",
    certificateTitle: "AI Face Detection Specialist",
    lessons: [
      {
        id: 1,
        title: "The Problem with AI Hands",
        duration: "4 min",
        videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
        videoThumbnail: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Hands are one of the hardest things for AI to generate correctly. The human hand has a complex structure with five fingers, multiple joints, and intricate details that AI often gets wrong."
          },
          {
            type: "warning",
            title: "Common AI Hand Mistakes",
            content: "Look for: Extra fingers (6 or more), missing fingers, fingers that bend the wrong way, fingers that seem to merge together, and hands that look distorted or unnatural."
          },
          {
            type: "text",
            content: "When examining an image, always count the fingers. Real humans have exactly five fingers on each hand. If you see more or fewer, it's likely an AI-generated image."
          },
          {
            type: "tip",
            title: "Quick Check",
            content: "Zoom in on hands in any suspicious image. AI-generated hands often look fine from a distance but reveal their flaws when examined closely."
          }
        ]
      },
      {
        id: 2,
        title: "Examining Facial Features",
        duration: "5 min",
        videoUrl: "https://www.youtube.com/embed/R9OHn5ZF4Uo",
        videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        content: [
          {
            type: "text",
            content: "AI-generated faces can look incredibly realistic at first glance. However, there are often subtle flaws that can help you identify them. Learning to spot these flaws takes practice but becomes easier over time."
          },
          {
            type: "tip",
            title: "Eyes Are Windows to Truth",
            content: "Check if both eyes look in the same direction, have matching colors, and have realistic reflections. AI often struggles with eye details like reflections and iris patterns."
          },
          {
            type: "text",
            content: "Look at the ears—they should be roughly symmetrical and have natural-looking curves. Earrings and ear jewelry are often rendered incorrectly by AI."
          },
          {
            type: "example",
            title: "What to Look For",
            content: "Examine the hairline carefully. AI often creates hairlines that look too perfect or have unnatural patterns where hair meets the forehead."
          }
        ]
      },
      {
        id: 3,
        title: "Teeth and Smile Analysis",
        duration: "4 min",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        videoThumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Teeth are another area where AI frequently makes mistakes. Human teeth have specific characteristics that AI often fails to replicate correctly."
          },
          {
            type: "warning",
            title: "AI Teeth Problems",
            content: "Watch for: Too many teeth, teeth that are too perfect and uniform, teeth that blur together, missing gaps between teeth, or teeth that seem to fade into gums."
          },
          {
            type: "text",
            content: "Real human teeth have slight imperfections, variations in size, and natural shadows. If teeth look too perfect or computer-generated, be suspicious."
          },
          {
            type: "tip",
            title: "The Smile Test",
            content: "A genuine smile affects the entire face—eyes crinkle, cheeks rise, and muscles around the mouth move naturally. AI smiles often look stiff or affect only part of the face."
          }
        ]
      },
      {
        id: 4,
        title: "Jewelry and Accessories",
        duration: "4 min",
        videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
        videoThumbnail: "https://images.unsplash.com/photo-1535468850893-d6e543fbd7f5?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Jewelry, glasses, and other accessories provide excellent clues for identifying AI-generated images. AI often struggles with symmetrical objects and reflective surfaces."
          },
          {
            type: "example",
            title: "Earrings Check",
            content: "Compare both earrings carefully. In AI images, earrings often don't match perfectly, have different shapes, or are attached at different heights on each ear."
          },
          {
            type: "text",
            content: "Glasses frames should be symmetrical and have realistic reflections. AI often creates glasses with warped frames, mismatched lens shapes, or unrealistic light reflections."
          },
          {
            type: "tip",
            title: "Necklace Test",
            content: "Look at where necklaces connect at the back of the neck. AI often fails to show this correctly or creates impossible necklace positions."
          }
        ]
      },
      {
        id: 5,
        title: "Putting It All Together",
        duration: "3 min",
        videoUrl: "https://www.youtube.com/embed/R9OHn5ZF4Uo",
        videoThumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Now that you know what to look for in hands and faces, let's put it all together. When examining a suspicious image, systematically check each area we've discussed."
          },
          {
            type: "tip",
            title: "Your Detection Checklist",
            content: "1. Count all fingers on visible hands. 2. Check if eyes are aligned and realistic. 3. Examine teeth for unnatural patterns. 4. Look at jewelry for asymmetry. 5. Check the hairline and ear details."
          },
          {
            type: "text",
            content: "Remember, not every AI image will have all of these flaws. Sometimes you might only notice one or two issues. Trust your instincts—if something feels off, it probably is."
          },
          {
            type: "warning",
            title: "Stay Vigilant",
            content: "AI technology is constantly improving. What works today might not work tomorrow. Keep learning and stay updated on new detection techniques."
          }
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "How many fingers should a normal human hand have?",
        options: [
          "4 fingers",
          "5 fingers",
          "6 fingers",
          "It varies from person to person"
        ],
        correctAnswer: 1,
        explanation: "A normal human hand has exactly 5 fingers. AI often generates hands with extra or missing fingers, making finger counting an excellent way to spot AI-generated images."
      },
      {
        id: 2,
        question: "What should you look for when examining AI-generated eyes?",
        options: [
          "Only the color of the eyes",
          "If both eyes look in the same direction and have matching details",
          "Only the size of the eyes",
          "Eyes cannot reveal if an image is AI-generated"
        ],
        correctAnswer: 1,
        explanation: "When examining eyes, check if both eyes look in the same direction, have matching colors, and have realistic reflections. AI often struggles with these details."
      },
      {
        id: 3,
        question: "What is a common problem with AI-generated teeth?",
        options: [
          "They are always missing",
          "They are always yellow",
          "They may be too many, too perfect, or blur together",
          "AI always generates teeth correctly"
        ],
        correctAnswer: 2,
        explanation: "AI often creates teeth that are too perfect and uniform, generates too many teeth, or creates teeth that blur together unnaturally."
      },
      {
        id: 4,
        question: "Why are earrings useful for detecting AI images?",
        options: [
          "AI never generates earrings",
          "Earrings often don't match or are at different heights in AI images",
          "Earrings always look perfect in AI images",
          "Earrings are not useful for detection"
        ],
        correctAnswer: 1,
        explanation: "In AI images, earrings often don't match perfectly, have different shapes, or are attached at different heights on each ear, making them excellent detection clues."
      },
      {
        id: 5,
        question: "What should you do if only one thing seems 'off' in an image?",
        options: [
          "Ignore it since most things look fine",
          "Share the image anyway",
          "Trust your instincts and investigate further",
          "Assume the image is definitely real"
        ],
        correctAnswer: 2,
        explanation: "Trust your instincts. Not every AI image will have all flaws—sometimes you might only notice one or two issues. If something feels off, it's worth investigating further."
      }
    ]
  },
  {
    id: 3,
    slug: "text-and-backgrounds",
    title: "Text and Background Clues",
    description: "Learn to identify strange text and unnatural backgrounds in AI images.",
    duration: "18 minutes",
    thumbnail: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&q=80",
    certificateTitle: "AI Background Analyst",
    lessons: [
      {
        id: 1,
        title: "Why AI Struggles with Text",
        duration: "4 min",
        videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
        videoThumbnail: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Text in images is one of the most reliable ways to identify AI-generated content. While AI has become good at creating realistic faces and objects, it still struggles significantly with generating readable, coherent text."
          },
          {
            type: "warning",
            title: "Common Text Problems",
            content: "AI-generated text often contains: Gibberish letters that don't form real words, misspelled common words, letters that morph into each other, and text that fades or becomes unreadable."
          },
          {
            type: "text",
            content: "This happens because AI treats text as visual patterns rather than language. It doesn't understand what words mean—it only tries to replicate how text looks in training images."
          },
          {
            type: "tip",
            title: "Detection Tip",
            content: "Always try to read any visible text in suspicious images. If you can't make out the words or if they don't make sense, the image might be AI-generated."
          }
        ]
      },
      {
        id: 2,
        title: "Signs in Signs: Reading AI Text",
        duration: "5 min",
        videoUrl: "https://www.youtube.com/embed/R9OHn5ZF4Uo",
        videoThumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Street signs, store names, book covers, and clothing text are excellent places to check for AI generation. These elements are common in everyday photos and AI often gets them wrong."
          },
          {
            type: "example",
            title: "What to Look For",
            content: "In street scenes, check: Store signs for readable business names, street signs for proper spelling, car license plates for legitimate numbers, and t-shirt text for coherent messages."
          },
          {
            type: "text",
            content: "AI might generate a coffee shop with a sign reading 'COFEER' or a street sign saying 'STPO' instead of 'STOP'. These mistakes are clear indicators of AI generation."
          },
          {
            type: "tip",
            title: "Zoom In",
            content: "Text that looks fine from a distance often reveals problems when you zoom in. Always enlarge suspicious images to examine text more closely."
          }
        ]
      },
      {
        id: 3,
        title: "Background Inconsistencies",
        duration: "5 min",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        videoThumbnail: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
        content: [
          {
            type: "text",
            content: "While AI can create stunning foreground subjects, backgrounds often reveal the truth. AI frequently generates backgrounds that are blurry, inconsistent, or physically impossible."
          },
          {
            type: "warning",
            title: "Background Red Flags",
            content: "Watch for: Buildings with impossible architecture, trees with unnatural shapes, repetitive patterns that don't make sense, objects that blend into each other, and shadows pointing in different directions."
          },
          {
            type: "text",
            content: "Pay attention to where objects meet the background. AI often creates unnatural boundaries or 'halos' around people and objects where they don't blend properly with their surroundings."
          },
          {
            type: "example",
            title: "Architecture Check",
            content: "Buildings are complex structures with consistent logic. AI-generated buildings might have windows of different sizes on the same floor, doors that lead nowhere, or stairs that defy physics."
          }
        ]
      },
      {
        id: 4,
        title: "Pattern Recognition",
        duration: "4 min",
        videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
        videoThumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        content: [
          {
            type: "text",
            content: "AI loves patterns and often repeats them in unnatural ways. Look for elements that seem to repeat across an image in ways that wouldn't occur naturally."
          },
          {
            type: "tip",
            title: "Pattern Problems",
            content: "Common pattern issues include: Identical leaves on different trees, crowd scenes where faces repeat, fabric patterns that don't follow natural folds, and identical objects that should vary naturally."
          },
          {
            type: "text",
            content: "In nature, variation is the rule. No two leaves are exactly alike, and crowds contain diverse individuals. When you see suspicious repetition, question the image's authenticity."
          },
          {
            type: "example",
            title: "Crowd Test",
            content: "In AI-generated crowd scenes, look for repeated faces or body poses. Real crowds have natural diversity—AI often takes shortcuts by duplicating people."
          }
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Why does AI struggle with generating text in images?",
        options: [
          "AI understands language perfectly",
          "AI treats text as visual patterns, not language",
          "AI can only create text in English",
          "Text is easy for AI to generate"
        ],
        correctAnswer: 1,
        explanation: "AI treats text as visual patterns rather than language. It doesn't understand what words mean—it only tries to replicate how text looks, which is why it often generates gibberish."
      },
      {
        id: 2,
        question: "What should you check when looking at text in a suspicious image?",
        options: [
          "Only the font style",
          "If the text is readable and makes sense",
          "Only the text color",
          "Text is not useful for detecting AI images"
        ],
        correctAnswer: 1,
        explanation: "Always try to read visible text in suspicious images. If you can't make out the words or they don't make sense, the image might be AI-generated."
      },
      {
        id: 3,
        question: "What is a common problem with AI-generated backgrounds?",
        options: [
          "They are always perfectly realistic",
          "They may have impossible architecture or inconsistent shadows",
          "They are always blurry",
          "Backgrounds cannot reveal AI generation"
        ],
        correctAnswer: 1,
        explanation: "AI-generated backgrounds often contain impossible architecture, inconsistent shadows, objects that blend together unnaturally, or buildings with illogical features."
      },
      {
        id: 4,
        question: "What pattern problem might indicate an AI-generated image?",
        options: [
          "Natural variation in leaves",
          "Diverse faces in a crowd",
          "Identical elements that should naturally vary",
          "Unique snowflakes"
        ],
        correctAnswer: 2,
        explanation: "AI often takes shortcuts by repeating elements like faces in crowds, leaves on trees, or patterns in fabric. In nature, variation is the rule, so suspicious repetition indicates AI generation."
      }
    ]
  },
  {
    id: 4,
    slug: "deepfakes-and-videos",
    title: "Deepfakes and AI Videos",
    description: "Understand how to spot AI-generated videos and protect yourself from deepfake scams.",
    duration: "25 minutes",
    thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
    certificateTitle: "Deepfake Detection Expert",
    lessons: [
      {
        id: 1,
        title: "What Are Deepfakes?",
        duration: "5 min",
        videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
        videoThumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Deepfakes are AI-generated videos that can make it appear as if someone said or did something they never actually did. The name comes from 'deep learning'—the AI technology used to create them—and 'fake.'"
          },
          {
            type: "warning",
            title: "Why Deepfakes Are Dangerous",
            content: "Deepfakes can be used to spread misinformation, create fake news, impersonate public figures, scam individuals, and damage reputations. They're becoming increasingly convincing and widespread."
          },
          {
            type: "text",
            content: "Unlike simple photo editing, deepfakes use AI to analyze thousands of images of a person, learning their facial expressions, movements, and voice patterns to create convincing fake videos."
          },
          {
            type: "tip",
            title: "Key Point",
            content: "Not everything you see on video is real anymore. Just as you've learned to question images, you now need to question videos too."
          }
        ]
      },
      {
        id: 2,
        title: "Spotting Video Manipulation",
        duration: "5 min",
        videoUrl: "https://www.youtube.com/embed/R9OHn5ZF4Uo",
        videoThumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
        content: [
          {
            type: "text",
            content: "While deepfakes are improving, they still leave clues. Many of the techniques you learned for spotting fake images also apply to videos, but you need to watch for additional signs."
          },
          {
            type: "example",
            title: "Video Detection Signs",
            content: "Watch for: Unnatural blinking patterns, odd facial movements when speaking, skin that appears too smooth or waxy, lighting that changes inconsistently, and audio that doesn't quite sync with lip movements."
          },
          {
            type: "text",
            content: "Deepfakes often struggle with the edges of faces, especially around the hairline and jawline. Look for blurring, warping, or flickering in these areas."
          },
          {
            type: "tip",
            title: "Audio Clue",
            content: "Listen carefully to the voice. Does it sound natural? AI-generated voices might have unusual pauses, robotic tones, or pronunciation that doesn't match the person's known speech patterns."
          }
        ]
      },
      {
        id: 3,
        title: "Common Deepfake Scams",
        duration: "5 min",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        videoThumbnail: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Scammers are increasingly using deepfake technology to commit fraud. Understanding common scams helps you protect yourself and your loved ones."
          },
          {
            type: "warning",
            title: "Common Scam Types",
            content: "Grandparent scams: Videos pretending to be family members asking for money. Celebrity endorsements: Fake videos of celebrities promoting scams. Authority figures: Fake videos of bank officials or government workers requesting information."
          },
          {
            type: "text",
            content: "These scams often create urgency—the fake video might claim there's an emergency or a limited-time opportunity. This pressure is designed to make you act before thinking."
          },
          {
            type: "tip",
            title: "Golden Rule",
            content: "If a video asks you to send money, share personal information, or act urgently, always verify through another channel. Call the person directly using a number you know is real."
          }
        ]
      },
      {
        id: 4,
        title: "Voice Cloning Awareness",
        duration: "4 min",
        videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
        videoThumbnail: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&q=80",
        content: [
          {
            type: "text",
            content: "AI can now clone voices with just a few seconds of audio. This technology can be used to create fake phone calls or voice messages that sound exactly like someone you know."
          },
          {
            type: "warning",
            title: "Voice Cloning Danger",
            content: "Scammers can use voice cloning to impersonate family members, creating urgent calls asking for money. They might say they're in trouble, had an accident, or need immediate financial help."
          },
          {
            type: "text",
            content: "Even if a voice sounds exactly like your grandchild, child, or friend, it could be AI-generated. Always verify unexpected requests through other means."
          },
          {
            type: "example",
            title: "Family Safety Tip",
            content: "Create a family code word that only your family knows. If someone calls claiming to be a family member in trouble, ask for the code word. A real family member will know it; a scammer won't."
          }
        ]
      },
      {
        id: 5,
        title: "Verification Techniques",
        duration: "4 min",
        videoUrl: "https://www.youtube.com/embed/R9OHn5ZF4Uo",
        videoThumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
        content: [
          {
            type: "text",
            content: "The best defense against deepfakes is verification. Never act on a video alone, especially if it's asking you to do something important like sending money or sharing personal information."
          },
          {
            type: "tip",
            title: "Verification Steps",
            content: "1. Contact the person through a different method (call them directly). 2. Check multiple news sources for important claims. 3. Look for the same video from official sources. 4. Ask yourself: Does this make sense? Why would this person send this to me?"
          },
          {
            type: "text",
            content: "Remember that official communications from banks, government agencies, and legitimate companies typically don't come through social media videos or unexpected video calls."
          },
          {
            type: "warning",
            title: "When In Doubt",
            content: "When you're unsure, don't act immediately. Take time to verify. Legitimate requests can wait for verification—scams rely on you acting quickly without thinking."
          }
        ]
      },
      {
        id: 6,
        title: "Protecting Your Family",
        duration: "2 min",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        videoThumbnail: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Share what you've learned with your family and friends. The more people who understand deepfakes, the harder it is for scammers to succeed."
          },
          {
            type: "tip",
            title: "Family Discussion Points",
            content: "Discuss deepfakes at your next family gathering. Establish a family code word system. Agree that any urgent money requests will be verified by phone call. Share examples of deepfake scams you've learned about."
          },
          {
            type: "text",
            content: "Teaching others multiplies your protection. When your whole family is aware of these dangers, scammers have a much harder time succeeding."
          },
          {
            type: "example",
            title: "Community Impact",
            content: "Consider sharing this knowledge with friends, neighbors, and community groups. Many people are unaware of deepfake technology and how to protect themselves."
          }
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "What is a deepfake?",
        options: [
          "A very old video",
          "An AI-generated video that makes someone appear to say or do things they never did",
          "A video with poor quality",
          "A video taken from far away"
        ],
        correctAnswer: 1,
        explanation: "Deepfakes are AI-generated videos that can make it appear as if someone said or did something they never actually did. They use deep learning technology to create convincing fake videos."
      },
      {
        id: 2,
        question: "What is a sign that a video might be a deepfake?",
        options: [
          "High video quality",
          "Natural lighting",
          "Unnatural blinking, odd facial movements, or audio that doesn't sync with lips",
          "The video is from a news channel"
        ],
        correctAnswer: 2,
        explanation: "Deepfakes often show unnatural blinking patterns, odd facial movements when speaking, skin that appears too smooth, and audio that doesn't quite sync with lip movements."
      },
      {
        id: 3,
        question: "What is voice cloning?",
        options: [
          "Recording your own voice",
          "AI technology that can replicate someone's voice using just a few seconds of audio",
          "Making your voice louder",
          "Voice cloning doesn't exist"
        ],
        correctAnswer: 1,
        explanation: "Voice cloning is AI technology that can replicate someone's voice with just a few seconds of audio, potentially being used to create fake phone calls or messages."
      },
      {
        id: 4,
        question: "What should you do if you receive an urgent video message asking for money?",
        options: [
          "Send the money immediately to help",
          "Share the video on social media",
          "Verify the request by contacting the person through another method",
          "Ignore all video messages"
        ],
        correctAnswer: 2,
        explanation: "Always verify unexpected requests through another channel. Call the person directly using a number you know is real. Legitimate requests can wait for verification."
      },
      {
        id: 5,
        question: "What is a family code word?",
        options: [
          "A password for social media",
          "A secret word only your family knows to verify identity during suspicious calls",
          "A name for your family group chat",
          "A word you use to end phone calls"
        ],
        correctAnswer: 1,
        explanation: "A family code word is a secret word only your family knows. If someone calls claiming to be a family member in trouble, asking for the code word can help verify their identity."
      }
    ]
  },
  {
    id: 5,
    slug: "protecting-from-scams",
    title: "Protecting Yourself from AI Scams",
    description: "Practical steps to verify images and avoid falling for AI-generated scams.",
    duration: "22 minutes",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    certificateTitle: "AI Scam Prevention Certified",
    lessons: [
      {
        id: 1,
        title: "Common AI Scams Today",
        duration: "5 min",
        videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
        videoThumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        content: [
          {
            type: "text",
            content: "AI technology has given scammers powerful new tools. Understanding the most common AI-powered scams helps you recognize and avoid them before they cause harm."
          },
          {
            type: "warning",
            title: "Top AI Scams",
            content: "Romance scams with AI-generated profile photos. Fake celebrity endorsements for investments. Cloned voices in 'grandparent scams.' AI-generated fake product reviews. Fake charity appeals with AI images."
          },
          {
            type: "text",
            content: "These scams share common elements: they create trust using realistic-looking images or videos, then exploit that trust to get money or personal information."
          },
          {
            type: "example",
            title: "Romance Scam Example",
            content: "A scammer creates a dating profile with an AI-generated photo of an attractive person. They build a relationship over weeks or months, then ask for money for a fake emergency."
          }
        ]
      },
      {
        id: 2,
        title: "Reverse Image Search",
        duration: "5 min",
        videoUrl: "https://www.youtube.com/embed/R9OHn5ZF4Uo",
        videoThumbnail: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Reverse image search is a powerful tool for verifying images. It lets you search the internet using an image instead of words, helping you find where an image came from or if it's been used elsewhere."
          },
          {
            type: "tip",
            title: "How to Reverse Image Search",
            content: "On Google: Go to images.google.com, click the camera icon, and upload an image or paste its web address. On your phone: Press and hold on an image and select 'Search Google for image.'"
          },
          {
            type: "text",
            content: "If an image appears on many different websites with different names or contexts, it's likely a stock photo being misused or an AI-generated image used in multiple scams."
          },
          {
            type: "example",
            title: "Practical Use",
            content: "If someone's profile photo doesn't appear anywhere else online, it could be AI-generated. If it appears with many different names, it's being used for multiple fake profiles."
          }
        ]
      },
      {
        id: 3,
        title: "AI Detection Tools",
        duration: "4 min",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        videoThumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Several online tools can help detect AI-generated images. While not perfect, they provide another layer of verification when you're suspicious of an image."
          },
          {
            type: "tip",
            title: "Helpful Tools",
            content: "Our own verification tool on this website. Hive Moderation AI Detector. AI or Not (aiornot.com). Illuminarty AI detector. These tools analyze images for signs of AI generation."
          },
          {
            type: "text",
            content: "Remember that no tool is 100% accurate. Use detection tools as one part of your verification process, not as the final word. Combine them with your own visual inspection."
          },
          {
            type: "warning",
            title: "Tool Limitations",
            content: "AI detection tools can have false positives (saying real images are fake) and false negatives (saying fake images are real). Always use multiple verification methods."
          }
        ]
      },
      {
        id: 4,
        title: "Social Media Safety",
        duration: "4 min",
        videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
        videoThumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Social media is where many AI scams originate. Understanding how to stay safe on these platforms is crucial for protecting yourself from AI-powered deception."
          },
          {
            type: "tip",
            title: "Social Media Tips",
            content: "Be skeptical of friend requests from strangers. Verify shocking news before sharing. Check profiles for signs of AI generation. Don't share personal information publicly. Report suspicious accounts."
          },
          {
            type: "text",
            content: "Scammers often use AI-generated profiles to gain trust, then share fake content or directly message potential victims. A healthy skepticism of unknown accounts is your best defense."
          },
          {
            type: "example",
            title: "Profile Red Flags",
            content: "Watch for: Very few posts or friends, recently created accounts, photos that look too professional or too perfect, and profiles that message you immediately after connecting."
          }
        ]
      },
      {
        id: 5,
        title: "Your Protection Toolkit",
        duration: "4 min",
        videoUrl: "https://www.youtube.com/embed/R9OHn5ZF4Uo",
        videoThumbnail: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
        content: [
          {
            type: "text",
            content: "Let's put together everything you've learned into a practical protection toolkit that you can use every day. These habits will become second nature with practice."
          },
          {
            type: "tip",
            title: "Your Daily Toolkit",
            content: "1. Pause before reacting to surprising content. 2. Check images using techniques learned in this course. 3. Use reverse image search for suspicious photos. 4. Verify requests through separate channels. 5. Share knowledge with family and friends."
          },
          {
            type: "text",
            content: "The most powerful tool you have is healthy skepticism combined with verification habits. Most scams succeed because people act before thinking. Taking a moment to verify can save you from significant harm."
          },
          {
            type: "warning",
            title: "Final Reminder",
            content: "If something seems too good to be true, it probably is. If someone creates urgency for money or information, slow down. When in doubt, verify before acting."
          }
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "What do most AI scams have in common?",
        options: [
          "They always involve celebrities",
          "They use realistic images/videos to build trust, then exploit it for money or information",
          "They only target young people",
          "They are easy to identify"
        ],
        correctAnswer: 1,
        explanation: "Most AI scams create trust using realistic-looking images or videos, then exploit that trust to get money or personal information from victims."
      },
      {
        id: 2,
        question: "What is reverse image search?",
        options: [
          "Making an image appear backwards",
          "A tool that lets you search the internet using an image to find where it came from",
          "A way to edit photos",
          "A social media feature"
        ],
        correctAnswer: 1,
        explanation: "Reverse image search lets you search the internet using an image instead of words, helping you find where an image came from or if it's been used elsewhere."
      },
      {
        id: 3,
        question: "Are AI detection tools 100% accurate?",
        options: [
          "Yes, they are perfect",
          "No, they should be used as one part of verification, not the final word",
          "They only work on videos",
          "They don't exist yet"
        ],
        correctAnswer: 1,
        explanation: "AI detection tools are not 100% accurate. They can have false positives and false negatives. Always use multiple verification methods."
      },
      {
        id: 4,
        question: "What is a red flag for a fake social media profile?",
        options: [
          "Many years of posts",
          "Lots of friends and interactions",
          "Recently created with few posts, professional-looking photos, and immediate messaging",
          "Uses their real name"
        ],
        correctAnswer: 2,
        explanation: "Red flags include recently created accounts, very few posts or friends, photos that look too professional or perfect, and profiles that message you immediately after connecting."
      },
      {
        id: 5,
        question: "What is the most powerful tool against AI scams?",
        options: [
          "Expensive software",
          "Healthy skepticism combined with verification habits",
          "Avoiding the internet entirely",
          "Only using one social media platform"
        ],
        correctAnswer: 1,
        explanation: "The most powerful tool is healthy skepticism combined with verification habits. Most scams succeed because people act before thinking. Taking a moment to verify can save you from harm."
      }
    ]
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}

export function getCourseById(id: number): Course | undefined {
  return courses.find(course => course.id === id);
}
