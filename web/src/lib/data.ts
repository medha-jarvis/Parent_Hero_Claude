import { Topic, DayContent } from "./types";

export const TOPICS: Topic[] = [
  // Math Grade 1
  {
    id: "math-g1-money",
    name: "Money",
    subject: "math",
    grades: [1],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "🪙",
    description: "Coins, notes, and making amounts",
    familyCount: 247,
    typicalMonth: 5,
  },
  {
    id: "math-g1-addition",
    name: "Addition",
    subject: "math",
    grades: [1],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "➕",
    description: "Adding numbers up to 20",
    familyCount: 312,
    typicalMonth: 1,
  },
  {
    id: "math-g1-subtraction",
    name: "Subtraction",
    subject: "math",
    grades: [1],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "➖",
    description: "Taking away and finding differences",
    familyCount: 189,
    typicalMonth: 3,
  },
  {
    id: "math-g1-shapes",
    name: "Shapes",
    subject: "math",
    grades: [1],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "🔷",
    description: "2D and 3D shapes around us",
    familyCount: 156,
    typicalMonth: 0,
  },
  {
    id: "math-g1-time",
    name: "Time",
    subject: "math",
    grades: [1],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "⏰",
    description: "Reading clocks, days and months",
    familyCount: 198,
    typicalMonth: 7,
  },
  {
    id: "math-g1-numbers",
    name: "Numbers to 100",
    subject: "math",
    grades: [1],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "🔢",
    description: "Counting, ordering, and comparing numbers",
    familyCount: 223,
    typicalMonth: 0,
  },
  // Math Grade 2
  {
    id: "math-g2-place-value",
    name: "Place Value",
    subject: "math",
    grades: [2],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "📊",
    description: "Hundreds, tens and ones",
    familyCount: 178,
    typicalMonth: 1,
  },
  {
    id: "math-g2-multiplication",
    name: "Multiplication",
    subject: "math",
    grades: [2],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "✖️",
    description: "Times tables and repeated addition",
    familyCount: 234,
    typicalMonth: 4,
  },
  {
    id: "math-g2-fractions",
    name: "Fractions",
    subject: "math",
    grades: [2],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "½",
    description: "Halves, quarters and equal parts",
    familyCount: 145,
    typicalMonth: 6,
  },
  // Math Grade 3
  {
    id: "math-g3-division",
    name: "Division",
    subject: "math",
    grades: [3],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "➗",
    description: "Sharing equally and grouping",
    familyCount: 167,
    typicalMonth: 3,
  },
  // English Grade 1
  {
    id: "eng-g1-phonics",
    name: "Phonics",
    subject: "english",
    grades: [1],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "🔤",
    description: "Letter sounds and blending",
    familyCount: 289,
    typicalMonth: 0,
  },
  {
    id: "eng-g1-sight-words",
    name: "Sight Words",
    subject: "english",
    grades: [1],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "👁️",
    description: "High-frequency words to recognize instantly",
    familyCount: 213,
    typicalMonth: 2,
  },
  {
    id: "eng-g1-reading",
    name: "Reading Comprehension",
    subject: "english",
    grades: [1, 2],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "📖",
    description: "Understanding short stories and passages",
    familyCount: 176,
    typicalMonth: 5,
  },
  // Science Grade 1
  {
    id: "sci-g1-plants",
    name: "Plants",
    subject: "science",
    grades: [1],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "🌱",
    description: "Parts of a plant and how they grow",
    familyCount: 201,
    typicalMonth: 1,
  },
  {
    id: "sci-g1-animals",
    name: "Animals",
    subject: "science",
    grades: [1],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "🦁",
    description: "Types of animals and their homes",
    familyCount: 234,
    typicalMonth: 3,
  },
  {
    id: "sci-g1-weather",
    name: "Weather",
    subject: "science",
    grades: [1, 2],
    boards: ["CBSE", "ICSE", "Common Core", "Other"],
    icon: "⛅",
    description: "Seasons, clouds, rain and sunshine",
    familyCount: 143,
    typicalMonth: 7,
  },
];

