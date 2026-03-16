# ParentHero -- Curriculum Research & Master Topic Library

**Date:** February 10, 2026
**Purpose:** Comprehensive research on all topics to include in ParentHero, across grades 1-5, for **Math, Science/EVS, and English**, covering CBSE, ICSE, Common Core, and IB PYP boards.

---

## Table of Contents

1. [Strategic Recommendations](#part-1-strategic-recommendations)
2. [Board Comparison & Unification Strategy](#part-2-board-comparison--unification-strategy)
3. [Master Curriculum Table](#part-3-master-curriculum-table)
4. [Content Generation Specifications](#part-4-content-generation-specifications)
5. [English Subject Recommendation](#part-5-english-subject-recommendation)
6. [Summary Statistics](#part-6-summary-statistics)

---

## Part 1: Strategic Recommendations

### 1.1 Should Topics Differ By Board?

**Short answer: NO for the topic list. YES for content and sequencing.**

After analyzing all four boards (CBSE, ICSE, Common Core, IB PYP) across Grades 1-5, here's the reality:

- **Math:** 95%+ topic overlap across all boards. The concepts are universal (numbers, addition, fractions, geometry). What differs is (a) when topics are taught (ICSE is typically 6-12 months ahead of CBSE), (b) terminology ("carrying" vs "regrouping" vs "composing"), and (c) depth at each grade (ICSE/IB go slightly deeper).

- **Science/EVS:** ~80% topic overlap for core science. What diverges is (a) CBSE "EVS" blends science + social studies + environmental awareness, while other boards separate science from social studies, and (b) NGSS (US) emphasizes engineering practices that Indian boards don't.

**Recommendation: Build ONE universal topic library.** Then create a lightweight board-specific metadata layer that specifies:
- Which topics are relevant for each board+grade
- When they're typically taught (academic quarter)
- Terminology variations
- Cultural context for content generation (currency, names, references)

**Cost-benefit:** Building the topic list is a one-time effort (same for all boards). Board-specific metadata is ~20% additional effort. AI-generated content is localized per board at generation time (handled by prompt engineering, not by maintaining separate content libraries). This means supporting 4 boards costs roughly 1.2x the effort of supporting 1 board, NOT 4x.

### 1.2 Should We Have Sub-Topics?

**Yes, absolutely. Sub-topics are what make each Campaign meaningful and structured.**

Here's the hierarchy:

```
Grade 2 → Math → Multiplication (TOPIC / Campaign Unit)
  ├── Day 1: Concept of repeated addition (SUB-TOPIC)
  ├── Day 2: Multiplication tables (2, 5, 10) (SUB-TOPIC)
  ├── Day 3: Multiplication tables (3, 4, 6) (SUB-TOPIC)
  ├── Day 4: Multiplication word problems (SUB-TOPIC)
  └── Day 5: Mixed practice + assessment (SUB-TOPIC)
```

- **Topic** = the Campaign unit. What the parent "pins." What appears in the Library. Example: "Multiplication."
- **Sub-Topic** = the day-by-day focus within that Campaign. NOT a separate Campaign. Example: "Repeated Addition," "Tables 2, 5, 10."

This gives each 5-Day Campaign a natural progression (introduce → practice → deepen → challenge → master) rather than repeating the same type of content for 5 days.

**When to split a topic into two Campaigns:**
- If the topic is too broad for 5 days (e.g., "Numbers 1-100" in Grade 1 → split into "Numbers 1-20" and "Numbers 21-100")
- If the school typically teaches it in two separate units (e.g., "Addition without carrying" and "Addition with carrying" in Grade 2)

I've applied this logic in the master table below.

### 1.3 Subject Scope

**Three subjects: Math + Science/EVS + English.** Here's why each matters:

- **Math** is the #1 pain point for parents helping with homework. It's the most "practice-able" subject (numeric input, drills, problem-solving). The Practice Pad and Arcade are natural fits.
- **Science/EVS** is the #2 pain point, especially for CBSE where EVS covers a wide range from plants to transport to cooking. Parents struggle to explain concepts they only vaguely remember.
- **English** is the #3 pain point but arguably the #1 *anxiety* point for Indian parents. Grammar, spelling, and composition are areas where parents who learned by rote struggle to explain rules. English has excellent Practice Pad fit (fill-in-the-blank, correct the sentence, word building) and is the natural Arcade subject (Word Builder game).
- All three subjects have high cross-board overlap, meaning one topic library serves all boards. English grammar (nouns, verbs, tenses, articles, prepositions) is identical across CBSE, ICSE, Common Core, and IB at the Grade 1-5 level. Literature/reading selections differ, but we're not teaching literature -- we're teaching language skills.

### 1.4 Market-Specific Notes

| Market | Primary Boards | Notes |
|--------|---------------|-------|
| **India** | CBSE (65% market share), ICSE (15%) | Largest user base. Price-sensitive. CBSE coverage is non-negotiable. |
| **US** | Common Core (majority of states) | Higher willingness to pay. NGSS for science. Common Core math is well-defined. |
| **UAE** | CBSE (Indian schools), IB (international schools) | UAE doesn't have its own primary board for this demographic. Indians in UAE attend CBSE schools or IB schools. Localization need: AED currency, UAE-specific examples. |
| **Singapore, UK, etc.** | IB, British Curriculum (EYFS/Key Stage) | British Curriculum is a notable gap -- relevant for UAE, Singapore, and UK markets. Consider as a Phase 2 board addition. |

### 1.5 CBSE EVS: The Special Case

CBSE Grades 1-5 don't have a separate "Science" subject. They have **EVS (Environmental Studies)**, which blends:
- Science (plants, animals, human body, materials)
- Social awareness (family, community, transport, festivals)
- Environmental education (water, air, conservation)

**Problem:** Some EVS topics (e.g., "Types of Houses," "Festivals of India," "People Who Help Us") are not "science" and don't fit the Practice Pad model well.

**Solution:** Include ALL EVS topics (because CBSE parents will look for them), but tag each topic with an interaction type:

| Type | Description | App Modules Used | Examples |
|------|-------------|-----------------|---------|
| **PRACTICE** | Computational/skill-based. Can generate drillable questions. | Practice Pad, Arcade, Quiz | Math operations, measurement |
| **CONCEPTUAL** | Understanding-based. Best served with scripts, visuals, MCQs. | Script, Quiz, Flashcards | Human body systems, states of matter |
| **KNOWLEDGE** | Fact-based identification/classification. | Script, Quiz, Sorting Game | Types of animals, community helpers |
| **ACTIVITY** | Best learned through hands-on doing. | Script, Activity Cards, Simple Quiz | Cooking methods, experiments with water |

This ensures every topic has appropriate content, even if it doesn't fit the Practice Pad.

---

## Part 2: Board Comparison & Unification Strategy

### 2.1 Mathematics Across Boards

| Concept Area | CBSE | ICSE | Common Core | IB PYP |
|-------------|------|------|-------------|--------|
| **Number range by end of Grade 1** | 1-100 | 1-100 | 1-120 | 1-100 |
| **Number range by end of Grade 2** | 1-1000 | 1-1000 | 1-1000 | 1-1000 |
| **Number range by end of Grade 3** | 1-10,000 | 1-10,000 | 1-10,000 | 1-10,000 |
| **Number range by end of Grade 4** | 1-1,00,000 (Lakhs) | 1-1,000,000 (Millions) | 1-1,000,000 | 1-1,000,000 |
| **Number range by end of Grade 5** | 1-10,00,00,000 (Crores) | 1-1,000,000,000 (Billions) | 1-1,000,000,000 | 1-1,000,000,000 |
| **Multiplication tables intro** | Grade 2 (2,3,4,5,10) | Grade 2 (2-10) | Grade 3 | Grade 2 |
| **Fractions intro** | Grade 3 (basic) | Grade 2 (basic) | Grade 3 | Grade 2 |
| **Decimals intro** | Grade 4 | Grade 3-4 | Grade 4 | Grade 4 |
| **Number system** | Indian (Lakhs, Crores) | Both Indian + International | International (Millions) | International |
| **Terminology: Addition with carry** | "Carrying" or "With carry" | "Regrouping" | "Composing" or "Regrouping" | "Regrouping" |
| **Terminology: Subtraction with borrow** | "Borrowing" | "Decomposing" or "Regrouping" | "Decomposing" | "Decomposing" |

**Key takeaway:** The TOPICS are identical. The CONTENT needs board-specific terminology, number system conventions, and cultural context (₹ vs $ vs AED).

### 2.2 Science/EVS Across Boards

| Topic Area | CBSE EVS | ICSE Science | Common Core NGSS | IB PYP |
|-----------|----------|-------------|-----------------|--------|
| **Plants** | Grades 1-5 ✓ | Grades 1-5 ✓ | Grades 1-5 ✓ | Grades 1-5 ✓ |
| **Animals** | Grades 1-5 ✓ | Grades 1-5 ✓ | Grades 1-5 ✓ | Grades 1-5 ✓ |
| **Human Body** | Grades 1-5 ✓ | Grades 1-5 ✓ (more detailed) | Grades 1-5 ✓ | Grades 1-5 ✓ |
| **Matter & Materials** | Grades 3-5 ✓ | Grades 2-5 ✓ | Grades 2-5 ✓ | Grades 2-5 ✓ |
| **Force & Motion** | Grades 4-5 ✓ | Grades 3-5 ✓ | Grades 3-5 ✓ | Grades 3-5 ✓ |
| **Light & Sound** | Grades 4-5 ✓ | Grades 3-5 ✓ | Grades 1-5 ✓ | Grades 3-5 ✓ |
| **Earth & Space** | Grades 3-5 ✓ | Grades 3-5 ✓ | Grades 1-5 ✓ | Grades 2-5 ✓ |
| **Weather & Seasons** | Grades 1-3 ✓ | Grades 1-3 ✓ | Grades K-3 ✓ | Grades 1-3 ✓ |
| **Water & Air** | Grades 1-5 ✓ | Grades 2-5 ✓ | Grades 2-5 ✓ | Grades 2-5 ✓ |
| **Environment & Conservation** | Grades 3-5 ✓ | Grades 3-5 ✓ | Grades 3-5 ✓ | Grades 2-5 ✓ |
| **Family & Community** | Grades 1-3 (EVS-specific) | ✗ (Social Studies) | ✗ (Social Studies) | ✗ (Social Studies) |
| **Food & Nutrition** | Grades 1-4 (EVS) | Grades 2-4 ✓ | Implicit | Implicit |
| **Clothing & Shelter** | Grades 1-2 (EVS) | ✗ (Social Studies) | ✗ | ✗ |
| **Transport & Communication** | Grades 1-3 (EVS) | ✗ (Social Studies) | ✗ | ✗ |
| **Engineering Practices** | ✗ | ✗ | Grades 2-5 ✓ (NGSS) | Grades 3-5 ✓ |

**Key takeaway:** Core science topics (plants, animals, body, matter, forces) are universal. CBSE EVS has additional social/environmental topics. NGSS has engineering. The universal list covers the union; board metadata marks which topics apply.

### 2.3 English / Language Arts Across Boards

| Skill Area | CBSE English | ICSE English | Common Core ELA | IB PYP Language |
|-----------|-------------|-------------|----------------|----------------|
| **Phonics & Reading Readiness** | Grade 1 ✓ | Grade 1 ✓ (more intensive) | Grades K-2 ✓ (highly structured) | Grades 1-2 ✓ |
| **Parts of Speech (Nouns, Verbs, Adj)** | Grades 1-3 ✓ | Grades 1-3 ✓ (earlier start) | Grades 1-3 ✓ | Grades 1-3 ✓ |
| **Pronouns & Articles** | Grades 1-2 ✓ | Grade 1 ✓ | Grades 1-2 ✓ | Grades 1-2 ✓ |
| **Tenses (Simple)** | Grades 2-3 ✓ | Grade 2 ✓ (earlier) | Grades 2-3 ✓ | Grades 2-3 ✓ |
| **Tenses (Continuous/Perfect)** | Grades 4-5 ✓ | Grades 3-4 ✓ | Grades 4-5 ✓ | Grades 3-5 ✓ |
| **Prepositions** | Grades 1-3 ✓ | Grades 1-3 ✓ | Grades 1-3 ✓ | Grades 1-3 ✓ |
| **Conjunctions** | Grades 2-3 ✓ | Grades 2-3 ✓ | Grades 2-3 ✓ | Grades 2-3 ✓ |
| **Sentence Types** | Grades 3-4 ✓ | Grades 3-4 ✓ | Grades 3-4 ✓ | Grades 3-4 ✓ |
| **Active/Passive Voice** | Grade 5 ✓ | Grades 4-5 ✓ | Grade 5 ✓ | Grades 4-5 ✓ |
| **Direct/Indirect Speech** | Grades 4-5 ✓ | Grades 4-5 ✓ | Grade 5 ✓ | Grades 4-5 ✓ |
| **Punctuation** | Grades 2-4 ✓ | Grades 2-4 ✓ | Grades 1-4 ✓ | Grades 2-4 ✓ |
| **Comprehension (Unseen Passage)** | Grades 3-5 ✓ | Grades 2-5 ✓ | Grades 2-5 ✓ | Grades 2-5 ✓ |
| **Composition / Creative Writing** | Grades 3-5 ✓ | Grades 2-5 ✓ (earlier) | Grades 2-5 ✓ | Grades 2-5 ✓ |
| **Letter / Essay Writing** | Grades 4-5 ✓ | Grades 3-5 ✓ | Grades 4-5 ✓ | Grades 3-5 ✓ |
| **Vocabulary Building** | Grades 1-5 ✓ | Grades 1-5 ✓ | Grades 1-5 ✓ | Grades 1-5 ✓ |
| **Spelling** | Grades 1-5 ✓ | Grades 1-5 ✓ (cursive from G1) | Grades 1-5 ✓ | Grades 1-5 ✓ |

**Key takeaway:** English grammar skills are **90%+ universal** across boards at this level. The differences are:
- **ICSE** introduces grammar concepts ~6-12 months earlier than CBSE and demands more rigor (cursive writing from Grade 1, formal letter writing from Grade 3).
- **Common Core ELA** has a heavy focus on phonics and structured reading programs (phonemic awareness, decoding) in Grades 1-2 that Indian boards treat less formally.
- **Literature** differs entirely (CBSE uses NCERT stories, ICSE uses different publishers, CC uses leveled readers). We will NOT cover literature -- only language skills (grammar, vocabulary, spelling, writing).

**Important distinction for ParentHero:** We teach English *language skills* (grammar, vocabulary, spelling, composition structure), NOT literature (reading specific stories/poems). Language skills are universal and practice-able. Literature is board-specific and requires the actual textbook.

### 2.4 Board-Specific Content Guidelines

When generating content (scripts, questions, examples), the AI prompt must be parameterized by board:

| Parameter | CBSE | ICSE | Common Core | IB PYP |
|-----------|------|------|-------------|--------|
| **Currency** | ₹ (Rupees, Paise) | ₹ (Rupees, Paise) | $ (Dollars, Cents) | Varies by school location |
| **Number System** | Indian (Lakhs, Crores) | Both Indian + International | International (Millions, Billions) | International |
| **Child Names in Word Problems** | Ira, Rohan, Priya, Arjun | Ira, Rohan, Priya, Arjun | Emma, Liam, Sophia, Noah | Diverse mix |
| **Cultural References** | Indian festivals, foods, geography | Indian festivals, foods, geography | American references | International/neutral |
| **Unit System** | Metric (m, cm, kg, g, L) | Metric | US Customary + Metric | Metric |
| **Math Terminology** | See 2.1 above | See 2.1 above | See 2.1 above | See 2.1 above |
| **Science Terminology** | NCERT textbook terms | Selina/Ratna Sagar terms | NGSS vocabulary | IB PYP inquiry terms |

---

## Part 3: Master Curriculum Table

### How to Read This Table

- **ID**: Universal topic identifier for the database (`universal_id` in Firestore)
- **Topic**: The Campaign unit -- what appears in the Library, what the parent "pins"
- **Sub-Topics**: The 4-6 focus areas that structure the 5-Day Campaign progression
- **Description**: What the child learns in this Campaign
- **Boards**: Which boards cover this topic at this grade level. C=CBSE, I=ICSE, CC=Common Core, IB=IB PYP. All four (C/I/CC/IB) means universal.
- **Qtr**: Typical teaching quarter within the academic year (Q1=months 1-3, Q2=months 4-6, Q3=months 7-9, Q4=months 10-12). Note: Q1 = Apr-Jun for India, Sep-Nov for US.
- **Prereqs**: Which topics (by ID) should ideally be completed before this one
- **Type**: P=Practice (drillable), C=Conceptual (understanding-based), K=Knowledge (fact-based), A=Activity (hands-on), M=Mixed
- **Diff**: F=Foundational, C=Core, A=Advanced
- **Content Notes**: Specific ideas for script, practice, arcade, and activity content

---

### Grade 1 -- Mathematics

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g1_m_prenumber` | Pre-Number Concepts | 1. Sorting objects by color/shape/size 2. Matching and pairing 3. Comparing groups (more/less/same) 4. Ordering objects (first/last, big/small) 5. Mixed practice | Before numbers: building the logical foundation for counting. Sorting, matching, comparing groups of objects. | C/I/CC/IB | Q1 | None | P | F | Script: Use household items (spoons, socks, toys) for sorting. Practice: "Which group has more?" with pictures. Arcade: Sorting Game (drag items into buckets). Activity: Sort a bag of mixed buttons. |
| 2 | `g1_m_num_1to9` | Numbers 1 to 9 | 1. Counting objects (1-9) 2. Recognizing and writing numerals 3. Number names (one to nine) 4. Count forward and backward 5. Concept of Zero | Counting, reading, writing, and understanding numbers from 0 to 9. The concept of "zero" as nothing. | C/I/CC/IB | Q1 | g1_m_prenumber | P | F | Script: Count fingers, toes, toys. "Zero means the cookie jar is empty!" Practice: Write the numeral, count the dots, match numeral to quantity. Arcade: Number Rush (tap the number matching the dots). Activity: Number hunt around the house. |
| 3 | `g1_m_num_10to20` | Numbers 10 to 20 | 1. Counting to 20 2. Teen numbers (understanding "ten and some more") 3. Writing numerals 10-20 4. Number names (ten to twenty) 5. Ordering and comparing | Understanding teen numbers as "ten and some ones." Counting, reading, and writing 10-20. | C/I/CC/IB | Q1-Q2 | g1_m_num_1to9 | P | F | Script: "13 means one group of 10 and 3 extra." Use egg cartons (10 slots) + extras. Practice: "How many tens? How many ones?" Arcade: Number Rush (teens). Activity: Bundle sticks in groups of 10. |
| 4 | `g1_m_num_21to99` | Numbers 21 to 99 | 1. Counting by ones (21-50, then 50-99) 2. Skip counting by 2s, 5s, 10s 3. Number names (twenty-one to ninety-nine) 4. Before, after, between 5. Comparing two-digit numbers | Extending number sense to 99. Place value awareness (tens and ones). Skip counting patterns. | C/I/CC/IB | Q2-Q3 | g1_m_num_10to20 | P | F | Script: Use a number chart (1-100). Circle patterns for skip counting. Practice: "What comes after 47?" "Count by 5s: 5, 10, 15, ?" Arcade: Number Rush (fill in missing numbers). Activity: 100-chart coloring (color every 5th number). |
| 5 | `g1_m_add_basic` | Addition (Single Digit) | 1. Concept of addition (putting together) 2. Addition using objects and pictures 3. Addition facts (sums to 10) 4. Addition facts (sums to 18) 5. Addition word problems | Combining two groups. Understanding the "+" symbol. Addition facts through 9+9. Simple word problems. | C/I/CC/IB | Q2 | g1_m_num_1to9 | P | F | Script: "Addition means putting together. If you have 3 red balls and 2 blue balls, how many total?" Practice: 5+3=?, 7+6=?, "Ira has 4 apples. She gets 3 more. How many now?" Arcade: Number Rush (addition). Activity: Use dice -- roll two dice, add them up. |
| 6 | `g1_m_sub_basic` | Subtraction (Single Digit) | 1. Concept of subtraction (taking away) 2. Subtraction using objects and pictures 3. Subtraction facts (from numbers up to 10) 4. Subtraction facts (from numbers up to 18) 5. Subtraction word problems | Taking away from a group. Understanding the "−" symbol. Subtraction facts. Word problems. | C/I/CC/IB | Q2-Q3 | g1_m_add_basic | P | F | Script: "Subtraction means taking away. You had 5 cookies, you ate 2, how many left?" Practice: 8−3=?, 15−7=?, word problems. Arcade: Number Rush (subtraction). Activity: Use counters/buttons -- start with 10, take some away. |
| 7 | `g1_m_shapes` | Shapes & Spatial Sense | 1. 2D shapes (circle, square, triangle, rectangle) 2. Identifying shapes in the environment 3. Spatial vocabulary (above/below, left/right, inside/outside, near/far) 4. Symmetry (intro: folding shapes) 5. Shape patterns | Recognizing and naming basic 2D shapes. Understanding position and direction words. | C/I/CC/IB | Q1-Q2 | None | M | F | Script: "Look around -- the clock is a circle, the window is a rectangle!" Practice: "Name this shape," "What shape is the door?" Quiz: MCQ with shape images. Arcade: Shape Sort (drag shapes into correct bucket). Activity: Shape hunt -- find 5 circles, 5 squares in your house. |
| 8 | `g1_m_measure` | Measurement & Comparison | 1. Length (longer/shorter/taller) 2. Measuring with non-standard units (handspan, footstep, paperclip) 3. Weight (heavier/lighter using balance) 4. Capacity (full/half/empty, holds more/less) 5. Comparing and ordering by size | Comparing objects by length, weight, and capacity. Measuring using body parts and everyday objects. | C/I/CC/IB | Q3 | g1_m_num_1to9 | A | F | Script: "How many handspans is the table?" Practice: "Which is longer: pencil or ruler?" (image-based). Quiz: MCQ comparison questions. Activity: Measure 5 things at home using your foot. How many footsteps from bed to door? |
| 9 | `g1_m_time` | Time & Calendar | 1. Parts of the day (morning, afternoon, evening, night) 2. Days of the week (sequence, today/yesterday/tomorrow) 3. Months of the year 4. Reading a clock (hours only, o'clock) 5. Daily routine sequencing | Understanding the concept of time. Sequencing daily events. Reading an analog clock (hour hand only). | C/I/CC/IB | Q3-Q4 | None | K | F | Script: "The short hand tells the hour. When it points to 3, it's 3 o'clock!" Practice: "What time is it?" (clock images). "What comes after Wednesday?" Arcade: Clock Match (match clock face to time). Activity: Make a paper plate clock. Sequence your daily routine cards. |
| 10 | `g1_m_money` | Money (Introduction) | 1. Identifying coins and notes 2. Value of coins/notes 3. Counting money (simple amounts) 4. Simple buying (enough money or not?) 5. Adding coins | Recognizing currency. Understanding that coins/notes have value. Simple transactions. | C/I/CC/IB | Q4 | g1_m_add_basic | P | C | Script: "A ₹5 coin is SMALLER than a ₹1 coin, but worth MORE!" (India) or "$1 = 100 cents" (US). Practice: "₹2 + ₹5 = ?", "Do you have enough to buy a ₹7 toy?" Arcade: Coin Rush (count coins quickly). Activity: Set up a pretend shop with price tags. BOARD NOTE: Currency differs by market. |
| 11 | `g1_m_patterns` | Patterns & Sequences | 1. Identifying repeating patterns (AB, AAB, ABC) 2. Extending patterns (what comes next?) 3. Creating own patterns 4. Number patterns (counting by 1s, 2s) 5. Pattern rules | Recognizing, extending, and creating patterns using shapes, colors, and numbers. | C/I/CC/IB | Q2-Q3 | g1_m_prenumber | M | F | Script: "Patterns are things that repeat. Red, blue, red, blue -- what comes next?" Practice: Complete the pattern (visual). "2, 4, 6, ?" Arcade: Pattern Builder (drag items to continue pattern). Activity: Make a necklace with colored beads in a pattern. |
| 12 | `g1_m_data` | Data Handling (Introduction) | 1. Sorting objects into groups 2. Counting items in groups 3. Reading simple pictographs 4. Making tally marks 5. Answering questions from data | Collecting, organizing, and reading simple data. Introduction to pictographs. | C/I/CC/IB | Q4 | g1_m_num_1to9 | M | F | Script: "Let's count how many red vs blue vs green crayons you have!" Practice: Read pictograph, answer "how many?" and "which has more?" Quiz: Interpret simple picture graphs. Activity: Survey family -- "What's your favorite fruit?" Make a pictograph. |

**Grade 1 Math: 12 Campaign Topics, ~58 Sub-Topics**

---

### Grade 1 -- Science & EVS

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g1_s_mybody` | My Body | 1. External body parts (head, hands, legs, eyes, ears) 2. The five senses and sense organs 3. Taking care of our body (hygiene, brushing, bathing) 4. What my body can do (run, jump, write) 5. Healthy habits (sleep, exercise, food) | Identifying body parts, understanding the five senses, and learning healthy habits. | C/I/CC/IB | Q1 | None | K | F | Script: "Your eyes SEE, ears HEAR, nose SMELLS, tongue TASTES, skin FEELS." Practice: Match sense organ to function. "Which sense do you use to know food is hot?" Activity: Blindfold game -- identify objects by touch/smell. |
| 2 | `g1_s_family` | My Family & Home | 1. Family members (parents, siblings, grandparents) 2. Roles and relationships 3. Types of families (big/small, joint/nuclear) 4. My home (rooms and their uses) 5. Good manners at home | Understanding family structure, relationships, and the concept of "home." | C/I | Q1 | None | K | F | Script: "Every family is special. Some families are big, some are small." Practice: "Who is your mother's mother?" (relationship MCQs). Activity: Draw your family tree. BOARD NOTE: Primarily CBSE EVS and ICSE EVS. Not a standard CC/IB science topic. |
| 3 | `g1_s_food` | Food & Nutrition | 1. Why we eat (energy, growth) 2. Sources of food (plants and animals) 3. Healthy food vs junk food 4. Meals of the day (breakfast, lunch, dinner) 5. Where food comes from (farm to plate) | Understanding why we eat, food sources, and basics of healthy eating. | C/I/CC/IB | Q2 | None | K | F | Script: "Food gives us energy like fuel gives a car energy!" Practice: Sort into "healthy" and "junk food" (image sorting). "Which comes from a plant: rice or chicken?" Activity: Help cook a simple meal and identify ingredients. |
| 4 | `g1_s_water` | Water | 1. Uses of water (drinking, bathing, cooking, cleaning) 2. Sources of water (rain, rivers, wells, taps) 3. Clean water vs dirty water 4. Saving water (don't waste!) 5. Water and life (plants and animals need water too) | Understanding the importance of water, its sources, and conservation. | C/I/CC/IB | Q2 | None | K | F | Script: "Turn off the tap while brushing -- that saves a bucket of water every day!" Practice: "Which uses water: cooking or sleeping?" Sort activities by water use. Activity: Track how many times you use water in one day. |
| 5 | `g1_s_plants` | Plants Around Us | 1. Parts of a plant (root, stem, leaf, flower, fruit) 2. Types of plants (trees, shrubs, herbs, climbers) 3. What plants need (water, sunlight, soil, air) 4. Plants give us food, shade, and oxygen 5. Taking care of plants | Identifying parts of a plant, types of plants, and what they need to grow. | C/I/CC/IB | Q2-Q3 | None | C | F | Script: "Roots are like a plant's feet -- they hold it in the ground and drink water!" Practice: Label parts of a plant (drag-and-drop on image). "Is a mango tree a herb or a tree?" Activity: Plant a seed in a cup. Observe and draw it every 2 days. |
| 6 | `g1_s_animals` | Animals Around Us | 1. Domestic animals (pets and farm animals) 2. Wild animals (jungle animals) 3. Animal homes (nest, den, burrow, stable) 4. Animal babies and their names 5. What animals eat (herbivore/carnivore/omnivore -- simple terms) | Classifying animals as domestic or wild. Learning where animals live and what they eat. | C/I/CC/IB | Q3 | None | K | F | Script: "A cow lives on a farm and gives us milk. A lion lives in the jungle." Practice: Match animal to home. "Where does a rabbit live?" Arcade: Sort It! (domestic vs wild). Activity: Visit a park/zoo (or watch a nature video) and list 10 animals you see. |
| 7 | `g1_s_clothes` | Clothes We Wear | 1. Types of clothes (shirts, pants, dresses, etc.) 2. Clothes for different seasons (summer/winter/rain) 3. Clothes for different occasions (school, sports, festivals) 4. Materials clothes are made from (cotton, wool, silk) 5. Taking care of clothes | Understanding why we wear clothes, how seasons affect clothing choices. | C/I | Q3 | None | K | F | Script: "In summer we wear light cotton clothes. In winter we need warm woolly clothes." Practice: Match clothes to season (image-based). Activity: Sort your wardrobe into summer and winter piles. BOARD NOTE: Primarily CBSE/ICSE EVS. |
| 8 | `g1_s_weather` | Weather & Seasons | 1. Types of weather (sunny, rainy, cloudy, windy, snowy) 2. Seasons (summer, winter, rainy/monsoon, spring/autumn) 3. How weather affects us (clothes, activities, food) 4. Observing weather daily 5. Weather safety (umbrellas, sunscreen, warm clothes) | Observing and describing weather. Understanding how seasons change and affect daily life. | C/I/CC/IB | Q1-Q2 | None | K | F | Script: "Look outside -- is it sunny or cloudy? That's the weather today!" Practice: Match weather to activity ("rainy → umbrella"). Activity: Keep a weather diary for 5 days -- draw the weather each morning. |
| 9 | `g1_s_transport` | Transport & Travel | 1. Means of transport (land, water, air) 2. Vehicles we see daily (car, bus, bicycle, train) 3. Traffic rules and road safety 4. Fuel -- what makes vehicles go 5. Transport then and now (bullock cart → car) | Types of transport, basic road safety, and understanding how we travel. | C/I | Q3 | None | K | F | Script: "Cars and buses go on roads. Ships go on water. Airplanes fly in the sky!" Practice: Classify vehicles (land/water/air sorting). "Which is faster: bicycle or airplane?" Activity: On your next walk, count how many types of vehicles you see. BOARD NOTE: Primarily CBSE/ICSE EVS. |
| 10 | `g1_s_houses` | Houses & Shelter | 1. Why we need houses (shelter from weather, safety) 2. Types of houses (apartment, bungalow, hut, tent, igloo) 3. Rooms in a house and their uses 4. Materials used to build (bricks, wood, mud, straw) 5. Keeping our house clean | Understanding different types of homes and why shelter is a basic need. | C/I | Q3 | None | K | F | Script: "An igloo is made of ice blocks -- perfect for very cold places!" Practice: Match house type to material. "What is a hut made of?" Activity: Build a small shelter using blankets and chairs! BOARD NOTE: CBSE/ICSE EVS. |
| 11 | `g1_s_environment` | My Surroundings & Safety | 1. Clean vs dirty surroundings 2. Where does garbage go? 3. Keeping school and neighborhood clean 4. Safety at home (fire, electricity, sharp objects) 5. Safety on the road (traffic lights, zebra crossing) | Awareness of cleanliness, basic environmental care, and personal safety. | C/I/CC/IB | Q4 | None | K | F | Script: "Red means STOP. Yellow means WAIT. Green means GO. Always look both ways!" Practice: "What should you do if you see a red light?" MCQ. Safety scenario questions. Activity: Walk to the nearest traffic light. Practice crossing with a parent. |
| 12 | `g1_s_living_nonliving` | Living and Non-Living Things | 1. What makes something "living" (breathe, eat, grow, move, reproduce) 2. Examples of living things (plants, animals, people) 3. Examples of non-living things (rocks, water, toys) 4. Natural vs man-made things 5. Sorting living and non-living | Distinguishing between living and non-living things based on observable characteristics. | C/I/CC/IB | Q1-Q2 | None | C | F | Script: "A dog breathes, eats, grows, and has puppies -- it's living! A rock doesn't do any of that -- it's non-living." Practice: Classify items (living/non-living sorting). Arcade: Sort It! Activity: Walk around and list 5 living and 5 non-living things. |

**Grade 1 Science & EVS: 12 Campaign Topics, ~60 Sub-Topics**

---

### Grade 2 -- Mathematics

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g2_m_num_100to999` | Numbers 100 to 999 | 1. Counting in hundreds 2. Place value (hundreds, tens, ones) 3. Expanded form (356 = 300+50+6) 4. Number names (one hundred to nine hundred ninety-nine) 5. Comparing and ordering 3-digit numbers | Understanding 3-digit numbers through place value. Reading, writing, comparing. | C/I/CC/IB | Q1 | g1_m_num_21to99 | P | F | Script: "356 = 3 hundreds + 5 tens + 6 ones. Like having 3 boxes of 100, 5 bags of 10, and 6 loose items." Practice: "What is the place value of 7 in 374?" Expanded form exercises. Arcade: Number Rush (3-digit). Activity: Use bundles of sticks (100s, 10s, 1s). |
| 2 | `g2_m_add_regroup` | Addition with Regrouping | 1. Review: 2-digit addition without carrying 2. Concept of regrouping/carrying (10 ones = 1 ten) 3. 2-digit + 2-digit with carrying 4. 3-digit + 3-digit (intro) 5. Addition word problems | Adding 2-digit and 3-digit numbers with regrouping (carrying). Word problems. | C/I/CC/IB | Q2 | g1_m_add_basic, g2_m_num_100to999 | P | C | Script: "When the ones column adds up to 10 or more, we 'carry' a ten to the next column." (CBSE: "carry", ICSE: "regroup"). Practice: Vertical addition with carrying. Whiteboard essential. Arcade: Number Rush (2-digit addition). Activity: Add prices at a pretend shop. |
| 3 | `g2_m_sub_borrow` | Subtraction with Borrowing | 1. Review: 2-digit subtraction without borrowing 2. Concept of borrowing/decomposing (1 ten = 10 ones) 3. 2-digit − 2-digit with borrowing 4. 3-digit − 3-digit (intro) 5. Subtraction word problems | Subtracting 2-digit and 3-digit numbers with borrowing. Word problems. | C/I/CC/IB | Q2-Q3 | g1_m_sub_basic, g2_m_num_100to999 | P | C | Script: "If you can't take 7 from 3, borrow 1 ten from the tens column. Now you have 13 − 7 = 6." Practice: Vertical subtraction with borrowing. Whiteboard critical. Arcade: Number Rush (subtraction). BOARD TERM: CBSE="borrowing", CC="decomposing". |
| 4 | `g2_m_multiply_intro` | Multiplication (Introduction) | 1. Concept of repeated addition (3+3+3 = 3×3) 2. Multiplication symbol (×) and reading "times" 3. Multiplication tables: 2, 5, 10 4. Multiplication tables: 3, 4 5. Multiplication word problems | Understanding multiplication as repeated addition. Learning tables for 2, 3, 4, 5, 10. | C/I/CC/IB | Q3 | g2_m_add_regroup | P | C | Script: "3 × 4 means 3 groups of 4. Draw 3 circles with 4 dots each and count!" Practice: "5 × 3 = ?" Table drills. "If 1 box has 4 apples, how many in 3 boxes?" Arcade: Number Rush (times tables). Activity: Array art -- draw rows and columns of dots. |
| 5 | `g2_m_multiply_tables` | Multiplication Tables (Extended) | 1. Tables: 6, 7, 8, 9 2. Patterns in multiplication tables 3. Commutative property (3×4 = 4×3) 4. Skip counting connection 5. Mixed tables practice and speed drills | Extending multiplication tables through 9. Recognizing patterns. Building fluency. | I/CC/IB | Q3-Q4 | g2_m_multiply_intro | P | C | Script: "Tip for 9 times table: hold up 10 fingers, fold down the one you're multiplying. Fingers on each side give you the answer!" Practice: Speed drills, fill-in missing numbers. Arcade: Times Table Sprint. BOARD NOTE: ICSE covers full tables in Grade 2; CBSE does partial in G2, full in G3. |
| 6 | `g2_m_division_intro` | Division (Introduction) | 1. Concept of equal sharing ("share 12 sweets among 3 friends") 2. Concept of grouping ("how many groups of 4 in 12?") 3. Division symbol (÷) 4. Division as inverse of multiplication 5. Simple division facts and word problems | Understanding division as equal sharing and grouping. Connection to multiplication. | C/I/CC/IB | Q3-Q4 | g2_m_multiply_intro | P | C | Script: "Division is sharing equally. 12 ÷ 3 means 'share 12 things among 3 friends.' Each gets 4!" Practice: "12 ÷ 4 = ?", "Share 20 stickers among 5 children." Arcade: Division Match. Activity: Actually share crackers/candies equally among family members. |
| 7 | `g2_m_fractions_intro` | Fractions (Introduction) | 1. Concept of "half" (equal parts) 2. Quarters and thirds 3. Reading fractions (1/2, 1/3, 1/4) 4. Fractions of a shape (coloring halves, quarters) 5. Fractions of a collection ("half of 8 apples") | Understanding fractions as equal parts of a whole. Halves, thirds, quarters. | I/CC/IB | Q4 | None | C | C | Script: "If you cut a pizza into 2 EQUAL pieces, each piece is one half = 1/2." Practice: "Color 1/4 of this shape." "What fraction is shaded?" (image MCQ). Activity: Cut a chapati/sandwich into halves, then quarters. Eat the fractions! BOARD NOTE: ICSE/CC intro fractions in Grade 2; CBSE introduces in Grade 3. |
| 8 | `g2_m_measure_std` | Measurement (Standard Units) | 1. Length: meter (m) and centimeter (cm) 2. Measuring with a ruler 3. Weight: kilogram (kg) and gram (g) 4. Capacity: liter (L) and milliliter (mL) 5. Choosing the right unit and estimating | Introduction to standard measurement units. Using ruler for length. Comparing weights and capacities. | C/I/CC/IB | Q4 | g1_m_measure | P | C | Script: "A meter is about the height of a door handle. A centimeter is about the width of your fingernail." Practice: "What unit: measuring a pencil (cm) or a playground (m)?" Reading ruler images. Activity: Measure 10 things at home with a ruler. Record in a table. BOARD NOTE: US uses inches/feet alongside metric. |
| 9 | `g2_m_time_clock` | Time (Clock Reading) | 1. Review: hours (o'clock) 2. Half past (X:30) 3. Quarter past and quarter to 4. Reading time to 5-minute intervals 5. Duration and elapsed time (simple) | Reading analog and digital clocks. Understanding half past, quarter past/to. | C/I/CC/IB | Q3-Q4 | g1_m_time | P | C | Script: "Half past 3 means the minute hand is on the 6 and the hour hand is between 3 and 4." Practice: "What time does this clock show?" (image-based). "School starts at 8:00 and ends at 2:00. How many hours?" Arcade: Clock Match. Activity: Make a paper clock with moving hands. |
| 10 | `g2_m_money_ops` | Money (Operations) | 1. Review: coins and notes recognition 2. Adding money amounts 3. Subtracting money (making change) 4. Comparing prices (cheaper/costlier) 5. Word problems with money | Adding and subtracting money. Making change. Comparing prices. Real-world money problems. | C/I/CC/IB | Q3-Q4 | g1_m_money, g2_m_add_regroup | P | C | Script: "If something costs ₹35 and you give ₹50, the change is ₹50 − ₹35 = ₹15." Practice: "₹25 + ₹18 = ?", "How much change from ₹100?" Arcade: Shopping Sprint (pick items, calculate total). Activity: Play "shopkeeper" with real coins. BOARD NOTE: Currency by market. |
| 11 | `g2_m_shapes_3d` | Shapes (2D and 3D) | 1. Review 2D shapes + new ones (oval, pentagon, hexagon) 2. Introduction to 3D shapes (cube, cuboid, sphere, cylinder, cone) 3. Faces, edges, corners of 3D shapes 4. Shapes in the environment 5. Nets of 3D shapes (intro) | Expanding shape knowledge to include 3D solids. Relating shapes to real objects. | C/I/CC/IB | Q2-Q3 | g1_m_shapes | C | C | Script: "A ball is a sphere. A box is a cuboid. A can of Pringles is a cylinder!" Practice: "How many faces does a cube have?" (6). Match shape name to image. Activity: Find 3D shapes at home -- list which objects are spheres, cubes, cylinders. |
| 12 | `g2_m_data` | Data Handling (Pictographs & Tables) | 1. Collecting data through surveys 2. Organizing data in a table 3. Reading and creating pictographs 4. Tally marks (counting in 5s) 5. Answering questions from data (most, least, how many more) | Collecting, organizing, representing, and interpreting data using pictographs and tally charts. | C/I/CC/IB | Q4 | g1_m_data | M | C | Script: "A pictograph uses pictures to show data. If 🍎 = 2 apples, then 🍎🍎🍎 = 6 apples!" Practice: Read pictograph, answer questions. "How many more liked chocolate than vanilla?" Activity: Survey classmates on favorite color. Create a pictograph. |
| 13 | `g2_m_patterns` | Patterns & Sequences (Number) | 1. Growing patterns (1, 3, 5, 7...) 2. Shrinking patterns (20, 18, 16, 14...) 3. Skip counting patterns 4. Pattern rules ("add 3 each time") 5. Predicting the next terms | Identifying and extending number patterns. Understanding pattern rules. | C/I/CC/IB | Q2 | g1_m_patterns | P | C | Script: "Every pattern has a rule. If the numbers are 2, 5, 8, 11... the rule is 'add 3'." Practice: "What comes next: 4, 8, 12, __?" "What is the rule?" Arcade: Pattern Blitz (find the pattern fast). Activity: Create your own number pattern. Challenge family to guess the rule. |

**Grade 2 Math: 13 Campaign Topics, ~65 Sub-Topics**

---

### Grade 2 -- Science & EVS

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g2_s_plants_life` | Plant Life & Growth | 1. Lifecycle of a plant (seed → sprout → plant → flower → fruit → seed) 2. What plants need to grow (water, sunlight, soil, air) 3. Parts of a plant (detailed: root functions, stem transport) 4. Types of plants (herbs, shrubs, trees, climbers, creepers) 5. Importance of plants (food, oxygen, shade, medicine) | Deep dive into plant growth, lifecycle, and classification. | C/I/CC/IB | Q2 | g1_s_plants | C | F | Script: "Roots drink water from soil. Stem carries water up to leaves. Leaves use sunlight to make food!" Practice: Label plant parts (drag-drop). Sequence lifecycle stages. Quiz: "Which part of the plant makes food?" Activity: Germinate a bean seed in a wet paper towel. |
| 2 | `g2_s_animals_habitat` | Animal Habitats & Classification | 1. Habitats (forest, desert, water, arctic, grassland) 2. How animals adapt to habitats 3. Herbivores, carnivores, omnivores 4. Animal coverings (fur, feathers, scales, shell) 5. Endangered animals and conservation | Where animals live, how they're adapted, and how we can protect them. | C/I/CC/IB | Q2-Q3 | g1_s_animals | C | F | Script: "A camel has a hump to store fat for desert journeys. A polar bear has thick fur for the cold!" Practice: Match animal to habitat. Sort: herbivore/carnivore/omnivore. Arcade: Sort It! Activity: Pick an animal and draw its habitat. |
| 3 | `g2_s_food_nutrition` | Food Groups & Nutrition | 1. Food groups (carbs, proteins, fats, vitamins, minerals) 2. A balanced diet 3. Sources of nutrients (which foods give what) 4. Cooking methods (boiling, frying, roasting, baking) 5. Food preservation (drying, refrigerating, pickling) | Understanding why we need different types of food. Basics of a balanced diet. | C/I | Q2 | g1_s_food | K | F | Script: "Rice and bread give energy (carbohydrates). Milk and dal give us strong bones and muscles (proteins)." Practice: Classify foods by food group (image sorting). "Which food is rich in protein: rice or eggs?" Activity: Plan a balanced meal for dinner with one item from each food group. |
| 4 | `g2_s_water_cycle` | Water: Sources & States | 1. Sources of water (rain, river, groundwater, ocean) 2. States of water (ice → water → steam) 3. The water cycle (simple: evaporation, condensation, precipitation) 4. Clean water and purification (filtering, boiling) 5. Water conservation | Understanding where water comes from, how it changes form, and why we must save it. | C/I/CC/IB | Q3 | g1_s_water | C | C | Script: "When the sun heats water, it becomes invisible steam (evaporation). Steam rises, cools, forms clouds (condensation). Clouds get heavy and it rains (precipitation)!" Practice: Sequence the water cycle. "What is ice melting called?" Activity: Boil water, observe steam. Put a cold plate above the steam -- watch droplets form (condensation!). |
| 5 | `g2_s_air` | Air Around Us | 1. Air is everywhere (prove it: blow into a bag) 2. Properties of air (takes up space, has weight, invisible) 3. Composition of air (simple: mostly nitrogen, some oxygen, a little CO2) 4. Uses of air (breathing, wind energy, drying clothes) 5. Air pollution (causes and effects) | Understanding that air is real, has properties, and is essential for life. | C/I/CC/IB | Q3 | None | C | C | Script: "You can't see air, but it's real! Blow into a bag -- see it puff up? That's air!" Practice: "Which proves air takes up space?" MCQ. True/false about air properties. Activity: Balloon experiment -- air makes the balloon big. Pinwheel experiment -- wind is moving air. |
| 6 | `g2_s_materials` | Materials Around Us | 1. Types of materials (wood, metal, plastic, glass, fabric, paper) 2. Properties (hard/soft, rough/smooth, transparent/opaque, waterproof) 3. Natural vs man-made materials 4. Choosing the right material (why is a cup glass but a bag plastic?) 5. Recycling and reducing waste | Identifying materials, their properties, and why specific materials are used for specific purposes. | C/I/CC/IB | Q3-Q4 | None | C | C | Script: "Glass is transparent -- that's why windows are made of glass. Wood is strong -- that's why tables are made of wood." Practice: "What material is a shoe made of?" "Which is waterproof: paper or plastic?" Sort: natural vs man-made. Activity: Material hunt -- find 3 wooden, 3 plastic, 3 metal items at home. |
| 7 | `g2_s_safety` | Safety & First Aid | 1. Safety at home (fire, electricity, sharp objects, medicines) 2. Safety on the road (traffic rules, crossing, seatbelts) 3. Safety at school and playground 4. Stranger safety 5. Basic first aid (cuts, burns, insect bites) | Essential safety rules and basic first aid knowledge for children. | C/I | Q1-Q2 | g1_s_environment | K | F | Script: "Never touch an electric switch with wet hands! Always cross at the zebra crossing." Practice: "What should you do if your clothes catch fire? (Stop, Drop, Roll)" Scenario MCQs. Activity: Practice dialing emergency number. Role-play road crossing. BOARD NOTE: Primarily CBSE/ICSE EVS. |
| 8 | `g2_s_community` | Community Helpers | 1. People who help us (doctor, police, firefighter, teacher, farmer, postman) 2. What they do and tools they use 3. How they help the community 4. Our responsibilities towards helpers 5. Services around us (hospital, police station, fire station, post office) | Understanding the roles of community helpers and the services they provide. | C/I | Q3 | None | K | F | Script: "A firefighter doesn't just fight fires -- they rescue people from accidents and floods too!" Practice: Match helper to tool/workplace. "Who works at a hospital?" Activity: Interview a community helper (parent's friend). BOARD NOTE: CBSE/ICSE EVS. Common in IB PYP "Community" unit. |
| 9 | `g2_s_earth_day_night` | Earth: Day & Night | 1. The Earth is round (globe vs flat) 2. The Sun gives us light and heat 3. Why we have day and night (Earth's rotation) 4. The Moon -- Earth's companion 5. Stars and constellations (intro) | Understanding why day and night happen. Basic awareness of Sun, Moon, and stars. | C/I/CC/IB | Q4 | None | C | C | Script: "Earth spins like a top. The side facing the Sun has day. The other side has night. One full spin = one day!" Practice: "Why does night happen?" MCQ. "The Earth takes ___ hours for one rotation." Activity: Flashlight + ball demo -- shine a flashlight on a ball in a dark room to show day/night. |
| 10 | `g2_s_good_habits` | Good Habits & Hygiene | 1. Personal hygiene (brushing, bathing, handwashing, nail cutting) 2. Healthy eating habits 3. Exercise and sleep 4. Keeping surroundings clean 5. Saying please, thank you, sorry (social habits) | Building awareness of daily hygiene routines, healthy living, and good manners. | C/I | Q1 | g1_s_mybody | K | F | Script: "Wash hands with soap for 20 seconds -- sing 'Happy Birthday' twice! Germs hate soap." Practice: Sequence the handwashing steps. "When should you wash your hands?" MCQ. Activity: Chart your good habits for a week -- brushed teeth? ✓. Ate fruit? ✓. BOARD NOTE: CBSE/ICSE EVS. |

**Grade 2 Science & EVS: 10 Campaign Topics, ~50 Sub-Topics**

---

### Grade 3 -- Mathematics

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g3_m_num_thousands` | Numbers up to 9,999 | 1. 4-digit numbers: place value (thousands, hundreds, tens, ones) 2. Expanded form and number names 3. Comparing and ordering 4-digit numbers 4. Successor, predecessor, skip counting 5. Rounding to nearest 10 and 100 | Reading, writing, comparing 4-digit numbers. Place value mastery. Rounding. | C/I/CC/IB | Q1 | g2_m_num_100to999 | P | F | Script: "4,567 = 4 thousands + 5 hundreds + 6 tens + 7 ones. Like having 4 big boxes, 5 medium, 6 small, 7 tiny." Practice: Place value questions, comparison, ordering, rounding. Arcade: Number Rush (4-digit). Activity: Use play money (₹1000, ₹100, ₹10, ₹1 notes). |
| 2 | `g3_m_add_sub_large` | Addition & Subtraction (Large Numbers) | 1. 3-digit + 3-digit with multiple regroupings 2. 4-digit addition 3. 3-digit and 4-digit subtraction with borrowing across zeros 4. Checking answers (addition is reverse of subtraction) 5. Multi-step word problems | Adding and subtracting numbers up to 4 digits. Borrowing across zeros. Verification strategies. | C/I/CC/IB | Q1-Q2 | g2_m_add_regroup, g2_m_sub_borrow | P | C | Script: "Borrowing across a zero: in 400−156, the 0 in tens can't lend, so go to the hundreds first." Practice: Multi-digit vertical addition/subtraction. Word problems. Whiteboard critical. |
| 3 | `g3_m_multiply_2d` | Multiplication (2-Digit) | 1. Review tables 2-10 (speed drills) 2. Multiplying 2-digit × 1-digit (without carrying) 3. Multiplying 2-digit × 1-digit (with carrying) 4. Properties: commutative, identity, zero 5. Multiplication word problems | Multiplying two-digit numbers by one-digit numbers. Multiplication properties. | C/I/CC/IB | Q2-Q3 | g2_m_multiply_intro | P | C | Script: "23 × 4: First, 4 × 3 = 12 (write 2, carry 1). Then, 4 × 2 = 8, plus 1 carried = 9. Answer: 92." Practice: Vertical multiplication drills. Word problems. Arcade: Multiplication Rush. |
| 4 | `g3_m_division` | Division (with Remainder) | 1. Review: division as equal sharing and grouping 2. Long division (2-digit ÷ 1-digit) 3. Division with remainders ("17 ÷ 5 = 3 remainder 2") 4. Division as inverse of multiplication 5. Division word problems | Long division method. Understanding remainders. Connection to multiplication. | C/I/CC/IB | Q3 | g2_m_division_intro, g3_m_multiply_2d | P | C | Script: "17 ÷ 5: How many 5s fit in 17? Three 5s = 15. 17 − 15 = 2 left over. So 17 ÷ 5 = 3 R 2." Practice: Long division practice. "What is the remainder when 23 ÷ 4?" Whiteboard important. |
| 5 | `g3_m_fractions` | Fractions (Understanding) | 1. What is a fraction? (parts of a whole) 2. Numerator and denominator 3. Types: unit fractions, proper fractions 4. Comparing like fractions (same denominator) 5. Fractions on a number line | Deep understanding of fractions: naming, reading, comparing. | C/I/CC/IB | Q3 | g2_m_fractions_intro | C | C | Script: "In 3/4, the bottom number (4) tells how many equal parts. The top (3) tells how many we're talking about." Practice: "What fraction is shaded?" "Which is bigger: 2/5 or 4/5?" Number line placement. Activity: Fold paper into fractions. |
| 6 | `g3_m_fractions_ops` | Fractions (Addition & Subtraction) | 1. Adding like fractions (same denominator): 1/5 + 2/5 = 3/5 2. Subtracting like fractions: 4/6 − 1/6 = 3/6 3. Equivalent fractions (intro): 1/2 = 2/4 = 3/6 4. Fractions of a collection: 1/3 of 12 = 4 5. Word problems with fractions | Adding and subtracting fractions with same denominators. Finding equivalent fractions. | C/I/CC/IB | Q3-Q4 | g3_m_fractions | P | C | Script: "Adding fractions with the same bottom number is easy -- just add the tops! 1/4 + 2/4 = 3/4." Practice: Fraction addition/subtraction drills. "1/3 of 15 = ?" Activity: Pizza fractions -- cut a pizza into 8 slices. Eat 3/8. How much is left? |
| 7 | `g3_m_geometry` | Geometry (Lines, Angles, Perimeter) | 1. Point, line, line segment, ray 2. Types of lines (horizontal, vertical, parallel, perpendicular) 3. Introduction to angles (right angle, greater than/less than right angle) 4. Perimeter of regular shapes 5. Perimeter of irregular shapes (counting units) | Understanding basic geometric terms. Introduction to angles. Calculating perimeter. | C/I/CC/IB | Q2-Q3 | g2_m_shapes_3d | M | C | Script: "Perimeter is the distance AROUND a shape. Walk around the room -- that distance is the room's perimeter!" Practice: "Find the perimeter of a rectangle: length 5cm, width 3cm." Identify angle types. Activity: Measure perimeter of your book, table, phone. |
| 8 | `g3_m_measure_convert` | Measurement (Conversion & Practice) | 1. Length: km ↔ m ↔ cm (conversion) 2. Weight: kg ↔ g (conversion) 3. Capacity: L ↔ mL (conversion) 4. Estimating measurements 5. Word problems involving measurement | Converting between metric units. Estimating and solving measurement word problems. | C/I/CC/IB | Q4 | g2_m_measure_std | P | C | Script: "1 km = 1000 m. 1 m = 100 cm. So 2 km 500 m = 2500 m." Practice: "Convert 3 kg 200 g to grams." "How many mL in 2.5 L?" Word problems. |
| 9 | `g3_m_time_adv` | Time (Elapsed Time & Calendar) | 1. Reading time to the minute 2. AM and PM 3. Elapsed time ("Movie starts at 3:15 and ends at 5:00. How long?") 4. Calendar: days in each month, leap year 5. Word problems with time | Reading clocks precisely. Calculating elapsed time. Understanding the calendar. | C/I/CC/IB | Q3 | g2_m_time_clock | P | C | Script: "AM = morning (After Midnight). PM = afternoon/evening (Past Midday). 3:00 PM is afternoon." Practice: Elapsed time calculation. "How many days in February 2028 (leap year)?" Activity: Time your daily activities (how long to brush teeth, eat lunch, etc.). |
| 10 | `g3_m_money_adv` | Money (Bills & Budgeting) | 1. All denominations (coins and notes) 2. Making amounts in different ways (₹50 = 5×₹10 or 2×₹20+₹10) 3. Billing: calculating total cost 4. Making change from a larger note 5. Simple budgeting ("You have ₹100. What can you buy?") | Advanced money operations. Bills, change-making, and basic budgeting. | C/I/CC/IB | Q3-Q4 | g2_m_money_ops | P | C | Script: "If you buy 3 pencils at ₹8 each: 3 × 8 = ₹24. You give ₹50. Change = ₹50 − ₹24 = ₹26." Practice: Calculate bills, make change. "Biggest purchase within ₹200" problems. Activity: Go grocery shopping with parent. Estimate the bill before checkout. |
| 11 | `g3_m_data` | Data Handling (Bar Graphs) | 1. Review pictographs and tally marks 2. Reading bar graphs 3. Drawing bar graphs 4. Interpreting data (most, least, difference, total) 5. Collecting data and presenting it | Reading, creating, and interpreting bar graphs. Drawing conclusions from data. | C/I/CC/IB | Q4 | g2_m_data | M | C | Script: "A bar graph uses bars to show amounts. Taller bar = bigger number." Practice: Read bar graph, answer questions. "How many more children like cricket than football?" Activity: Survey 10 people on favorite subject. Draw a bar graph. |
| 12 | `g3_m_patterns_algebra` | Patterns & Early Algebra | 1. Number patterns (rules: ×2, +5, −3) 2. Input-output machines ("in: 5, rule: ×3, out: 15") 3. Missing numbers in equations (? + 7 = 12) 4. Balanced equations (concept of equals) 5. Simple word problems with unknowns | Identifying pattern rules. Introduction to algebraic thinking through missing number problems. | C/I/CC/IB | Q2 | g2_m_patterns | P | C | Script: "The equals sign is like a seesaw -- both sides must balance! 5 + ? = 12. What makes it balance? 7!" Practice: "Find the missing number: ? × 4 = 20." Input-output tables. Arcade: Pattern Blitz. |

**Grade 3 Math: 12 Campaign Topics, ~60 Sub-Topics**

---

### Grade 3 -- Science & EVS

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g3_s_plants_adv` | Plants: Photosynthesis & Adaptation | 1. How plants make food (photosynthesis: sunlight + water + CO2 → food + O2) 2. Role of roots, stems, and leaves in food-making 3. Plant adaptation (desert plants, water plants, hill plants) 4. Seed dispersal (wind, water, animal, explosion) 5. Importance of forests | Understanding how plants make food, adapt to environments, and spread their seeds. | C/I/CC/IB | Q2 | g2_s_plants_life | C | C | Script: "Leaves are the kitchen of the plant. They use sunlight to cook food from water and air!" Practice: Label photosynthesis diagram. "How do coconut seeds travel?" (water). Arcade: Sort It! (dispersal methods). Activity: Observe 3 different plants. How are their leaves different? Why? |
| 2 | `g3_s_animals_classify` | Animal Classification & Adaptation | 1. Vertebrates vs invertebrates 2. Groups: mammals, birds, reptiles, amphibians, fish, insects 3. Animal adaptations (camouflage, hibernation, migration) 4. Food chains (producer → consumer → predator) 5. Endangered species and conservation | Classifying animals by body structure. Understanding food chains and adaptation. | C/I/CC/IB | Q3 | g2_s_animals_habitat | C | C | Script: "Animals with a backbone = vertebrates. Without = invertebrates. You have a backbone -- feel it! So you're a vertebrate." Practice: Classify animals (mammal/bird/reptile/etc.). Build a food chain. Arcade: Sort It! Activity: Create a food chain poster for your favorite habitat. |
| 3 | `g3_s_human_body_organs` | Human Body: Major Organs | 1. Skeletal system (bones protect and support) 2. Muscular system (muscles help us move) 3. Brain and nervous system (intro: brain controls everything) 4. Heart and lungs (intro: pumping blood, breathing) 5. Keeping our organs healthy | Introduction to internal organs and their basic functions. | C/I/CC/IB | Q2 | g1_s_mybody | C | C | Script: "Your heart is a pump. It beats about 100,000 times a day, pushing blood all around your body!" Practice: Match organ to function. "Which organ helps you breathe?" Label body diagram. Activity: Feel your pulse. Count beats for 15 seconds, multiply by 4. |
| 4 | `g3_s_food_cooking` | Food: Cooking & Preservation | 1. Methods of cooking (boiling, frying, steaming, roasting, baking) 2. How cooking changes food (raw → cooked) 3. Fuels used for cooking (gas, wood, electricity, solar) 4. Food preservation methods (drying, salting, refrigerating, canning) 5. Food safety (wash hands, clean utensils, expiry dates) | How we cook food, preserve it, and keep it safe. | C/I | Q2-Q3 | g2_s_food_nutrition | A | C | Script: "Boiling means cooking in hot water. The bubbles you see are the water turning to steam!" Practice: Match cooking method to food (rice→boiling, bread→baking). "Why do we refrigerate milk?" Activity: Help make a no-cook recipe (sandwich, salad). Identify cooking methods used at dinner. |
| 5 | `g3_s_water_sources` | Water: Sources & Conservation | 1. Sources (rain, river, lake, groundwater, ocean) 2. Water purification (how tap water reaches us) 3. Uses of water (agriculture, industry, domestic) 4. Water scarcity and conservation 5. Rainwater harvesting (intro) | Where our water comes from, how it's purified, and why conservation matters. | C/I/CC/IB | Q2 | g2_s_water_cycle | C | C | Script: "Only 3% of Earth's water is fresh. And most of that is frozen! So the water we can use is very precious." Practice: Sequence water purification steps. "Name 3 ways to save water." Activity: Calculate how much water your family uses in a day. |
| 6 | `g3_s_soil` | Soil: Types & Importance | 1. What is soil made of (rock particles, water, air, humus) 2. Types of soil (sandy, clayey, loamy) 3. Properties (water retention, texture) 4. Soil and plants (which soil is best for growing?) 5. Soil erosion and conservation | Understanding soil composition, types, and importance for plant growth. | C/I/CC/IB | Q3 | g2_s_plants_life | C | C | Script: "Soil is not just dirt -- it's a mix of tiny rock pieces, dead plant bits (humus), water, and air!" Practice: Match soil type to property. "Which soil holds the most water?" Activity: Collect 3 soil samples. Add water. Which drains fastest? |
| 7 | `g3_s_matter` | States of Matter | 1. Solids (fixed shape and volume) 2. Liquids (fixed volume, takes container's shape) 3. Gases (no fixed shape or volume) 4. Changing states (melting, freezing, evaporation, condensation) 5. Everyday examples of state changes | Understanding the three states of matter and how substances change between them. | C/I/CC/IB | Q3 | g2_s_water_cycle | C | C | Script: "Ice cream starts solid, melts to liquid, and if you heat it more, it becomes steam (gas). Same stuff, three forms!" Practice: Classify as solid/liquid/gas. "What happens when you heat ice?" Sequence state changes. Activity: Ice cube experiment -- time how long ice takes to melt at room temperature vs in sunlight. |
| 8 | `g3_s_force_motion` | Force & Motion (Introduction) | 1. What is a force? (push and pull) 2. Effects of force (start, stop, change direction, change shape) 3. Types of force (muscular, gravitational, magnetic, friction) 4. Gravity ("why things fall down") 5. Friction ("why a ball stops rolling") | Understanding forces as pushes and pulls that affect motion and shape. | C/I/CC/IB | Q3-Q4 | None | C | C | Script: "Everything that moves needs a push or pull to start. That push or pull is called a FORCE." Practice: "Is opening a door a push or pull?" "Which force makes things fall down?" Activity: Push a toy car on carpet vs smooth floor. Which goes farther? (friction demo). |
| 9 | `g3_s_light_shadow` | Light & Shadows | 1. Sources of light (sun, bulb, candle, fire) 2. Light travels in straight lines 3. Transparent, translucent, opaque objects 4. How shadows are formed 5. Shadow changes through the day (position of sun) | Understanding how light travels, how shadows form, and classifying materials by transparency. | C/I/CC/IB | Q4 | None | C | C | Script: "Shadows form when light can't pass through something. The object blocks the light and makes a dark shape behind it!" Practice: "Is glass transparent or opaque?" "What happens to your shadow at noon vs evening?" Activity: Shadow tracing -- trace your shadow at 10 AM, 12 PM, and 3 PM. How does it change? |
| 10 | `g3_s_birds_insects` | Birds & Insects | 1. Features of birds (feathers, wings, beaks, claws) 2. Types of beaks (for different foods) 3. Features of insects (6 legs, 3 body parts, antennae) 4. Useful vs harmful insects (bees/butterflies vs mosquitoes) 5. Life cycle of a butterfly (metamorphosis) | Understanding the unique characteristics of birds and insects. | C/I/CC/IB | Q3 | g2_s_animals_habitat | C | C | Script: "A woodpecker has a strong, pointed beak for drilling into trees. A parrot has a curved beak for cracking seeds." Practice: Match beak type to food type. "How many legs does an insect have?" Label butterfly lifecycle. Activity: Bird watching -- observe birds near home. Draw their beaks. |
| 11 | `g3_s_environment` | Our Environment: Pollution & Conservation | 1. Types of pollution (air, water, soil, noise) 2. Causes of pollution (factories, vehicles, garbage) 3. Effects on health and nature 4. Reduce, Reuse, Recycle 5. What we can do (plant trees, save water, use less plastic) | Understanding pollution types, causes, and how individuals can help. | C/I/CC/IB | Q4 | g2_s_air, g2_s_water_cycle | C | C | Script: "Pollution is when harmful things get into our air, water, or soil. Burning garbage pollutes the air. Throwing plastic in rivers pollutes water." Practice: Match pollution type to cause. "Which reduces pollution: driving a car or riding a bicycle?" Activity: Do a mini cleanup -- pick up trash in your area for 10 minutes. |

**Grade 3 Science & EVS: 11 Campaign Topics, ~55 Sub-Topics**

---

### Grade 4 -- Mathematics

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g4_m_large_numbers` | Large Numbers (Lakhs / Millions) | 1. 5-digit and 6-digit numbers 2. Indian system (ten thousands, lakhs) vs International system (hundred thousands, millions) 3. Place value, expanded form, number names 4. Comparing and ordering large numbers 5. Rounding to nearest 1000 and 10000 | Reading, writing, and comparing numbers up to lakhs/millions. Indian vs International numeration. | C/I/CC/IB | Q1 | g3_m_num_thousands | P | C | Script: CBSE: "After ten thousand comes one lakh (1,00,000)." CC: "After hundred thousand comes one million (1,000,000)." Note the comma placement difference! Practice: Place value, expanded form. "Write 3,45,678 in words." BOARD NOTE: Indian system uses lakhs/crores; International uses millions/billions. |
| 2 | `g4_m_multiply_large` | Multiplication (3-Digit × 2-Digit) | 1. Review 2-digit × 1-digit 2. 3-digit × 1-digit 3. 2-digit × 2-digit (lattice method or standard) 4. Properties of multiplication (distributive intro) 5. Multi-step word problems | Multiplying larger numbers. Multiple methods. Word problems requiring multiplication. | C/I/CC/IB | Q2 | g3_m_multiply_2d | P | C | Script: "For 34 × 12: First, 34 × 2 = 68. Then, 34 × 10 = 340. Add: 68 + 340 = 408." Practice: Multi-digit multiplication drills. Word problems. Whiteboard essential. |
| 3 | `g4_m_division_long` | Long Division (3-Digit ÷ 1-Digit) | 1. Review division with remainders 2. Long division: 2-digit ÷ 1-digit (formal method) 3. Long division: 3-digit ÷ 1-digit 4. Division with zero in quotient 5. Division word problems | Formal long division method. Handling zeros in the quotient. | C/I/CC/IB | Q2-Q3 | g3_m_division | P | C | Script: "D-M-S-B: Divide, Multiply, Subtract, Bring down. Repeat until done!" Practice: Long division drills. "408 ÷ 4 = ?" Word problems. Whiteboard critical for working. |
| 4 | `g4_m_factors_multiples` | Factors & Multiples | 1. Factors of a number (all factor pairs) 2. Multiples of a number 3. Common factors and common multiples 4. Prime and composite numbers 5. Tests of divisibility (2, 3, 5, 9, 10) | Understanding factors, multiples, prime numbers, and divisibility rules. | C/I/CC/IB | Q2-Q3 | g3_m_multiply_2d, g3_m_division | P | C | Script: "A prime number has exactly 2 factors: 1 and itself. 7 is prime (1×7 only). 6 is NOT prime (1×6, 2×3)." Practice: "List all factors of 24." "Is 17 prime or composite?" "Is 345 divisible by 5?" Arcade: Prime or Composite speed game. |
| 5 | `g4_m_fractions_equiv` | Fractions (Equivalent & Mixed) | 1. Equivalent fractions (1/2 = 2/4 = 3/6) 2. Simplifying fractions (reducing to lowest terms) 3. Improper fractions and mixed numbers (7/4 = 1 3/4) 4. Converting between improper and mixed 5. Comparing unlike fractions (cross-multiplication intro) | Deep work on equivalent fractions, mixed numbers, and comparison strategies. | C/I/CC/IB | Q3 | g3_m_fractions | P | C | Script: "To find equivalent fractions, multiply top and bottom by the same number. 1/3 = 2/6 = 3/9." Practice: "Find 3 equivalent fractions for 2/5." "Convert 11/4 to a mixed number." |
| 6 | `g4_m_fractions_ops` | Fractions (Operations) | 1. Adding like fractions (review, fluency) 2. Subtracting like fractions 3. Adding unlike fractions (finding LCD) 4. Subtracting unlike fractions 5. Word problems with fractions | Adding and subtracting fractions with like and unlike denominators. | C/I/CC/IB | Q3-Q4 | g4_m_fractions_equiv | P | A | Script: "To add 1/3 + 1/4: Find a common denominator. LCD of 3 and 4 is 12. So 4/12 + 3/12 = 7/12." Practice: Fraction addition/subtraction drills. Word problems. BOARD NOTE: ICSE does unlike fractions in G4; CBSE may defer some to G5. |
| 7 | `g4_m_decimals` | Decimals (Introduction) | 1. What is a decimal? (tenths: 0.1 = 1/10) 2. Hundredths (0.01 = 1/100) 3. Place value in decimals 4. Converting fractions to decimals and vice versa 5. Comparing and ordering decimals | Understanding decimals as another way to write fractions. Tenths and hundredths. | C/I/CC/IB | Q3 | g4_m_fractions_equiv | P | C | Script: "0.5 means 5 tenths -- same as 1/2! Decimals are just another way of writing fractions." Practice: "Convert 3/10 to a decimal." "Which is bigger: 0.45 or 0.5?" Place value: "What is the value of 7 in 3.72?" |
| 8 | `g4_m_geometry_angles` | Geometry (Angles & Shapes) | 1. Types of angles (acute, right, obtuse, straight, reflex) 2. Measuring angles with a protractor 3. Types of triangles (by angles and sides) 4. Properties of quadrilaterals (square, rectangle, parallelogram, rhombus) 5. Symmetry (lines of symmetry) | Classifying angles and shapes. Using a protractor. Understanding symmetry. | C/I/CC/IB | Q2-Q3 | g3_m_geometry | M | C | Script: "An acute angle is less than 90° -- like a slice of pizza. An obtuse angle is more than 90° -- like an open book." Practice: "What type of angle is 120°?" Measure angles from images. Identify lines of symmetry. Activity: Find 5 symmetric objects at home. |
| 9 | `g4_m_perimeter_area` | Perimeter & Area | 1. Perimeter of rectangles and squares (formula) 2. Perimeter of irregular shapes 3. Concept of area (counting square units) 4. Area of rectangles and squares (formula: L × W) 5. Word problems (fencing, flooring, painting) | Calculating perimeter and area. Distinguishing between the two. Real-world applications. | C/I/CC/IB | Q3-Q4 | g3_m_geometry | P | C | Script: "Perimeter is the fence around a garden. Area is the grass inside." Practice: "Find the area of a rectangle 8cm × 5cm." "Perimeter of a square with side 6cm?" Word problems. Activity: Calculate area of your room by measuring length and width. |
| 10 | `g4_m_time_24hr` | Time (24-Hour Clock & Time Zones) | 1. 24-hour clock format (13:00 = 1 PM) 2. Converting between 12-hour and 24-hour 3. Duration calculations (hours and minutes) 4. Reading timetables 5. Time zones (intro: why it's night in India when it's day in the US) | Mastering the 24-hour clock. Complex elapsed time calculations. | C/I/CC/IB | Q3 | g3_m_time_adv | P | C | Script: "After 12:00 noon, keep counting! 1 PM = 13:00, 2 PM = 14:00... 11 PM = 23:00." Practice: "Convert 3:45 PM to 24-hour format." "A train departs at 09:30 and arrives at 14:15. How long is the journey?" |
| 11 | `g4_m_data_adv` | Data Handling (Line Graphs & Averages) | 1. Review bar graphs 2. Pie charts (reading, not creating) 3. Line graphs (reading and interpreting trends) 4. Mean (average) of a set of numbers 5. Choosing the right graph for the data | Reading pie charts and line graphs. Calculating averages. Understanding data presentation. | C/I/CC/IB | Q4 | g3_m_data | M | C | Script: "To find the average: add all numbers, then divide by how many numbers. 10+20+30 = 60. 60 ÷ 3 = 20." Practice: "What is the average of 12, 18, 15?" Read line graph: "In which month was temperature highest?" |
| 12 | `g4_m_patterns_algebra` | Patterns & Algebra | 1. Complex number patterns (geometric: ×2, ×3) 2. Rules with two operations (×2 then +1) 3. Variables and expressions (intro: "n + 5") 4. Simple equations (n + 7 = 15, solve for n) 5. Word problems with unknowns | Extending pattern work into algebraic thinking. Using variables. Solving simple equations. | C/I/CC/IB | Q2 | g3_m_patterns_algebra | P | C | Script: "A variable is like a mystery box. n + 7 = 15. What number is in the box? n = 8!" Practice: "If n = 4, what is 3n + 2?" "Solve: x − 9 = 14." |

**Grade 4 Math: 12 Campaign Topics, ~60 Sub-Topics**

---

### Grade 4 -- Science & EVS

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g4_s_plants_repro` | Plant Reproduction & Parts | 1. Parts of a flower (sepal, petal, stamen, pistil) 2. Pollination (self and cross, role of insects/wind) 3. Fertilization and seed formation 4. Seed dispersal methods (wind, water, animal, explosion) 5. Germination (conditions: water, air, warmth) | Understanding flower structure, pollination, and seed formation. | C/I/CC/IB | Q2 | g3_s_plants_adv | C | C | Script: "Flowers aren't just pretty -- they're the plant's baby-making factory! Pollen from stamen reaches the pistil, and a seed is born." Practice: Label flower parts. Match dispersal method to seed type. Activity: Dissect a real flower. Identify parts with a magnifying glass. |
| 2 | `g4_s_digestive` | Human Body: Digestive System | 1. Journey of food (mouth → food pipe → stomach → intestines) 2. Role of each organ in digestion 3. Teeth: types (incisors, canines, premolars, molars) and functions 4. Taking care of teeth (brushing, flossing, diet) 5. Healthy digestion (chewing well, drinking water, fiber) | Tracing the journey of food through the body. Understanding teeth types and dental care. | C/I/CC/IB | Q2-Q3 | g3_s_human_body_organs | C | C | Script: "Food's journey: teeth chew it, food pipe slides it down, stomach churns it with acid, intestines absorb the good stuff!" Practice: Sequence digestion steps. Match tooth type to function. Quiz: "Where does most absorption happen?" (small intestine). Activity: Feel your teeth in a mirror. Count incisors, canines, premolars, molars. |
| 3 | `g4_s_food_chain` | Food Chains & Ecosystems | 1. Producers, consumers, decomposers 2. Building food chains (grass → rabbit → fox) 3. Food webs (multiple connected chains) 4. Balance in ecosystems (what happens if one species disappears?) 5. Human impact on ecosystems | Understanding energy flow in ecosystems through food chains and webs. | C/I/CC/IB | Q3 | g3_s_animals_classify | C | C | Script: "Plants are producers (they make food). Animals are consumers (they eat food). Fungi and bacteria are decomposers (they break down dead things)." Practice: Build a food chain from given organisms. "What happens if all frogs disappear?" Activity: Create a food web poster for a forest ecosystem. |
| 4 | `g4_s_rocks_minerals` | Rocks & Minerals | 1. Types of rocks (igneous, sedimentary, metamorphic) 2. How each type forms 3. The rock cycle 4. Common minerals and their uses 5. Soil formation from rocks (weathering) | Understanding the three rock types, the rock cycle, and how soil forms. | C/I/CC/IB | Q3 | g3_s_soil | C | C | Script: "Igneous = born from fire (lava). Sedimentary = layers squished together (like a sandwich). Metamorphic = changed by heat and pressure." Practice: Classify rocks by type. Sequence the rock cycle. "Which type of rock has layers?" Activity: Collect 5 rocks outside. Try to classify them. |
| 5 | `g4_s_force_machines` | Force, Work & Simple Machines | 1. Review: push, pull, types of force 2. Work = force × distance 3. Simple machines: lever, pulley, inclined plane 4. Simple machines: wheel and axle, screw, wedge 5. Machines in daily life | Understanding how simple machines make work easier. | C/I/CC/IB | Q3-Q4 | g3_s_force_motion | C | C | Script: "A seesaw is a lever. A ramp is an inclined plane. A doorknob is a wheel and axle. Simple machines are everywhere!" Practice: Match machine to type. "Which simple machine helps you open a paint can?" Activity: Find 10 simple machines at home (scissors=lever, stairs=inclined plane, etc.). |
| 6 | `g4_s_energy` | Forms of Energy | 1. What is energy? (ability to do work) 2. Forms: heat, light, sound, electrical, kinetic, potential 3. Sources: sun, food, fuel, electricity, wind, water 4. Energy conversion (bulb: electrical → light + heat) 5. Conserving energy (switch off lights, save fuel) | Understanding different forms of energy and how energy converts from one form to another. | C/I/CC/IB | Q3-Q4 | g3_s_force_motion | C | C | Script: "Energy is the ability to make things happen! A running child has kinetic energy. A ball held up high has potential energy." Practice: Match energy form to example. "What energy conversion happens in a car engine?" Activity: List 5 energy conversions you see in a day (toaster: electrical→heat). |
| 7 | `g4_s_light_adv` | Light: Reflection & Refraction | 1. Light travels in straight lines (rectilinear propagation) 2. Reflection (mirrors, how we see ourselves) 3. Types of mirrors (plane, concave, convex) 4. Refraction (why a pencil looks bent in water) 5. Lenses (convex, concave) and their uses (spectacles, magnifying glass) | Understanding how light reflects and refracts. Introduction to mirrors and lenses. | C/I/CC/IB | Q4 | g3_s_light_shadow | C | C | Script: "Put a pencil in a glass of water. It looks bent! That's refraction -- light changes speed when it goes from air to water." Practice: "Which mirror is used in a car's side mirror?" (convex). "Why does a pool look shallower than it is?" Activity: Mirror, pencil-in-water, and magnifying glass experiments. |
| 8 | `g4_s_sound` | Sound: Vibration & Properties | 1. Sound is produced by vibration 2. Sound needs a medium (travels through solids, liquids, gases) 3. Loud vs soft (volume/amplitude) 4. High vs low (pitch/frequency) 5. Noise pollution (causes, effects, prevention) | Understanding how sound is produced, how it travels, and its properties. | C/I/CC/IB | Q4 | None | C | C | Script: "Touch your throat while humming. Feel that? Those vibrations ARE the sound!" Practice: "Sound cannot travel through ___" (vacuum). "What determines pitch?" Quiz: MCQ on sound properties. Activity: Make a string telephone. Rubber band guitar (different thickness = different pitch). |
| 9 | `g4_s_earth_space` | Earth & Space: Solar System | 1. The Sun: our star 2. The 8 planets (order, basic facts) 3. Earth's rotation (day/night) and revolution (seasons) 4. The Moon: phases and eclipses 5. Stars and constellations | Understanding our solar system, Earth's movements, and why we see different Moon phases. | C/I/CC/IB | Q4 | g2_s_earth_day_night | C | C | Script: "My Very Educated Mother Just Served Us Noodles = Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune!" Practice: Order the planets. "How long does Earth take to go around the Sun?" (1 year). "Why does the Moon look different each night?" Activity: Make a solar system model with balls/fruits of different sizes. |
| 10 | `g4_s_roots_flowers` | Roots & Their Functions | 1. Types of roots (taproot and fibrous root) 2. Functions of roots (anchor, absorb, store) 3. Root vegetables (carrot, radish, potato, beet) 4. How water travels from roots to leaves (transpiration) 5. Plants and soil conservation (roots prevent erosion) | Understanding root systems and their critical role in plant survival. | C/I | Q2 | g3_s_plants_adv | C | C | Script: "A carrot IS a root! The plant stores food in its root so it can grow again next season." Practice: Classify plants by root type. "Which is a taproot: grass or carrot?" Activity: Pull up a small weed carefully -- observe the root system. Taproot or fibrous? BOARD NOTE: Strong CBSE EVS topic. |
| 11 | `g4_s_natural_resources` | Natural Resources & Conservation | 1. Renewable vs non-renewable resources 2. Fossil fuels (coal, petrol, natural gas) 3. Alternative energy (solar, wind, hydroelectric) 4. Deforestation and its effects 5. What individuals can do (reduce, reuse, recycle, conserve) | Understanding natural resources, why they're running out, and sustainable alternatives. | C/I/CC/IB | Q4 | g3_s_environment | C | A | Script: "Fossil fuels took millions of years to form. Once we use them, they're gone. But the sun and wind are free and never run out!" Practice: Classify resources (renewable vs non-renewable). "Why is deforestation bad?" Activity: Energy audit -- how much electricity does your family use? How could you reduce it? |

**Grade 4 Science & EVS: 11 Campaign Topics, ~55 Sub-Topics**

---

### Grade 5 -- Mathematics

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g5_m_large_numbers` | Very Large Numbers (Crores / Billions) | 1. 7-digit, 8-digit, 9-digit numbers 2. Indian system (lakhs, crores) vs International (millions, billions) 3. Reading and writing large numbers in both systems 4. Estimation and rounding 5. Roman numerals (I to C) | Mastering very large numbers. Fluency in both Indian and International systems. Roman numerals. | C/I/CC/IB | Q1 | g4_m_large_numbers | P | C | Script: "In Indian system: 1,00,00,000 = 1 Crore. In International: 10,000,000 = 10 Million. Same number, different names!" Practice: Convert between systems. Write in words. Roman numeral conversion. BOARD NOTE: Roman numerals depth varies by board. |
| 2 | `g5_m_operations` | Operations & BODMAS | 1. Order of operations (BODMAS/PEMDAS) 2. Brackets first, then orders/exponents 3. Division and multiplication (left to right) 4. Addition and subtraction (left to right) 5. Complex multi-step problems | Mastering the order of operations for complex expressions. | C/I/CC/IB | Q1-Q2 | g4_m_multiply_large, g4_m_division_long | P | C | Script: CBSE/ICSE: "BODMAS: Brackets, Orders, Division, Multiplication, Addition, Subtraction." US: "PEMDAS: Parentheses, Exponents, Multiplication, Division, Addition, Subtraction." Practice: "Solve: 3 + 4 × 2 = ?" (11, not 14). "Solve: (3 + 4) × 2 = ?" (14). Multi-step drills. |
| 3 | `g5_m_hcf_lcm` | HCF & LCM | 1. Review factors and multiples 2. Prime factorization (factor tree) 3. HCF (Highest Common Factor) using prime factorization 4. LCM (Lowest Common Multiple) using prime factorization 5. Word problems (when do HCF/LCM apply?) | Finding HCF and LCM using prime factorization. Real-world applications. | C/I/CC/IB | Q2 | g4_m_factors_multiples | P | A | Script: "HCF = the biggest number that divides into both. LCM = the smallest number both divide into." Practice: "Find HCF of 24 and 36." "Find LCM of 12 and 18." Word problems: "Bells ring every 6 and 8 minutes. When do they ring together?" |
| 4 | `g5_m_fractions_all` | Fractions (All Operations) | 1. Review: addition/subtraction of unlike fractions 2. Multiplication of fractions (2/3 × 3/4) 3. Reciprocal and division of fractions 4. Fraction of a quantity (3/5 of 200) 5. Complex word problems with fractions | Complete mastery of fraction operations including multiplication and division. | C/I/CC/IB | Q2-Q3 | g4_m_fractions_ops | P | A | Script: "To multiply fractions: top × top, bottom × bottom. 2/3 × 3/4 = 6/12 = 1/2." "To divide fractions: flip the second and multiply!" Practice: All four operations drills. Word problems. |
| 5 | `g5_m_decimals_ops` | Decimals (All Operations) | 1. Review decimal place value 2. Adding and subtracting decimals 3. Multiplying decimals (by whole numbers and by decimals) 4. Dividing decimals (by whole numbers) 5. Word problems with decimals | Complete mastery of decimal operations. Real-world applications (money, measurement). | C/I/CC/IB | Q2-Q3 | g4_m_decimals | P | C | Script: "Line up the decimal points when adding! 3.45 + 2.6: Write as 3.45 + 2.60." Practice: 4.56 × 3 = ? 12.6 ÷ 4 = ? Word problems using money and measurement. |
| 6 | `g5_m_percentage` | Percentage | 1. Concept of percentage (per hundred, % symbol) 2. Converting fractions to percentages and vice versa 3. Converting decimals to percentages and vice versa 4. Finding percentage of a number (25% of 200 = 50) 5. Real-world applications (discounts, marks, scores) | Understanding percentages as parts of 100. Converting between fractions, decimals, and percentages. | C/I/CC/IB | Q3 | g5_m_fractions_all, g5_m_decimals_ops | P | A | Script: "Percent means 'per 100.' 25% means 25 out of 100. If you scored 45/50, that's 45/50 × 100 = 90%!" Practice: "What is 30% of 150?" "Convert 3/4 to a percentage." "A shirt costs ₹500 with 20% discount. What's the price?" |
| 7 | `g5_m_geometry_angles` | Geometry (Angles & Constructions) | 1. Measuring angles precisely with a protractor 2. Drawing angles of given measure 3. Angle relationships (complementary: sum 90°, supplementary: sum 180°) 4. Angles in a triangle (sum = 180°) 5. Symmetry and reflections (line symmetry, rotational symmetry) | Precise angle measurement, construction, and geometric relationships. | C/I/CC/IB | Q1-Q2 | g4_m_geometry_angles | M | C | Script: "The three angles inside ANY triangle always add up to 180°. Always! Try it -- measure any triangle." Practice: "Two angles of a triangle are 60° and 70°. What's the third?" Draw angles. Identify symmetry. Activity: Measure all angles in 5 triangles (drawn or cut out). Do they add to 180°? |
| 8 | `g5_m_area_volume` | Area & Volume | 1. Review: area of rectangle and square 2. Area of triangle (1/2 × base × height) 3. Area of irregular shapes (grid method) 4. Volume concept (3D space, cubic units) 5. Volume of cuboid (L × W × H) and cube | Calculating areas of triangles and irregular shapes. Introduction to volume. | C/I/CC/IB | Q3-Q4 | g4_m_perimeter_area | P | C | Script: "Area = how much flat space. Volume = how much 3D space (how much water it could hold)." Practice: "Area of triangle: base 10cm, height 6cm = ?" "Volume of cuboid: 5×3×4 = 60 cubic cm." Activity: Measure a box at home. Calculate its volume. |
| 9 | `g5_m_data` | Data Handling (Mean, Median, Mode) | 1. Review bar graphs, line graphs 2. Mean (average) -- when and how to calculate 3. Median (middle value when arranged in order) 4. Mode (most frequent value) 5. Choosing the right measure and interpreting data | Understanding the three measures of central tendency. | C/I/CC/IB | Q4 | g4_m_data_adv | P | A | Script: "Mean = total ÷ count. Median = the middle number (arrange first!). Mode = the most popular number." Practice: "Find mean, median, mode of: 4, 7, 2, 7, 9." Interpret data sets. |
| 10 | `g5_m_ratio` | Ratio & Proportion | 1. Concept of ratio (comparing two quantities: 3:2) 2. Equivalent ratios (3:2 = 6:4 = 9:6) 3. Simplifying ratios 4. Proportion (two equal ratios) 5. Unitary method and word problems | Understanding ratios as a way to compare. Solving proportion problems. | C/I/CC/IB | Q3 | g5_m_fractions_all | P | A | Script: "If a recipe needs 2 cups flour and 1 cup sugar, the ratio is 2:1. For double the recipe? 4:2 = same ratio!" Practice: "Simplify 15:25." "If 5 pens cost ₹40, how much for 8 pens?" (unitary method). |
| 11 | `g5_m_profit_loss` | Profit & Loss (Introduction) | 1. Cost price (CP) and selling price (SP) 2. Profit (SP > CP) and Loss (SP < CP) 3. Calculating profit/loss amount 4. Profit/loss percentage 5. Word problems | Understanding basic commercial math: buying, selling, profit, loss. | I/CC/IB | Q4 | g5_m_percentage | P | A | Script: "If you buy a toy for ₹80 (CP) and sell it for ₹100 (SP), Profit = SP − CP = ₹20." Practice: "CP = ₹500, SP = ₹450. Profit or loss? How much?" Profit % problems. BOARD NOTE: Strong in ICSE. CBSE introduces formally in Grade 6. Common Core addresses in Grade 6. |
| 12 | `g5_m_algebra` | Algebra (Expressions & Equations) | 1. Variables and constants 2. Writing algebraic expressions from word problems 3. Evaluating expressions for given values 4. Solving one-step equations (x + 5 = 12) 5. Solving two-step equations (2x + 3 = 11) | Formal introduction to algebra. Writing, evaluating, and solving equations. | C/I/CC/IB | Q2-Q3 | g4_m_patterns_algebra | P | A | Script: "An expression is a math phrase: 3x + 5. An equation has an equals sign: 3x + 5 = 20. Solve means 'find x'." Practice: "If x = 4, what is 3x − 2?" "Solve: 2x + 6 = 18." Word-to-equation translation. |
| 13 | `g5_m_measurement_adv` | Measurement (Speed, Distance, Time) | 1. Speed = Distance ÷ Time 2. Distance = Speed × Time 3. Time = Distance ÷ Speed 4. Unit conversion (km/hr to m/s) 5. Word problems involving journeys | Understanding the relationship between speed, distance, and time. | I/CC/IB | Q4 | g5_m_operations | P | A | Script: "Speed tells you how fast. If you walk 6 km in 2 hours, your speed is 6 ÷ 2 = 3 km/hr." Practice: "A car travels at 60 km/hr for 3 hours. Distance?" SDT word problems. BOARD NOTE: ICSE/IB cover this in G5. CBSE formally in G6. |

**Grade 5 Math: 13 Campaign Topics, ~65 Sub-Topics**

---

### Grade 5 -- Science & EVS

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g5_s_repro_plants` | Reproduction in Plants | 1. Sexual reproduction (flower → pollination → seed) 2. Parts of a seed (seed coat, cotyledon, embryo) 3. Germination conditions and process 4. Asexual/vegetative propagation (stem cutting, budding, layering) 5. Seed banks and crop diversity | Understanding both sexual and asexual reproduction in plants. | C/I/CC/IB | Q1-Q2 | g4_s_plants_repro | C | C | Script: "Plants can make babies two ways: with seeds (sexual) or by cloning themselves (vegetative). A potato eye growing a new plant = cloning!" Practice: Label seed parts. Match propagation method to plant. "Which part of the seed becomes the root?" Activity: Plant a potato eye, an onion, and a seed. Compare how each grows. |
| 2 | `g5_s_nervous` | Human Body: Nervous System | 1. Brain: the control center (cerebrum, cerebellum, medulla) 2. Spinal cord and nerves 3. Sensory nerves (carry info TO brain) and motor nerves (carry info FROM brain) 4. Reflex actions (knee jerk, pulling hand from hot object) 5. Taking care of the brain (sleep, nutrition, helmet) | Understanding how the brain and nerves control the body. | C/I/CC/IB | Q2 | g4_s_digestive | C | A | Script: "Your brain has 86 billion nerve cells! It processes info faster than any computer." Practice: "What does the cerebellum control?" (balance). Trace the path of a reflex. Activity: Test your reflexes -- have someone drop a ruler, catch it. Measure reaction time. |
| 3 | `g5_s_circulatory` | Human Body: Circulatory System | 1. The heart: structure (4 chambers) and function (pump) 2. Blood: composition (RBC, WBC, platelets, plasma) 3. Blood vessels (arteries, veins, capillaries) 4. Circulation path (heart → lungs → heart → body → heart) 5. Keeping the heart healthy (exercise, diet, no smoking) | Understanding how blood circulates through the body. | C/I/CC/IB | Q2-Q3 | g4_s_digestive | C | A | Script: "Your heart pumps blood through 60,000 miles of blood vessels. If you lined them up, they'd go around Earth twice!" Practice: Label heart diagram. Sequence circulation path. "Which carry blood away from the heart: arteries or veins?" Activity: Check pulse before and after exercise. Why does it speed up? |
| 4 | `g5_s_matter_adv` | Matter: Mixtures & Solutions | 1. Review: states of matter 2. Mixtures (types: solid-solid, solid-liquid, liquid-liquid) 3. Solutions (solute, solvent, saturated solutions) 4. Separating mixtures (filtering, evaporation, sieving, magnetism) 5. Physical vs chemical changes | Understanding mixtures, solutions, and methods of separation. | C/I/CC/IB | Q3 | g3_s_matter | C | C | Script: "A solution is a special mixture where one thing dissolves completely. Sugar in water = solution. Sand in water = mixture (sand doesn't dissolve)." Practice: Classify as mixture or solution. "How would you separate sand from water?" Activity: Make a salt solution. Evaporate the water. What's left? |
| 5 | `g5_s_force_pressure` | Force & Pressure | 1. Review types of force 2. Pressure = Force ÷ Area 3. Why sharp objects cut (small area = more pressure) 4. Atmospheric pressure (we live under a blanket of air) 5. Liquid pressure (why dams are thicker at the bottom) | Understanding pressure as force per unit area. Applications in daily life. | C/I/CC/IB | Q3 | g4_s_force_machines | C | A | Script: "Why does a needle prick but a finger doesn't, with the same force? The needle's tiny point concentrates all the force into a tiny area = huge pressure!" Practice: "If force = 100N and area = 5 sq m, what is pressure?" "Why do camels have wide feet?" Activity: Press a coin flat on clay vs edge-on. Which makes a deeper mark? |
| 6 | `g5_s_simple_machines` | Simple Machines (All 6 Types) | 1. Review: lever, inclined plane, pulley 2. Wheel and axle (doorknob, steering wheel) 3. Screw (spiral inclined plane) 4. Wedge (axe, knife, nail) 5. Compound machines and real-world applications | Complete understanding of all six simple machines and how they make work easier. | C/I/CC/IB | Q3 | g4_s_force_machines | C | C | Script: "A screw is just an inclined plane wrapped around a cylinder! Look at a screw closely -- see the spiral ramp?" Practice: Identify the simple machine in each tool. "Which class of lever is a seesaw?" Activity: Find all 6 types of simple machines at home. |
| 7 | `g5_s_light_adv` | Light: Lenses & Eclipses | 1. Review: reflection and refraction 2. Convex lens (converges light, magnifying glass) 3. Concave lens (diverges light, spectacles for near-sightedness) 4. How we see (light enters eye → lens focuses → retina) 5. Eclipses: solar and lunar (positions of Sun, Earth, Moon) | Deep dive into lenses, human eye, and eclipses. | C/I/CC/IB | Q4 | g4_s_light_adv | C | A | Script: "Solar eclipse: Moon between Earth and Sun (blocks sunlight). Lunar eclipse: Earth between Sun and Moon (blocks moonlight on Moon)." Practice: "Which lens is used in a magnifying glass?" Draw eclipse diagrams. Activity: Use a magnifying glass to focus sunlight on paper (adult supervision!). |
| 8 | `g5_s_electricity` | Electricity & Circuits | 1. What is electricity? (flow of electrons) 2. Simple circuit (battery, wire, bulb, switch) 3. Conductors (metals) vs insulators (rubber, plastic, wood) 4. Series vs parallel circuits (intro) 5. Electrical safety (don't touch with wet hands, don't overload) | Understanding basic electrical circuits, conductors, and insulators. | C/I/CC/IB | Q3-Q4 | g4_s_energy | C | A | Script: "Electricity flows through a circuit like water through a pipe. If there's a break (switch off), it stops." Practice: "Will the bulb light?" (circuit diagrams -- open/closed). Classify materials as conductor/insulator. Activity: Build a simple circuit with a battery, wire, and LED bulb. |
| 9 | `g5_s_magnetism` | Magnetism | 1. What is a magnet? (attracts iron, steel, nickel, cobalt) 2. Poles of a magnet (N and S) 3. Magnetic attraction and repulsion (like repels, unlike attracts) 4. Magnetic compass and Earth's magnetic field 5. Making a magnet (stroking method) and uses | Understanding magnets, poles, attraction/repulsion, and practical uses. | C/I/CC/IB | Q3 | None | C | C | Script: "Every magnet has a North pole and a South pole. North likes South (attract). North hates North (repel). Just like in friendships!" Practice: "What happens when two N poles face each other?" "Which materials are magnetic?" Activity: Test 10 household items -- magnetic or not? Make a compass with a magnetized needle floating on water. |
| 10 | `g5_s_earth_adv` | Earth: Atmosphere & Weather | 1. Layers of atmosphere (troposphere, stratosphere -- simplified) 2. Weather vs climate 3. Water cycle (detailed: transpiration added) 4. Types of clouds (cirrus, cumulus, stratus) 5. Natural disasters intro (earthquakes, floods, cyclones -- basic awareness) | Understanding Earth's atmosphere, weather patterns, and natural phenomena. | C/I/CC/IB | Q4 | g2_s_water_cycle, g2_s_earth_day_night | C | A | Script: "We live at the bottom of an ocean of air! The troposphere (lowest layer) is where all weather happens." Practice: Match cloud type to image. "What's the difference between weather and climate?" Activity: Cloud journal -- observe and draw clouds for 5 days. Identify types. |
| 11 | `g5_s_super_senses` | Animal Senses & Adaptations | 1. Super senses (eagles' vision, dogs' smell, bats' echolocation) 2. Nocturnal animals (why and how) 3. Hibernation and migration 4. Camouflage and mimicry 5. Endangered species and conservation efforts | Exploring extraordinary animal adaptations and why conservation matters. | C/I/CC/IB | Q1 | g3_s_animals_classify | C | C | Script: "Eagles can spot a rabbit from 2 miles away! Dogs can smell things 10,000 times better than you. Nature gave every animal a superpower." Practice: Match animal to adaptation. "Why do bears hibernate?" "Name 3 endangered animals." Activity: Research one endangered animal. Draw it and list 3 facts. BOARD NOTE: Core CBSE EVS Grade 5 topic. |
| 12 | `g5_s_experiments_water` | Experiments with Water | 1. Density: floating and sinking (why do some things float?) 2. Solubility: what dissolves in water? 3. Evaporation: factors that affect speed (heat, wind, surface area) 4. Water purification methods 5. Water as a universal solvent | Hands-on exploration of water's properties through experiments. | C/I/CC/IB | Q2 | g3_s_water_sources, g3_s_matter | A | C | Script: "Things float when they're less dense than water. Wood floats. Iron sinks. But a huge iron SHIP floats -- because of its shape!" Practice: "Will it float or sink?" predictions. "Which dissolves faster in hot water: salt or sand?" Activity: Test 10 objects for floating/sinking. Were your predictions right? |

**Grade 5 Science & EVS: 12 Campaign Topics, ~60 Sub-Topics**

---

## Part 4: Content Generation Specifications

### 4.1 Content Package Per Campaign Topic

For EACH of the ~116 Campaign topics, the following content must be generated:

| Content Type | Quantity | Who Creates | Notes |
|-------------|---------|-------------|-------|
| **Teaching Script** (Day 1) | 1 per topic | AI (Gemini) | Parent-facing. 3-minute read. Includes hook, 3 steps, and common pitfall. |
| **Revised Script** (Day 2) | 1 per topic | AI | Focuses on pitfalls and deeper understanding from Day 1. |
| **Recap Points** (Day 3) | 3 key points | AI | Quick refresher before Arcade/game day. |
| **Practice Pad Questions** | 50 per topic | AI + verification | Day 1: 10, Day 2: 15, Extra pool: 25. Subject-specific input types. |
| **Quiz Questions** | 50 per topic | AI + verification | 15 easy, 20 medium, 15 hard. MCQ + subject-specific types. Includes explanations (child + parent modes). |
| **Legend Quiz** (Day 5) | 20 questions | AI | Mixed difficulty. The "final boss." |
| **Beat the Parent Quiz** | 10 questions | AI | Slightly tricky. Fun for adults. |
| **Daily Spark - Riddles** | 2 per topic | AI | Topic-related brain teasers. |
| **Daily Spark - Fun Facts** | 2 per topic | AI | Engaging, surprising facts. |
| **Daily Spark - Stories** | 2 per topic | AI | Short (3-4 sentences), topic-themed. |
| **Daily Spark - Activities** | 2 per topic | AI | Physical/hands-on. Uses household items only. |
| **Daily Spark - Mini Challenges** | 3 per topic | AI | Quick 3-question burst. |
| **Arcade Game Data** | 20-30 items | AI | Subject-specific: Number Rush (Math), Word Builder (English), Sort It! (Science). |
| **Certificate Title** | 1 per topic | AI | E.g., "Multiplication Master", "Plant Expert" |
| **Fridge Art Asset** | 1 per topic | Designer (human) | SVG coloring page. Not AI-generated -- needs consistent quality. |

**Total content per Campaign topic: ~150 individual content items.**
**Total across all 116 topics: ~17,400 content items.**

This sounds massive, but with AI batch generation:
- 116 API calls (1 per topic, batch prompt generates all content at once)
- ~$1.20 total AI cost for the entire library
- Human effort: verification (~2 min per topic for math, spot-check for others) + fridge art design (116 SVGs)

### 4.2 Subject-Specific Content Guidelines

#### Mathematics Content

- **Practice Pad input:** Numeric keypad (primary). Drag-and-order for some topics (ordering numbers, fractions on number line).
- **Arcade game:** Number Rush (speed-based math problem solving).
- **Question generation rules:**
  - Every question must have ONE unambiguous correct numeric answer.
  - Word problems should use culturally appropriate names and currency (board-specific).
  - Difficulty ladder: Easy (direct computation), Medium (one-step word problem), Hard (multi-step or tricky).
  - Auto-verification: All arithmetic questions verified programmatically before serving.

#### Science & EVS Content

- **Practice Pad input:** MCQ buttons (primary), Drag-to-sort (classification topics), Image labeling (diagram topics).
- **Arcade game:** Sort It! (classification speed game), Label It! (drag labels onto diagram).
- **Question generation rules:**
  - MCQ with 4 options. Distractors should be plausible (common misconceptions).
  - Image-based questions where possible (diagrams of plants, body parts, circuits).
  - For KNOWLEDGE-type topics (community helpers, transport): focus on engaging stories and activities, fewer drill questions.
  - For ACTIVITY-type topics (experiments with water, cooking): generate detailed step-by-step activity instructions instead of heavy question banks.

#### English Content

- **Practice Pad input:** Multiple input types depending on topic:
  - **Fill-in-the-blank:** Sentence displayed with a blank. Child taps correct word from 3-4 options or types it. Best for articles, prepositions, tenses, pronouns.
  - **Correct the sentence:** Sentence with an error displayed. Child identifies and corrects it. Best for grammar rules, punctuation, subject-verb agreement.
  - **Word building / Spelling:** Audio plays a word (TTS). Child arranges scrambled letter tiles to spell it. Best for spelling, phonics, vocabulary.
  - **Drag-to-match:** Match items in two columns (word → meaning, word → synonym/antonym, word → part of speech). Best for vocabulary, parts of speech.
  - **Sentence ordering:** Drag jumbled words into correct sentence order. Best for sentence structure, word order.
  - **Identify / Highlight:** Sentence displayed. Child taps on the word that matches a criterion ("Tap the noun," "Tap the verb"). Best for parts of speech identification.
- **Arcade game:** Word Builder (Wordle-style word construction from clues/definitions). Sentence Fix (speed-fix grammar errors). Spell Rush (hear word → spell fast).
- **Question generation rules:**
  - Grammar questions must follow the specific board's preferred terminology (e.g., CBSE calls them "naming words" before introducing "nouns" formally; ICSE uses "nouns" from Grade 1).
  - Sentences should use grade-appropriate vocabulary. No complex vocabulary in grammar exercises.
  - Spelling words must be sourced from grade-level word lists (not arbitrary).
  - For writing/composition topics: Campaign focuses on scripts + activities (write a paragraph together) rather than heavy question drills. The Teaching Script walks the parent through guiding their child's writing.
  - For comprehension: Generate short age-appropriate passages (3-5 sentences for Grade 1-2, 8-12 sentences for Grade 3-5) with 5 questions each. Passages should be interesting (animals, adventures, fun facts) not dry.
  - Distractors for grammar MCQs should target common mistakes (e.g., "He go to school" vs "He goes to school" -- testing subject-verb agreement).

### 4.3 Board-Specific Prompting

When generating content, the AI prompt includes a board parameter that affects:

```
BOARD_CONTEXT = {
  "CBSE": {
    "terminology": { "carry": "carrying", "borrow": "borrowing", "regroup": "regrouping" },
    "currency": "₹ (Rupees and Paise)",
    "names": ["Ira", "Rohan", "Priya", "Arjun", "Meera", "Karan"],
    "references": "Indian context (festivals, foods, geography)",
    "number_system": "Indian (Lakhs, Crores) with comma: 1,00,000",
    "units": "Metric only"
  },
  "ICSE": {
    "terminology": { "carry": "regrouping", "borrow": "decomposing" },
    "currency": "₹ (Rupees and Paise)",
    "names": ["Ira", "Rohan", "Priya", "Arjun", "Meera", "Karan"],
    "references": "Indian context with occasional international references",
    "number_system": "Both Indian and International systems",
    "units": "Metric only"
  },
  "Common Core": {
    "terminology": { "carry": "regrouping/composing", "borrow": "decomposing" },
    "currency": "$ (Dollars and Cents)",
    "names": ["Emma", "Liam", "Sophia", "Noah", "Olivia", "Ethan"],
    "references": "American context (US geography, holidays, foods)",
    "number_system": "International (Millions, Billions) with comma: 1,000,000",
    "units": "US Customary (inches, feet, pounds) + Metric"
  },
  "IB": {
    "terminology": { "carry": "regrouping", "borrow": "decomposing" },
    "currency": "Varies by school location (default: $ or ₹)",
    "names": "Diverse international names",
    "references": "International/neutral context",
    "number_system": "International (Millions, Billions)",
    "units": "Metric primarily"
  }
}
```

---

## Part 5: English Curriculum (Full Tables)

**Scope:** English language skills -- grammar, vocabulary, spelling, writing mechanics, and comprehension strategies. NOT literature (specific stories/poems/textbooks). Language skills are universal across boards and highly practice-able.

**Note on "Phonics & Reading Readiness":** Included for Grade 1 because it's a critical foundation, but it's inherently more ACTIVITY-based (read aloud, sound out words) than drill-based. Campaign content leans heavily on parent scripts + audio + activities.

---

### Grade 1 -- English

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g1_e_phonics_consonants` | Phonics: Consonant Sounds | 1. Consonant letters and their sounds (b, c, d, f, g...) 2. Initial sounds (what does "ball" start with?) 3. Final sounds (what does "cat" end with?) 4. CVC words (consonant-vowel-consonant: cat, dog, pin) 5. Blending sounds to read simple words | Recognizing consonant sounds, identifying beginning/ending sounds, and blending sounds to decode simple words. | C/I/CC/IB | Q1 | None | P | F | Script: "Point to 'b'. What sound does it make? /b/. Ball starts with /b/. Bat starts with /b/. What else starts with /b/?" Practice: "What sound does 'dog' start with?" Tap the letter. Word building: drag c-a-t to build "cat." Arcade: Spell Rush (hear word → tap first letter). Activity: "I Spy something that starts with /s/..." game. |
| 2 | `g1_e_phonics_vowels` | Phonics: Vowel Sounds | 1. Five vowels (a, e, i, o, u) and their short sounds 2. Short vowel words (hat, hen, pig, pot, cup) 3. Long vowel sounds (a_e as in cake, i_e as in kite) 4. Vowel in the middle (identifying the vowel in CVC words) 5. Reading simple sentences with CVC words | Understanding short and long vowel sounds. Reading simple phonetic words and sentences. | C/I/CC/IB | Q1-Q2 | g1_e_phonics_consonants | P | F | Script: "A E I O U are special letters called vowels. Every word needs at least one! 'Cat' has 'a'. 'Pen' has 'e'." Practice: "Which is the vowel in 'dog'?" Fill in the missing vowel: "c_t → cat." Arcade: Word Builder (build CVC words from sounds). Activity: Vowel hunt -- find 5 objects for each vowel sound at home. |
| 3 | `g1_e_sight_words` | Sight Words & Reading | 1. Common sight words (the, is, and, a, to, in, it, he, she, was) 2. Reading sight words in sentences 3. High-frequency word families (-at: cat, bat, mat; -an: can, man, pan) 4. Reading simple 3-5 word sentences 5. Building reading fluency (simple passages) | Memorizing high-frequency words that can't be sounded out. Building basic reading fluency. | C/I/CC/IB | Q1-Q2 | g1_e_phonics_consonants | P | F | Script: "Some words are 'tricky' -- you just have to remember them! 'The' doesn't follow phonics rules. Say it: THE. See it. Remember it." Practice: Flash sight words -- tap the correct word. Read simple sentences: "The cat is on the mat." Arcade: Sight Word Sprint (match word to image fast). Activity: Sight word treasure hunt -- hide word cards around the house. |
| 4 | `g1_e_nouns` | Naming Words (Nouns) | 1. What is a naming word? (names of people, places, animals, things) 2. People nouns (boy, girl, teacher, mother) 3. Animal nouns (cat, dog, lion, bird) 4. Place nouns (school, park, home, market) 5. Thing nouns (book, pen, ball, chair) | Identifying and classifying nouns as names of people, places, animals, and things. | C/I/CC/IB | Q2 | None | P | F | Script: "A naming word (noun) is the NAME of something. Your name is a noun! 'Table' is a noun. 'Dog' is a noun. Everything has a name!" Practice: "Is 'run' a naming word? No! Is 'tree' a naming word? Yes!" Classify words as noun/not-noun. Identify the noun in a sentence. Arcade: Word Sort (noun vs not-noun). Activity: Point to 10 things in the room. Say their names. Those are all nouns! |
| 5 | `g1_e_verbs` | Action Words (Verbs) | 1. What is an action word? (doing words: run, jump, eat, sleep) 2. Identifying action words in sentences 3. Acting out verbs (TPR: Total Physical Response) 4. Using action words in sentences ("The dog runs.") 5. Matching actions to pictures | Understanding verbs as words that describe actions. Identifying verbs in simple sentences. | C/I/CC/IB | Q3 | g1_e_nouns | P | F | Script: "An action word tells what someone DOES. 'Rohan runs.' What is Rohan doing? Running! 'Run' is the action word." Practice: "What is the action word: 'The bird flies'?" (flies). Match verb to picture. Fill in: "The cat ___ milk." (drinks). Arcade: Verb Charades (show action image → pick the word). Activity: Simon Says with action words. |
| 6 | `g1_e_articles` | Articles: A, An, The | 1. When to use "a" (before consonant sounds) 2. When to use "an" (before vowel sounds) 3. "The" -- the special one (specific things) 4. Practice: filling in a/an/the in sentences 5. Common tricky cases ("an umbrella" but "a uniform") | Understanding when to use "a," "an," and "the" before nouns. | C/I/CC/IB | Q2-Q3 | g1_e_nouns | P | F | Script: "Use 'an' before vowel SOUNDS: an apple, an egg, an ice cream. Use 'a' before consonant SOUNDS: a ball, a cat. Tricky: 'a uniform' because 'u' sounds like 'yu' here!" Practice: Fill in a/an: "___ orange" (an), "___ book" (a). Sentence completion. Arcade: Article Rush (a or an? speed game). |
| 7 | `g1_e_pronouns_intro` | Pronouns: I, He, She, It, We, They | 1. What is a pronoun? (a word used instead of a name) 2. I, He, She (singular people) 3. It (animals and things) 4. We, They (groups) 5. Replacing nouns with pronouns in sentences | Using basic pronouns to replace nouns. Understanding which pronoun fits which situation. | C/I/CC/IB | Q3 | g1_e_nouns | P | F | Script: "'Ira is happy.' We can also say 'She is happy.' 'She' is a pronoun -- it replaces 'Ira.'" Practice: "Replace the underlined word: 'The dog is big.' → ___ is big." (It). Fill in he/she/it/they. |
| 8 | `g1_e_this_that` | This, That, These, Those | 1. This (singular, near) and That (singular, far) 2. These (plural, near) and Those (plural, far) 3. Using this/that/these/those with nouns 4. Practice in sentences 5. Pointing and describing (near vs far, one vs many) | Understanding demonstrative pronouns based on distance and number. | C/I/CC/IB | Q3 | g1_e_pronouns_intro | P | F | Script: "THIS book (holding it) -- near and one. THAT tree (pointing far) -- far and one. THESE pens (near, many). THOSE birds (far, many)." Practice: Fill in this/that/these/those. Image-based: "__ are apples" (pointing to nearby group → These). |
| 9 | `g1_e_singular_plural` | One and Many (Singular & Plural) | 1. One = singular, many = plural 2. Adding 's' (cat → cats, book → books) 3. Adding 'es' (box → boxes, bus → buses, dish → dishes) 4. Irregular plurals (man → men, child → children, tooth → teeth) 5. Practice and sorting | Forming plurals by adding 's' or 'es'. Recognizing common irregular plurals. | C/I/CC/IB | Q2-Q3 | g1_e_nouns | P | F | Script: "One cat, two cats. Just add 's'! But one box, two boxes -- add 'es' when the word ends in x, s, sh, ch." Practice: "Write the plural: bus → ?" (buses). "fox → ?" (foxes). "child → ?" (children). Arcade: Plural Rush (flash singular → type/tap plural). |
| 10 | `g1_e_sentences` | Simple Sentences | 1. What is a sentence? (a group of words that makes sense, starts with capital, ends with full stop) 2. Parts of a sentence (who/what + does/is what) 3. Writing simple sentences (Subject + Verb: "Birds fly.") 4. Adding details (Subject + Verb + Object: "Ira reads a book.") 5. Reading and writing 5 simple sentences | Understanding sentence structure. Writing simple complete sentences with correct capitalization and punctuation. | C/I/CC/IB | Q3-Q4 | g1_e_nouns, g1_e_verbs | M | F | Script: "A sentence needs a DOER (who?) and a DOING (what?). 'Ira runs.' Who? Ira. What does she do? Runs. That's a sentence!" Practice: Arrange jumbled words: "reads / Ira / books" → "Ira reads books." Fix the sentence (add capital, full stop). Identify if it's a sentence or not. Activity: Write 5 sentences about your family. |
| 11 | `g1_e_opposites` | Opposites (Antonyms) | 1. What are opposites? (big/small, hot/cold) 2. Common opposites for adjectives (tall/short, fast/slow, happy/sad) 3. Common opposites for actions (come/go, open/close, sit/stand) 4. Using opposites in sentences 5. Matching and memory games | Learning common antonym pairs. Using opposites in context. | C/I/CC/IB | Q4 | None | K | F | Script: "Opposite means totally different! Big ↔ Small. Up ↔ Down. Happy ↔ Sad. What is the opposite of hot?" Practice: Match opposites (drag-to-match). Fill in: "An elephant is big. An ant is ___." Arcade: Opposite Match (speed matching game). Activity: Opposites hunt -- find pairs at home (big spoon / small spoon, soft pillow / hard table). |

**Grade 1 English: 11 Campaign Topics, ~55 Sub-Topics**

---

### Grade 2 -- English

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g2_e_nouns_types` | Nouns: Common & Proper | 1. Review: what is a noun 2. Common nouns (girl, city, dog) 3. Proper nouns (Ira, Delhi, Buddy) -- always start with capital 4. Sorting common vs proper nouns 5. Using proper nouns correctly in sentences (capitalization) | Distinguishing between common and proper nouns. Capitalizing proper nouns. | C/I/CC/IB | Q1 | g1_e_nouns | P | F | Script: "'Dog' is a common noun -- any dog. 'Buddy' is a proper noun -- YOUR dog's specific name. Proper nouns always start with a CAPITAL letter!" Practice: Classify: "Is 'river' common or proper? Is 'Ganga' common or proper?" Fix capitalization. Arcade: Word Sort (common vs proper). |
| 2 | `g2_e_gender` | Gender: He / She / It | 1. Masculine nouns (boy, father, king, rooster) 2. Feminine nouns (girl, mother, queen, hen) 3. Common gender (teacher, doctor, child, friend) 4. Neuter gender (table, book, pen) 5. Matching gender pairs and using correct pronouns | Understanding grammatical gender. Pairing masculine/feminine forms. Using correct pronouns. | C/I/CC/IB | Q1-Q2 | g1_e_pronouns_intro | P | F | Script: "Boy → He. Girl → She. Book → It. Some words have pairs: king/queen, brother/sister, lion/lioness." Practice: "What is the feminine of 'prince'?" (princess). "He/She: 'My mother ___ a teacher.'" (She is). Arcade: Gender Match (pair masculine-feminine). |
| 3 | `g2_e_adjectives` | Describing Words (Adjectives) | 1. What is an adjective? (a word that describes a noun) 2. Adjectives for size, color, shape (big, red, round) 3. Adjectives for quality and feeling (beautiful, happy, brave) 4. Adjectives for number and quantity (two, many, some, few) 5. Using adjectives in sentences to make them interesting | Identifying and using adjectives to describe nouns. Making sentences more vivid. | C/I/CC/IB | Q2 | g1_e_nouns | P | F | Script: "'A dog' is boring. 'A big, brown, fluffy dog' is interesting! The extra words (big, brown, fluffy) are adjectives -- they describe the noun." Practice: "Pick the adjective: 'The tall boy runs.'" (tall). Add adjectives: "The ___ cat sat on the ___ mat." Arcade: Sentence Boost (add adjectives to plain sentences). |
| 4 | `g2_e_pronouns_full` | Pronouns (Complete) | 1. Review: I, he, she, it, we, they (subject pronouns) 2. Object pronouns: me, him, her, it, us, them 3. Possessive pronouns: my/mine, his, her/hers, its, our/ours, their/theirs 4. Using the right pronoun in sentences 5. Pronoun-noun agreement (he = one boy, they = many) | Mastering all basic pronouns: subject, object, and possessive forms. | C/I/CC/IB | Q2-Q3 | g1_e_pronouns_intro | P | C | Script: "'I gave HIM the book.' 'Him' is an object pronoun -- it receives the action. 'I' does the action, 'him' receives it." Practice: Fill in: "Give the ball to ___." (him/her/them). "This is ___ book." (my/her/their). Replace noun with pronoun. |
| 5 | `g2_e_prepositions` | Prepositions: In, On, Under, Behind, Between | 1. What is a preposition? (a word that shows position/location) 2. Place prepositions: in, on, under, behind, in front of, between, beside, above, below 3. Time prepositions: at (time), on (day), in (month/year) 4. Using prepositions in sentences 5. Describing pictures using prepositions | Understanding and using prepositions of place and time. | C/I/CC/IB | Q2 | g1_e_sentences | P | F | Script: "A preposition tells you WHERE something is. The cat is ON the table. The ball is UNDER the bed. ON and UNDER are prepositions." Practice: Look at picture: "Where is the cat?" Fill in: "The book is ___ the shelf." (on). Describe a scene using prepositions. Activity: Preposition scavenger hunt -- put a toy IN the box, ON the chair, UNDER the table. |
| 6 | `g2_e_tenses_intro` | Simple Tenses (Introduction) | 1. Present tense (happening now): "I eat." 2. Past tense (already happened): "I ate." 3. Future tense (will happen): "I will eat." 4. Adding -ed for regular past tense (walk → walked) 5. Common irregular past tense (go → went, eat → ate, come → came) | Understanding time in language. Using simple present, past, and future tense. | C/I/CC/IB | Q3 | g1_e_verbs | P | C | Script: "NOW = present: 'I play.' BEFORE = past: 'I played.' LATER = future: 'I will play.' Easy trick for regular past: just add -ed!" Practice: "Change to past: 'I walk' → 'I ___'" (walked). "Irregular: 'I go' → 'I ___'" (went). Fill in correct tense. Arcade: Tense Transformer (flash sentence → tap correct tense). |
| 7 | `g2_e_conjunctions` | Joining Words: And, But, Or, Because | 1. What is a conjunction? (a word that joins sentences/ideas) 2. "And" -- adding information 3. "But" -- contrasting information 4. "Or" -- giving choices 5. "Because" -- giving reasons | Connecting ideas using basic conjunctions to make compound sentences. | C/I/CC/IB | Q3 | g1_e_sentences | P | C | Script: "'I like cats AND dogs.' AND joins two similar things. 'I like cats BUT not dogs.' BUT shows a difference. 'Do you want tea OR coffee?' OR gives a choice." Practice: Join sentences: "I was hungry. I ate lunch." → "I was hungry SO I ate lunch." Fill in and/but/or/because. |
| 8 | `g2_e_punctuation` | Punctuation: Capital Letters, Full Stop, Question Mark | 1. Capital letters: start of sentence, proper nouns, "I" 2. Full stop (.) -- end of a telling sentence 3. Question mark (?) -- end of an asking sentence 4. Exclamation mark (!) -- excitement or surprise 5. Comma in lists (I like apples, bananas, and grapes) | Using correct punctuation marks and capitalization rules. | C/I/CC/IB | Q3-Q4 | g1_e_sentences | P | C | Script: "Every sentence starts with a CAPITAL letter. If it tells something: full stop. If it asks something: question mark. If it's excited: exclamation mark!" Practice: Add punctuation: "where is the cat" → "Where is the cat?" Fix errors in sentences. Identify sentence types by punctuation. |
| 9 | `g2_e_vocabulary` | Vocabulary Building: Synonyms & Antonyms | 1. Review: opposites (antonyms) 2. Same-meaning words (synonyms): big/large, happy/glad, fast/quick 3. Word families: words from the same root 4. Using context clues to guess word meanings 5. Expanding vocabulary through reading | Building vocabulary through synonym-antonym pairs and context clues. | C/I/CC/IB | Q2-Q3 | g1_e_opposites | P | C | Script: "Synonyms are friends -- they mean the same thing! Big = Large = Huge. Antonyms are enemies -- they mean the opposite! Big ↔ Small." Practice: Match synonyms. Match antonyms. "Pick the synonym of 'happy': sad / glad / bad" (glad). Arcade: Synonym-Antonym Match (speed game). |
| 10 | `g2_e_composition` | Picture Composition & Sentence Writing | 1. Looking at a picture and describing what you see 2. Writing 3-5 sentences about a picture 3. Using describing words (adjectives) to make it interesting 4. Maintaining sequence (first, then, next, finally) 5. Writing about "My Family" / "My Pet" / "My School" | Structured writing: describing pictures and writing short compositions on familiar topics. | C/I/CC/IB | Q4 | g2_e_adjectives, g2_e_tenses_intro | M | C | Script: "Look at the picture carefully. WHO is in it? WHERE are they? WHAT are they doing? HOW do they feel? Now write one sentence for each answer!" Practice: Given a picture, arrange sentences in order. Fill in blanks for a guided paragraph. Activity: Pick a family photo. Write 5 sentences about it together. |
| 11 | `g2_e_spelling` | Spelling Patterns & Word Families | 1. CVC word families (-at, -en, -ig, -ot, -ug) 2. Consonant blends (bl, cr, fl, gr, st, tr) 3. Consonant digraphs (ch, sh, th, wh) 4. Long vowel spelling patterns (a_e, i_e, o_e, ee, ea, oo) 5. Spelling practice and dictation | Mastering common spelling patterns. Building decoding and encoding skills. | C/I/CC/IB | Q1-Q2 | g1_e_phonics_vowels | P | F | Script: "Words that rhyme often have the same spelling pattern. Cat, bat, mat, hat -- they all end in '-at'. If you can spell 'cat', you can spell 'mat'!" Practice: "Spell the word you hear" (audio → letter tiles). Word family drills. "Fill in the blend: __ain" (tr → train). Arcade: Spell Rush. |

**Grade 2 English: 11 Campaign Topics, ~55 Sub-Topics**

---

### Grade 3 -- English

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g3_e_nouns_adv` | Nouns: Collective, Abstract, Material | 1. Review common and proper nouns 2. Collective nouns (a flock of birds, a bunch of grapes, a pack of wolves) 3. Abstract nouns (happiness, bravery, honesty -- things you can't touch) 4. Material nouns (gold, wood, cotton -- what things are made of) 5. Mixed noun classification | Expanding noun knowledge beyond common/proper to include collective, abstract, and material nouns. | C/I/CC/IB | Q1 | g2_e_nouns_types | P | C | Script: "A collective noun names a GROUP. A 'flock' of birds. A 'team' of players. A 'bunch' of bananas. Isn't English fun?" Practice: "What is a group of fish called?" (school). Classify nouns by type. Fill in collective nouns. Arcade: Noun Sort (4 categories). |
| 2 | `g3_e_tenses_simple` | Simple Tenses (Mastery) | 1. Simple present tense (habits and facts: "The sun rises." "I brush daily.") 2. Simple past tense (regular -ed and irregular forms) 3. Simple future tense (will + verb, shall + verb) 4. Negative sentences in all three tenses 5. Questions in all three tenses | Complete mastery of the three simple tenses, including negatives and questions. | C/I/CC/IB | Q2 | g2_e_tenses_intro | P | C | Script: "Simple Present for habits: 'I eat breakfast daily.' Simple Past for done actions: 'I ate breakfast.' Simple Future for plans: 'I will eat breakfast.'" Practice: Convert between tenses. "Change to past: 'She writes a letter.'" → "She wrote a letter." Fix tense errors. Fill-in drills. |
| 3 | `g3_e_tenses_continuous` | Continuous Tenses (Introduction) | 1. What is "continuous"? (action happening right now or was happening) 2. Present continuous (is/am/are + verb-ing: "I am running.") 3. Past continuous (was/were + verb-ing: "I was running.") 4. Forming the -ing form (run → running, make → making, sit → sitting) 5. Simple vs Continuous (difference in meaning) | Understanding the continuous (progressive) aspect. Forming present and past continuous tenses. | C/I/CC/IB | Q3 | g3_e_tenses_simple | P | C | Script: "Simple present: 'I read books' (habit). Present continuous: 'I am reading a book' (right now!). Hear the difference?" Practice: "Change to present continuous: 'She plays' → 'She is playing.'" -ing spelling rules (drop e, double consonant). Identify which tense. |
| 4 | `g3_e_prepositions_adv` | Prepositions (Advanced) | 1. Review: place prepositions 2. Time prepositions: at (specific time), on (days/dates), in (months/years/seasons) 3. Movement prepositions: to, from, into, out of, across, through, along 4. Other prepositions: with, without, about, for, by 5. Prepositional phrases in sentences | Expanding preposition knowledge to include time, movement, and abstract prepositions. | C/I/CC/IB | Q2 | g2_e_prepositions | P | C | Script: "AT a time (at 5 o'clock). ON a day (on Monday). IN a month (in January). AT for specific, ON for days, IN for long periods!" Practice: Fill in at/on/in. "The movie starts ___ 7 PM." (at). "My birthday is ___ March." (in). Movement prepositions with images. |
| 5 | `g3_e_sentence_types` | Types of Sentences | 1. Assertive/Declarative (states a fact: "The sky is blue.") 2. Interrogative (asks a question: "Is the sky blue?") 3. Imperative (gives a command: "Close the door.") 4. Exclamatory (expresses strong feeling: "What a beautiful day!") 5. Identifying and converting between types | Classifying sentences by purpose and converting between types. | C/I/CC/IB | Q2-Q3 | g2_e_punctuation | P | C | Script: "Telling → Declarative (.). Asking → Interrogative (?). Ordering → Imperative (. or !). Feeling → Exclamatory (!)" Practice: Classify sentences. Convert: "The door is open." → "Is the door open?" (declarative → interrogative). Add correct punctuation. |
| 6 | `g3_e_adverbs` | Adverbs | 1. What is an adverb? (describes how, when, where an action happens) 2. Adverbs of manner (slowly, quickly, carefully -- often end in -ly) 3. Adverbs of time (now, then, yesterday, soon, always) 4. Adverbs of place (here, there, everywhere, outside) 5. Using adverbs to improve sentences | Understanding and using adverbs to modify verbs. Differentiating from adjectives. | C/I/CC/IB | Q3 | g2_e_adjectives | P | C | Script: "An adjective describes a NOUN (the fast car). An adverb describes a VERB (the car moved fast-LY). Adjective → noun. Adverb → verb." Practice: "Pick the adverb: 'She sings beautifully.'" (beautifully). Convert adjective to adverb: "slow → ?" (slowly). Add adverbs to sentences. |
| 7 | `g3_e_subject_predicate` | Subject & Predicate | 1. Subject: WHO or WHAT the sentence is about 2. Predicate: what the subject DOES or IS 3. Identifying subject and predicate in sentences 4. Complete subject vs simple subject 5. Writing sentences with clear subjects and predicates | Understanding the two fundamental parts of every sentence. | C/I/CC/IB | Q2 | g1_e_sentences | P | C | Script: "Every sentence has two parts. 'The big brown dog / chased the cat.' WHO? The big brown dog (subject). DID WHAT? Chased the cat (predicate)." Practice: Draw a line between subject and predicate. Identify the simple subject. Build sentences from subject + predicate fragments. |
| 8 | `g3_e_comprehension` | Reading Comprehension | 1. Reading a short passage carefully 2. Answering factual questions (who, what, where, when) 3. Answering inferential questions (why, how) 4. Finding the main idea 5. Vocabulary from context (guessing word meanings) | Developing comprehension skills: extracting information, making inferences, identifying main ideas. | C/I/CC/IB | Q3-Q4 | g1_e_sight_words | M | C | Script: "Read the passage TWICE. First time: understand the story. Second time: look for answers." Practice: Short passage (5-8 sentences) + 5 questions. Mix of factual ("Where did Ira go?") and inferential ("Why was Ira happy?"). Passages about animals, adventures, daily life. |
| 9 | `g3_e_paragraph_writing` | Paragraph Writing | 1. What is a paragraph? (group of sentences about one idea) 2. Topic sentence (the main idea sentence) 3. Supporting sentences (details, examples) 4. Closing sentence (wrapping up) 5. Writing a paragraph with a given topic sentence | Learning the structure of a paragraph. Writing organized, coherent paragraphs. | C/I/CC/IB | Q4 | g2_e_composition | M | C | Script: "A paragraph is like a burger. Top bun = topic sentence. Filling = supporting details (2-3 sentences). Bottom bun = closing sentence." Practice: Arrange sentences into a correct paragraph. Identify the topic sentence. Given a topic sentence, add 2 supporting sentences. Activity: Write a paragraph about "My favorite food" using the burger method. |
| 10 | `g3_e_spelling_adv` | Spelling: Silent Letters & Tricky Words | 1. Silent 'e' rule (make → making, hope → hoping) 2. Silent letters (k in knife, w in write, b in climb, g in gnaw) 3. Commonly misspelled words (because, friend, beautiful, Wednesday) 4. Homophones (there/their/they're, to/too/two, your/you're) 5. Spelling strategies (look-say-cover-write-check) | Mastering tricky spelling patterns including silent letters and homophones. | C/I/CC/IB | Q2-Q3 | g2_e_spelling | P | C | Script: "Some letters are silent guests -- they sit in the word but don't make a sound! Knife: the K is silent. Write: the W is silent." Practice: Spell words with silent letters. "Choose: there/their/they're -- '___ going to the park.'" (They're). Arcade: Spell Rush (advanced). |
| 11 | `g3_e_apostrophe` | Apostrophes: Contractions & Possession | 1. Contractions (don't = do not, I'm = I am, she's = she is, they're = they are) 2. Forming contractions correctly 3. Possessive nouns (Ira's book, the dog's bone) 4. Singular vs plural possessives (the boy's / the boys') 5. Contractions vs possessives (it's vs its, who's vs whose) | Understanding the two uses of apostrophes: contracting words and showing possession. | C/I/CC/IB | Q3-Q4 | g2_e_punctuation | P | C | Script: "Apostrophe has TWO jobs. Job 1: Squishing words together (do + not = don't). Job 2: Showing ownership (Ira's book = the book belongs to Ira)." Practice: Expand contractions: "don't → ?" (do not). Form possessives: "The toy of the girl → ?" (the girl's toy). Tricky: "it's vs its." |

**Grade 3 English: 11 Campaign Topics, ~55 Sub-Topics**

---

### Grade 4 -- English

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g4_e_tenses_perfect` | Perfect Tenses | 1. Present perfect (has/have + past participle: "I have eaten.") 2. Past perfect (had + past participle: "I had eaten.") 3. Future perfect (will have + past participle: "I will have eaten.") 4. Forming past participles (regular: -ed, irregular: eaten, written, gone) 5. Using perfect tenses correctly in context | Understanding and using all three perfect tenses. Mastering regular and irregular past participles. | C/I/CC/IB | Q2 | g3_e_tenses_continuous | P | C | Script: "Present perfect = DONE, relevant NOW. 'I have finished my homework' (done, and it matters now). Past perfect = DONE BEFORE something else. 'I had finished before Mom came.'" Practice: Fill in has/have/had. Convert to perfect tense. Irregular participles drill. |
| 2 | `g4_e_sub_verb_agreement` | Subject-Verb Agreement | 1. Singular subjects → singular verbs ("He runs." not "He run.") 2. Plural subjects → plural verbs ("They run." not "They runs.") 3. Tricky subjects (everyone, nobody, each, some, many) 4. Compound subjects (Ira and Rohan play...) 5. Agreement with "there is" / "there are" | Ensuring the verb matches the subject in number. Handling tricky cases. | C/I/CC/IB | Q2-Q3 | g3_e_tenses_simple | P | C | Script: "ONE person = add 's' to the verb. 'She runs.' MANY people = no 's'. 'They run.' Easy rule: one S only -- either on the subject OR the verb!" Practice: "Choose: 'The children (play/plays) in the park.'" (play). Fix errors: "She go to school." → "She goes to school." |
| 3 | `g4_e_sentence_structure` | Sentence Structure: Simple, Compound, Complex | 1. Simple sentences (one subject, one verb) 2. Compound sentences (two independent clauses joined by and/but/or/so) 3. Complex sentences (one main clause + one dependent clause with because/when/if/although) 4. Combining short sentences into compound/complex 5. Varying sentence structure in writing | Understanding different sentence structures and using variety for better writing. | C/I/CC/IB | Q3 | g3_e_sentence_types, g3_e_subject_predicate | P | C | Script: "Simple: 'The dog barked.' Compound: 'The dog barked AND the cat ran.' Complex: 'The dog barked BECAUSE it saw a cat.' See how joining words make sentences more interesting?" Practice: Classify as simple/compound/complex. Combine: "It rained. We stayed inside." → "We stayed inside because it rained." |
| 4 | `g4_e_direct_indirect` | Direct & Indirect Speech | 1. What is direct speech? (exact words in quotation marks: Ira said, "I am happy.") 2. What is indirect speech? (reported words: Ira said that she was happy.) 3. Rules for conversion: tense changes (am→was, is→was, will→would) 4. Rules for conversion: pronoun changes (I→she/he, my→her/his) 5. Practice converting both ways | Understanding and converting between direct and indirect (reported) speech. | C/I/CC/IB | Q3-Q4 | g4_e_tenses_perfect | P | A | Script: "Direct: She said, 'I am tired.' (exact words, in quotes). Indirect: She said that she was tired. (reported, no quotes, tense goes back one step)." Practice: Convert direct → indirect and vice versa. "He said, 'I will come tomorrow.'" → "He said that he would come the next day." |
| 5 | `g4_e_modals` | Modal Verbs: Can, May, Must, Should | 1. Can / Cannot (ability: "I can swim.") 2. May / May not (permission: "May I go?") 3. Must / Must not (strong obligation: "You must wear a seatbelt.") 4. Should / Should not (advice: "You should eat vegetables.") 5. Would, Could, Might (possibility, polite requests) | Understanding and using modal verbs for ability, permission, obligation, and advice. | C/I/CC/IB | Q2 | g1_e_verbs | P | C | Script: "CAN = I am able to. MAY = am I allowed to? MUST = I have to. SHOULD = it's a good idea to. 'Can I go?' means 'Am I able?' 'May I go?' means 'Am I allowed?'" Practice: Fill in the right modal. "You ___ not run in the corridor." (must/should). Situation-based MCQs. |
| 6 | `g4_e_active_passive_intro` | Active & Passive Voice (Introduction) | 1. Active voice: subject DOES the action ("The dog chased the cat.") 2. Passive voice: subject RECEIVES the action ("The cat was chased by the dog.") 3. Identifying active vs passive sentences 4. Converting simple sentences: active → passive 5. When to use passive voice (the doer is unknown or unimportant) | Introduction to voice. Identifying and converting between active and passive constructions. | I/CC/IB | Q3-Q4 | g4_e_sub_verb_agreement | P | A | Script: "Active: The subject ACTS. 'Ira ate the cake.' Passive: The subject is acted UPON. 'The cake was eaten by Ira.' Flip the sentence!" Practice: Identify active/passive. Convert: "The teacher praised the student." → "The student was praised by the teacher." BOARD NOTE: ICSE introduces in G4; CBSE formally in G5. Universal topic covers both timelines. |
| 7 | `g4_e_letter_writing` | Letter Writing (Informal) | 1. Format of an informal letter (date, greeting, body, closing, signature) 2. Writing a letter to a friend 3. Writing a letter to a family member 4. Including feelings and details (not just facts) 5. Practice: complete letter for a given situation | Learning the format and style of informal/friendly letters. | C/I/CC/IB | Q3 | g3_e_paragraph_writing | M | C | Script: "An informal letter is like talking to a friend on paper. Start with 'Dear [Name],' share your news, ask about them, end with 'Your friend, [Name].'" Practice: Arrange parts of a letter in order. Fill in blanks in a letter template. Activity: Write a real letter to a grandparent or friend. Mail it! |
| 8 | `g4_e_vocabulary_adv` | Vocabulary: Prefixes, Suffixes & Word Formation | 1. Prefixes: un- (unhappy), re- (redo), dis- (disagree), pre- (preview), mis- (misunderstand) 2. Suffixes: -ful (beautiful), -less (careless), -ness (kindness), -ly (quickly), -ment (enjoyment) 3. How prefixes/suffixes change word meaning 4. Root words + affixes = new words 5. Using context + word parts to decode unfamiliar words | Understanding how prefixes and suffixes modify word meaning. Building vocabulary through word formation. | C/I/CC/IB | Q2 | g2_e_vocabulary | P | C | Script: "UN- means NOT. Happy → UNhappy. RE- means AGAIN. Do → REdo. If you know the prefix, you can guess the word!" Practice: "What does 'unkind' mean?" Add prefix to change meaning. "Add -ful to 'care' → ?" (careful). Decode: "What might 'prehistoric' mean?" (pre = before, historic = history → before history). |
| 9 | `g4_e_punctuation_adv` | Advanced Punctuation | 1. Comma rules: lists, joining sentences, after introductory words ("However, ...") 2. Quotation marks for direct speech 3. Colon and semicolon (introduction) 4. Hyphen in compound words (well-known, ice-cream) 5. Applying all punctuation in paragraphs | Mastering comma usage, quotation marks, and introduction to colons and semicolons. | C/I/CC/IB | Q3 | g2_e_punctuation, g4_e_direct_indirect | P | C | Script: "Commas are like speed bumps -- they slow you down but don't stop you. 'I like apples, bananas, and grapes.' Pause at each comma!" Practice: Add commas to sentences. Add quotation marks to direct speech. Identify punctuation errors. |
| 10 | `g4_e_comprehension_adv` | Reading Comprehension (Advanced) | 1. Reading longer passages (10-15 sentences) 2. Identifying main idea and supporting details 3. Making inferences ("reading between the lines") 4. Understanding cause and effect in a passage 5. Summarizing a passage in own words | Developing deeper comprehension: inference, cause-effect, and summarization skills. | C/I/CC/IB | Q3-Q4 | g3_e_comprehension | M | C | Script: "Sometimes the answer isn't written directly -- you have to be a detective! If the passage says 'She grabbed her umbrella,' you can INFER it was raining even if it doesn't say so." Practice: Passage + 5 questions (factual + inferential + main idea + vocabulary). 2 passages per session. |
| 11 | `g4_e_idioms` | Idioms & Phrases | 1. What is an idiom? (a phrase that means something different from its literal words) 2. Common idioms: "raining cats and dogs," "break the ice," "a piece of cake" 3. Understanding idioms in context 4. Proverbs: "A stitch in time saves nine," "Don't cry over spilt milk" 5. Using idioms and proverbs in writing | Learning common English idioms and proverbs. Understanding figurative vs literal language. | C/I/CC/IB | Q4 | g3_e_comprehension | K | C | Script: "'It's raining cats and dogs' does NOT mean animals are falling from the sky! It means it's raining VERY HARD. Idioms are phrases with a hidden meaning." Practice: Match idiom to meaning. "What does 'break the ice' mean?" MCQ. Use idioms in sentences. Activity: Illustrate 3 idioms literally (draw cats and dogs falling from sky!) vs what they actually mean. |

**Grade 4 English: 11 Campaign Topics, ~55 Sub-Topics**

---

### Grade 5 -- English

| # | ID | Topic | Sub-Topics (5-Day Progression) | Description | Boards | Qtr | Prereqs | Type | Diff | Content Notes |
|---|-----|-------|-------------------------------|-------------|--------|-----|---------|------|------|---------------|
| 1 | `g5_e_tenses_all` | Tenses: Complete Review & Mastery | 1. All 12 tenses overview (simple, continuous, perfect × past, present, future) 2. Present tenses: simple vs continuous vs perfect 3. Past tenses: simple vs continuous vs perfect 4. Future tenses: simple vs continuous vs perfect 5. Mixed tense exercises and error correction | Complete mastery of all 12 tenses. Knowing which tense to use in context. | C/I/CC/IB | Q1-Q2 | g4_e_tenses_perfect, g3_e_tenses_continuous | P | A | Script: "English has 12 tenses -- 4 types (simple, continuous, perfect, perfect continuous) × 3 times (past, present, future). Sounds scary, but you already know most of them!" Practice: Identify the tense. Fill in the correct form. Convert between tenses. Error correction: "She has went to school." → "She has gone to school." |
| 2 | `g5_e_active_passive` | Active & Passive Voice (Complete) | 1. Review: active vs passive identification 2. Conversion across all tenses (present, past, future) 3. Passive with modals (can be done, should be done) 4. When passive is appropriate (focus on action, not doer) 5. Mixed exercises and paragraph conversion | Full mastery of active-passive conversion across all common tenses and modal constructions. | C/I/CC/IB | Q2 | g4_e_active_passive_intro | P | A | Script: "Active → Passive formula: Object becomes subject. Verb becomes 'be + past participle'. Subject becomes 'by + agent.'" Practice: Convert: "They will build a house." → "A house will be built by them." "The letter can be posted." → "They can post the letter." |
| 3 | `g5_e_reported_speech` | Reported Speech (Complete) | 1. Review: direct → indirect speech basics 2. Tense backshift rules (all tenses) 3. Changes in pronouns, time words, place words (here→there, today→that day, ago→before) 4. Reporting questions: "Where do you live?" → She asked where I lived. 5. Reporting commands: "Sit down!" → She told me to sit down. | Complete mastery of reported speech including questions, commands, and all tense changes. | C/I/CC/IB | Q2-Q3 | g4_e_direct_indirect | P | A | Script: "For questions in reported speech: remove the question mark, use 'asked' instead of 'said,' and change the word order. 'Where are you going?' → She asked where I was going." Practice: Convert all types: statements, questions, commands. Mixed drills. |
| 4 | `g5_e_clauses` | Clauses & Phrases | 1. What is a clause? (group of words with a subject and verb) 2. Main (independent) clause vs subordinate (dependent) clause 3. Noun clauses, adjective clauses, adverb clauses (intro) 4. What is a phrase? (group of words WITHOUT a subject-verb pair) 5. Identifying clauses and phrases in complex sentences | Understanding the building blocks of complex sentences: clauses and phrases. | C/I/CC/IB | Q3 | g4_e_sentence_structure | P | A | Script: "A clause has a subject + verb: 'when it rained' (subject=it, verb=rained). A phrase doesn't: 'in the morning' (no subject, no verb). Clauses can be sentences; phrases can't." Practice: Identify clause vs phrase. Identify main vs subordinate clause. "Because she was tired" -- clause or phrase? (clause). |
| 5 | `g5_e_conjunctions_adv` | Advanced Conjunctions & Connectors | 1. Review: and, but, or, because, so 2. Subordinating conjunctions: although, unless, while, since, until, even though 3. Correlative conjunctions: either...or, neither...nor, both...and, not only...but also 4. Transition words: however, therefore, moreover, meanwhile, furthermore 5. Using connectors to improve paragraph flow | Mastering advanced connecting words for sophisticated sentence and paragraph construction. | C/I/CC/IB | Q3 | g2_e_conjunctions, g4_e_sentence_structure | P | A | Script: "'Although' means 'even though' -- it shows surprise. 'Although it rained, we went out.' The rain should have stopped us, but it didn't!" Practice: Fill in the connector. Join sentences using although/unless/while. "Either...or: You can have ___ the cake ___ the ice cream." |
| 6 | `g5_e_determiners` | Determiners & Quantifiers | 1. Articles (review: a/an/the + zero article) 2. Demonstratives (this, that, these, those -- review) 3. Quantifiers: some, any, many, much, few, little, several, enough 4. "Some" vs "Any" (some = positive, any = negative/questions) 5. Countable vs uncountable nouns and choosing the right determiner | Mastering the full range of determiners. Understanding countable vs uncountable noun rules. | C/I/CC/IB | Q2 | g1_e_articles | P | C | Script: "'Many' goes with countable nouns (many books). 'Much' goes with uncountable nouns (much water). 'A lot of' works for both!" Practice: "Choose: 'There isn't (much/many) milk left.'" (much). "Some vs any: 'Is there ___ sugar?'" (any). |
| 7 | `g5_e_letter_formal` | Formal Letter & Essay Writing | 1. Formal letter format (sender's address, date, receiver's address, subject line, salutation, body, closing) 2. Writing a complaint letter 3. Writing a request/application letter 4. Essay structure: introduction, body paragraphs, conclusion 5. Writing an essay on a given topic (150-200 words) | Learning formal letter conventions and structured essay writing. | C/I/CC/IB | Q3-Q4 | g4_e_letter_writing, g3_e_paragraph_writing | M | A | Script: "A formal letter is like wearing a suit -- proper and polished. Always use 'Dear Sir/Madam,' never 'Hey dude.'" Practice: Arrange formal letter parts. Fill in blanks. Identify errors in format. Activity: Write a letter to the principal requesting a new library book. Write a 5-paragraph essay on "My Favorite Season." |
| 8 | `g5_e_figures_speech` | Figures of Speech | 1. Simile (as brave as a lion, like a star) 2. Metaphor (life is a journey, time is money) 3. Personification (the wind whispered, the sun smiled) 4. Alliteration (big brown bear, silly snakes slithered) 5. Identifying and using figures of speech in writing | Understanding common figures of speech. Recognizing figurative language in text. | C/I/CC/IB | Q4 | g4_e_idioms | K | A | Script: "Simile uses 'like' or 'as': She runs LIKE the wind. Metaphor doesn't: She IS a speed machine. Both compare things, but metaphor is more dramatic!" Practice: "Is this simile or metaphor? 'Her eyes were stars.'" (metaphor). Identify figures of speech in sentences. Create your own simile and metaphor. |
| 9 | `g5_e_vocabulary_roots` | Advanced Vocabulary: Roots & Etymology | 1. Common Latin/Greek roots (bio = life, graph = write, tele = far, phon = sound, auto = self) 2. Building words from roots (biography = bio + graphy = life writing) 3. Scientific and academic vocabulary 4. Using word roots to decode unfamiliar words 5. Context clues + roots = vocabulary power | Using word roots and etymology to expand vocabulary and decode unfamiliar words. | C/I/CC/IB | Q2-Q3 | g4_e_vocabulary_adv | P | A | Script: "'Telephone' = tele (far) + phone (sound) = far sound = hearing someone far away! If you know the root, you can figure out any word." Practice: "What does 'autobiography' mean?" (auto=self + bio=life + graph=write → writing about your own life). Match root to meaning. Decode unknown words. |
| 10 | `g5_e_comprehension_adv` | Comprehension: Analysis & Inference | 1. Reading passages (15-20 sentences, varied genres) 2. Deep inference questions (character motivation, author's purpose) 3. Vocabulary from context (advanced) 4. Distinguishing fact from opinion 5. Writing a critical response / personal opinion paragraph | Advanced comprehension: inference, analysis, opinion formation, and critical thinking about texts. | C/I/CC/IB | Q3-Q4 | g4_e_comprehension_adv | M | A | Script: "FACT: Something that can be proven (The Eiffel Tower is in Paris). OPINION: What someone thinks (The Eiffel Tower is beautiful). Always ask: can this be checked?" Practice: Passages + deep questions. "Why did the character choose to...?" "Is this fact or opinion?" Write 3 sentences: your opinion on the passage. |
| 11 | `g5_e_editing` | Editing & Proofreading | 1. Common grammar errors (tense consistency, subject-verb agreement, pronoun reference) 2. Common spelling errors (there/their/they're, your/you're, its/it's, affect/effect) 3. Punctuation errors (comma splices, missing apostrophes) 4. Run-on sentences and fragments 5. Editing a full paragraph for all error types | Developing the skill of finding and fixing errors in written text. A capstone Campaign. | C/I/CC/IB | Q4 | All prior English topics | P | A | Script: "Being a good writer means being a good EDITOR. Read your work 3 times: once for meaning, once for grammar, once for spelling." Practice: Find and fix errors in sentences. Edit a paragraph with 8-10 errors. "Correct: 'their going too the park tommorow and they will plays.'" Arcade: Error Hunt (spot and fix errors fast). |

**Grade 5 English: 11 Campaign Topics, ~55 Sub-Topics**

---

### Topic Counts

| Grade | Math Topics | Science/EVS Topics | English Topics | Total |
|-------|-------------|-------------------|---------------|-------|
| Grade 1 | 12 | 12 | 11 | 35 |
| Grade 2 | 13 | 10 | 11 | 34 |
| Grade 3 | 12 | 11 | 11 | 34 |
| Grade 4 | 12 | 11 | 11 | 34 |
| Grade 5 | 13 | 12 | 11 | 36 |
| **TOTAL** | **62** | **56** | **55** | **173** |

### Sub-Topic Counts

| Grade | Math | Science/EVS | English | Total |
|-------|------|-------------|---------|-------|
| Grade 1 | ~58 | ~60 | ~55 | ~173 |
| Grade 2 | ~65 | ~50 | ~55 | ~170 |
| Grade 3 | ~60 | ~55 | ~55 | ~170 |
| Grade 4 | ~60 | ~55 | ~55 | ~170 |
| Grade 5 | ~65 | ~60 | ~55 | ~180 |
| **TOTAL** | **~308** | **~280** | **~275** | **~863** |

### Board Coverage

| Board | Math | Science/EVS | English | Overall |
|-------|------|-------------|---------|---------|
| CBSE | 62/62 (100%) | 56/56 (100%) | 55/55 (100%) | 100% |
| ICSE | 62/62 (100%) | 50/56 (~89%) | 55/55 (100%) | ~97% |
| Common Core | 60/62 (~97%) | 46/56 (~82%) | 54/55 (~98%) | ~93% |
| IB PYP | 60/62 (~97%) | 48/56 (~86%) | 54/55 (~98%) | ~94% |

**Note on English coverage:** Grammar and language skills are 98-100% universal across boards. The 1-2 topic gap for CC/IB is trivial (timing of Active/Passive Voice introduction). All boards benefit from all 55 English topics.

### Content Generation Estimate

| Metric | Count |
|--------|-------|
| Total Campaign Topics | 173 |
| Total Sub-Topics | ~863 |
| Content Items Per Topic | ~150 (Math/Science), ~130 (English) |
| Total Content Items | ~24,350 |
| AI Calls for Generation | 173 (1 batch call per topic) |
| Estimated AI Cost | ~$1.75 |
| Fridge Art SVGs Needed | 173 |
| Human Verification Time | ~6 hours (2 min/topic) |

### Content Breakdown by Type

| Content Type | Per Topic | Total (173 topics) |
|-------------|----------|-------------------|
| Teaching Scripts | 2 | 346 |
| Practice Pad Questions | 50 | 8,650 |
| Quiz Questions (with explanations) | 50 | 8,650 |
| Legend Quiz Questions | 20 | 3,460 |
| Beat the Parent Questions | 10 | 1,730 |
| Daily Spark Items (riddles, facts, stories, activities, challenges) | 12 | 2,076 |
| Arcade Game Data Sets | 1 | 173 |
| Certificate Titles | 1 | 173 |
| Fridge Art SVGs | 1 | 173 |

### Recommended Build Order (Revised)

| Phase | Content | New Topics | Cumulative | Notes |
|-------|---------|------------|-----------|-------|
| **MVP** | CBSE Grade 1-3 Math | 37 | 37 | Core product. Highest pain point. |
| **Phase 2a** | + Grade 1-3 English | +33 | 70 | English is high-demand and 98%+ board-universal. |
| **Phase 2b** | + Grade 1-3 Science/EVS | +33 | 103 | Completes the 3-subject offering for Grades 1-3. |
| **Phase 3** | + Grades 4-5 all subjects (all boards) | +70 | 173 | Full grade + subject coverage. |
| **Phase 4** | Content expansion: more questions, regional boards, Hindi scripts | -- | 173+ | Depth over breadth. |

**Note on build order:** English has been prioritized to Phase 2a (ahead of Science/EVS) because:
1. Grammar drills have the highest Practice Pad engagement potential after Math.
2. English grammar is 98%+ universal across boards -- less localization work than Science/EVS.
3. It significantly broadens the app's appeal: parents who don't need Math help may need English help.
4. The Word Builder arcade game is a natural engagement driver for kids.

---

## Part 7: Curriculum Data Schema

The "universal topic library with board-specific metadata" strategy requires a well-defined data structure. This section defines the Firestore schema for curriculum data.

### 7.1 Topic Document Schema (`curriculum_topics` collection)

Each document in `curriculum_topics` represents one teachable topic (e.g., "Addition", "Nouns", "Plants").

```json
{
  "topicId": "math-addition-grade1",
  "subject": "math",
  "grade": 1,
  "displayName": "Addition",
  "description": "Adding two single-digit numbers to get sums up to 20",
  "prerequisiteTopics": [],
  "campaignDays": 5,
  "boards": {
    "cbse": {
      "unit": "Numbers",
      "chapter": "Addition",
      "sequenceWeek": 5,
      "terminology": "sum",
      "inScope": true
    },
    "icse": {
      "unit": "Numbers",
      "chapter": "Addition and Subtraction",
      "sequenceWeek": 4,
      "terminology": "sum",
      "inScope": true
    },
    "commonCore": {
      "standard": "1.OA.A.1",
      "unit": "Operations and Algebraic Thinking",
      "sequenceWeek": 6,
      "terminology": "sum",
      "inScope": true
    },
    "ibpyp": {
      "transdisciplinaryTheme": "How the World Works",
      "sequenceWeek": 5,
      "terminology": "sum",
      "inScope": true
    }
  },
  "tags": ["addition", "numbers", "arithmetic", "grade1-math"],
  "popularityScore": 0,
  "contentGenerated": false,
  "contentCacheId": null,
  "lastGenerated": null,
  "isReviewed": false,
  "createdAt": "2026-03-16T00:00:00Z"
}
```

**Field Definitions:**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `topicId` | string | Yes | Slug format: `{subject}-{topic-slug}-grade{n}`. Must be unique. |
| `subject` | enum | Yes | `"math"` / `"english"` / `"science"` |
| `grade` | int | Yes | 1–5 |
| `displayName` | string | Yes | Human-readable topic name shown in Library |
| `description` | string | Yes | 1-sentence description for Library card subtitle |
| `prerequisiteTopics` | array\<string\> | No | List of `topicId`s that should ideally be mastered first; used for Campaign recommendations |
| `campaignDays` | int | Yes | Always 5 for MVP |
| `boards.{board}.inScope` | bool | Yes | If `false`, topic is hidden from users who selected that board |
| `boards.{board}.sequenceWeek` | int | No | Approximate school week when this topic is taught; used for "What Kids Are Learning" ranking |
| `boards.{board}.terminology` | string | No | Board-specific word (e.g., "carrying" vs. "regrouping" for addition with carrying) |
| `tags` | array\<string\> | No | For search and related-topic recommendations |
| `popularityScore` | int | No | Updated hourly by Cloud Function (count of active campaigns for this topic) |
| `contentGenerated` | bool | Yes | Set to `true` after `content_cache` entry exists |
| `contentCacheId` | string | No | Reference to `content_cache` document ID |
| `isReviewed` | bool | Yes | Set to `true` after human content review |

### 7.2 Content Cache Document Schema (`content_cache` collection)

One document per unique `(topicId, grade, board)` combination. Shared across all users who pin the same topic.

```json
{
  "cacheId": "math-addition-grade1-cbse",
  "topicId": "math-addition-grade1",
  "grade": 1,
  "board": "cbse",
  "generatedAt": "2026-03-16T10:00:00Z",
  "generatedByModel": "gemini-3-pro",
  "isReviewed": false,
  "reviewedAt": null,
  "reviewedBy": null,
  "decodeScript": {
    "cards": [
      {
        "cardIndex": 1,
        "text": "Adding means putting groups together to find the total.",
        "durationEstimateSeconds": 15
      }
    ],
    "ifStrugglingBlock": "Try counting out the first number with fingers, then counting on from there.",
    "totalCards": 5
  },
  "practicePadQuestions": [
    {
      "questionId": "pq-001",
      "text": "3 + 4 = ?",
      "answerType": "numeric",
      "correctAnswer": 7,
      "difficulty": "easy",
      "options": null,
      "childExplanation": "Count on from 3: 4, 5, 6, 7! The answer is 7.",
      "parentExplanation": "Your child may count all objects from 1. Encourage 'counting on' from the larger number for efficiency."
    }
  ],
  "quizQuestions": [],
  "dailyContent": {
    "riddles": [],
    "stories": [],
    "activities": []
  },
  "arcadeContent": {}
}
```

### 7.3 Worked Examples (MVP Seed Topics)

The following 20 topics should be seeded in Firestore before MVP launch. All are CBSE Grade 1-3 Math.

| topicId | Grade | displayName | Sequence Week |
|---------|-------|-------------|--------------|
| `math-counting-to-10-grade1` | 1 | Counting to 10 | 1 |
| `math-counting-to-20-grade1` | 1 | Counting to 20 | 2 |
| `math-addition-grade1` | 1 | Addition (within 10) | 5 |
| `math-subtraction-grade1` | 1 | Subtraction (within 10) | 8 |
| `math-shapes-2d-grade1` | 1 | 2D Shapes | 12 |
| `math-measurement-length-grade1` | 1 | Measurement: Length | 15 |
| `math-addition-to-100-grade2` | 2 | Addition (within 100) | 3 |
| `math-subtraction-to-100-grade2` | 2 | Subtraction (within 100) | 6 |
| `math-multiplication-intro-grade2` | 2 | Introduction to Multiplication | 10 |
| `math-division-intro-grade2` | 2 | Introduction to Division | 14 |
| `math-measurement-weight-grade2` | 2 | Measurement: Weight | 18 |
| `math-time-clock-grade2` | 2 | Telling Time | 20 |
| `math-multiplication-tables-grade3` | 3 | Multiplication Tables (2-10) | 4 |
| `math-division-grade3` | 3 | Division | 8 |
| `math-fractions-intro-grade3` | 3 | Introduction to Fractions | 12 |
| `math-geometry-perimeter-grade3` | 3 | Perimeter of Shapes | 16 |
| `math-money-grade3` | 3 | Money and Transactions | 18 |
| `math-data-handling-grade3` | 3 | Data Handling (Bar Graphs) | 22 |
| `math-word-problems-addition-grade3` | 3 | Word Problems: Addition & Subtraction | 24 |
| `math-patterns-grade3` | 3 | Patterns and Sequences | 26 |

**Content Generation Cost for 20 MVP Topics:**
- Cost per topic: 5 AI calls × $0.002/call = **$0.01/topic**
- 20 topics × $0.01 = **$0.20 total one-time cost**
- After caching: $0 for subsequent users pinning the same topic

### 7.4 EVS vs. Science Clarification

The subject split for CBSE (which uses "EVS" for Grades 1-5) differs from ICSE and Common Core which separate Science and Social Studies:

| Board | Grades 1-5 Subject | Content |
|-------|-------------------|---------|
| CBSE | EVS (Environmental Studies) | Science + Social Studies blended |
| ICSE | Science (separate) + Social Studies (separate) | Two distinct subjects |
| Common Core | Science (NGSS-aligned) | Science only; no blended Social Studies |
| IB PYP | Integrated thematic | Science + Social Studies via transdisciplinary themes |

**ParentHero approach:** We use "Science/EVS" as a combined subject label in the app UI for all boards. Topics that are CBSE-EVS but skew heavily toward Social Studies (e.g., "Our Community", "Indian Festivals") are tagged `subject: "evs_social"` and can be filtered independently. ICSE and Common Core users see these topics hidden by default (their `boards.icse.inScope = false`).

---

*End of Curriculum Research Document*