export const TOPIC_CONTENT: Record<string, DayContent[]> = {
  "math-g1-money": [
    {
      day: 1,
      title: "What is Money?",
      riddle: {
        question: "I'm round and shiny, but I'm not a star. People carry me near and far. What am I?",
        answer: "A coin! 🪙",
      },
      scriptCards: [
        {
          id: "s1",
          title: "Start with what your child knows",
          content: "Ask your child: \"Have you ever seen Mummy or Daddy buying something from a shop? What did they give the shopkeeper?\"\n\nLet them answer. Most kids will say \"money\" or \"coins\" or \"notes.\" That's your starting point!",
          tip: "Tip: If you have some coins nearby, bring them out now — touching real money makes this lesson 10x more engaging!",
        },
        {
          id: "s2",
          title: "Explain: Two types of money",
          content: "\"We have two kinds of money in India (or your country):\n\n🪙 COINS — These are round, hard, and metal. We have ₹1, ₹2, ₹5, and ₹10 coins.\n\n📄 NOTES — These are flat, paper-like, and come in bigger amounts. Like ₹10, ₹20, ₹50, and ₹100 notes.\"\n\nHold up each one (or point to the images) and let your child touch them.",
        },
        {
          id: "s3",
          title: "The key idea: Money has value",
          content: "\"Every coin and note has a NUMBER on it. That number tells us how much it is worth.\"\n\n\"A ₹5 coin can buy more things than a ₹2 coin. A ₹100 note can buy a LOT more than a ₹10 note.\"\n\nAsk: \"Which is worth more — this ₹5 coin or this ₹2 coin?\" Let them point!",
        },
        {
          id: "s4",
          title: "Quick check — are they with you?",
          content: "Ask your child these two questions:\n\n1. \"Can you show me a coin?\"\n2. \"Can you show me a note?\"\n\nIf they get it right, give a big smile and say \"You're already a money expert!\"\n\nIf they're confused, go back to the coins and notes and point to the numbers on them again. No rush!",
          tip: "Struggling? Try this: Put one coin and one note on the table. Say 'Point to the coin' then 'Point to the note.' Simple recognition first!",
        },
      ],
      practiceQuestions: [
        {
          id: "pq1",
          question: "Which of these is a COIN?",
          options: ["A flat paper ₹50 note", "A round metal ₹5 piece", "A plastic card", "A cheque"],
          correctIndex: 1,
          explanation: "Coins are round, metal, and come in small amounts like ₹1, ₹2, ₹5, and ₹10.",
        },
        {
          id: "pq2",
          question: "What number is printed on a ten-rupee note?",
          options: ["₹5", "₹20", "₹10", "₹100"],
          correctIndex: 2,
          explanation: "A ten-rupee note has the number 10 (₹10) printed on it.",
        },
        {
          id: "pq3",
          question: "Riya has a ₹5 coin and a ₹2 coin. Which is worth MORE?",
          options: ["₹2 coin", "₹5 coin", "They are equal", "Cannot tell"],
          correctIndex: 1,
          explanation: "₹5 is worth more than ₹2. The bigger the number, the more it's worth!",
        },
        {
          id: "pq4",
          question: "Which of these is a NOTE (not a coin)?",
          options: ["Round metal ₹10", "Flat paper ₹100", "Small metal ₹1", "Round metal ₹2"],
          correctIndex: 1,
          explanation: "Notes are flat and paper-like. The ₹100 note is a paper note.",
        },
        {
          id: "pq5",
          question: "How many rupees is this: ₹50?",
          options: ["Five rupees", "Fifteen rupees", "Fifty rupees", "Five hundred rupees"],
          correctIndex: 2,
          explanation: "₹50 means fifty rupees. The symbol ₹ means rupees.",
        },
        {
          id: "pq6",
          question: "Arjun has a ₹100 note. Dev has a ₹10 note. Who has MORE money?",
          options: ["Dev", "Arjun", "They have the same", "Cannot tell"],
          correctIndex: 1,
          explanation: "₹100 is worth more than ₹10. Arjun has more money.",
        },
        {
          id: "pq7",
          question: "Which coins do we commonly use in India?",
          options: ["₹3, ₹6, ₹9", "₹1, ₹2, ₹5, ₹10", "₹15, ₹25, ₹50", "₹100, ₹200, ₹500"],
          correctIndex: 1,
          explanation: "In India, the common coins are ₹1, ₹2, ₹5, and ₹10.",
        },
        {
          id: "pq8",
          question: "What does the ₹ symbol stand for?",
          options: ["Rupee", "Ringgit", "Rand", "Real"],
          correctIndex: 0,
          explanation: "₹ is the symbol for the Indian Rupee — our country's money!",
        },
        {
          id: "pq9",
          question: "Priya wants to buy a ₹3 toffee. She has a ₹5 coin. Can she buy it?",
          options: ["No, ₹5 is not enough", "Yes, ₹5 is more than ₹3", "Only if she has a note", "She needs two coins"],
          correctIndex: 1,
          explanation: "₹5 is more than ₹3, so yes! She can buy the toffee and get ₹2 back as change.",
        },
        {
          id: "pq10",
          question: "Which is the SMALLEST value coin listed here?",
          options: ["₹10 coin", "₹5 coin", "₹2 coin", "₹1 coin"],
          correctIndex: 3,
          explanation: "₹1 is the smallest value. ₹1 < ₹2 < ₹5 < ₹10.",
        },
      ],
      quizQuestions: [
        {
          id: "qq1",
          question: "What is money used for?",
          options: ["Playing games", "Buying things", "Drawing pictures", "Reading books"],
          correctIndex: 1,
          explanation: "Money is used for buying things — food, clothes, toys, and more!",
        },
        {
          id: "qq2",
          question: "A ₹2 coin and a ₹5 coin — which has a BIGGER value?",
          options: ["₹2 coin", "₹5 coin", "Both are the same", "Depends on the shop"],
          correctIndex: 1,
          explanation: "₹5 is bigger than ₹2, so the ₹5 coin has more value.",
        },
        {
          id: "qq3",
          question: "Notes are made of ___",
          options: ["Metal", "Plastic", "Paper/polymer", "Wood"],
          correctIndex: 2,
          explanation: "Notes (like ₹10, ₹50, ₹100) are made of special paper or polymer.",
        },
        {
          id: "qq4",
          question: "Which of these is the HIGHEST value?",
          options: ["₹1", "₹5", "₹10", "₹2"],
          correctIndex: 2,
          explanation: "₹10 is the highest value here — 10 > 5 > 2 > 1.",
        },
        {
          id: "qq5",
          question: "Mia has 3 rupees. She needs 5 rupees to buy a pencil. How much MORE does she need?",
          options: ["1 rupee", "2 rupees", "3 rupees", "5 rupees"],
          correctIndex: 1,
          explanation: "5 − 3 = 2. She needs 2 more rupees!",
        },
      ],
    },
    {
      day: 2,
      title: "Counting Coins",
      riddle: {
        question: "I have 2 coins. One is worth ₹5 and one is worth ₹2. How much do I have altogether?",
        answer: "₹7! (5 + 2 = 7) 🎉",
      },
      scriptCards: [
        {
          id: "s1",
          title: "Recap Day 1",
          content: "Start with a quick recap!\n\n\"Yesterday we learned about coins and notes. Can you tell me — what's the difference between a coin and a note?\"\n\nLet your child answer. Even a partial answer is great — praise it!",
        },
        {
          id: "s2",
          title: "Today: Adding coins together",
          content: "\"Today we'll learn how to COUNT coins when we have more than one.\"\n\n\"If I have a ₹5 coin AND a ₹2 coin, how much do I have altogether? We ADD them!\"\n\n₹5 + ₹2 = ₹7\n\nPut out coins on the table and count them together: \"5... and 2 more makes... 7!\"",
        },
        {
          id: "s3",
          title: "The step-by-step trick",
          content: "Teach this simple method:\n\n1. Start with the BIGGEST coin\n2. Then add the next one\n3. Keep going until all coins are counted\n\nExample: ₹10 + ₹5 + ₹2 + ₹1\nSay aloud: \"10... 15... 17... 18!\"\n\nPractice this together 2-3 times with different combinations.",
          tip: "Use real coins if you have them. The physical act of touching and moving coins helps cement the concept!",
        },
        {
          id: "s4",
          title: "Make it a game!",
          content: "\"Let's play a game! I'll put some coins on the table. You count them and tell me the total.\"\n\nStart with just 2 coins, then try 3, then 4.\n\nIf your child gets it right, say: \"That's exactly right! You counted ₹___ perfectly!\"\n\nIf they get it wrong, count together slowly: \"Let's count together — this one is ₹5, and this one is ₹2... so 5 plus 2 is...?\"",
        },
      ],
      practiceQuestions: [
        {
          id: "pq1",
          question: "Riya has a ₹5 coin and a ₹2 coin. How much does she have in total?",
          options: ["₹3", "₹5", "₹7", "₹10"],
          correctIndex: 2,
          explanation: "₹5 + ₹2 = ₹7. We add the values of both coins!",
        },
        {
          id: "pq2",
          question: "Arjun has two ₹5 coins. How much does he have?",
          options: ["₹5", "₹10", "₹15", "₹20"],
          correctIndex: 1,
          explanation: "₹5 + ₹5 = ₹10. Two ₹5 coins make ₹10.",
        },
        {
          id: "pq3",
          question: "Mia has ₹10 + ₹5. What is the total?",
          options: ["₹5", "₹10", "₹15", "₹105"],
          correctIndex: 2,
          explanation: "₹10 + ₹5 = ₹15.",
        },
        {
          id: "pq4",
          question: "Dev has a ₹1 coin and a ₹2 coin. How much in total?",
          options: ["₹1", "₹2", "₹3", "₹12"],
          correctIndex: 2,
          explanation: "₹1 + ₹2 = ₹3.",
        },
        {
          id: "pq5",
          question: "Which set of coins makes exactly ₹10?",
          options: ["₹5 + ₹2 + ₹1", "₹5 + ₹5", "₹2 + ₹2 + ₹2", "₹10 + ₹2"],
          correctIndex: 1,
          explanation: "₹5 + ₹5 = ₹10!",
        },
        {
          id: "pq6",
          question: "Priya has ₹2 + ₹2 + ₹1. What is the total?",
          options: ["₹4", "₹5", "₹6", "₹221"],
          correctIndex: 1,
          explanation: "₹2 + ₹2 + ₹1 = ₹5.",
        },
        {
          id: "pq7",
          question: "Sam has three ₹1 coins. How much does he have?",
          options: ["₹1", "₹2", "₹3", "₹10"],
          correctIndex: 2,
          explanation: "₹1 + ₹1 + ₹1 = ₹3. Three one-rupee coins = three rupees.",
        },
        {
          id: "pq8",
          question: "Which has MORE value: two ₹5 coins or one ₹10 coin?",
          options: ["Two ₹5 coins", "One ₹10 coin", "They are equal", "Cannot compare"],
          correctIndex: 2,
          explanation: "₹5 + ₹5 = ₹10, which equals one ₹10 coin. They are the same!",
        },
        {
          id: "pq9",
          question: "A shop item costs ₹8. You have ₹5 + ₹2 + ₹1. Can you buy it?",
          options: ["No, not enough", "Yes, exactly ₹8", "Yes, with ₹1 left over", "Need more information"],
          correctIndex: 1,
          explanation: "₹5 + ₹2 + ₹1 = ₹8. Exactly the right amount!",
        },
        {
          id: "pq10",
          question: "Count these coins: ₹10, ₹5, ₹2. What is the total?",
          options: ["₹15", "₹17", "₹12", "₹1052"],
          correctIndex: 1,
          explanation: "₹10 + ₹5 + ₹2 = ₹17.",
        },
      ],
      quizQuestions: [
        {
          id: "qq1",
          question: "2 coins: ₹5 and ₹5. Total = ?",
          options: ["₹5", "₹10", "₹55", "₹15"],
          correctIndex: 1,
          explanation: "₹5 + ₹5 = ₹10.",
        },
        {
          id: "qq2",
          question: "₹10 + ₹2 + ₹1 = ?",
          options: ["₹11", "₹12", "₹13", "₹1021"],
          correctIndex: 2,
          explanation: "₹10 + ₹2 + ₹1 = ₹13.",
        },
        {
          id: "qq3",
          question: "How many ₹2 coins make ₹10?",
          options: ["2", "4", "5", "10"],
          correctIndex: 2,
          explanation: "₹2 × 5 = ₹10. Five ₹2 coins make ₹10.",
        },
        {
          id: "qq4",
          question: "You have ₹5 + ₹1. A toy costs ₹7. Do you have enough?",
          options: ["Yes, exactly", "No, need ₹1 more", "Yes, with ₹1 extra", "Yes, with ₹2 extra"],
          correctIndex: 1,
          explanation: "₹5 + ₹1 = ₹6. The toy costs ₹7. You need ₹1 more!",
        },
        {
          id: "qq5",
          question: "Three coins: ₹2, ₹2, ₹2. Total = ?",
          options: ["₹2", "₹4", "₹6", "₹8"],
          correctIndex: 2,
          explanation: "₹2 + ₹2 + ₹2 = ₹6.",
        },
      ],
    },
    {
      day: 3,
      title: "Making Amounts",
      riddle: {
        question: "I'm thinking of an amount that needs EXACTLY two coins: one big and one small. The total is ₹6. What are the two coins?",
        answer: "A ₹5 coin and a ₹1 coin! (5 + 1 = 6) 🤩",
      },
      scriptCards: [
        {
          id: "s1",
          title: "Today's challenge: Making exact amounts",
          content: "Today we'll learn something really useful — how to pick the RIGHT coins to make an EXACT amount.\n\n\"If something costs ₹7, which coins would you use to pay for it? Let's figure this out together!\"",
        },
        {
          id: "s2",
          title: "The strategy: Start big, then fill in",
          content: "Here's the trick — always start with the BIGGEST coin that fits:\n\nExample: Make ₹8\n• Try ₹10 — too big!\n• Try ₹5 — yes! That leaves ₹3 more to make.\n• Add ₹2 — now we have ₹7, need ₹1 more.\n• Add ₹1 — done! ₹5 + ₹2 + ₹1 = ₹8 ✓",
        },
        {
          id: "s3",
          title: "Practice together",
          content: "Try making these amounts with your child using real coins:\n\n• ₹6 = ₹5 + ₹1\n• ₹7 = ₹5 + ₹2\n• ₹9 = ₹5 + ₹2 + ₹2\n• ₹12 = ₹10 + ₹2\n• ₹15 = ₹10 + ₹5\n\nLet your child choose the coins and arrange them. You just guide!",
          tip: "If you don't have real coins, draw circles on paper and write the values in them. Works just as well!",
        },
        {
          id: "s4",
          title: "The shopkeeper game",
          content: "Role play!\n\n\"I'm the shopkeeper. This pencil costs ₹6. Pay me please!\"\n\nLet your child select the right coins from the pile and hand them to you.\n\nIf they give too many, say: \"You gave me ₹8, but it only costs ₹6. I need to give you change!\"\n\nThis naturally introduces the concept of change for tomorrow!",
        },
      ],
      practiceQuestions: [
        {
          id: "pq1",
          question: "Which coins make exactly ₹6?",
          options: ["₹5 + ₹2", "₹5 + ₹1", "₹2 + ₹2 + ₹2", "Both B and C"],
          correctIndex: 3,
          explanation: "Both ₹5+₹1=₹6 and ₹2+₹2+₹2=₹6. There can be more than one way!",
        },
        {
          id: "pq2",
          question: "Make ₹12 using the FEWEST coins. Which is best?",
          options: ["₹10 + ₹2", "₹5 + ₹5 + ₹2", "₹2+₹2+₹2+₹2+₹2+₹2", "₹10 + ₹1 + ₹1"],
          correctIndex: 0,
          explanation: "₹10 + ₹2 uses only 2 coins — the fewest! Always try the biggest coin first.",
        },
        {
          id: "pq3",
          question: "A book costs ₹15. Which coins pay for it exactly?",
          options: ["₹10 + ₹2 + ₹1", "₹10 + ₹5", "₹5 + ₹5 + ₹2 + ₹2 + ₹1", "Both B and C"],
          correctIndex: 3,
          explanation: "₹10+₹5=₹15 and ₹5+₹5+₹2+₹2+₹1=₹15. Both work!",
        },
        {
          id: "pq4",
          question: "Tara wants to pay ₹9. She only has ₹5 and ₹2 coins. How can she do it?",
          options: ["₹5 + ₹2 + ₹2", "₹5 + ₹2", "₹2 + ₹2 + ₹2 + ₹2", "She can't make ₹9"],
          correctIndex: 0,
          explanation: "₹5 + ₹2 + ₹2 = ₹9. Perfect!",
        },
        {
          id: "pq5",
          question: "Which set of coins does NOT make ₹10?",
          options: ["₹5 + ₹5", "₹10", "₹2+₹2+₹2+₹2+₹2", "₹5 + ₹2 + ₹2"],
          correctIndex: 3,
          explanation: "₹5+₹2+₹2 = ₹9, not ₹10. The others all equal ₹10.",
        },
        {
          id: "pq6",
          question: "How many ₹5 coins do you need to make ₹20?",
          options: ["2", "4", "5", "10"],
          correctIndex: 1,
          explanation: "₹5 × 4 = ₹20. Four ₹5 coins make ₹20.",
        },
        {
          id: "pq7",
          question: "I have ₹10 and ₹2. I want to make ₹13. What else do I need?",
          options: ["₹1", "₹2", "₹3", "Nothing, I already have it"],
          correctIndex: 0,
          explanation: "₹10 + ₹2 = ₹12. I need ₹1 more to make ₹13.",
        },
        {
          id: "pq8",
          question: "What is the FEWEST coins to make ₹17?",
          options: ["₹10+₹5+₹2 (3 coins)", "₹10+₹2+₹2+₹2+₹1 (5 coins)", "₹5+₹5+₹5+₹2 (4 coins)", "₹10+₹7 (2 coins, but ₹7 coin doesn't exist)"],
          correctIndex: 0,
          explanation: "₹10+₹5+₹2=₹17 in just 3 coins. There's no ₹7 coin!",
        },
        {
          id: "pq9",
          question: "Priya has: ₹5, ₹2, ₹1. The eraser costs ₹7. Does she have enough?",
          options: ["No, only ₹6", "Yes, exactly ₹8, but ₹1 extra", "Yes, exactly ₹7, no extra", "Yes, ₹2 extra"],
          correctIndex: 2,
          explanation: "₹5 + ₹2 + ₹1 = ₹8... wait — ₹5+₹2=₹7 if she uses just those two. ₹7 exactly!",
        },
        {
          id: "pq10",
          question: "Make ₹8 using exactly 3 coins:",
          options: ["₹5+₹2+₹1", "₹5+₹1+₹1+₹1", "₹2+₹2+₹2+₹2", "₹10-₹2"],
          correctIndex: 0,
          explanation: "₹5+₹2+₹1=₹8 using exactly 3 coins!",
        },
      ],
      quizQuestions: [
        {
          id: "qq1",
          question: "Best way to make ₹7 with fewest coins?",
          options: ["₹5+₹2", "₹2+₹2+₹2+₹1", "₹1×7", "₹5+₹1+₹1"],
          correctIndex: 0,
          explanation: "₹5+₹2=₹7 in just 2 coins — fewest possible!",
        },
        {
          id: "qq2",
          question: "A pencil costs ₹3. You give ₹5. Are you paying the exact amount?",
          options: ["Yes", "No — you're giving more than needed", "No — not enough", "Same amount"],
          correctIndex: 1,
          explanation: "₹5 > ₹3. You're giving MORE than needed, so you'll get change back!",
        },
        {
          id: "qq3",
          question: "How many ₹2 coins make ₹6?",
          options: ["2", "3", "6", "4"],
          correctIndex: 1,
          explanation: "₹2+₹2+₹2=₹6. Three ₹2 coins!",
        },
        {
          id: "qq4",
          question: "To make ₹11, I use ₹10 + ___",
          options: ["₹10", "₹2", "₹1", "₹5"],
          correctIndex: 2,
          explanation: "₹10+₹1=₹11.",
        },
        {
          id: "qq5",
          question: "Which coins make ₹20?",
          options: ["₹10+₹5+₹5", "₹10+₹5+₹2+₹2+₹1", "₹5+₹5+₹5+₹5", "Both A and C"],
          correctIndex: 3,
          explanation: "₹10+₹5+₹5=₹20 AND ₹5×4=₹20. Both work!",
        },
      ],
    },
    {
      day: 4,
      title: "Giving Change",
      riddle: {
        question: "You buy something for ₹3. You give ₹5. How much change will the shopkeeper give back?",
        answer: "₹2 change! (5 - 3 = 2) 💰",
      },
      scriptCards: [
        {
          id: "s1",
          title: "What is 'change'?",
          content: "\"When you give MORE money than something costs, the shopkeeper gives you back the EXTRA. That extra money is called CHANGE.\"\n\nExample: Ice cream costs ₹8. You give ₹10. The shopkeeper gives back ₹2. That ₹2 is your change!\n\n₹10 (you give) − ₹8 (cost) = ₹2 (change)",
        },
        {
          id: "s2",
          title: "How to calculate change",
          content: "\"Change = Money you gave MINUS the cost of the item\"\n\nThink of it as: \"How much MORE did I give?\"\n\nPractice:\n• Give ₹10, buy ₹7 item → Change = ₹10 − ₹7 = ₹3\n• Give ₹5, buy ₹3 item → Change = ₹5 − ₹3 = ₹2\n• Give ₹10, buy ₹10 item → Change = ₹0 (exact amount!)",
        },
        {
          id: "s3",
          title: "The shopkeeper game — with change",
          content: "Set up a little shop with 3-5 household items. Put price tags on them (use stickers or paper).\n\nYou be the shopkeeper. Your child is the customer.\n\n\"You can only use ₹10 and ₹5 coins to pay. I'll give you the right change.\"\n\nThis makes subtraction real and motivating!",
          tip: "Make the prices slightly tricky: ₹6, ₹8, ₹12, ₹7. This forces them to think about what change they should get back.",
        },
        {
          id: "s4",
          title: "Check: Getting the right change",
          content: "Teach your child to CHECK their change:\n\n\"Always count your change before you leave the shop!\"\n\nMethod: Count the change coins, add them to the item cost, and check it equals what you gave.\n\n₹2 change + ₹8 item = ₹10 ✓ (I gave ₹10, so this is right!)\n\nThis is a life skill, not just a school topic!",
        },
      ],
      practiceQuestions: [
        {
          id: "pq1",
          question: "You buy a ₹6 pencil. You give ₹10. What change do you get?",
          options: ["₹2", "₹4", "₹6", "₹16"],
          correctIndex: 1,
          explanation: "₹10 − ₹6 = ₹4 change.",
        },
        {
          id: "pq2",
          question: "Eraser costs ₹3. You give ₹5. Change = ?",
          options: ["₹1", "₹2", "₹3", "₹8"],
          correctIndex: 1,
          explanation: "₹5 − ₹3 = ₹2 change.",
        },
        {
          id: "pq3",
          question: "A toy costs ₹12. You give ₹20. Change = ?",
          options: ["₹8", "₹12", "₹20", "₹32"],
          correctIndex: 0,
          explanation: "₹20 − ₹12 = ₹8 change.",
        },
        {
          id: "pq4",
          question: "Book costs ₹10. You give ₹10. Change = ?",
          options: ["₹10", "₹5", "₹0", "₹2"],
          correctIndex: 2,
          explanation: "₹10 − ₹10 = ₹0. Exact amount — no change needed!",
        },
        {
          id: "pq5",
          question: "Juice costs ₹8. You give ₹10. Change = ?",
          options: ["₹8", "₹2", "₹18", "₹4"],
          correctIndex: 1,
          explanation: "₹10 − ₹8 = ₹2 change.",
        },
        {
          id: "pq6",
          question: "You buy items worth ₹7. You give ₹10. The shopkeeper gives ₹4. Is this correct?",
          options: ["Yes", "No — change should be ₹3", "No — change should be ₹2", "No — change should be ₹5"],
          correctIndex: 1,
          explanation: "₹10 − ₹7 = ₹3. The correct change is ₹3, not ₹4!",
        },
        {
          id: "pq7",
          question: "Candy costs ₹4. You give ₹5. Change = ?",
          options: ["₹1", "₹4", "₹5", "₹9"],
          correctIndex: 0,
          explanation: "₹5 − ₹4 = ₹1 change.",
        },
        {
          id: "pq8",
          question: "If you buy something for ₹10 and give ₹10, the shopkeeper gives you ___",
          options: ["₹10 back", "₹5 back", "₹0 (no change)", "₹2 back"],
          correctIndex: 2,
          explanation: "Exact amount means no change! ₹10 − ₹10 = ₹0.",
        },
        {
          id: "pq9",
          question: "You have ₹20. You buy a book for ₹14. How much is left?",
          options: ["₹4", "₹6", "₹14", "₹34"],
          correctIndex: 1,
          explanation: "₹20 − ₹14 = ₹6. You have ₹6 left!",
        },
        {
          id: "pq10",
          question: "What does 'change' mean in money?",
          options: ["Swapping coins for notes", "Money given back after paying more than the price", "Adding extra money to buy more", "The price of an item"],
          correctIndex: 1,
          explanation: "Change is the money you get BACK when you pay more than the item costs.",
        },
      ],
      quizQuestions: [
        {
          id: "qq1",
          question: "Notebook = ₹9. You give ₹10. Change = ?",
          options: ["₹9", "₹1", "₹19", "₹2"],
          correctIndex: 1,
          explanation: "₹10 − ₹9 = ₹1.",
        },
        {
          id: "qq2",
          question: "Pen = ₹5. You give ₹10. Change = ?",
          options: ["₹5", "₹10", "₹15", "₹4"],
          correctIndex: 0,
          explanation: "₹10 − ₹5 = ₹5.",
        },
        {
          id: "qq3",
          question: "You give ₹10 and get ₹3 change. How much was the item?",
          options: ["₹3", "₹7", "₹10", "₹13"],
          correctIndex: 1,
          explanation: "₹10 − ₹7 = ₹3. The item cost ₹7!",
        },
        {
          id: "qq4",
          question: "Is it possible to get MORE change than what you paid?",
          options: ["Yes", "No — change is always less", "Only at special shops", "Only with big notes"],
          correctIndex: 1,
          explanation: "Change is always the difference — you can never get MORE back than you gave!",
        },
        {
          id: "qq5",
          question: "Snack = ₹6. You give ₹10. The right change is ___",
          options: ["₹6", "₹4", "₹2", "₹3"],
          correctIndex: 1,
          explanation: "₹10 − ₹6 = ₹4.",
        },
      ],
    },
    {
      day: 5,
      title: "Money Word Problems",
      riddle: {
        question: "Ria has ₹10. She buys a pencil for ₹3 and a rubber for ₹2. How much does she have left?",
        answer: "₹5! (10 - 3 - 2 = 5) 🏆",
      },
      scriptCards: [
        {
          id: "s1",
          title: "The final challenge: Word problems!",
          content: "\"You've learned SO much this week — coins, counting, making amounts, giving change. Today we put it all together with WORD PROBLEMS!\"\n\n\"A word problem is a little story about money. We have to figure out the answer using what we know.\"\n\nThis is the hardest part — but also the most useful!",
        },
        {
          id: "s2",
          title: "How to solve a word problem",
          content: "Teach this 3-step method:\n\n1. 🔍 READ: Read the problem carefully. What is being asked?\n2. ✍️ WRITE: Write down the numbers. What do you know?\n3. ➕➖ DO: Decide: do we ADD or SUBTRACT?\n\nADD when: getting more money, buying multiple things, total amount\nSUBTRACT when: spending money, giving change, finding what's left",
        },
        {
          id: "s3",
          title: "Solve one together",
          content: "Problem: \"Arjun has ₹15. He buys a ball for ₹8. How much does he have left?\"\n\nStep 1: What do we know? Arjun has ₹15. He spends ₹8.\nStep 2: What are we finding? How much is LEFT.\nStep 3: LEFT means SUBTRACT. ₹15 − ₹8 = ₹7.\n\n\"Arjun has ₹7 left!\"\n\nNow let your child try one: \"Priya has ₹10. She buys a book for ₹6. How much is left?\"",
          tip: "Drawing a simple picture can help! Draw a wallet with ₹15 in it, then cross out ₹8 to show spending.",
        },
        {
          id: "s4",
          title: "You've completed the Money Campaign!",
          content: "🎉 AMAZING WORK THIS WEEK! 🎉\n\n\"You and your child have covered:\n✓ Coins and notes\n✓ Counting coins\n✓ Making amounts\n✓ Giving change\n✓ Solving money problems\n\nThis is everything in the Grade 1 Money chapter. Your child is now ready for any money question their teacher throws at them!\"\n\nTime to take the Final Quiz and earn the MASTERY CERTIFICATE! 🏆",
        },
      ],
      practiceQuestions: [
        {
          id: "pq1",
          question: "Tara has ₹15. She buys a pen for ₹5. How much does she have left?",
          options: ["₹5", "₹10", "₹15", "₹20"],
          correctIndex: 1,
          explanation: "₹15 − ₹5 = ₹10 left.",
        },
        {
          id: "pq2",
          question: "Rohan buys a book for ₹8 and a pencil for ₹2. Total cost = ?",
          options: ["₹6", "₹8", "₹10", "₹82"],
          correctIndex: 2,
          explanation: "₹8 + ₹2 = ₹10 total.",
        },
        {
          id: "pq3",
          question: "Mia has ₹20. She spends ₹12. Change left = ?",
          options: ["₹8", "₹12", "₹20", "₹32"],
          correctIndex: 0,
          explanation: "₹20 − ₹12 = ₹8.",
        },
        {
          id: "pq4",
          question: "Dev has ₹5. Nia has ₹8. Together they have ___",
          options: ["₹5", "₹8", "₹13", "₹3"],
          correctIndex: 2,
          explanation: "₹5 + ₹8 = ₹13 together.",
        },
        {
          id: "pq5",
          question: "A chocolate costs ₹7 and a biscuit costs ₹3. Total = ?",
          options: ["₹4", "₹7", "₹10", "₹73"],
          correctIndex: 2,
          explanation: "₹7 + ₹3 = ₹10.",
        },
        {
          id: "pq6",
          question: "Sam has ₹10. He wants to buy a toy for ₹13. How much MORE does he need?",
          options: ["₹3", "₹10", "₹13", "₹23"],
          correctIndex: 0,
          explanation: "₹13 − ₹10 = ₹3. He needs ₹3 more.",
        },
        {
          id: "pq7",
          question: "Priya spends ₹4 on Monday and ₹6 on Tuesday. Total spent = ?",
          options: ["₹2", "₹4", "₹6", "₹10"],
          correctIndex: 3,
          explanation: "₹4 + ₹6 = ₹10 total spent.",
        },
        {
          id: "pq8",
          question: "Riya had ₹18. She gave ₹9 to her friend. How much does she have now?",
          options: ["₹9", "₹18", "₹27", "₹0"],
          correctIndex: 0,
          explanation: "₹18 − ₹9 = ₹9.",
        },
        {
          id: "pq9",
          question: "An eraser costs ₹2, a ruler costs ₹5, a sharpener costs ₹3. Total = ?",
          options: ["₹7", "₹8", "₹10", "₹253"],
          correctIndex: 2,
          explanation: "₹2 + ₹5 + ₹3 = ₹10.",
        },
        {
          id: "pq10",
          question: "Arjun has ₹20 and earns ₹5 more. He then spends ₹12. What's left?",
          options: ["₹13", "₹12", "₹8", "₹25"],
          correctIndex: 0,
          explanation: "₹20 + ₹5 = ₹25, then ₹25 − ₹12 = ₹13.",
        },
      ],
      quizQuestions: [
        {
          id: "qq1",
          question: "Priya has ₹15. She buys a book for ₹9. Left = ?",
          options: ["₹9", "₹6", "₹15", "₹24"],
          correctIndex: 1,
          explanation: "₹15 − ₹9 = ₹6.",
        },
        {
          id: "qq2",
          question: "Juice ₹5 + Biscuit ₹3 = Total ___",
          options: ["₹2", "₹5", "₹8", "₹53"],
          correctIndex: 2,
          explanation: "₹5 + ₹3 = ₹8.",
        },
        {
          id: "qq3",
          question: "You give ₹10 for a ₹6 item. Change = ?",
          options: ["₹6", "₹4", "₹10", "₹2"],
          correctIndex: 1,
          explanation: "₹10 − ₹6 = ₹4.",
        },
        {
          id: "qq4",
          question: "3 friends each have ₹5. Together they have ___",
          options: ["₹5", "₹10", "₹15", "₹3"],
          correctIndex: 2,
          explanation: "₹5 × 3 = ₹15.",
        },
        {
          id: "qq5",
          question: "You had ₹20, spent ₹7, earned ₹3 more. Final amount = ?",
          options: ["₹10", "₹16", "₹20", "₹13"],
          correctIndex: 1,
          explanation: "₹20 − ₹7 = ₹13, then ₹13 + ₹3 = ₹16.",
        },
      ],
    },
  ],
};

// Fallback content for topics without full content
export function getTopicContent(topicId: string, day: number): DayContent | null {
  const content = TOPIC_CONTENT[topicId];
  if (content) {
    return content[day - 1] || null;
  }
  return generateFallbackContent(topicId, day);
}

function generateFallbackContent(topicId: string, day: number): DayContent {
  const topic = TOPICS.find((t) => t.id === topicId);
  const name = topic?.name || "This Topic";
  return {
    day,
    title: `${name} — Day ${day}`,
    riddle: {
      question: `Here's a fun brain teaser about ${name}! What comes next: 2, 4, 6, 8, ___?`,
      answer: "10! It's counting by 2s! 🎉",
    },
    scriptCards: [
      {
        id: "s1",
        title: `Welcome to Day ${day} of ${name}!`,
        content: `Today we're going to explore ${name} together.\n\nStart by asking your child: "What do you already know about ${name}?"\n\nLet them share anything they remember. Every answer is a good starting point!`,
      },
      {
        id: "s2",
        title: "Today's key idea",
        content: `${name} is an important topic that helps children understand the world around them.\n\nThe key thing to remember today: learning happens best when it's connected to real life.\n\nLook around you — can you spot anything related to ${name} right now?`,
        tip: "Making real-world connections is the #1 thing that makes learning stick!",
      },
      {
        id: "s3",
        title: "Practice together",
        content: `Let's practice ${name} together!\n\nTry this: Ask your child to explain what they learned in today's lesson as if they're teaching YOU.\n\nThis "teach-back" method is incredibly effective for cementing understanding.`,
      },
    ],
    practiceQuestions: Array.from({ length: 5 }, (_, i) => ({
      id: `pq${i + 1}`,
      question: `${name} question ${i + 1}: Which option is correct?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctIndex: 0,
      explanation: `The correct answer helps understand ${name} better.`,
    })),
    quizQuestions: Array.from({ length: 5 }, (_, i) => ({
      id: `qq${i + 1}`,
      question: `Quiz: ${name} concept ${i + 1}?`,
      options: ["Choice A", "Choice B", "Choice C", "Choice D"],
      correctIndex: i % 4,
      explanation: `This tests your understanding of ${name}.`,
    })),
  };
}

export const SUBJECT_COLORS: Record<string, string> = {
  math: "#1CB0F6",
  english: "#FF6B6B",
  science: "#58CC02",
};

export const SUBJECT_LABELS: Record<string, string> = {
  math: "📐 Math",
  english: "📖 English",
  science: "🔬 Science",
};

export const LEVEL_THRESHOLDS = [0, 100, 250, 500, 900, 1400, 2000, 2700, 3500, 4500];

export function getLevel(xp: number): number {
  let level = 1;
  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
    if (xp >= LEVEL_THRESHOLDS[i]) level = i + 1;
  }
  return level;
}

export function getXpForNextLevel(xp: number): { current: number; required: number; level: number } {
  const level = getLevel(xp);
  const current = xp - LEVEL_THRESHOLDS[level - 1];
  const required = (LEVEL_THRESHOLDS[level] || LEVEL_THRESHOLDS[level - 1] + 1000) - LEVEL_THRESHOLDS[level - 1];
  return { current, required, level };
}
