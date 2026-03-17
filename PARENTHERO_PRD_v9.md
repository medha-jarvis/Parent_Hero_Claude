# ParentHero -- Product Requirements Document

**Version:** 9.0 (Revised -- Netflix Dashboard + 5-Day Campaign + All Recommendations)
**Date:** February 10, 2026
**Status:** REVISED DRAFT
**Supersedes:** PRD v8.0

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Philosophy & Positioning](#2-product-philosophy--positioning)
3. [Target Users & Personas](#3-target-users--personas)
4. [Technical Stack & Architecture](#4-technical-stack--architecture)
5. [Design System & Visual Language](#5-design-system--visual-language)
6. [Complete User Flows](#6-complete-user-flows)
7. [Functional Modules (Detailed Specifications)](#7-functional-modules-detailed-specifications)
8. [Monetization & Pricing](#8-monetization--pricing)
9. [Retention & Engagement Systems](#9-retention--engagement-systems)
10. [Notification & Nudge Engine](#10-notification--nudge-engine)
11. [Analytics & Metrics Plan](#11-analytics--metrics-plan)
12. [Privacy, Compliance & Legal](#12-privacy-compliance--legal)
13. [Error Handling & Fallback Matrix](#13-error-handling--fallback-matrix)
14. [Competitive Positioning](#14-competitive-positioning)
15. [Launch Roadmap & Phasing](#15-launch-roadmap--phasing)
16. [Annexures (Technical Specifications)](#16-annexures-technical-specifications)

---

## 1. Executive Summary

ParentHero is a mobile SaaS application that acts as a "Super-Aid" for school-led teaching. Unlike apps that prescribe a rigid curriculum (Byju's, Khan Academy, Duolingo Math), ParentHero supports the parent's immediate needs based on what is happening in the child's school *today*.

**The Philosophy:**
> "You tell us what school is teaching; we give you superpowers to handle it."

**The Solution:** A hybrid "Netflix + Quest" experience -- a streaming-style content library for browsing and discovery, combined with a structured "5-Day Campaign" that walks parents and children through a mastery journey: teaching scripts, digital practice pads, gamified arcade drills, and physical rewards (certificates, worksheets, fridge art).

**The Business Goal:** Achieve **$20,000 MRR** within 12 months of launch by optimizing for three core metrics:
- **Session Duration** (target: 15-20 min/session) -- driven by Practice Pad and Arcade
- **Daily Habit** (target: 5+ sessions/week) -- driven by Campaign Progression and Streaks
- **Free-to-Paid Conversion** (target: 8-12%) -- driven by Campaign paywall placement and Certificate emotional payoff

**Key Changes from v8.0:**
- Restructured paywall (free through Day 3 instead of Day 2)
- Added First Topic Wizard (onboarding activation flow)
- Replaced "Trending Now" with "What Kids Are Learning" (real social proof)
- Added Kid Mode (child-safe UI with navigation lock)
- Added Streak system and XP/Level progression
- Added Parent Report Card (progress dashboard)
- Added Spaced Repetition (Revision Ring)
- Added offline support architecture
- Added comprehensive analytics event plan
- Added privacy/compliance framework (COPPA, DPDP)
- Redesigned Mission Control as guided linear flow
- Redesigned Practice Pad for small screens
- Added multi-child switching UX
- Added error handling for all external dependencies

---

## 2. Product Philosophy & Positioning

### 2.1 Core Beliefs

1. **The parent is the hero, not the app.** We empower parents with tools, scripts, and confidence. We do not replace the parent with a screen.

2. **Follow the school, don't fight it.** Every competitor builds their own curriculum and asks the child to follow it. We do the opposite: the school's curriculum is the source of truth; we provide superpowers to handle it.

3. **Finite commitments beat infinite content.** A "5-Day Campaign" to master one topic is more motivating than an infinite library of lessons. We optimize for completion, not consumption.

4. **Physical rewards anchor digital learning.** Certificates on the fridge, worksheets on the table, and coloring pages in the bag -- these bridge the digital-physical gap and make learning tangible for young children.

5. **Dead time is learning time.** Car rides, waiting rooms, and commute time are untapped learning opportunities. Car-Schooling Mode captures this.

### 2.2 The Dual Metaphor

ParentHero uses two metaphors for different parts of the experience:

| Context | Metaphor | Language | Examples |
|---------|----------|----------|----------|
| **Dashboard / Library / Browse** | Netflix / Streaming Service | "Browse," "Pin," "What's New," "Library" | Topic cards, horizontal scroll rows, subject shelves |
| **Inside a Campaign** | Quest / Mission | "Campaign," "Day X," "Mission," "Mastery," "Legend" | Progress rings, step-by-step missions, unlock sequences |

The transition happens when a user taps on their Active Focus card. They move from "browsing mode" (Netflix) into "doing mode" (Quest).

### 2.3 Positioning Statement

**For** parents of children in Grades 1-5
**Who** want to actively support their child's school learning but don't know where to start
**ParentHero is** a mobile learning companion
**That** aligns with the school curriculum and gives parents ready-made scripts, practice tools, and rewards
**Unlike** Byju's, Khan Academy, and Duolingo Math, which prescribe their own curriculum
**Our product** follows your school and makes you the hero of your child's learning journey.

### 2.4 Phase 1 Curriculum Build Order

> **Phase 1 = the complete base product, built before launch.** There is no separate "MVP" launch — the full feature set ships. Within Phase 1, content is built in three sprints (A → B → C), expanding boards, grades, and subjects each sprint.

| Dimension | Sprint A (Weeks 3-10) | Sprint B (Weeks 11-18) | Sprint C (Weeks 19-26) |
|-----------|----------------------|----------------------|----------------------|
| **Board** | CBSE only | + ICSE | + Common Core, IB PYP |
| **Grades** | 1-3 | 1-4 | 1-5 |
| **Subject** | Math only | + English | + Science/EVS |
| **Topics** | ~20 | ~70 | ~150 |
| **Language** | English only | + Hindi scripts | English UI only (Hindi/Tamil UI in Phase 2) |

**Rationale:** Sprints sequence content complexity, not feature completeness. The app's core interaction (teaching script + practice pad + quiz + certificate) works for all boards/subjects — only the content needs to be generated and QA'd for each expansion.

> **See also:** `FEATURE_MATRIX.md` for a full feature-by-feature breakdown of Phase 1 vs. Phase 2 and Free vs. Pro access.

---

## 3. Target Users & Personas

### 3.1 Primary Persona: "Anxious Anita"

| Attribute | Detail |
|-----------|--------|
| **Age** | 30-40 |
| **Location** | Urban India (Tier 1-2 cities) |
| **Child** | Grade 1-3, CBSE/ICSE school |
| **Tech comfort** | Moderate (uses WhatsApp, YouTube, Swiggy daily) |
| **Pain point** | "My child comes home with homework I don't understand how to explain. The school expects me to help but I don't remember this stuff." |
| **Trigger** | Gets a WhatsApp message from the class teacher: "Please revise Money chapter at home." |
| **Behavior** | Will open the app at 7-8 PM after dinner. Wants quick, guided help. Does NOT want to read long articles or watch 20-minute videos. |
| **Willingness to pay** | INR 199-499/month if the app demonstrably helps. Very price-sensitive. Needs to see value in the first session. |
| **Key need** | "Just tell me what to do. Give me a script. I'll read it to my child." |

### 3.2 Secondary Persona: "Proactive Priya"

| Attribute | Detail |
|-----------|--------|
| **Age** | 28-38 |
| **Location** | Urban India or NRI (US/UK/Singapore) |
| **Child** | Grade 2-5, academically strong |
| **Tech comfort** | High (uses multiple apps, comfortable with subscriptions) |
| **Pain point** | "My child is doing well but I want to make sure they stay ahead. I want structured practice, not random YouTube videos." |
| **Trigger** | Sees other parents talking about Math apps in a WhatsApp group. |
| **Behavior** | Will explore the Library, browse topics, use Practice Pad and Arcade daily. Wants depth and rigor. |
| **Willingness to pay** | USD 4.99-9.99/month or INR 299-599/month without hesitation if quality is high. |
| **Key need** | "Give me a structured practice system that covers what school is doing, plus a bit more." |

### 3.3 Tertiary Persona: "Car-Ride Dad / Commute Parent"

| Attribute | Detail |
|-----------|--------|
| **Age** | 32-45 |
| **Location** | Any (urban with driving commute) |
| **Child** | Grade 1-5 |
| **Pain point** | "I spend 30 minutes driving my kid to school every morning. It's dead time." |
| **Trigger** | Discovers Car Mode accidentally or through word-of-mouth. |
| **Behavior** | Uses Car-Schooling Mode during commutes. Audio-based learning. |
| **Key need** | "Something useful to do with my kid during the car ride that doesn't require a screen." |

### 3.4 User Roles & Screen Ownership

**Critical Design Principle:** ParentHero has TWO users sharing ONE device -- the parent and the child. Each screen must have a clear "owner."

| Screen / Module | Primary User | Secondary User | UI Implications |
|----------------|-------------|----------------|-----------------|
| Dashboard | Parent | -- | Sophisticated navigation OK. Standard font sizes. |
| Library / Browse | Parent | -- | Search, filters, cards. Complex interactions OK. |
| Topic Selection / Scan | Parent | -- | Camera UI. Text-heavy results. |
| Campaign Mission Screen | Parent | -- | Shows today's plan. Parent decides when to start. |
| Decode Script | Parent (reading aloud) | Child (listening) | Large, readable text. TTS button. Minimal distractions. |
| Practice Pad | Child | Parent (supervising) | LARGE touch targets. Minimal text. Bright colors. Fun sounds. |
| Arcade | Child | -- | Full child mode. No navigation to other parts of app. |
| Quiz / Battle | Child | Parent (in "Beat the Parent" mode) | Child-friendly UI. Big buttons. |
| Car Mode | Parent (driving, audio only) | Child (listening, answering verbally) | ZERO visual interaction required for driver. Audio-first. |
| Report Card | Parent | -- | Data-heavy. Charts. Adult-oriented. |
| Settings / Billing | Parent | -- | Standard settings UI. |

---

## 4. Technical Stack & Architecture

### 4.1 Core Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend** | Flutter (Dart) | Single codebase for iOS + Android. Strong animation support for child-facing UI. |
| **Backend** | Firebase (Serverless) | Rapid development. Auto-scaling. Real-time sync for user progress. |
| **Auth** | Firebase Auth | Phone OTP (primary for India) + Google Sign-In (secondary). Apple Sign-In (required for iOS). |
| **Database** | Cloud Firestore (NoSQL) | Flexible schema for curriculum data. Real-time listeners for progress sync. |
| **Functions** | Firebase Cloud Functions (Node.js) | Scheduled tasks (Daily content generation, Sunday Printer). API gateway for AI calls. |
| **AI Engine** | Gemini 3 Pro (Multimodal) | OCR (diary scanning), Pedagogical Reasoning (script generation), Content Generation (questions, stories, riddles). |
| **Payments** | Stripe (Global) / Razorpay (India) | Auto-switch based on user's country code. |
| **Local Storage** | Hive (encrypted) + shared_preferences | Hive for offline Campaign content cache. shared_preferences for settings and Guest Mode state. |
| **Analytics** | Firebase Analytics + custom event layer | See Section 11 for full event plan. |
| **Crash Reporting** | Firebase Crashlytics | Automatic crash reporting with user context. |
| **Remote Config** | Firebase Remote Config | Feature flags, A/B testing, paywall configuration without app updates. |
| **CDN** | Firebase Hosting / Cloud Storage | Serve static curriculum JSON bundles. Reduce Firestore reads. |

### 4.2 Key Libraries

| Library | Purpose | Used In |
|---------|---------|---------|
| `flutter_tts` | Text-to-Speech for Decode Scripts and Car Mode | Modules C, G |
| `pdf` | Client-side PDF generation for Certificates and Worksheets | Module F |
| `wakelock_plus` | Prevent screen sleep during Car Mode and Practice Pad sessions | Modules G, H |
| `flutter_drawing_board` | Whiteboard canvas for Practice Pad | Module H |
| `audioplayers` | Sound effects for Arcade, correct/wrong answer feedback | Modules D, H, I |
| `google_mlkit_text_recognition` | On-device OCR for diary/worksheet scanning | Module C (Scan) |
| `hive_flutter` | Encrypted local storage for offline content cache | Offline subsystem |
| `connectivity_plus` | Network state detection for offline mode | Global |
| `flutter_local_notifications` | Scheduled local notifications | Module E, Nudge Engine |
| `fl_chart` | Charts for Parent Report Card | Module J |
| `lottie` | Celebratory animations (level-up, campaign completion, streaks) | Global |
| `flutter_animate` | Micro-animations for UI transitions | Global |
| `confetti_widget` | Confetti burst on Certificate/Mastery unlock | Module F |

### 4.4 Library Implementation Notes

#### `flutter_drawing_board`
- Initialize with `DrawingController`
- Pen color: Black (`#1A1A1A`), stroke width: 3.0
- Undo: `controller.undo()`; Clear: `controller.clear()` (with confirmation dialog)
- Drawing canvas is NOT saved; controller disposed when navigating away from whiteboard

#### `lottie`
- All animation files stored in `assets/animations/` directory
- Required animations:
  - `confetti.json` — Campaign completion, Beat the Parent win, Certificate unlock
  - `level_up.json` — XP level-up celebration
  - `streak_milestone.json` — 7-day, 14-day, 30-day streak milestone
  - `loading_math.json` — Content generation loading screen (math theme)
  - `loading_science.json` — Content generation loading screen (science theme)
  - `loading_english.json` — Content generation loading screen (English theme)
- Animations auto-play once, then stop on last frame (no looping except loading animations which loop)
- Dismiss via user tap or auto-dismiss after animation completes

#### `hive_flutter`
- Encryption: AES-256 via `flutter_secure_storage` key storage
  - On first app launch: generate random 32-byte key, store in secure storage
  - On subsequent launches: retrieve key from secure storage, open encrypted Hive box
- Box names: `campaignContent`, `userProgress`, `pendingSync`, `curriculumMaps`
- Cache invalidation: `campaignContent` box entries have `generatedAt` timestamp; if >30 days old, re-fetch from Firestore
- Max size: no hard cap (content is small text; typical cache < 10MB per user)
- Conflict resolution: Firestore is the source of truth for all user progress. On reconnect, Firestore data overwrites Hive for `userProgress` box. Hive writes go to `pendingSync` box first, then applied to Firestore and moved to confirmed state.

#### `confetti_widget`
- Use `ConfettiController(duration: Duration(seconds: 3))`
- Colors: [subject color (blue/coral/green), gold, white]
- Direction: straight down from top; particle count: 50 per second

#### `fl_chart`
- Report Card bar chart (weekly activity): `BarChart` with 7 bars, custom tooltips showing session count
- Report Card mastery chart: `PieChart` with 3 segments (mastered, in-progress, not started)
- Colors match subject color system (Section 5.2)

### 4.3 Architecture Principles

#### 4.3.1 Offline-First Design

The app must function without an internet connection for all child-facing activities. Architecture:

```
┌─────────────────────────────────────────────────────┐
│                    APP LAYER                         │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │
│  │Dashboard │  │ Campaign │  │ Practice/Arcade  │  │
│  │(Online)  │  │ (Hybrid) │  │ (Offline-Ready)  │  │
│  └────┬─────┘  └────┬─────┘  └────────┬─────────┘  │
│       │              │                 │             │
│  ┌────┴──────────────┴─────────────────┴──────────┐ │
│  │           LOCAL DATA LAYER (Hive)              │ │
│  │  ┌──────────────┐  ┌────────────────────────┐  │ │
│  │  │ Curriculum   │  │ Campaign Content Cache │  │ │
│  │  │ Maps Cache   │  │ (Scripts, Qs, Riddles) │  │ │
│  │  └──────────────┘  └────────────────────────┘  │ │
│  │  ┌──────────────┐  ┌────────────────────────┐  │ │
│  │  │ User Progress│  │ Pending Sync Queue     │  │ │
│  │  │ (Local Copy) │  │ (Offline actions)      │  │ │
│  │  └──────────────┘  └────────────────────────┘  │ │
│  └────────────────────────┬───────────────────────┘ │
│                           │                         │
└───────────────────────────┼─────────────────────────┘
                            │ Sync when online
                  ┌─────────┴──────────┐
                  │   FIREBASE CLOUD   │
                  │  Firestore + Auth  │
                  │  Cloud Functions   │
                  │  Cloud Storage     │
                  └────────────────────┘
```

**Sync Rules:**
- On app launch: Pull latest user profile + check for Campaign content updates.
- On Campaign pin: Pre-generate ALL 5 days of content via Cloud Function. Cache locally in Hive.
- Practice Pad / Arcade: Read questions from local cache. Write results to local Hive. Sync to Firestore when connectivity returns.
- Dashboard "What Kids Are Learning": Requires connectivity. Show cached version with "Last updated X hours ago" if offline.
- Car Mode: Fully offline after initial content load. All audio generated via local TTS.

#### 4.3.2 AI Content Pre-Generation Pipeline

When a user pins a topic and starts a Campaign, the following happens server-side:

```
TRIGGER: User pins topic_id = "math_meas_money_basic" for child "Ira" (Grade 1, CBSE)

CLOUD FUNCTION: generateCampaignContent(user_id, child_id, topic_id)

STEP 1: Check content_cache collection
  → If cached content exists for (topic_id, grade, board): Use it (skip AI calls)
  → If not: Proceed to Step 2

STEP 2: Generate via Gemini 3 Pro (batch, NOT real-time)
  ├── Call 1: Decode Script (1 call)
  ├── Call 2: Practice Pad Questions - 50 questions bulk (1 call)
  ├── Call 3: Quiz Questions - 30 questions across 3 difficulties (1 call)
  ├── Call 4: Daily Content - 5 riddles, 5 stories, 5 activities (1 call)
  ├── Call 5: Arcade Content - subject-specific game data (1 call)
  ├── Call 6: Beat the Parent Questions - 5 harder questions (1 call)
  └── Total: 6 AI calls per Campaign (amortized to ~0 after caching)

STEP 3: Programmatic Verification (Math only)
  → For each generated math question: solve independently using code
  → Flag any mismatches for manual review
  → Auto-discard questions with incorrect answers

STEP 4: Store in content_cache collection + push to user's local Hive cache

STEP 5: Mark Campaign as "Ready" → Push notification: "Ira's Money Campaign is ready!"
```

**Cost Estimation:**
- Gemini 3 Pro: ~$0.002 per call (input + output tokens for educational content)
- 6 calls per Campaign = $0.012 per new Campaign (includes Beat the Parent question generation, Call 6)
- After caching: Most Campaigns cost $0 (same Grade 1 CBSE Money content reused)
- Target: <$0.05/user/month in AI costs

#### 4.3.3 Payment Architecture

```
FLOW: User taps "Upgrade to Pro"

1. Detect country_code from user profile
   ├── IN (India) → Razorpay
   └── All others → Stripe

2. Show pricing (from Remote Config, not hardcoded)
   ├── IN: ₹299/month | ₹2,499/year | ₹399/month Family
   └── US: $4.99/month | $39.99/year | $6.99/month Family

3. Process payment via selected gateway

4. On success:
   ├── Update Firestore: subscription_tier, subscription_expiry
   ├── Grant access immediately (no app restart)
   └── Send confirmation email/SMS

5. Renewal:
   ├── Stripe: Auto-renew via saved card
   └── Razorpay: Auto-renew via UPI autopay or saved card

6. Grace period on failure: 3 days of continued access + daily retry
   └── After 3 days: Downgrade to Free tier. Content preserved, access restricted.
```

#### 4.3.4 Content Generation QA Process

Gemini can produce incorrect or low-quality content. This section defines the quality gates before content is served to users.

**Math (Auto-verifiable):**
1. For every generated numeric question, the answer is independently computed by Cloud Function code.
2. If the computed answer ≠ Gemini's answer: the question is auto-discarded.
3. If the question has no unique numeric answer (e.g., open-ended): it is discarded and Gemini is prompted to regenerate.
4. Target: 100% of served Math questions are programmatically verified.

**English & Science (Heuristic-verifiable — Phase 2):**
English and Science content cannot be auto-graded the same way. The following heuristics are applied:

| Check | Method | Threshold |
|-------|--------|-----------|
| Script length | Character count | 150-600 chars per card; discard if outside range |
| Question has an unambiguous correct answer | Answer key included in prompt; validate answer is in options list | Required |
| No repeated words across options (MCQ) | String comparison | Required |
| No PII or inappropriate content | Gemini safety filters (BLOCK_MEDIUM_AND_ABOVE) | Required |
| Curriculum alignment | Topic keyword must appear in script/question | Required |

**Human Review SLA:**
- All content for new topics is flagged for review before being served to more than 50 users.
- Review checklist: factual accuracy, age-appropriateness, curriculum alignment, script length, clarity.
- Content passes human review → `is_reviewed: true` in `content_cache`.
- In MVP: Founder does all review manually (~5 min/topic). Automated heuristics reduce manual load in Phase 2.

**Content Pool Size:**
- Practice Pad: 50 questions generated per topic; 10 randomly selected per session.
- Quiz: 30 questions generated; 10 randomly selected per Quiz session.
- Daily Spark: 5 riddles + 5 stories + 5 activities generated; 1 of each shown per day (rotated).
- Prevents repetition for users who replay the same Campaign.

---

## 5. Design System & Visual Language

### 5.1 Design Philosophy

**"Clean, Warm, Confident"** -- The app should feel like a trusted friend, not a corporate product or a noisy kids' app. The parent-facing surfaces are clean and minimal (Netflix-like). The child-facing surfaces are warm, colorful, and playful (but not chaotic).

### 5.2 Color System

#### Subject Colors (Constant -- always the card/section background tint)

| Subject | Color | Hex | Usage |
|---------|-------|-----|-------|
| Math | Blue | `#1CB0F6` | Card backgrounds, section headers, icons |
| English | Coral | `#FF6B6B` | Card backgrounds, section headers, icons |
| Science / EVS | Green | `#58CC02` | Card backgrounds, section headers, icons |

#### Status Colors (Overlays -- badges, icons, tags; NEVER replace subject colors)

| Status | Color | Hex | Rendered As |
|--------|-------|-----|-------------|
| Active Campaign | Purple | `#6B21A8` | Small "ACTIVE" badge on card corner |
| Mastered | Gold | `#FFC800` | Gold checkmark icon overlay on card |
| Locked (Free tier) | Gray | `#9CA3AF` | Lock icon + grayed overlay |
| Streak Active | Orange | `#F97316` | Flame icon next to streak counter |

**Rule:** Subject color is ALWAYS the primary visual. Status is ALWAYS an overlay/badge. This prevents color conflicts (e.g., an active English campaign shows a Coral card with a small Purple "ACTIVE" badge, not a Purple card).

#### Semantic Colors

| Purpose | Hex | Usage |
|---------|-----|-------|
| Correct Answer | `#22C55E` | Green flash + checkmark |
| Wrong Answer | `#EF4444` | Red flash + X mark |
| Background (Light) | `#F9FAFB` | App background |
| Background (Dark / Car Mode) | `#111827` | Car Mode background |
| Card Surface | `#FFFFFF` | Card backgrounds |
| Text Primary | `#111827` | Headings, body text |
| Text Secondary | `#6B7280` | Captions, timestamps |
| Text on Color | `#FFFFFF` | Text on colored backgrounds |

### 5.3 Typography

| Context | Font | Size | Weight |
|---------|------|------|--------|
| Parent Screen Heading | System (SF Pro / Roboto) | 24sp | Bold |
| Parent Screen Body | System | 16sp | Regular |
| Parent Screen Caption | System | 13sp | Regular, Text Secondary color |
| Child Screen Heading | Rounded Sans (Nunito) | 32sp | ExtraBold |
| Child Screen Body | Rounded Sans (Nunito) | 22sp | Bold |
| Child Screen Number/Answer | Rounded Sans (Nunito) | 48sp | ExtraBold |
| Practice Pad Question | Rounded Sans (Nunito) | 28sp | Bold |

**Accessibility Option:** Toggle "Dyslexia-Friendly Font" in Settings → switches all child-facing text to OpenDyslexic.

### 5.4 Component Library

#### Hero Card (Active Focus)

```
┌─────────────────────────────────────────────┐
│ ┌─────┐                                     │
│ │ 🪙  │  MONEY                    ACTIVE ◉  │
│ └─────┘  Grade 1 · CBSE · Math             │
│                                             │
│  ████████████░░░░░░  Day 3 of 5            │
│  Started Feb 10 · Target: Feb 14            │
│                                             │
│  [▶ CONTINUE TODAY'S MISSION]               │
│                                             │
└─────────────────────────────────────────────┘
```
- Full-width card. Subject color as left accent border.
- Progress bar with day count.
- Single CTA button. No decision required.

#### Topic Tile (Library / "What Kids Are Learning")

```
┌────────────┐
│    🪙      │
│   Money    │
│  ────────  │
│  247 kids  │  ← Social proof counter
│    ✓ ◉     │  ← Mastered checkmark (if applicable)
└────────────┘
```
- Square tile. Subject color as background tint.
- Icon + Title + Social proof.
- Gold checkmark overlay if mastered.
- Lock overlay if not available in free tier.

#### Mission Step Card (Campaign Day View)

```
┌─────────────────────────────────────────────┐
│  ① Read the Teaching Script          3 min  │
│     "Learn how to explain Money to Ira"     │
│                                    [START ▶] │
├─────────────────────────────────────────────┤
│  ② Quick Riddle                      1 min  │
│     "A fun brain teaser about coins"        │
│                                    [LOCKED 🔒]│
├─────────────────────────────────────────────┤
│  ③ Practice Pad · 10 Questions      10 min  │
│     "Hands-on practice with coin sums"      │
│                                    [LOCKED 🔒]│
└─────────────────────────────────────────────┘
  ┌───────────────────────────────────────────┐
  │  BONUS: Arcade · Print · Full Script      │
  └───────────────────────────────────────────┘
```
- Linear, sequential steps. Each unlocks after the previous is completed.
- Estimated time for each step.
- Bonus activities accessible independently.

#### Kid Mode Indicator

When Kid Mode is active, the app shows a persistent top banner:

```
┌─────────────────────────────────────────────┐
│ 🧒 IRA'S TURN · Tap & hold 3s to exit      │
└─────────────────────────────────────────────┘
```
- Bright, fun banner with child's name.
- Navigation is locked (no back button to Dashboard, no Settings access).
- Exit requires a 3-second long press (child won't figure this out; parent will).

### 5.5 Accessibility Requirements

| Requirement | Implementation |
|-------------|---------------|
| **Color blindness** | All color-coded information ALSO has an icon and/or text label. Never rely on color alone. Math = Blue + "📐 Math" label. English = Coral + "📖 English" label. |
| **Font scaling** | Respect system font size settings. Test at 1.0x, 1.5x, 2.0x. |
| **Dyslexia font** | Settings toggle → switches child-facing text to OpenDyslexic. |
| **Screen reader** | All interactive elements have semantic labels. Images have alt text. |
| **Touch targets** | Minimum 48x48dp for parent UI. Minimum 64x64dp for child UI. |
| **Contrast** | All text meets WCAG 2.1 AA contrast ratios (4.5:1 for body, 3:1 for large text). |
| **Motion sensitivity** | Respect "Reduce Motion" system setting. Replace animations with instant transitions. |

### 5.6 Empty States

Every screen must have a designed empty state with a clear CTA.

| Screen | Condition | Empty State Message | CTA |
|--------|-----------|-------------------|-----|
| Dashboard (Hero Card area) | No active campaign | "What is [Ira] learning in school right now?" | [Scan Homework] [Browse Topics] |
| Dashboard (Hero Card area) | Campaign just completed | "🎉 [Ira] mastered [Topic]! Ready for the next adventure?" | [Start Recommended: Subtraction] [Browse Library] [Remind Me Tomorrow] |
| Dashboard (Hero Card area) | All topics mastered for grade | "🏆 Incredible! [Ira] has mastered every topic for Grade [X]! Time to level up?" | [Explore Grade X+1] (if applicable) |
| Library (Subject tab) | No topics for this board | "We're adding [Board] topics soon! In the meantime, try our Common topics." | [Browse Common Topics] |
| Practice Pad | No questions loaded (offline + no cache) | "We need to download [Ira]'s practice questions. Connect to the internet and try again." | [Retry] |
| Report Card | No data yet | "Complete your first Campaign to see [Ira]'s progress here!" | [Go to Dashboard] |

### 5.7 Navigation Architecture

**Navigation Structure:**
```
Bottom Navigation (always visible, 3 tabs):
├── [🏠 Home] → Dashboard (Stack: Dashboard)
├── [📊 Progress] → Report Card (Stack: ReportCard)
└── [⚙️ Settings] → Settings (Stack: Settings)
```

**Navigation Hiding Rules:**
- Bottom nav is HIDDEN during: Teaching Script, Practice Pad, Quiz, Beat the Parent, Arcade, Car Mode, Kid Mode
- Bottom nav is VISIBLE during: Dashboard, Report Card, Settings, Campaign Day View overview, Certificate screen

**Back Button Behavior:**

| Current Screen | Back Goes To |
|----------------|-------------|
| Teaching Script | Campaign Day View |
| Practice Pad | Campaign Day View |
| Quiz | Campaign Day View |
| Beat the Parent (parent taking) | Campaign Day View |
| Beat the Parent (reveal) | Campaign Day View |
| Arcade | Campaign Day View (if launched from campaign) / Dashboard (if standalone) |
| Car Mode | Dashboard |
| Certificate | Campaign Day View (Day 5 complete state) |
| Topic Detail | Library (Dashboard tab) |
| Campaign Day View | Dashboard |
| Report Card | Dashboard (pops to root) |
| Settings sub-screen | Settings root |

**Back in Kid Mode:** Back button is DISABLED entirely in Kid Mode. Only the 3-second long press + parent PIN exits Kid Mode. System back gesture is intercepted.

**Deep Link URL Scheme:** `parenthero://`

| Deep Link | Destination | Auth Required |
|-----------|-------------|--------------|
| `parenthero://home` | Dashboard | Yes |
| `parenthero://campaign/{topicId}/day/{1-5}` | Campaign Day View | Yes |
| `parenthero://topic/{topicId}` | Topic Detail sheet | Yes |
| `parenthero://settings` | Settings root | Yes |
| `parenthero://settings/subscription` | Settings → Subscription | Yes |
| `parenthero://arcade/{gameType}` | Arcade game | Yes |
| `parenthero://carmode` | Car Mode | Yes |
| `parenthero://reportcard` | Report Card | Yes |
| `parenthero://notification/{notificationId}` | Screen mapped to notification type | Yes |

**Notification → Screen Mapping:**

| Notification Type | Screen Opened |
|-------------------|-------------|
| N01 Daily Spark | Campaign Day View (Daily Spark step) |
| N02 Campaign reminder | Campaign Day View (current day) |
| N03 Streak at risk | Dashboard |
| N04 Campaign check-in | Campaign Day View (current day) |
| N05 Streak milestone | Dashboard (streak counter highlighted) |
| N06 Campaign complete | Campaign Day View (Day 5 complete state) |
| N07 Certificate | Certificate screen |
| N08 Beat the Parent ready | Campaign Day View (Day 4 Beat the Parent) |
| N09 Pro upgrade | Paywall sheet |
| N10-N11 Inactive | Dashboard |
| N12 Payment issue | Settings → Subscription |

**Modal vs Full-Screen:**
- Full-screen (pushes onto navigation stack): Teaching Script, Practice Pad, Quiz, Arcade, Car Mode, Certificate, Beat the Parent
- Bottom sheet (dismissible): Paywall, Topic Detail, Campaign completion summary, "What's Next" chooser
- Dialog (alert): Delete account confirmation, Sign out confirmation, Clear cache confirmation

---

## 6. Complete User Flows

### 6.1 Flow A: First-Time User (Onboarding → First Campaign)

This is the most critical flow in the entire app. The user must go from "just installed" to "actively engaged in a Campaign" within 90 seconds.

```
STEP 1: Splash Screen (2 seconds)
  → ParentHero logo + tagline: "Your child's school superhero"

STEP 2: Value Proposition Screen (skippable)
  → Single screen with 3 bullet points:
     "✓ Follows your school's curriculum"
     "✓ Ready-made teaching scripts for parents"
     "✓ Certificates and rewards your child will love"
  → [Get Started] button

STEP 3: Child Profile Setup
  → "Let's set up your child's profile"
  → Input: Child's name (or nickname -- see Privacy section)
  → Input: Grade (1-5) via large tappable buttons
  → Input: Board via large tappable buttons:
     [CBSE] [ICSE] [Common Core / Other]
  → Note: Board options filtered by detected country.
     India → [CBSE] [ICSE] [State Board]
     US → [Common Core] [Other]
     Other → [Common Core] [Other]
  → [Continue]
  → NO AUTH REQUIRED. Guest mode. Data saved to shared_preferences.

STEP 4: First Topic Wizard ← NEW (Critical addition)
  → "What is [Ira] learning in school right now?"
  → Three options:

  [📷 Scan Homework / Diary]
    → Opens camera. OCR detects topic.
    → If detected: "Looks like [Ira] is learning [Money]! Start a 5-Day Campaign?"
    → If failed: "We couldn't read that clearly. Try again or pick from the list."
    → See Section 6.5 for full Scan edge cases.

  [📚 Browse Topics]
    → Opens filtered Library for child's Grade + Board.
    → User selects a topic. "Start a 5-Day Campaign for [Money]?"

  [🤷 I'm Not Sure]
    → Shows "What Kids Are Learning" section (see Section 7B.2):
      "Here's what other Grade 1 CBSE parents are working on this month:"
      [Money · 247 families] [Time · 189 families] [Subtraction · 312 families]
    → User selects one. "Great choice! Start a 5-Day Campaign?"

STEP 5: Campaign Kickoff
  → Topic is pinned. Campaign starts at Day 1.
  → Background: Cloud Function fires to pre-generate all Campaign content.
  → Meanwhile: Show Campaign Day 1 mission immediately (Script is generated first, fastest).
  → "Your 5-Day Campaign for [Money] begins now!"
  → [START DAY 1 MISSION ▶]

STEP 6: Dashboard (now populated)
  → User lands on Dashboard with Active Focus card showing.
  → "What Kids Are Learning" row populated.
  → Library accessible via bottom nav.
  → User is NEVER shown an empty Dashboard on first visit.
```

**Time Budget:**
- Step 1-2: 5 seconds
- Step 3: 20-30 seconds
- Step 4: 15-30 seconds
- Step 5: 5 seconds
- **Total to first Campaign: 45-70 seconds**

### 6.2 Flow B: Daily Return (Existing User with Active Campaign)

```
STEP 1: App Open
  → If Campaign is active: Dashboard shows Hero Card with progress.
  → Streak counter visible: "🔥 3-day streak!"

STEP 2: Tap Hero Card (or the [CONTINUE] button on it)
  → Goes to Campaign Day View (Module C).
  → Shows today's sequential mission steps.

STEP 3: Complete Mission Steps
  → Step 1: Teaching Script (parent reads). Mark complete.
  → Step 2: Quick Riddle. Mark complete.
  → Step 3: Practice Pad (handoff to child -- see Flow D). Mark complete.
  → "Day [X] Complete! 🎉" celebration animation.
  → +100 XP. Streak incremented.

STEP 4: Post-Day Options
  → "Great work! Come back tomorrow for Day [X+1]."
  → [BONUS: Try the Arcade] [BONUS: Print a Worksheet]
  → If Day 5 just completed → Flow C (Campaign Completion).
```

### 6.3 Flow C: Campaign Completion

```
STEP 1: Day 5 "Legend Quiz" Completed
  → Full-screen celebration: Confetti, sound effects, level-up animation if applicable.
  → "🏆 [Ira] has MASTERED [Money]!"
  → Certificate preview (beautifully designed, child's name, topic, date).
  → [Print Certificate] [Share] (Share generates an image for WhatsApp/Instagram)

STEP 2: "What's Next?" Screen ← NEW
  → "Amazing! What should [Ira] master next?"
  → [🌟 Recommended: Subtraction] ← AI-suggested next topic in curriculum sequence
  → [📚 Browse Library] ← manual selection
  → [😴 Take a Break · Remind Me Tomorrow]

  → If user picks "Take a Break":
    → Next day, push notification: "Ready to start [Ira]'s next adventure? Subtraction is waiting!"
    → Dashboard shows empty Active Focus with the recommended topic as a suggestion.

STEP 3: New Campaign Starts (if topic selected)
  → Seamless transition to new Campaign Day 1.
  → No gap between Campaigns for engaged users.
```

### 6.4 Flow D: Parent-to-Child Handoff

This flow happens whenever the app transitions from a parent-facing to child-facing activity (e.g., starting Practice Pad, starting Arcade, starting a Quiz).

```
STEP 1: Parent taps [START PRACTICE PAD] or [START ARCADE]

STEP 2: Handoff Screen
  → Full-screen card, warm colors, large text:
  → "Time for [Ira]'s turn! 🙌"
  → "Hand the phone to [Ira]."
  → Small text: "Kid Mode will be ON. Tap & hold 3 seconds to exit."
  → [READY, [IRA]! ▶] ← Large, child-friendly button

STEP 3: Kid Mode Activates
  → Top banner: "🧒 IRA'S TURN · Tap & hold 3s to exit"
  → Navigation locked: Back button disabled. Bottom nav hidden.
  → UI switches to child typography (Nunito, larger sizes).
  → Sound effects enabled.
  → Screen wake lock activated.

STEP 4: Activity Completes
  → Results screen (child-friendly): "You got 8 out of 10! ⭐⭐⭐"
  → [PLAY AGAIN] or [DONE]
  → On [DONE]: "Give the phone back to Mom/Dad!"
  → Kid Mode deactivates. Returns to Campaign Day View.
```

### 6.5 Flow E: Scan Diary / Worksheet (with Edge Cases)

```
STEP 1: User taps FAB (Scan button) or selects [Scan Homework] from First Topic Wizard

STEP 2: Camera opens with overlay guide
  → "Point the camera at the homework page"
  → Auto-capture when text is detected (or manual shutter button)

STEP 3: OCR Processing
  → On-device OCR (Google ML Kit) extracts text.
  → Text sent to Gemini for topic classification.
  → Prompt: "Given this text from a Grade [X] [Board] worksheet, identify the topic."

STEP 4: Result Handling (Branched)

  4a. SINGLE TOPIC DETECTED:
    → "Looks like this is about [Money]! 🪙"
    → [Start 5-Day Campaign] [Just Show Me the Cheat Sheet]

  4b. MULTIPLE TOPICS DETECTED:
    → "We found a few topics here:"
    → [Money] [Subtraction] ← Tappable chips
    → "Which one should we focus on?"
    → User selects one → proceeds as 4a.

  4c. TOPIC FROM HIGHER GRADE:
    → "This looks like a Grade [X+1] topic! [Ira] is ambitious! 💪"
    → [Try It Anyway] [Pick Something from Grade [X]]

  4d. TOPIC NOT IN CURRICULUM MAP:
    → "We don't have [Trigonometry] in our library yet."
    → "But here's what we can help with:" → Shows related topics.
    → [Browse Library]

  4e. OCR FAILED / UNREADABLE:
    → "We couldn't read that clearly. 📸"
    → [Try Again with Better Lighting] [Pick a Topic Manually]

  4f. NO TEXT DETECTED (blank page, non-text image):
    → "Hmm, we didn't find any text. Make sure the page is visible."
    → [Try Again] [Pick a Topic Manually]
```

### 6.6 Flow F: Guest-to-Registered Transition (Lazy Auth)

```
TRIGGER EVENTS (in order of when they appear):

1. SOFT PROMPT (dismissible) -- After completing Day 1 core activity:
   → Bottom sheet: "Save [Ira]'s progress?"
   → "Sign in to keep your data safe across devices."
   → [Sign In with Google] [Sign In with Phone]
   → [Not Now] ← Dismisses. Shown again after Day 2.

2. HARD GATE -- When attempting to start Day 2:
   → "To continue [Ira]'s Campaign, let's save your progress."
   → "It takes 10 seconds. We promise."
   → [Sign In with Google] [Sign In with Phone]
   → NO dismiss option. Auth required to proceed.

3. DATA MIGRATION on Auth:
   → All Guest data (child profile, Campaign progress, Practice Pad results)
     migrated from shared_preferences to Firestore under the new user ID.
   → Seamless. User doesn't lose anything.
```

**Rationale:** Day 1 is the "free taste." Day 2 requires auth because (a) it's a natural stopping point (user has already left and returned), and (b) we need a real user ID before serving more AI-generated content (cost control).

### 6.7 Flow G: Multi-Child Switching

```
LOCATION: Top-left of Dashboard, next to the app logo.

DISPLAY: Circular avatar of the currently selected child.
  → Tap to expand child selector (Netflix-style profile picker).
  → Shows all children in the account.
  → [+ Add Another Child] at the bottom.

SWITCHING:
  → Tap a different child's avatar.
  → Dashboard reloads with that child's:
    - Active Campaign (if any)
    - "What Kids Are Learning" (filtered by their Grade + Board)
    - Library (filtered by their Grade + Board)
    - Streak counter (per-child)
    - XP / Level (per-child)

ADDING A CHILD:
  → Same flow as Step 3 of onboarding (Name, Grade, Board).
  → Each child can have a different Board (e.g., Child 1 = CBSE, Child 2 = ICSE).
  → Then proceeds to First Topic Wizard for the new child.
```

---

## 7. Functional Modules (Detailed Specifications)

### Module A: Onboarding & Logic Engine

**Purpose:** Collect minimum viable information to personalize the experience.

**Inputs:**
- Child Name (or nickname)
- Grade (1-5)
- Board (CBSE / ICSE / Common Core / State Board)

**Logic:**

1. **Country Detection:** Auto-detect via IP geolocation on first launch.
   - Determines: Payment gateway (Stripe vs Razorpay), Board options, Currency, Academic calendar start month.
   - Fallback: If IP detection fails, ask user to select country manually.

2. **Academic Calendar Mapping:**
   | Country | Academic Start Month | Month Index 0 |
   |---------|---------------------|---------------|
   | India (CBSE/ICSE) | April | April = 0, May = 1, ... March = 11 |
   | US (Common Core) | September | September = 0, October = 1, ... August = 11 |
   | Other | September (default) | Configurable via Remote Config |

3. **Curriculum Loading:**
   - On child profile creation: Fetch `curriculum_map` JSON for (Country, Board, Grade).
   - Source: CDN-hosted static JSON bundle (NOT live Firestore reads).
   - Cache locally in Hive. Refresh only on app update or manual pull-to-refresh.
   - If curriculum map is empty/unavailable for selected Board: Show "Common Core" topics as fallback + toast: "We're adding [Board] content soon!"

4. **Lazy Auth:** See Flow F (Section 6.6). Guest mode with shared_preferences until Day 2 gate.

#### A.4 Phone OTP Implementation Details

**OTP Flow:**
1. User enters 10-digit phone number (India: +91 prefix added automatically; international: user selects country code)
2. Firebase Auth sends 6-digit OTP via SMS
3. OTP input screen: 6 individual digit boxes, auto-advance on input, auto-submit when 6th digit entered
4. OTP expiry: 15 minutes (show countdown timer on OTP screen: "Code expires in 12:34")
5. Resend: Available after 60-second cooldown. Button shows "Resend in 0:47" → "Resend Code" when timer expires
6. Max attempts: 3 incorrect OTPs → block for 15 minutes ("Too many attempts. Please try again in 15 minutes.")
7. On success: Navigate to child profile setup (new user) or Dashboard (returning user)

**Error Copy:**

| Error | User-facing message |
|-------|-------------------|
| Invalid phone | "Please enter a valid 10-digit phone number" |
| SMS not delivered | "We couldn't send a code to this number. Try Google Sign-In instead, or check the number and try again." |
| Rate limited by Firebase | "Too many requests. Please wait 15 minutes before trying again." |
| OTP expired | "This code has expired. Tap 'Resend Code' to get a new one." |
| Wrong OTP | "That code didn't match. [2 attempts remaining]" |

#### A.5 Apple Sign-In Implementation

**Required for:** iOS App Store submission (Apple requires Sign in with Apple when other third-party auth is offered)

**Implementation:**
- Library: `sign_in_with_apple` Flutter package
- Scopes requested: email (optional), fullName (optional)
- Apple may hide email — if email hidden, store Apple's relay email (e.g., `abc123@privaterelay.appleid.com`) as `email` field in Firestore
- Display name: If Apple provides name on first sign-in, store in user doc `display_name`. On subsequent sign-ins, Apple does NOT resend name — use stored value.
- If Apple provides no name (user deselected): show "Set Your Name" prompt after auth

**Firestore `auth_method` value:** `"apple"`

#### A.6 Guest Mode → Registered Account Migration

**Data Migration Flow:**
1. Guest session creates a local `guest_profile` in shared_preferences (NOT Firestore) with: child name, grade, board, active_topic_id, campaign_day_progress
2. When user authenticates (Google/Phone/Apple), a Cloud Function `migrateGuestData` is called with: `{uid, guestData}`
3. Cloud Function creates Firestore user doc + child doc with the guest data
4. On success: delete shared_preferences guest_profile; app continues seamlessly
5. If migration fails: keep shared_preferences data; retry on next app launch; user can manually trigger from Settings → Account

**Merge conflict (user previously had account on same phone):** Last-write wins. Guest progress overwrites any existing Firestore progress for same topic. Show toast: "Your recent activity has been saved to your account."

### Module B: The Dashboard (Home Screen)

**Purpose:** The command center. At a glance: what's active, what's popular, what's available.

**Layout (top to bottom):**

#### B.1: Top Bar
```
┌──────────────────────────────────────────────┐
│ (👧) [Ira ▾]    ParentHero     🔥 5   [⚙️]  │
└──────────────────────────────────────────────┘
```
- Left: Child avatar + name (tappable for multi-child switcher -- see Flow G).
- Center: App logo/wordmark.
- Right: Streak counter (flame icon + number) + Settings gear.

#### B.2: Section 1 -- "Active Focus" (Sticky Hero Card)

- Displays the single topic the parent has "Pinned" for the active Campaign.
- Visual: Full-width Hero Card (see Component Library 5.4).
- Shows: Topic name, subject, Day X of 5 progress bar, campaign start/target dates.
- Single CTA: [CONTINUE TODAY'S MISSION ▶].
- If no active campaign: Shows the empty state CTA (Section 5.6).

#### B.3: Section 2 -- "What Kids Are Learning" (Social Proof Row) ← REVISED

**Previous name:** "Trending Now" (pre-programmed, felt fake)
**New name:** "What Kids Are Learning"

**Concept:** Show REAL data about what other parents with the same Grade + Board are currently studying. This is genuine social proof, not manufactured "trending" data.

**Data Source:**
- Aggregate query: Count active Campaigns by topic_id, filtered by (Grade, Board, current_month ± 1).
- Updated hourly via Cloud Function. Stored as a summary document.
- Minimum threshold: Only show topics with 10+ active families (to avoid showing niche outliers).
- If insufficient data (early days): Supplement with `typical_month` curriculum data, labeled "Popular for [Month]" instead of showing a family count.

**Display:**
```
What Kids Are Learning 📊
──────────────────────────────────────────────

 [🪙 Money     ] [⏰ Time      ] [➖ Subtraction ]
 [ 247 families] [ 189 families] [ 312 families  ]

 ← Horizontal scroll →
```

- Horizontal scrolling row of Medium Tiles.
- Each tile shows: Topic icon, Topic name, "[N] families" count.
- Tapping a tile opens the Topic Detail/Preview screen with [Start 5-Day Campaign].
- If the user already mastered a topic: Gold checkmark overlay on the tile.

**Algorithm:**
```javascript
async function getWhatKidsAreLearning(grade, board) {
  // 1. Get real aggregated data
  const realData = await firestore
    .collection('topic_popularity')
    .where('grade', '==', grade)
    .where('board', '==', board)
    .orderBy('active_family_count', 'desc')
    .limit(10)
    .get();

  // 2. If enough real data (5+ topics with 10+ families each)
  if (realData.docs.filter(d => d.data().active_family_count >= 10).length >= 5) {
    return realData.docs.map(d => ({
      topic_id: d.data().topic_id,
      display_title: d.data().display_title,
      family_count: d.data().active_family_count,
      source: 'real'
    }));
  }

  // 3. Fallback: Use curriculum-based "Popular for [Month]" data
  const currentAcademicMonth = getAcademicMonth(grade, board);
  const curriculumTopics = await getCurriculumTopics(grade, board);
  const monthlyTopics = curriculumTopics.filter(
    t => Math.abs(t.typical_month - currentAcademicMonth) <= 1
  );

  return monthlyTopics.map(t => ({
    topic_id: t.universal_id,
    display_title: t.display_title,
    family_count: null, // Don't show fake numbers
    label: `Popular in ${getMonthName(currentAcademicMonth)}`,
    source: 'curriculum'
  }));
}
```

#### B.3.1 What Kids Are Learning — Launch Bootstrap Strategy

The minimum threshold of 10+ active families will not be met on Day 1. Bootstrap strategy:

| Phase | Threshold | Behavior |
|-------|-----------|---------|
| Launch Day 0-7 | 0-50 total active campaigns | Show "Popular This Month" static list (manually curated, seeded to Firestore before launch) |
| Day 8+ | Aggregate function runs | Switch to real-time counts when ≥1 topic has 5+ active campaigns |
| Full algorithm | Any topic has 10+ | Full algorithm per Annexure F |

**Seeded "Popular This Month" fallback data:** Stored in `app_config.trending_topics_fallback` Remote Config. Updated manually by admin until real data is sufficient. Format: array of `{topicId, fake_family_count}`.

**"What Kids Are Learning" board-aware filtering:**
- Always filter by child's board AND grade
- ICSE Grade 1 ≠ CBSE Grade 1 content — show board-matching topics only
- If no topics match the child's board+grade combination, show CBSE Grade equivalent as fallback with label "Suggested from similar curriculum"

#### B.4: Section 3 -- "Catch Up" (Conditional Row) ← NEW

**Visibility:** Only shown if the user joined mid-academic-year AND has not mastered topics from earlier months.

**Logic:** Show topics with `typical_month` earlier than the current academic month that the child has NOT mastered.

**Display:**
```
Catch Up · Earlier This Year 📖
──────────────────────────────────────────────

 [📐 Shapes    ] [🔢 Numbers   ] [➕ Addition   ]
 [ April topic ] [ May topic   ] [ July topic   ]

 ← Horizontal scroll →
```

- Label: "Catch Up -- Earlier This Year"
- Tiles show the month the topic was typically taught.
- Tapping opens Topic Detail/Preview.

#### B.5: Section 4 -- "The Library" (Full Catalog)

- Tab bar: [Math] [English] [Science/EVS]
- Each tab: Grid of all topics for the child's Grade + Board in that subject.
- Topic tiles: Icon + Name + Social proof count (if available) + Mastered checkmark (if applicable) + Lock (if paywalled).
- Sorted by curriculum sequence (typical_month ascending).

#### B.6: Floating Action Button (FAB)

- Position: Bottom-right, above bottom navigation.
- Icon: Camera/Scan icon.
- Label: "Scan"
- Action: Triggers Flow E (Scan Diary/Worksheet).
- Always visible on Dashboard.

#### B.7: Bottom Navigation

```
[🏠 Home]   [📊 Report Card]   [⚙️ Settings]
```
- 3 tabs. Clean and simple.
- Home = Dashboard (this screen).
- Report Card = Parent Progress Dashboard (Module J).
- Settings = Account, subscription, child profiles, accessibility, notifications.

#### B.5.1 Streak Counter — Edge Cases

**Daily Reset Timing:** Midnight in the user's local timezone (stored in `user.timezone`, populated from device locale on first app launch, updatable in Settings)

**Streak Increment Logic:**
- Streak does NOT increment on app open
- Streak increments only when: a learning activity is marked complete (Practice Pad session ≥5 questions, Campaign day step completed, Arcade session completed, Revision check completed)
- If streak was broken yesterday and user completes activity today: streak resets to 1 (not continued)
- `last_activity_date` uses ISO date string in user's LOCAL timezone (e.g., "2026-02-10" = Feb 10 in user's timezone)

**Visual on Dashboard:**
- Flame icon shows current streak count
- If streak was maintained TODAY: flame is orange/animated (color `#F97316`)
- If last activity was YESTERDAY (streak still valid but not yet maintained today): flame is gray with count shown ("5")
- If streak is broken (last activity was 2+ days ago): flame is absent; show "Start a new streak!" with CTA

### Module C: Campaign Day View (The Mission Hub) ← REDESIGNED

**Previous design:** "Mission Control" with 4 corners + central ring + bottom shelf (7 elements).
**New design:** Linear guided flow with bonus section.

**Entry Point:** Tapping the Active Focus Hero Card on the Dashboard.

**Layout:**

```
┌──────────────────────────────────────────────┐
│  ← Back to Dashboard                        │
│                                              │
│  MONEY · Day 3 of 5                         │
│  ████████████████░░░░░░░░                   │
│  Started Feb 10 · Target Feb 14              │
│                                              │
│  ─── TODAY'S MISSION ───                     │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │ ① Teaching Script            3 min  │    │
│  │    Learn how to explain Money       │    │
│  │                          [START ▶]  │    │
│  └──────────────────────────────────────┘    │
│  ┌──────────────────────────────────────┐    │
│  │ ② Quick Riddle               1 min  │    │
│  │    A brain teaser about coins       │    │
│  │                          [LOCKED 🔒] │    │
│  └──────────────────────────────────────┘    │
│  ┌──────────────────────────────────────┐    │
│  │ ③ Practice Pad · 10 Qs     10 min  │    │
│  │    Hands-on practice with sums      │    │
│  │                          [LOCKED 🔒] │    │
│  └──────────────────────────────────────┘    │
│                                              │
│  ─── BONUS ACTIVITIES ───                    │
│                                              │
│  [🎮 Arcade] [🖨️ Print] [📜 Full Script]    │
│  [🧠 Cheat Sheet]                           │
│                                              │
│  ─── PAST DAYS ───                           │
│                                              │
│  Day 1 ✅  Day 2 ✅  Day 3 ●  Day 4 ○  Day 5 ○│
│                                              │
└──────────────────────────────────────────────┘
```

#### C.1.1 Content Pre-Generation Loading States

When user pins a topic and Campaign content is being generated:

**State 1 — Fast path (content already cached):**
- Content available in <500ms
- No loading state shown; Campaign Day View opens immediately

**State 2 — Slow path (content being generated, first time):**
- Show "Preparing [child name]'s [Topic] Campaign..." loading screen
- Animated illustration (topic-relevant: math = pencil drawing equations, science = microscope, English = book)
- Progress indication: "Step 1 of 5: Creating Teaching Script..." (updates as each of 5 Gemini calls completes)
- Estimated time: "Ready in about 30 seconds"
- Cannot navigate away during this state (full-screen loading, no back button)
- On completion: auto-navigate to Campaign Day View Day 1

**State 3 — Generation failed:**
- After 3 retries (30s each), show error screen
- "We had trouble preparing this campaign. [Try Again] [Choose Different Topic]"
- "Try Again" re-triggers the Cloud Function
- "Choose Different Topic" returns to Dashboard Library

**Practice Pad Progress on Crash:**
- Answer results are written to Hive LOCAL CACHE after EACH question answer (not at session end)
- On app relaunch after crash: if incomplete session exists in Hive, show "Continue where you left off? [Resume] [Start Over]"
- "Resume" restores from question N+1; "Start Over" clears the incomplete session

**Campaign Day Progress Sync:**
- Step completion is written to BOTH Hive (immediate, local) AND Firestore (async, within 5 seconds on good network)
- Firestore write failures are queued in Hive pending_sync and retried on next connectivity
- User never loses progress due to sync failure

#### C.5 Past Days Navigation

In Campaign Day View, the day indicator row shows:
- ✅ = completed day (tappable; opens read-only replay of that day's content)
- ● = current day (not tappable; user is already here)
- 🔒 = locked future day (not tappable)
- Free user on Day 4: shows paywall icon instead of 🔒

**Replaying a past day:**
- Opens the completed day's content in read-only mode (can re-read Teaching Script, review Practice Pad questions with correct answers shown, view quiz results)
- Cannot re-submit to change scores
- XP is NOT re-earned on replay
- "Replay" button in Teaching Script shows "(Review)" label in past-day mode

**5-Day Campaign Structure (Revised):**

Each day has a core mission (3 sequential steps) that must be completed to advance. Bonus activities are always accessible (within free/pro limits).

| Day | Theme | Step 1 (Parent) | Step 2 (Transition) | Step 3 (Child) | Unlocks |
|-----|-------|-----------------|---------------------|----------------|---------|
| **Day 1: LEARN** | Understand the topic | Teaching Script | Riddle | Practice Pad (10 Qs) | Campaign content cached. Basic Arcade available. |
| **Day 2: PRACTICE** | Build fluency | Revised Script (focus on pitfalls) | Story (topic-related) | Practice Pad (15 Qs, harder) | More Arcade levels. |
| **Day 3: PLAY** | Gamify the learning | Quick Recap (3 key points) | Activity suggestion (physical) | Arcade Mode (full) | Full Arcade unlocked. |
| **Day 4: CHALLENGE** | Test understanding | -- | -- | "Beat the Parent" Quiz (async): parent takes 5-question quiz; paywall triggers after submission (free users); child takes same 5 questions (Pro only) | Beat the Parent available. |
| **Day 5: MASTER** | Prove mastery | -- | -- | "Legend Quiz" (10 Qs, mixed difficulty from `quizQuestions.legend`) | Certificate + Mastery Badge. |

**Day Advancement Rules:**
- Each day unlocks ONLY when ALL 3 core steps of the previous day are completed.
- No manual skipping. No calendar-based advancement.
- UI shows a motivational target date ("Target: Friday") but this is a suggestion, not a deadline.
- If user completes multiple days in one sitting, that's fine -- no artificial time gates.
- If user takes 10 real days to complete 5 activity days, that's also fine.

### Module D: Teaching Script & Assessments

**Purpose:** The Teaching Script guides the parent through explaining the topic. Assessments test understanding at various difficulty levels.

#### D.1 Script Card Interaction Model

**Card Structure:**
- Each script is broken into 4-6 cards (max 6)
- Card types: Hook (1), Step 1 (1), Step 2 (1), Step 3 (1), Common Pitfall (1), optional Practice Together (1)
- Progress indicator at top: "● ● ○ ○ ○" (filled dots for read, empty for unread)

**Tap-to-advance navigation:**
- User must tap "Next →" button to advance (not swipe — prevents accidental skipping by child)
- "← Back" button returns to previous card (available on all cards except first)
- TTS reads the current card's text when card loads. TTS auto-pauses if user taps "← Back" or "Next →"
- TTS "Play/Pause" button in top-right corner (▶ / ⏸ icon)

**Step Completion:**
- Teaching Script step is marked complete ONLY after user taps through to the LAST card
- Cannot skip directly to last card from card 1
- After last card: "Done! Ready for Practice?" → tapping "Start Practice →" marks step complete and opens Practice Pad

**TTS Fallback:**
- Android: TTS via `flutter_tts` using device TTS engine (Google TTS recommended)
- iOS: TTS via `flutter_tts` using AVSpeechSynthesizer (built-in, no install needed)
- TTS unavailable (no engine installed): show text-only mode with a banner: "Enable text-to-speech in your device settings for audio narration" (NOT a blocking error)
- TTS language: English only in Phase 1. Hindi TTS when Hindi scripts added in Sprint C

**"If Struggling" Block:**
- Rendered as a collapsible card at the END of the Teaching Script (after the last regular card)
- Default state: collapsed, showing only header "😅 Is [child name] finding this hard? Tap here"
- On tap: expands to show the fallback teaching strategy
- Does NOT require user to watch full script first — accessible at any time
- Does NOT mark an extra step as complete — it's supplementary

#### D.2 Standard Quiz (within Campaign flow)

**Setup:**
- Question count: Determined by Campaign day (10 on Day 1, 15 on Day 2, 20 on Legend Quiz).
- Difficulty: Auto-set by Campaign day. Cannot be manually changed during Campaign.

**Ladder Logic (Question Sequencing):**
```
Total Qs = N
├── First 20%: Warm-Up (Easy). Build confidence.
├── Next 60%: Core (Medium). Grade-appropriate.
└── Last 20%: Challenge (Hard). Stretch questions.
```

**Question Types by Subject:**

| Subject | Types Available |
|---------|----------------|
| Math | MCQ, Numeric Input, True/False, Drag-to-Order |
| English | MCQ, Fill-in-the-Blank, True/False, Drag-to-Match (word ↔ meaning) |
| Science/EVS | MCQ, True/False, Image Labeling (drag labels onto diagram), Sort-into-Categories |

**Gameplay Flow:**
```
Question displayed (child-friendly UI: large text, big buttons)
  → Child selects answer
  → CORRECT: Green flash ✓ + sound effect + "+10 XP" floater
  → WRONG: Red flash ✗ + "Explanation Sheet" slides up from bottom
      → Explanation Sheet has TWO tabs:
         [Show Me] ← Child-friendly visual explanation
         [How to Teach This] ← Parent-facing teaching script
      → [Got It] → Next question
  → After final question: Results screen
      → "You got [X] out of [N]! ⭐⭐⭐"
      → Stars: 1 star = 40%+, 2 stars = 70%+, 3 stars = 90%+
      → [Review Mistakes] [Continue]
```

#### D.3 "Beat the Parent" Mode (Async) ← REVISED

**Previous design:** Synchronous co-play (parent + child at same time).
**New design:** Asynchronous challenge.

**Flow:**
```
STEP 1: Parent receives push notification (or sees prompt in Campaign Day 4):
  "Can you beat [Ira] at [Money]? Take the 10-question challenge!"

STEP 2: Parent opens challenge. Takes 10 questions. Scores saved.
  UI: Regular quiz UI (adult mode -- no Kid Mode).

STEP 3: Later (or immediately), child is prompted:
  "Mom/Dad scored [7/10] on Money. Can you beat them? 🏆"

STEP 4: Child takes the SAME 10 questions. Score compared.
  → Child wins: "YOU WON! 🎉 You beat Mom by [X] points!"
  → Parent wins: "So close! Mom won by [X] points. Try again tomorrow?"
  → Tie: "It's a tie! You're both Money masters! 🤝"

STEP 5: Results shared with both parent and child.
  → Optional: "Share Result" → generates a shareable image for WhatsApp.
```

#### D.3.1 Beat the Parent — Question Pool

Beat the Parent uses a SEPARATE question set from the Day 5 Legend Quiz:
- **Legend Quiz (Day 5, Step 1):** 10 MCQ questions from `content_cache.quizQuestions.legend` array
- **Beat the Parent (Day 4, Step 2):** 5 questions from `content_cache.beatTheParent` array (separate Gemini generation call = Call 6, adding to the existing 5)
- Total AI calls per Campaign: 6 (not 5 as previously stated). Total cost: ~$0.012 per Campaign (updated from $0.01)
- Beat the Parent questions are HARDER by design — they include the "trap question" (Q4) and at least one multi-step problem

**Score:**
- 1 point per correct answer
- No time weighting
- Parent and child always answer the same 5 questions in the same order

#### D.3.2 Beat the Parent — Reveal Experience

**Sequence:**
1. Parent completes their quiz → sees own score only: "You got [X]/5! Now let [child name] try"
2. Parent hands phone to child → Child UI (large buttons, no back button) shows: "Can YOU beat Mum?" → [Start Quiz]
3. Child completes quiz → sees own score: "[child name] got [Y]/5!"
4. 3-second anticipation pause with drumroll audio cue (1-loop sound from assets)
5. Reveal screen:
   - If child wins: "[child name] WINS! 🏆 [child name]: [Y]/5 vs. You: [X]/5" + confetti animation (confetti_widget)
   - If parent wins: "You WIN this round! 🎉 But [child name] is getting closer..." + smaller celebration
   - If tie: "IT'S A TIE! 🤝 [X]/5 each — a perfect match!"
6. Below result: "[Share Result 📸]" button → generates shareable card image (canvas render: child name, topic, scores, ParentHero branding)
7. "[🏅 View Your Certificate]" button (Pro users; Day 5 available after this)

**Share Card Design:**
- 1080×1080px (Instagram square)
- Background: topic subject color (Math = `#1CB0F6`, English = `#FF6B6B`, Science = `#58CC02`)
- Text: "[child name] vs. Mum/Dad" · "[Topic] Challenge" · Scores side-by-side · "ParentHero" logo bottom-right
- Generated client-side using Flutter canvas rendering to PNG, shared via native share sheet

### Module E: The Daily Spark (Retention Content) ← RENAMED & REVISED

**Previous name:** "The Daily 3"
**New name:** "The Daily Spark"

**Previous trigger:** 4:00 AM.
**New trigger:** User-configurable time. Default: 7:00 AM. Set during onboarding or in Settings.

**Purpose:** Deliver one piece of fresh, delightful content daily to build the habit loop. Content is tied to the Active Focus topic.

**Content Rotation (varies daily to prevent monotony):**

| Day of Week | Content Type | Format | Example |
|-------------|-------------|--------|---------|
| Monday | Riddle | Push notification → opens in-app card | "I have a head and a tail but no body. What am I? 🤔" |
| Tuesday | Fun Fact | Push notification with full content | "Did you know? The first coins were made 2,600 years ago in Turkey! 🪙" |
| Wednesday | Mini Challenge | Push → in-app (3 quick questions) | "Quick! Can [Ira] solve 3 coin problems in under a minute?" |
| Thursday | Story Snippet | Push → in-app reading card | "The Story of the Magic Coin Jar (Part 1)..." |
| Friday | Activity Idea | Push with full content | "Fun Friday: Set up a pretend shop at home! Give [Ira] play coins and..." |
| Saturday | Recap Quiz | Push → in-app (5 Qs from the week) | "Weekend review: How much does [Ira] remember from this week?" |
| Sunday | (Sunday Printer -- see Module F) | Separate flow | Certificate, Worksheet, Fridge Art |

**Delivery Mechanism:**
- Scheduled local notification at user's preferred time.
- Content pre-generated as part of Campaign content (Day 0 pre-generation).
- Tapping notification opens the specific content card in-app.
- If notification is dismissed: Content appears as a banner on the Dashboard next time the app is opened.

### Module F: The Sunday Printer (Physical Rewards)

**Trigger:** Sunday at 9:00 AM (local notification).

**Purpose:** Bridge the digital-physical gap. Give families tangible artifacts of learning.

**Content Generated (3 items):**

#### F.1 Certificate of Achievement
- **When:** After Campaign Day 5 is completed (regardless of day of week). Also available on Sundays for partially completed Campaigns as "Progress Certificate."
- **Design:** A4 landscape. Child's name (large, script font). Topic name. Date. Stars earned. "Certified [Topic] Hero" title. Decorative border in subject color.
- **Generation:** Client-side PDF using the `pdf` package. No server round-trip needed.
- **Free tier:** 1 Certificate per month (preview shown for others with [Unlock with Pro] button).
- **Pro tier:** Unlimited.
- **Share:** Generate as image for WhatsApp/Instagram sharing (viral loop).

#### F.2 Mistake Worksheet
- **Content:** Questions the child got WRONG during the past week (from Practice Pad + Quizzes). Re-presented as a printable worksheet.
- **Logic:** Collate all incorrect answers from the week. Group by type. Add 2 "bonus" questions per mistake to reinforce the concept.
- **Design:** A4 portrait. Clean layout. Space for handwritten answers. Child's name at top.
- **Free tier:** Preview only (blurred content).
- **Pro tier:** Full PDF download.

#### F.3 Fridge Art (Coloring Page)
- **Content:** A topic-themed coloring page outline.
- **Source:** Pre-designed SVG outlines stored in Cloud Storage. Mapped by `topic_id`.
- **Examples:** Money → Coin and piggy bank outline. Shapes → Geometric pattern. Animals → Animal scene.
- **Design:** A4 portrait. Bold outlines suitable for young children.
- **Free/Pro:** Available to all (low cost to serve, high delight value, builds goodwill).

### Module G: Car-Schooling Mode ← REVISED ACCESS

**Purpose:** Transform commute time into learning time. Audio-first, hands-free for the driver.

**Entry:** Dashboard → Swipe right from edge or tap [🚗 Car Mode] in Settings quick-access.

**UI:**
- Full dark mode (#111827 background).
- Maximum 3 elements on screen at any time.
- Touch targets: Minimum 80x80dp (extra large for passenger-seat child).
- Screen wake lock active (using `wakelock_plus`).

**Features:**

#### G.1 Mental Math DJ (Math)
- App reads a math question aloud via TTS.
- Child answers verbally. Parent confirms: [✓ Correct] [✗ Wrong] (two huge buttons).
- Or child taps answer from 4 large buttons (if in passenger seat).
- Questions sourced from Active Topic (offline cache).
- Background music: Optional gentle beat (toggleable).

#### G.2 Spelling Bee (English)
- App reads a word aloud via TTS. Optionally uses it in a sentence.
- Child spells it verbally. Parent confirms.
- Words sourced from Active Topic vocabulary list.

#### G.3 Quiz Show (Any Subject)
- App reads a quiz question aloud. 4 answer options read aloud.
- Child answers verbally or taps.
- Tracks score with audio feedback ("Correct! 3 in a row!").

**Offline Requirement:** Car Mode MUST work fully offline. All questions, TTS, and logic run locally.

**Access (Revised):**
- **Free tier:** 5 minutes per session (then soft prompt: "Unlock unlimited Car Mode with Pro!"). One free session per day.
- **Pro tier:** Unlimited.

**Rationale:** Giving a taste of Car Mode during a commute is a powerful conversion moment. Fully locking it means the parent never discovers it.

#### G.1.1 Free Tier 5-Minute Limit — UX Flow

**Timer behavior:**
- Timer starts when Car Mode session begins (content starts playing)
- Counts DOWN from 5:00
- At 2:00 remaining: gentle bell sound + overlay banner (non-blocking): "2 minutes left in free mode"
- At 0:00: content pauses mid-sentence; full-screen overlay: "Your free session has ended. Keep the learning going with Pro!"
  - [Upgrade to Pro] (primary)
  - [End Session] (secondary, returns to Dashboard)
- CANNOT resume the same session as free user (even if paywall is dismissed)
- 1 free session per day: tracked in Firestore `user.car_mode_last_free_date`; resets at midnight local time

**Content Sourcing Hierarchy:**
1. Active Campaign topic (primary): questions from `content_cache` for active topic
2. Most recently completed topic (fallback): if no active campaign, use last mastered topic
3. Random mastered topic (if multiple): random selection from user's `mastered_topics` array
4. If zero mastered topics: show "Start a Campaign first to unlock Car Mode content" and exit Car Mode

**Session Content Flow:**
- Mental Math DJ: 20 questions per session (pre-loaded from cache before session starts)
- Questions rotate through EASY → MEDIUM → HARD (7 easy, 8 medium, 5 hard)
- No repeated questions within a single session
- After 20 questions: "Great session! [child name] answered X correctly. [Play Again] [End Session]"

### Module H: The Practice Pad (Digital Worksheet) ← REVISED LAYOUT

**Purpose:** Increase session duration to 15-20 minutes. The core "practice" activity of every Campaign day.

**Setup:**
- Parent (or Campaign flow) selects question count: 10 / 20 / 50.
- Difficulty auto-set by Campaign day (or manual in free-play mode).

#### H.1 Layout -- Swipe-Page Model (Revised from Split Screen)

**Previous design:** Split screen (question on top, whiteboard on bottom). Problem: whiteboard too small on mobile.

**New design:** Swipe between pages.

```
PAGE 1: THE QUESTION
┌──────────────────────────────────────────────┐
│                                              │
│  Question 3 of 10                    ⏱ 2:34  │
│                                              │
│           ┌───────────────────┐              │
│           │                   │              │
│           │   15  −  7  =  ?  │              │
│           │                   │              │
│           └───────────────────┘              │
│                                              │
│       Swipe left to work it out →           │
│                                              │
│   ┌─────────────────────────────────────┐   │
│   │  [1] [2] [3] [4] [5]              │   │
│   │  [6] [7] [8] [9] [0]              │   │
│   │  [⌫ Delete]     [✓ Submit]         │   │
│   └─────────────────────────────────────┘   │
│                                              │
│  Answer: [  8  ]                             │
│                                              │
└──────────────────────────────────────────────┘

PAGE 2: THE WHITEBOARD (swipe left to access)
┌──────────────────────────────────────────────┐
│  Q3: 15 − 7 = ?              [← Back to Q]  │
│  ┌──────────────────────────────────────┐    │
│  │                                      │    │
│  │    (Full-screen whiteboard canvas)   │    │
│  │                                      │    │
│  │    Child can scribble, draw,         │    │
│  │    work out the problem here.        │    │
│  │                                      │    │
│  │                                      │    │
│  │                                      │    │
│  │                                      │    │
│  └──────────────────────────────────────┘    │
│  [🗑 Clear] [↩ Undo]         [← Back to Q]  │
└──────────────────────────────────────────────┘
```

- **Page 1:** Question + Number Pad for answer entry. Clean, focused.
- **Page 2:** Full-screen whiteboard for working out. Question shown in a small header bar for reference.
- **Swipe gesture:** Left = whiteboard, Right = question/answer.
- **Submit:** Only on Page 1 via the Number Pad [✓ Submit] button.

#### H.2 Subject-Specific Interaction Models

The Practice Pad adapts its input method based on the subject:

| Subject | Question Format | Input Method | Example |
|---------|----------------|-------------|---------|
| **Math** | Arithmetic, word problems | Number Pad + Whiteboard | "15 − 7 = ?" → Numeric input |
| **English** | Fill-in-blank, grammar | Text Keyboard + Word Bank | "The cat ___ on the mat" → Drag "sat" from word bank |
| **English (Spelling)** | Spell the word | Letter Tiles (drag to arrange) | Hear "APPLE" → arrange [A] [P] [P] [L] [E] |
| **Science/EVS** | Identify, classify, label | MCQ buttons / Drag-to-Sort | "Which is a fruit?" → Tap the correct image |
| **Science/EVS** | Diagram labeling | Drag labels onto image | Drag "Root," "Stem," "Leaf" onto plant diagram |

#### H.2.4 Multi-Select Question Type (Science)

Some Science questions require selecting ALL correct answers (not just one). This requires a new input type:

**UI:** Checkbox-style grid (2×N layout)
- Options shown as rounded-rectangle tiles with checkboxes
- Selected state: blue border + checkmark + tinted background
- User can select 1–4 options
- "Check Answer" button below (greyed out until ≥1 option selected)
- No auto-submit (unlike MCQ which auto-submits on single tap)

**Correct answer logic:** ALL selected options must match the correct set exactly (order irrelevant). Partial credit is NOT given.

**Example:** "Which of these are parts of a plant? [Roots ✓] [Stem ✓] [Petals ✓] [Engine ✗] [Leaves ✓]"

**Data format in `content_cache.practicePadQuestions`:**
```json
{
  "questionId": "sq-001",
  "answerType": "multiSelect",
  "correctAnswers": ["roots", "stem", "petals", "leaves"],
  "options": ["roots", "stem", "petals", "engine", "leaves"],
  "childExplanation": "...",
  "parentExplanation": "..."
}
```

#### H.4 Whiteboard Interaction Spec

**Rendering:** Full-width canvas below question card, accessed by swiping left

**Drawing:**
- Single black pen only (Phase 1). Color picker and thickness in Phase 2.
- Stroke: 3px default width, smooth bezier curves
- Undo: removes last stroke (not per-pixel)
- Clear: removes all strokes with confirmation ("Clear your work?")

**Submission:**
- Whiteboard is OPTIONAL — user can skip to answer without drawing
- Drawing is NOT saved to Firestore or Hive (ephemeral per-question; cleared when moving to next question)
- "Back to Question →" button on whiteboard navigates back to question (swipe right also works)

**Timer Behavior:**
- Timer counts UP from 0:00 (not a countdown; no time limit)
- Timer pauses when: app goes to background, user exits Practice Pad
- Timer DOES NOT pause when user swipes to whiteboard
- Timer is VISIBLE in session summary at end ("You completed 10 questions in 8:34")
- Per-question time is NOT logged to Firestore (only total session duration)

#### H.3 Feedback & Results

- **Per question:** Correct → green flash + sound + "+10 XP". Wrong → red flash + sound + explanation sheet (with dual-mode: child "Show Me" + parent "How to Teach").
- **End of session:**
  ```
  🌟 Practice Complete! 🌟

  You got 8 out of 10!  ⭐⭐⭐
  Time: 8 minutes 34 seconds

  +80 XP earned

  [Review Mistakes] [Try Again] [Done]
  ```
- Wrong answers are saved for the Sunday Worksheet and Spaced Repetition system.

### Module I: The Arcade (Gamified Drills) ← REVISED

**Previous design:** 3 generic mini-games (Speed Match, Bubble Pop, Time Trial).
**New design:** 1 deep, polished game per subject -- purpose-built for the content type.

**Purpose:** Dopamine loop. Short, intense sessions (2-5 minutes). Builds automatic recall.

#### I.1 Math Arcade: "Number Rush"

- **Concept:** Falling number problems. Answer before they hit the ground.
- **Mechanic:** A math problem falls from the top of the screen. Child taps the correct answer from 4 options before it reaches the bottom. Speed increases with each correct answer.
- **Scoring:** Points per correct answer. Multiplier for streaks. Leaderboard (personal bests, NOT global -- we don't compare children).
- **Difficulty:** Adjusts to Active Topic. If topic is "Money," questions involve coin values. If topic is "Addition," questions are addition facts.
- **Session:** Unlimited time. 3 lives (free) / unlimited (Pro). Lose a life per wrong answer.

#### I.2 English Arcade: "Word Builder"

- **Concept:** Wordle-meets-Scrabble for kids.
- **Mechanic:** Given a clue (definition or image), child builds the word by dragging letter tiles into slots. Hints available (reveal a letter).
- **Scoring:** Points for speed and accuracy. Bonus for no hints used.
- **Difficulty:** Word complexity matches Active Topic. "Naming Words" = simple nouns. "Action Words" = verbs.
- **Session:** 10 words per round. 3 rounds per session (free) / unlimited (Pro).

#### I.3 Science/EVS Arcade: "Sort It!"

- **Concept:** Rapid-fire sorting/classification game.
- **Mechanic:** Items appear on screen. Child drags each into the correct category bucket. E.g., "Living" vs "Non-Living," "Herbivore" vs "Carnivore," "Solid" vs "Liquid."
- **Scoring:** Points for speed and accuracy. Combo multiplier for consecutive corrects.
- **Difficulty:** Categories match Active Topic.
- **Session:** Timed (60 seconds). Aim for high score. 3 plays (free) / unlimited (Pro).

**Unlock Rule:** Arcade is accessible from Day 1 of a Campaign as a "Bonus" activity. Full Arcade mode (all levels, leaderboard) unlocks after Day 3 core completion.

#### I.1.1 Number Rush — Difficulty Tuning

**Speed Progression:**
- Start speed: 3.0 seconds per question (very slow)
- On each correct answer: speed increases by 0.15 seconds (3.0 → 2.85 → 2.70...)
- On each wrong answer: speed decreases by 0.1 seconds (slows down slightly as safety net)
- Minimum speed: 0.75 seconds per question (max challenge, cannot go faster)
- Speed is visually indicated by progress bar color: green (>2.0s) → yellow (1.0-2.0s) → red (<1.0s)

**Session Length:** 30 questions per session (or until all 3 lives lost). Score = total correct answers.

#### I.2.1 Word Builder — Difficulty Sequencing

**Word presentation order (NOT random):**
- Always start with 3 Easy words (3-4 letters, common: "cat", "dog", "sun")
- Then 4 Medium words (4-5 letters)
- Then 3 Hard words (6+ letters, topic-specific: "addition", "fraction")
- Total: 10 words per session. Score = correct words in a row (streak).

#### I.3.1 Sort It! — Bucket Count

**3 buckets per round** (not 5; changed from original spec based on usability for Grade 1-2 children)
- Round 1: 3 buckets, 9 items to sort (3 per bucket)
- Round 2: 3 buckets, 12 items
- Round 3: 3 buckets, 15 items

**Drag target sizing:** Minimum 64×64dp per bucket label + 56×56dp per draggable item (accessibility minimum for touch targets for young children)

#### I.4 Free Tier Quota — Specification

- **"3 plays/day"** = 3 SESSION starts PER GAME TYPE per day
  - So: 3 Number Rush sessions + 3 Word Builder sessions + 3 Sort It! sessions = up to 9 total daily plays on free tier
- **Quota reset:** Midnight in user's local timezone (same as streak reset)
- **Tracking:** `user.arcade_plays_today.{gameType}` counter in Firestore; reset by scheduled Cloud Function at midnight
- **When quota reached:** "You've used your 3 free Number Rush plays today. Come back tomorrow, or get unlimited plays with Pro." Non-dismissible until user taps [OK] or [Upgrade]

#### I.5 Arcade Tutorial — First Play

On first session of each game type, a 1-screen tutorial overlay appears BEFORE gameplay starts:
- Number Rush tutorial: Shows a sample question with an animated answer selection; "Tap the answer before the bar runs out!"
- Word Builder tutorial: Shows a scrambled word with animated letter tiles; "Tap the letters in order to spell the word!"
- Sort It! tutorial: Shows 1 item being dragged to a bucket; "Drag each item to the right bucket!"
- Tutorial is skipped on all subsequent sessions
- `user.arcade_tutorial_seen.{gameType}: true` stored in Firestore

### Module J: Parent Report Card (Progress Dashboard) ← NEW

**Purpose:** Give parents visibility into their child's learning progress. Retention driver -- parents won't cancel a subscription when they can see growth.

**Entry:** Bottom navigation → [📊 Report Card] tab.

**Layout:**

#### J.1 Overview Header
```
┌──────────────────────────────────────────────┐
│  [Ira]'s Progress                            │
│                                              │
│  Level: ADVENTURER (Level 4)    XP: 1,200   │
│  ████████████░░░░░░ → Next: HERO at 2,000   │
│                                              │
│  🏆 Topics Mastered: 4    🔥 Streak: 5 days │
│                                              │
└──────────────────────────────────────────────┘
```

#### J.2 Subject Breakdown
```
MATH          ████████████████░░░░  80% (8/10 topics)
ENGLISH       ██████████░░░░░░░░░░  50% (4/8 topics)
SCIENCE/EVS   ████░░░░░░░░░░░░░░░░  25% (2/8 topics)
```
- Bar chart showing % of topics mastered per subject.
- Tappable to drill into topic-level detail.

#### J.3 Weekly Activity Chart
- Bar chart: Sessions per day for the last 7 days.
- Metrics shown: Total practice time, questions answered, accuracy rate.

#### J.3.1 Session Definition for Analytics

A "session" for Report Card purposes = one of:
- A completed Practice Pad run (minimum 5 questions answered)
- A completed Campaign day step
- A completed Arcade game (any result)
- A completed Revision check

Firestore: each session is logged as a document in `users/{uid}/children/{childId}/sessions/{sessionId}` with fields: `type`, `topic_id`, `date`, `duration_seconds`, `correct_count`, `total_count`

#### J.4 Strengths & Weaknesses
- AI-generated summary (refreshed weekly):
  ```
  "Ira is strong in Addition and Shapes but struggles
   with word problems involving Money. The Practice Pad
   shows consistent errors with 'change calculation'
   questions. We recommend extra practice on this."
  ```
- Actionable: [Practice Money Word Problems] button links to Practice Pad with filtered questions.

#### J.4.1 AI Strengths & Weaknesses — Implementation

**Trigger:** Cloud Function runs weekly (Sunday midnight) for all Pro users with ≥10 completed Practice Pad sessions in the past 30 days

**Algorithm:**
```
For each topic the child has practiced:
  topic_accuracy = correct_answers / total_answers for that topic
  if topic_accuracy >= 0.80: mark as "strength"
  if topic_accuracy < 0.50: mark as "needs_work"
  if 0.50 <= topic_accuracy < 0.80: mark as "developing"

Generate Gemini prompt:
"The child in Grade [X] has practiced [topics].
Their accuracy: [list of topic: accuracy%].
In 2 sentences, describe their strengths and one area to focus on.
Use encouraging, parent-friendly language. Do not mention percentages."
```

**Minimum data requirement:** If child has <10 total questions answered, show placeholder: "Keep practicing to see [child name]'s personalized insights here!" (no AI call made)

**Fallback if Gemini unavailable:** Show accuracy-based static text: "[child name] is doing great on [top 2 topics]! Consider spending more time on [bottom topic]."

#### J.5 Curriculum Pace Indicator ← NEW
```
Based on [CBSE] Grade [1] curriculum:

  📗 On Track: 6 topics (taught before February, mastered)
  📙 Behind: 2 topics (taught before February, not yet mastered)
  📕 Upcoming: 4 topics (to be taught March - March)
```
- Compares mastered topics against `typical_month` in curriculum map.
- Gives parents clear signal: is my child keeping up?

#### J.5.1 Curriculum Pace — Algorithm

```
current_month = months_since_academic_year_start (April = 0 for India, Sept = 0 for US)
expected_topics = curriculum_map.topics.filter(topic => topic.typical_month <= current_month)
mastered = user.child.mastered_topics (array of topicIds)

on_track_topics = expected_topics.filter(t => mastered.includes(t.topicId))
behind_topics = expected_topics.filter(t => !mastered.includes(t.topicId))
upcoming_topics = curriculum_map.topics.filter(topic => topic.typical_month > current_month)

Pace status:
  if behind_topics.length == 0: "ON TRACK 🎯 [X/Y topics mastered this year]"
  if behind_topics.length <= 2: "NEARLY THERE ⚡ [behind_topics[0]] and [1 other] to catch up"
  if behind_topics.length >= 3: "CATCHING UP 📚 [N] topics to review"
```

**UI Display:** Progress bar (on_track / expected_total), pace badge, list of behind topics with "[Start Campaign]" buttons

#### J.6 Revision Alerts
- List of mastered topics approaching revision date (see Retention Section 9.3).
- "[Money] mastered 3 weeks ago. Quick revision check? [Start 5-Question Check]"

**Access:**
- **Free tier:** Basic overview (Level, streak, topics mastered count).
- **Pro tier:** Full report with charts, strengths/weaknesses, curriculum pace, revision alerts.

### Module K: Settings & Account ← NEW (Previously undefined)

**Entry:** Bottom navigation → [⚙️ Settings] gear icon OR Dashboard top-right gear.

**MVP Scope:** Account, Child Profiles, Notifications, Subscription, Accessibility (basic), About. Sound Effects and Offline Content added in Phase 2.

---

#### K.1 Account

| Sub-setting | UI | Notes |
|-------------|-----|-------|
| **Display Name** | Editable text field | Parent's name; optional but shown in certificate copy |
| **Phone / Email** | Read-only with "Change" link | Triggers re-auth flow before change |
| **Sign Out** | Destructive button | Shows confirmation dialog |
| **Delete Account** | Destructive button (red) | Confirmation dialog + "This will delete all your data and cannot be undone." → Requires typing "DELETE" to confirm → Soft delete: account scheduled for deletion; permanently deleted after 30 days (DPDP/GDPR). See K.1.1 for full cascade. |
| **Export My Data** | Action button | Generates JSON export of all user + child + progress data; delivered via email |
| **View Data We Collect** | Info link | Opens in-app web view of Children's Privacy Addendum |

#### K.1.1 Delete Account — Implementation Details

**Soft delete (30-day window):**
1. User confirms deletion (types "DELETE")
2. Immediately: set `user.deletion_scheduled_at` in Firestore; sign user out
3. User can re-sign-in within 30 days to cancel deletion (shows "Account scheduled for deletion on [date]. [Cancel Deletion]" banner after sign-in)
4. After 30 days: Cloud Function permanently deletes: user doc, child doc(s), all session docs, Stripe/Razorpay customer record (via API)
5. `content_cache` documents are NOT deleted (shared, not per-user)
6. Firebase Auth account deleted immediately (user cannot sign in during soft-delete window)
7. If user tries to sign up again with same email/phone within 30-day window: "An account with this email is scheduled for deletion. [Recover Account] [Create New Account]"

#### K.2 Child Profiles

Shown as cards (one per child). Each card shows: Name · Grade · Board · Current Campaign (if any).

| Action | UI | Notes |
|--------|----|-------|
| **Edit child** | Tap card → edit form | Name, Grade (dropdown 1-5), Board (dropdown CBSE/ICSE/…) |
| **Switch active child** | Tap "Make Active" on card | Changes Dashboard to show this child's data; streak/XP are per-child |
| **Delete child** | Long-press card → "Delete [Name]'s profile" | Confirmation dialog; deletes child's Firestore data; Campaign progress and certificates NOT recoverable |
| **Add child** | [+ Add another child] button | Same onboarding form as initial setup |

**MVP note:** Only 1 child profile in MVP. Multi-child UI is Phase 3. The child management section is still shown in MVP for editing the single profile.

#### K.3 Notifications

| Setting | Default | Options |
|---------|---------|---------|
| **Daily Campaign Reminder** | ON | ON / OFF |
| **Reminder time** | 7:00 PM | Time picker (30-min increments, 6 AM – 10 PM) |
| **Streak Nudge** | ON (Phase 2) | ON / OFF — only shown once Streak feature ships |
| **Weekly Progress Summary** | ON (Phase 3) | ON / OFF — Phase 3 feature |
| **Milestone Alerts** | ON | ON / OFF — fires on Campaign completion, Level Up |

**Implementation:** All notifications use `flutter_local_notifications`. Reminder time stored in user Firestore doc (`notification_time` field). Cloud Function respects user's timezone (stored in `timezone` field from device locale).

#### K.4 Subscription

| State | UI Shown |
|-------|---------|
| **Free user** | Current plan: Free · [Upgrade to Pro] CTA |
| **Pro (monthly)** | Current plan: Pro Monthly · Renews on [date] · [Manage Billing] · [Cancel] |
| **Pro (annual)** | Current plan: Pro Annual · Renews on [date] · [Manage Billing] · [Cancel] |
| **Expired / grace** | Current plan: Pro (expires soon) · [Update Payment Method] |

- "Manage Billing" deep-links to Razorpay / Stripe customer portal.
- "Cancel" triggers: confirmation dialog → "Your Pro access continues until [renewal date], then switches to Free." → calls Stripe/Razorpay cancellation API → sets `cancel_at_period_end: true` in Firestore.
- Cancelled subscriptions still show active until period end; no immediate downgrade.

#### K.5 Accessibility

| Setting | Default | Options | Phase |
|---------|---------|---------|-------|
| **Dyslexia-Friendly Font** | OFF | ON / OFF (applies OpenDyslexic to child-facing screens) | MVP |
| **Text Size** | Normal | Normal / Large / XL | MVP |
| **TTS Speed** | 1.0x | 0.75x / 1.0x / 1.25x / 1.5x (slider) | MVP |
| **High Contrast Mode** | OFF | ON / OFF | Phase 2 |
| **Reduce Animations** | OFF | ON / OFF | Phase 2 |

**TTS Speed:** Stored in `accessibility.tts_speed` in Firestore user doc. Applied globally to all TTS calls (`flutter_tts` rate parameter).

#### K.6 Sound Effects

| Setting | Default | Notes | Phase |
|---------|---------|-------|-------|
| **Sound Effects** | ON | Toggle for all game sounds, celebration sounds | Sprint B |
| **Volume** | 80% | Slider (0-100%) | Sprint B |

**Note on phasing:** Sound effects in gameplay (Arcade, Practice Pad correct/wrong feedback, Beat the Parent drumroll, celebration sounds) are implemented in Sprint B (Week 15), not Phase 2. The Settings toggle for sound effects is also added in Sprint B. The "Phase 2" label previously listed here was incorrect — Phase 2 refers to advanced accessibility features and the full offline content management section (K.7), not sound effects.

#### K.7 Offline Content (Phase 2)

| Setting | Notes |
|---------|-------|
| **Pre-download Active Campaign** | Downloads all 5 days of content for current campaign to Hive cache |
| **Storage Used** | "X MB of offline content stored" |
| **Clear Offline Cache** | Frees storage; content re-downloads on next Campaign open |

#### K.8 About

| Item | Content |
|------|---------|
| **App Version** | "ParentHero v[x.y.z] (build [n])" |
| **Privacy Policy** | Opens in-app web view |
| **Terms of Service** | Opens in-app web view |
| **Contact Support** | Opens email client: support@parenthero.app |
| **Rate Us** | Deep link to Play Store / App Store review prompt |
| **Share App** | Native share sheet with referral link |

---

## 8. Monetization & Pricing

### 8.1 Tier Structure (Revised)

| Feature | Free (Guest/Registered) | Pro |
|---------|------------------------|-----|
| **Onboarding + First Topic Wizard** | Full access | Full access |
| **Dashboard + Library** | Full access | Full access |
| **"What Kids Are Learning"** | Full access | Full access |
| **Scan Diary/Worksheet** | 3 scans/day | Unlimited |
| **5-Day Campaign** | **Days 1-3 (Learn, Practice, Play)** | **Full Day 1-5** |
| **Practice Pad** | 10 questions/day | Unlimited |
| **Arcade** | 3 session starts/day per game type (see Section I.4) | Unlimited plays + all levels |
| **"Beat the Parent"** | Locked | Unlocked |
| **Car Mode** | 5 min/session, 1 session/day | Unlimited |
| **Sunday Printer - Certificate** | 1 free/month | Unlimited |
| **Sunday Printer - Worksheet** | Preview only | Full PDF |
| **Sunday Printer - Fridge Art** | Full access | Full access |
| **Report Card** | Basic (Level, streak, topics count) | Full (charts, insights, pace) |
| **Streak System** | Full access | Full access |
| **XP / Levels** | Full access | Full access |
| **Daily Spark** | Full access | Full access |
| **Revision Ring** | 1 revision check/week | Unlimited |
| **Custom Difficulty** | Locked | Unlocked |

### 8.2 Pricing (Managed via Remote Config)

#### India (INR, via Razorpay)

| Plan | Price | Notes |
|------|-------|-------|
| Pro Monthly | ₹299/month | Core plan |
| Pro Annual | ₹2,499/year (~₹208/month) | Save ₹1,089 (30% off) |
| Pro Family Monthly | ₹399/month | Up to 3 children |
| Pro Family Annual | ₹3,499/year (~₹292/month) | Save ₹1,289 |

#### International (USD, via Stripe)

| Plan | Price | Notes |
|------|-------|-------|
| Pro Monthly | $4.99/month | Core plan |
| Pro Annual | $39.99/year (~$3.33/month) | Save $19.89 (33% off) |
| Pro Family Monthly | $6.99/month | Up to 3 children |
| Pro Family Annual | $59.99/year (~$5.00/month) | Save $23.89 |

### 8.3 Paywall Placement Strategy

The paywall appears at these moments (in order of conversion potential):

1. **Day 3 → Day 4 transition** (Primary paywall): "Days 4-5 include the Legend Quiz and your Certificate! Unlock the full Campaign with Pro."
2. **Practice Pad 10-question limit hit**: "Ira is on a roll! Unlock unlimited practice with Pro."
3. **Arcade lives exhausted**: "Out of lives! Get unlimited Arcade plays with Pro."
4. **Car Mode 5-minute limit**: "Keep the learning going! Unlock unlimited Car Mode."
5. **Certificate #2 attempt**: "You've used your free Certificate this month. Unlock unlimited Certificates with Pro."

**Paywall Design Principles:**
- Never interrupt mid-activity. Always show the wall at a natural break point.
- Always show what the user is missing (preview the locked content).
- Use the child's name: "Unlock the full Campaign for [Ira]" (emotional trigger).
- Offer both Monthly and Annual on the paywall sheet. Highlight Annual savings.
- Include a "Restore Purchase" link.

### 8.4 Conversion Funnel (Target Metrics)

```
Install → Onboarding Complete:     80% (target)
Onboarding → First Campaign Start: 70%
Campaign Day 1 Complete:           60%
Campaign Day 2 Complete:           45%
Campaign Day 3 Complete:           35%  ← Free wall
Paywall Impression:                30%
Paywall → Trial/Purchase:          10-15%
Trial → Paid Conversion:           60%
──────────────────────────────────────────
Install → Paid:                    ~3-5%
```

**$20K MRR Calculation:**
- Average Revenue Per Paid User: ~$4/month (blended India + International)
- Required Paid Users: 5,000
- At 4% Install-to-Paid: Need 125,000 installs
- At 3% Install-to-Paid: Need 167,000 installs

### 8.5 Paywall UX: Soft Gate Mechanics

The Day 4 paywall uses a **soft gate** (preview → prompt) rather than a hard block. This respects the user's experience while driving conversion.

**Soft Gate Flow:**

> **Note on Day 4 structure:** Day 4 has a single campaign step — the "Beat the Parent" async quiz (parent takes the quiz). There are NOT 2 separate steps. The soft gate is timed to the completion of that one step, not a 2-minute timer.

```
User taps "Start Day 4" →
  Show Day 4 content: the Beat the Parent parent quiz (parent answers all 5 questions)
  → After parent submits their quiz answers (Step 1 complete):
      Immediately show paywall sheet (bottom sheet, non-dismissible)
      Copy: "You answered [score]/5! Unlock Day 4-5 to see how [child name] does —
             and earn the certificate."
      [₹299/month]  [₹1,999/year — Save 44%]
      [Restore Purchase]
  → If user taps "Maybe Later": return to Dashboard with banner "Day 4 unlocked when you go Pro"
```

**Why this moment works:** The parent has already invested effort (answered 5 quiz questions), making the paywall emotionally compelling — they want to see how their child compares. The reveal (child vs. parent scores) is locked behind Pro, creating a natural desire to unlock.

**Note on question count:** Beat the Parent uses 5 questions (not 10 as referenced in some earlier descriptions). See Section D.3.1 for the authoritative question count.

**Paywall Sheet Design:**
- Child's name and topic used in copy (personalized)
- Show what's locked: Day 4 script thumbnail + "Legend Quiz" + "Certificate Preview"
- Annual plan highlighted with "Most Popular" badge and savings amount
- No close button — only "Maybe Later" text link (bottom)
- "Maybe Later" fires `paywall_dismissed` analytics event and returns to Dashboard

**Hard Gate (fallback):** If user somehow reaches Day 4 content without triggering the soft gate (e.g., direct deep link), immediately redirect to paywall with no preview.

### 8.6 Downgrade & Grace Period Behavior

When a subscription fails renewal or is cancelled:

| Day | Action | User Experience |
|-----|--------|----------------|
| Day 0 (failure) | Payment fails; retry once after 6 hours | No user impact |
| Day 1 | Retry. In-app banner shown | "Trouble with your payment. Tap to update." |
| Day 2 | Retry. Push notification sent | "Your Pro access expires tomorrow. Update payment." |
| Day 3 | Retry. Final warning in-app | "Last chance: update your payment to keep Pro." |
| Day 4 | Downgrade to Free tier | "Your Pro subscription has ended. [Renew] [View Free Plan]" |

**What happens to data on downgrade:**
- All completed Campaign progress and certificates: **preserved** (never deleted)
- Active Campaign in progress: **visible but Day 4+ locked** (must re-subscribe to continue)
- Streak and XP: **preserved** (shown, but streak freeze feature disabled)
- User can re-subscribe anytime and immediately regain Pro access

---

## 9. Retention & Engagement Systems

### 9.1 The Streak System ← NEW

**Purpose:** Drive daily return habit. Duolingo's #1 retention mechanic, adapted for ParentHero.

**How It Works:**
- A streak is maintained by completing ANY learning activity in a day:
  - Complete a Campaign day step
  - Complete a Practice Pad session (minimum 5 questions)
  - Complete an Arcade session
  - Complete a Daily Spark challenge
  - Complete a Revision check
- The bar is intentionally low: even 2 minutes of activity counts. We want daily opens, not daily marathons.

**Visual:**
- Dashboard top-right: 🔥 flame icon + streak number.
- Streak milestone celebrations: 3-day, 7-day, 14-day, 30-day (confetti + badge unlock).

**Streak Protection:**
- **Free tier:** 1 "Streak Freeze" per month (auto-applied on a missed day).
- **Pro tier:** 3 "Streak Freezes" per month.
- Streak Freeze notification: "You didn't practice yesterday, but your Streak Freeze saved your 🔥 12-day streak! Don't forget today."

**Streak Notifications:**
- 6 PM (if no activity yet): "🔥 [Ira]'s [X]-day streak is still going! Do a quick 5-question practice to keep it alive."
- 9 PM (last chance): "⚠️ Last chance! [Ira]'s [X]-day streak ends at midnight."

#### 9.1.1 Streak — Edge Cases

**Freeze Auto-Apply Logic:**
- At 12:01 AM local time, a Cloud Function checks all users whose `last_activity_date` is 2 days ago (streak would break)
- IF user has `streak_freezes_remaining > 0`: auto-decrement freeze counter, keep streak alive, set `last_activity_date` to yesterday
- IF user has 0 freezes: mark streak as broken; reset `current_streak` to 0
- User receives N03 notification at 8 PM if streak is at risk (before midnight check)

**Freeze Availability Display:**
- Show freeze count as ice crystal icon next to streak counter on Dashboard: "🔥 12 🧊×2" (12-day streak, 2 freezes remaining)
- Free users: 1 freeze/month. Pro: 3 freezes/month.

### 9.2 XP & Level System ← NEW (Fully Designed)

**Purpose:** Give children a sense of progression and achievement that spans across Campaigns.

**XP Earning Table:**

| Activity | XP Earned | Notes |
|----------|----------|-------|
| Complete Campaign Day Step (each) | +50 XP | 3 steps × 50 = 150/day |
| Complete Practice Pad Session | +10 XP per question answered | 10 Qs = 100 XP |
| Arcade Session (per play) | +25 XP | Bonus +25 for new high score |
| Quiz Completion | +50 XP base + 5 XP per correct answer | Max ~150 XP for 20Q perfect |
| Daily Spark Completed | +25 XP | Daily engagement reward |
| Beat the Parent (child wins) | +100 XP | Big reward for effort |
| Campaign Mastery (Day 5 done) | +500 XP BONUS | Major milestone |
| Streak Milestone (7-day) | +200 XP BONUS | |
| Streak Milestone (30-day) | +1000 XP BONUS | |

**Level Progression:**

| Level | Title | XP Required | Cumulative XP | Badge |
|-------|-------|-------------|---------------|-------|
| 1 | Explorer | 0 | 0 | 🔰 |
| 2 | Learner | 500 | 500 | 📗 |
| 3 | Adventurer | 1,000 | 1,500 | 🗺️ |
| 4 | Hero | 2,000 | 3,500 | 🦸 |
| 5 | Champion | 3,000 | 6,500 | 🏅 |
| 6 | Legend | 5,000 | 11,500 | 👑 |
| 7 | Mastermind | 8,000 | 19,500 | 🧠 |
| 8 | Genius | 12,000 | 31,500 | ⚡ |
| 9 | Superhero | 20,000 | 51,500 | 🌟 |
| 10 | ParentHero Ultimate | 30,000 | 81,500 | 💎 |

**Level-Up Experience:**
- Full-screen celebration: Lottie animation of the new badge.
- Sound effect: Triumphant fanfare.
- Confetti burst.
- "🎉 [Ira] is now a HERO! Level 4 unlocked!"
- New badge displayed on Dashboard avatar.
- Share button: Generate an image showing the level-up (viral loop for WhatsApp).

**Important:** This is a PERSONAL progression system. We do NOT show global leaderboards or compare children. Each child's journey is their own.

#### 9.2.1 XP Earning — Timing Rules

- XP is earned AT THE MOMENT of activity completion (not batched or delayed)
- XP is written to Firestore immediately + synced to Hive local cache
- If offline: XP is stored in Hive pending_sync queue; Firestore updated on reconnection
- XP is NOT retroactively earned for activities done while offline (already counted in local cache; sync writes Firestore to match)

**Campaign Day XP:**
- Each of the 3 steps earns +50 XP upon step completion
- Day completion bonus (+25 XP) awarded when all 3 steps for a given day are completed
- If Step 1 completed on Monday and Steps 2+3 on Tuesday: +50 (Mon) + 50 (Tue) + 50 (Tue) + 25 (Tue) = 175 XP total, across 2 sessions

### 9.3 Spaced Repetition (Revision Ring) ← NEW

**Purpose:** Prevent knowledge decay on mastered topics.

**Algorithm:**
```
For each mastered topic:
  Schedule a "Revision Check" at intervals:
    - 1 week after mastery
    - 3 weeks after mastery
    - 8 weeks after mastery
    - 16 weeks after mastery (then stop -- deeply encoded)

  Each Revision Check = 5 quick questions from the topic's question bank.

  Scoring:
    - 80%+ correct (4/5): Mastery retained. Schedule next interval. ✅
    - 60-79% correct (3/5): "Rusty." Show in Report Card as "Needs Review."
        Recommend a Practice Pad session.
    - <60% correct (0-2/5): Mastery REVOKED. Gold checkmark removed.
        Topic appears as "Needs Redo" in Library. Can start new Campaign.
```

**Dashboard Integration:**
- When a Revision Check is due: Small badge on the Report Card tab.
- Report Card → Revision Alerts section shows due topics.
- "Quick Review: [Money] -- 5 questions, 2 minutes. [Start]"

**Notifications:**
- "[Ira] mastered Money 3 weeks ago. Quick 5-question check to keep the Gold badge!"
- Gentle, not aggressive. Maximum 1 revision notification per day.

**Access:**
- **Free tier:** 1 revision check per week.
- **Pro tier:** Unlimited revision checks.

---

## 10. Notification & Nudge Engine

### 10.1 Notification Channels

| Channel | Use Case | User Control |
|---------|----------|-------------|
| **Push Notification** | Daily Spark, Streak reminders, Campaign progress, Revision alerts | Per-category toggle in Settings |
| **In-App Banner** | Missed Daily Spark content, new features, subscription offers | Always shown; dismissible |
| **Local Notification** | Offline-safe reminders (streak, daily spark) | Follows push settings |

### 10.2 Complete Notification Schedule

| ID | Trigger | Time | Title | Body | Frequency |
|----|---------|------|-------|------|-----------|
| N01 | Daily Spark | User-set (default 7 AM) | Today's Spark 💡 | Content varies by day of week (see Module E) | Daily |
| N02 | Streak at risk | 6:00 PM | Keep the streak! 🔥 | "[Ira]'s [X]-day streak is still going! A quick practice keeps it alive." | Daily (only if no activity today) |
| N03 | Streak last chance | 9:00 PM | Last chance! ⚠️ | "[Ira]'s [X]-day streak ends at midnight. 5 questions is all it takes!" | Daily (only if no activity today AND streak > 2) |
| N04 | Campaign progress | 7:00 PM | Campaign check-in 📊 | "Day [X] of [Topic]: [Step name] is ready! [Y] minutes to complete." | Daily during active Campaign (if day not completed) |
| N05 | Campaign content ready | Immediate | Ready to go! 🚀 | "[Ira]'s [Topic] Campaign is prepared! Start Day 1 now." | Once per Campaign |
| N06 | Post-Campaign | Day after Day 5 | What's next? 🌟 | "After mastering [Topic], how about [Recommended Topic]? 312 families are doing it!" | Once |
| N07 | Beat the Parent | Campaign Day 4 | Challenge time! 🏆 | "Can you outscore [Ira] on [Topic]? Take the 5-question parent challenge!" | Once per Campaign |
| N08 | Sunday Printer | Sunday 9 AM | Sunday Rewards! 🖨️ | "[Ira]'s Certificate and Worksheet are ready to print!" | Weekly (Sundays) |
| N09 | Revision due | 10 AM | Quick review 🧠 | "[Topic] mastered [X] weeks ago. 5 questions to keep the Gold badge!" | Max 1/day |
| N10 | 48h inactive | 48h after last open | We miss you! | "[Ira] is on Day [X] of [Topic] -- just [Y] more days to the certificate! 🏅" | Once per inactive period |
| N11 | 7-day inactive | 7d after last open | Quick comeback | "It's been a week! [Ira]'s [Topic] Campaign is waiting. Start where you left off?" | Once |
| N12 | Streak milestone | On achievement | Streak milestone! 🎉 | "🔥 [X]-DAY STREAK! [Ira] is unstoppable! Share the achievement?" | On milestone |
| N13 | Level up | On achievement | Level Up! 🎮 | "🌟 [Ira] just became a [HERO]! Level [X] unlocked!" | On level-up |

**Design Principles for Notifications:**
1. **NEVER suggest quitting.** Always pull the user forward toward the next milestone.
2. **Always use the child's name.** Emotional connection.
3. **Always include a specific, small action.** "5 questions" not "keep learning."
4. **Respect frequency limits.** Max 3 push notifications per day across all categories.
5. **Respect user settings.** All categories togglable independently.

---

## 11. Analytics & Metrics Plan

### 11.1 Key Performance Indicators (KPIs)

| KPI | Target | Measurement |
|-----|--------|-------------|
| **MRR** | $20,000 by Month 12 | Stripe + Razorpay dashboards |
| **Install → Day 1 Activation** | 60%+ | % of installs that complete first Campaign Day 1 |
| **Day 7 Retention** | 30%+ | % of Day 0 users active on Day 7 |
| **Day 30 Retention** | 15%+ | % of Day 0 users active on Day 30 |
| **Free-to-Paid Conversion** | 8-12% | % of registered free users who convert |
| **Average Session Duration** | 12+ minutes | Firebase Analytics |
| **Sessions Per User Per Week** | 5+ | Firebase Analytics |
| **Campaign Completion Rate** | 40%+ | % of started Campaigns that reach Day 5 |
| **Avg Revenue Per Paid User (ARPPU)** | $4+/month | MRR / Paid users |
| **Churn Rate (Monthly)** | <8% | % of paid users who cancel in a month |

### 11.2 Event Tracking Plan

Every key user action fires a Firebase Analytics event. Events are grouped by module.

#### Onboarding Events

| Event Name | Parameters | Trigger |
|-----------|-----------|---------|
| `onboarding_started` | -- | User opens app for first time |
| `onboarding_child_created` | `grade`, `board`, `country` | Child profile saved |
| `onboarding_topic_wizard_shown` | -- | First Topic Wizard displayed |
| `onboarding_topic_wizard_action` | `action`: scan / browse / not_sure | User picks a path |
| `onboarding_first_topic_pinned` | `topic_id`, `method`: scan / browse / trending | First topic selected |
| `onboarding_completed` | `duration_seconds` | User reaches Dashboard with active Campaign |
| `auth_guest_started` | -- | Guest session created |
| `auth_prompt_shown` | `trigger`: day2_gate / soft_prompt | Auth wall appears |
| `auth_completed` | `method`: google / phone | User authenticates |
| `auth_prompt_dismissed` | -- | User dismisses soft prompt |

#### Dashboard Events

| Event Name | Parameters | Trigger |
|-----------|-----------|---------|
| `dashboard_viewed` | `has_active_campaign`: bool | Dashboard opened |
| `hero_card_tapped` | `topic_id`, `campaign_day` | Active Focus card tapped |
| `what_kids_learning_topic_tapped` | `topic_id`, `family_count` | Social proof tile tapped |
| `catch_up_topic_tapped` | `topic_id` | Catch Up row tile tapped |
| `library_tab_switched` | `subject` | User switches subject tab |
| `library_topic_tapped` | `topic_id`, `is_mastered`: bool | Library tile tapped |
| `fab_scan_tapped` | -- | Scan FAB tapped |

#### Campaign Events

| Event Name | Parameters | Trigger |
|-----------|-----------|---------|
| `campaign_started` | `topic_id`, `grade`, `board` | Campaign begins |
| `campaign_day_started` | `topic_id`, `day`: 1-5 | Day's first step opened |
| `campaign_step_completed` | `topic_id`, `day`, `step`: 1/2/3, `duration_seconds` | Step completed |
| `campaign_day_completed` | `topic_id`, `day`, `total_duration_seconds` | All 3 steps done |
| `campaign_completed` | `topic_id`, `total_duration_days` (real days), `total_xp_earned` | Day 5 completed |
| `campaign_abandoned` | `topic_id`, `last_day`, `days_since_last_activity` | No activity for 14 days |
| `post_campaign_action` | `action`: recommended / browse / break | "What's Next?" choice |

#### Practice Pad Events

| Event Name | Parameters | Trigger |
|-----------|-----------|---------|
| `practice_started` | `topic_id`, `question_count`, `source`: campaign / freeplay | Session begins |
| `practice_question_answered` | `topic_id`, `is_correct`: bool, `time_seconds`, `used_whiteboard`: bool | Answer submitted |
| `practice_completed` | `topic_id`, `correct_count`, `total_count`, `duration_seconds` | Session ends |
| `practice_limit_hit` | `topic_id` | Free user hits 10Q limit |

#### Arcade Events

| Event Name | Parameters | Trigger |
|-----------|-----------|---------|
| `arcade_started` | `game_type`: number_rush / word_builder / sort_it, `topic_id` | Game begins |
| `arcade_completed` | `game_type`, `score`, `is_high_score`: bool, `duration_seconds` | Game ends |
| `arcade_lives_exhausted` | `game_type` | Free user runs out of lives |

#### Monetization Events

| Event Name | Parameters | Trigger |
|-----------|-----------|---------|
| `paywall_shown` | `trigger`: day4_gate / practice_limit / arcade_lives / car_mode / certificate | Paywall displayed |
| `paywall_plan_selected` | `plan`: monthly / annual / family_monthly / family_annual | User picks a plan |
| `purchase_started` | `plan`, `gateway`: stripe / razorpay | Payment initiated |
| `purchase_completed` | `plan`, `gateway`, `revenue` | Payment successful |
| `purchase_failed` | `plan`, `gateway`, `error` | Payment failed |
| `subscription_renewed` | `plan`, `revenue` | Auto-renewal successful |
| `subscription_cancelled` | `plan`, `reason` (if provided) | User cancels |

#### Engagement Events

| Event Name | Parameters | Trigger |
|-----------|-----------|---------|
| `streak_incremented` | `streak_count` | Daily activity completed |
| `streak_broken` | `final_count` | Midnight with no activity (and no freeze) |
| `streak_freeze_used` | `streak_count` | Auto-freeze applied |
| `level_up` | `new_level`, `new_title`, `total_xp` | XP threshold crossed |
| `daily_spark_opened` | `content_type`, `day_of_week` | Daily Spark content viewed |
| `revision_check_completed` | `topic_id`, `score`, `mastery_retained`: bool | Revision quiz done |
| `certificate_generated` | `topic_id`, `format`: pdf / image | Certificate created |
| `certificate_shared` | `topic_id`, `channel`: whatsapp / instagram / other | Certificate shared |
| `beat_parent_parent_completed` | `topic_id`, `score` | Parent finishes their round |
| `beat_parent_child_completed` | `topic_id`, `score`, `parent_score`, `winner`: parent / child / tie | Child finishes their round |
| `kid_mode_activated` | -- | Kid Mode turned on |
| `kid_mode_deactivated` | `duration_seconds` | Kid Mode turned off |
| `car_mode_started` | `game_type` | Car Mode session begins |
| `car_mode_ended` | `game_type`, `duration_seconds`, `questions_answered` | Car Mode session ends |

### 11.3 Analytics Dashboard (Internal)

Set up Firebase Analytics custom dashboards for:
1. **Acquisition Funnel:** Install → Onboard → Pin Topic → Day 1 → Day 2 → Day 3 → Paywall → Purchase
2. **Engagement Dashboard:** DAU, WAU, MAU, session duration, sessions/user/week
3. **Revenue Dashboard:** MRR, ARPPU, conversion rate, churn rate, LTV
4. **Content Dashboard:** Most/least popular topics, Practice Pad accuracy by topic, Arcade engagement by game type
5. **Retention Curves:** Day 1/7/14/30/60/90 retention by cohort

---

## 12. Privacy, Compliance & Legal

### 12.1 Regulatory Framework

| Regulation | Jurisdiction | Key Requirements | ParentHero Compliance |
|-----------|-------------|-----------------|----------------------|
| **COPPA** | United States | Verifiable parental consent for data collection from children under 13. Limits on data collection. | Parent is the account holder. Child data is collected BY the parent. No direct child accounts. No advertising to children. |
| **DPDP Act 2023** | India | Data protection for children's data requires parental/guardian consent. Data minimization. | Same as COPPA approach. Data encrypted at rest (Firestore default). |
| **GDPR (Article 8)** | EU/UK | Parental consent for children under 16 (or 13-16 depending on member state). Right to erasure. | Account deletion available in Settings. Data export available. |
| **App Store Guidelines** | Apple / Google | Apps for children must comply with platform-specific family policies. | Declare "Made for Kids" category. No third-party analytics that track children (Firebase Analytics is first-party). No behavioral advertising. |

### 12.2 Data Collection Principles

1. **Minimum Viable Data:** We collect only what's needed to deliver the service.
   - Child name: Used for personalization. CAN be a nickname (encouraged in onboarding: "Enter your child's name or a fun nickname").
   - Grade + Board: Required for curriculum alignment.
   - Learning performance (scores, mistakes): Required for Report Card and adaptive difficulty.
   - We do NOT collect: child's photo, school name, exact age/birthday, location, contacts.

2. **Parent Ownership:** All data belongs to the parent's account. The parent can:
   - View all collected data (Settings → Account → View My Data)
   - Export all data as JSON (Settings → Account → Export Data)
   - Delete all data and account (Settings → Account → Delete Account → Confirmation)
   - Delete a specific child's data without deleting the account.

3. **Data Storage:**
   - User data: Firestore (Firebase servers, encrypted at rest by default).
   - Local cache: Hive with AES encryption (key stored in Flutter secure storage).
   - AI-generated content: Stored in `content_cache` collection. No PII in AI prompts (we send grade + board + topic, not child's name).

4. **Third-Party Data Sharing:** None. No advertising SDKs. No data sold. Firebase Analytics data stays within the project.

### 12.3 Required Legal Documents

| Document | Content | Location |
|----------|---------|----------|
| **Privacy Policy** | Full data collection disclosure. Children's data section. COPPA/DPDP specifics. | In-app (Settings) + Website |
| **Terms of Service** | Usage terms. Subscription terms. Cancellation policy. | In-app (Settings) + Website |
| **Children's Privacy Addendum** | Specific to children's data. What we collect, why, how long we keep it. | Linked from Privacy Policy |
| **Parental Consent Flow** | For US users: Verifiable parental consent mechanism (e.g., credit card micro-charge, or government ID upload). | In-app during registration (US users only) |

### 12.4 AI-Specific Privacy

- AI prompts NEVER include PII. Template: "Generate questions for Grade [X], [Board], Topic [Y]." No child name, no user ID.
- AI-generated content is cached and shared across users (same Grade + Board + Topic = same content). No per-child personalization in AI prompts.
- AI provider (Google Gemini) data processing agreement must be in place before launch.

### 12.5 US Parental Consent Flow (COPPA)

**Trigger:** When `user.country_code == "US"` AND user has a child profile

**Flow — inserted between Onboarding Step 3 (child profile) and Step 4 (First Topic Wizard):**

Screen: "One quick step for US families"
```
Header: "Confirming You're a Parent"

Body: "US privacy law (COPPA) requires us to verify that you're a parent
or guardian before collecting any information about your child."

Option 1 [Verify with Card]:
"We'll charge $0.00 to your card (immediately refunded) to confirm you're an adult."
→ Opens Stripe payment sheet with $0 charge
→ On success: set user.coppa_verified: true, continue to Step 4

Option 2 [Verify by Government ID]:
"Upload a photo of your government-issued ID. It's reviewed by our team and then permanently deleted."
→ Opens camera/file picker → uploads to temporary Cloud Storage (auto-deleted after 48h)
→ Email notification to admin for manual verification
→ Shows "Verification pending" screen; child profile created but limited to 3 questions/day until verified
→ On admin approval: push notification "Your account is verified! Full access unlocked."

[Already verified? Sign in] → for returning users
```

**Returning US users:** `user.coppa_verified: true` stored in Firestore. Consent flow skipped on re-auth.

**Non-US users:** Consent flow skipped entirely. No parental verification required (DPDP/GDPR handled via Terms acceptance at signup).

---

## 13. Error Handling & Fallback Matrix

Every external dependency has a defined fallback behavior.

| Dependency | Failure Scenario | User Impact | Fallback | UI Message |
|-----------|-----------------|-------------|----------|------------|
| **Gemini AI API** | API down or timeout (>10s) | Cannot generate new content | Serve questions from Firestore `question_bank` collection only. If question_bank is also empty, show cached content from Hive. If all caches empty, show error. | "We're preparing your content. Some features may be limited right now." |
| **Gemini AI API** | Rate limited | Same as above | Queue request. Retry with exponential backoff (4s, 8s, 16s). After 3 retries, fallback to DB. | Same as above (user doesn't see retries) |
| **Firestore** | Network error | Cannot read/write user data | Read from Hive local cache. Write to Hive pending sync queue. Sync when online. | "You're offline. Your progress will be saved when you reconnect." |
| **Firestore** | Permission denied | Cannot access data | Log error to Crashlytics. Force re-auth. | "Something went wrong. Please sign in again." |
| **Firebase Auth (SMS)** | SMS not delivered | Cannot authenticate | Offer alternative: [Try Google Sign-In] [Resend SMS] [Try a different number] | "Didn't receive the code? Try Google Sign-In or resend." |
| **Firebase Auth (Google)** | Google sign-in fails | Cannot authenticate | Offer alternative: [Try Phone Number instead] | "Google Sign-In failed. Try signing in with your phone number." |
| **Stripe / Razorpay** | Payment fails | Cannot upgrade | Show error. Suggest retry. Offer alternative payment method. | "Payment failed. Please try again or use a different payment method." |
| **Stripe / Razorpay** | Renewal fails | Subscription may lapse | 3-day grace period. Retry daily. Notify user. | "We couldn't process your renewal. Please update your payment method to keep Pro access." |
| **OCR (ML Kit)** | Image unreadable | Cannot detect topic from scan | Offer retry with tips (better lighting, less glare). Offer manual topic selection. | "We couldn't read that clearly. Try better lighting, or pick the topic manually." |
| **OCR → Gemini** | Topic not recognized | Cannot match to curriculum | Show closest matches. Offer manual selection. | "We're not sure what topic this is. Did you mean one of these? [Topic A] [Topic B] [Pick Manually]" |
| **TTS (flutter_tts)** | Engine unavailable | No audio in Car Mode / Scripts | Show text-only mode. Prompt user to install TTS engine. | "Text-to-speech isn't available. Please install Google TTS from the Play Store." |
| **Internet (General)** | Complete offline | Limited functionality | All child-facing activities work from cache. Dashboard shows cached state. "What Kids Are Learning" shows "Last updated X hours ago." Campaign progress saved locally. | Small banner: "You're offline. Practicing in offline mode." |
| **Local Storage (Hive)** | Corrupted cache | Lost local data | Re-download from Firestore on next online connection. User profile always in Firestore. | "Refreshing your data..." (transparent to user) |

---

## 14. Competitive Positioning

### 14.1 Competitive Landscape

| Competitor | Model | Price | ParentHero's Edge |
|-----------|-------|-------|-------------------|
| **Byju's** | Prescribed video curriculum. High-pressure sales. | $100+/month | We follow YOUR school. 50x cheaper. No sales calls. |
| **Khan Academy Kids** | Free. Self-paced. Generic curriculum. | Free | We're school-aligned + have Campaign structure + parent scripts + physical rewards. |
| **Duolingo Math** | Gamified standalone math curriculum. | Free (ads) / $7/month | We cover ALL subjects. We connect to school curriculum. We include the parent. |
| **Toppr / Vedantu** | Video tutoring + practice. Older students (8+). | $10-50/month | We serve younger kids (5-10). Activity-based, not video-based. Offline-first. |
| **Worksheetfun.com / similar** | Static printable worksheets. | Free (ads) | We're dynamic, personalized, and gamified. Campaign structure. Digital + Physical. |
| **Class WhatsApp Groups** | Parents share tips, worksheets via WhatsApp. | Free | We formalize and productize what parents already do informally. Better content, structured flow. |

### 14.2 ParentHero's Four Moats

1. **School Alignment:** The curriculum map is our proprietary data asset. As we expand boards and grades, this becomes harder to replicate.

2. **Parent Empowerment:** We are the only product that gives parents *teaching scripts*. Everyone else either teaches the child directly (Byju's) or leaves the parent out (Khan Academy). We make the parent the hero.

3. **Physical-Digital Bridge:** Certificates, Worksheets, and Fridge Art create real-world artifacts. Children pin certificates on their wall. Parents post Fridge Art on Instagram. This is free marketing AND deep engagement.

4. **Dead Time Capture:** Car-Schooling Mode is a unique feature with no equivalent in any competitor. Parents spend 30-60 minutes/day driving kids. This is untapped learning time.

---

## 15. Launch Roadmap & Phasing

> **Two phases only.** Phase 1 = the complete base product (all features, all subjects, all boards except state boards) built before launch. Phase 2 = post-launch scaling. See `FEATURE_MATRIX.md` for feature-level detail.

### Phase 1: Base Product (Weeks 3-26, pre-launch)

**Goal:** Build the complete product — all modules, all subjects, all major boards, all engagement features — before launch. Launch once with a full product rather than iterating publicly from a stripped-down MVP.

Phase 1 is divided into three internal build sprints:

#### Sprint A — Core Loop (Weeks 3-10)
*Prove the interaction model works before building breadth.*

| Area | What ships |
|------|-----------|
| **Auth** | Google Sign-In + Guest Mode |
| **Onboarding** | Name, grade, board (CBSE only); browse-only topic wizard |
| **Dashboard** | Hero Card + hardcoded "What Kids Are Learning" + Library grid |
| **Campaign** | 5-day linear flow; Days 1-3 free, Day 4-5 Pro |
| **Teaching Script** | Tappable cards + TTS narration |
| **Practice Pad** | Math only; numeric input + MCQ; 10 Qs/session (free), unlimited (Pro) |
| **Basic Quiz** | MCQ, 10 questions, dual explanation on wrong answer |
| **Certificate** | PDF — name + topic + date; shareable image |
| **Payments** | Razorpay India (monthly + annual) |
| **Settings** | Account, notifications, accessibility basics |
| **Analytics** | Core Firebase Analytics events (see Section 11.2) |
| **Content** | CBSE Grade 1-3 Math (~20 topics, pre-generated + QA'd) |

#### Sprint B — Engagement + Content Depth (Weeks 11-18)
*Add retention mechanics and expand to all subjects + engagement features.*

| Area | What ships |
|------|-----------|
| **Auth** | Phone OTP (primary India auth) |
| **Streak + XP** | Daily streak, XP per action, level-up celebration, streak freeze (Pro) |
| **Arcade** | Number Rush (Math) + Word Builder (English); 3 plays/day free, unlimited Pro |
| **Beat the Parent** | Async quiz; reveal moment; shareable image |
| **Car Mode** | Audio-only script playback (Pro) |
| **Report Card** | Campaign history + mastery chart (Pro) |
| **Kid Mode** | Large touch targets, navigation lock, parent PIN exit |
| **Daily Spark** | Full rotation — riddles, stories, activities (5 per type) |
| **Whiteboard** | Drawing canvas in Practice Pad |
| **Inline visuals** | Emoji diagrams in teaching scripts |
| **Worksheet PDF** | Sunday Printer |
| **Payments** | Stripe (international); family plans |
| **Offline mode** | Full offline caching for all child-facing activities |
| **Accessibility** | High contrast, export my data |
| **Content** | CBSE + ICSE Grade 1-4, Math + English (~70 topics) |

#### Sprint C — Boards + Global (Weeks 19-26)
*Expand to full board and subject coverage before launch.*

| Area | What ships |
|------|-----------|
| **Arcade** | Sort It! (Science) |
| **Multi-child** | Up to 3 children per account (free: unlimited profiles, 1 active Campaign) |
| **Scan Diary / OCR** | `google_mlkit_text_recognition`; topic detection from photo (Pro) |
| **Revision Ring** | Spaced repetition for mastered topics (Pro) |
| **Fridge Art SVG** | Topic-specific printable art |
| **Apple Sign-In** | Required for iOS App Store compliance |
| **Hindi scripts** | Hindi-language teaching scripts for CBSE topics |
| **Content** | + Common Core, IB PYP, Grades 1-5, Science/EVS (~150 topics total) |

**Sprint C gate:** All content QA'd and reviewed before any launch. No soft launch or beta — full launch with complete product.

### Phase 2: Scale (Weeks 27+, post-launch)

**Goal:** Market expansion and monetization optimization, driven by real launch data.

| Feature | Rationale |
|---------|-----------|
| State Board curriculum (Maharashtra, Rajasthan, etc.) | High-effort, incremental audience; needs launch data to prioritize which boards |
| Hindi/Tamil/Telugu app UI | Localization infrastructure needed; content comes first |
| A/B testing framework | Needs meaningful traffic volume before A/B tests are statistically valid |
| Referral program ("Invite a parent, get 1 month free") | Needs subscription base before referrals have compounding effect |
| Community features (per-topic discussion boards) | Trust & safety infrastructure; requires moderation team |
| Advanced accessibility (full screen reader, OpenDyslexic) | Phase 1 ships dyslexia font + high contrast; full a11y requires dedicated audit |
| Tablet-optimized layouts | Phone-first UX is stable before adapting to larger screens |
| Voice-response practice Qs (STT) | STT reliability on children's voices is a product risk; deferred pending tech maturity |
| Weekly progress email digest | Email infrastructure + content templates; low urgency vs. push notifications |
| Arcade combo/power-up mechanics | Enhancement to core game loop that ships in Phase 1 |

**$20K MRR Calculation (unchanged):**
- Average Revenue Per Paid User: ~$4/month (blended India + International)
- Required Paid Users: 5,000
- At 4% Install-to-Paid: Need 125,000 installs

---

## 16. Annexures (Technical Specifications)

### Annexure A: Database Schema (Firestore)

#### Collection: `users`

```json
{
  "uid": "user_123",
  "email": "parent@email.com",
  "phone": "+919876543210",
  "auth_method": "google",
  "country_code": "IN",
  "created_at": "2026-02-10T00:00:00Z",
  "subscription": {
    "tier": "pro_in_monthly",
    "plan": "monthly",
    "gateway": "razorpay",
    "started_at": "2026-02-10T00:00:00Z",
    "expires_at": "2026-03-10T00:00:00Z",
    "is_active": true,
    "grace_period_until": null
  },
  "settings": {
    "daily_spark_time": "07:00",
    "notifications_enabled": true,
    "notification_categories": {
      "daily_spark": true,
      "streak_reminder": true,
      "campaign_progress": true,
      "revision_alerts": true,
      "marketing": false
    },
    "sound_effects": true,
    "dyslexia_font": false,
    "text_size": "normal"
  },
  "children": {
    "child_1": {
      "name": "Ira",
      "grade": 1,
      "board": "CBSE",
      "created_at": "2026-02-10T00:00:00Z",
      "active_topic_id": "math_meas_money_basic",
      "campaign": {
        "topic_id": "math_meas_money_basic",
        "start_date": "2026-02-10T00:00:00Z",
        "target_date": "2026-02-14T00:00:00Z",
        "current_day": 3,
        "day_progress": {
          "1": {"step_1": true, "step_2": true, "step_3": true, "completed_at": "2026-02-10T19:30:00Z"},
          "2": {"step_1": true, "step_2": true, "step_3": true, "completed_at": "2026-02-11T20:15:00Z"},
          "3": {"step_1": false, "step_2": false, "step_3": false, "completed_at": null},
          "4": {"step_1": false, "step_2": false, "step_3": false, "completed_at": null},
          "5": {"step_1": false, "step_2": false, "step_3": false, "completed_at": null}
        },
        "content_cache_id": "cache_CBSE_G1_math_meas_money_basic_v1"
      },
      "mastered_topics": [
        {
          "topic_id": "math_shapes",
          "mastered_at": "2026-01-25T00:00:00Z",
          "next_revision_at": "2026-02-15T00:00:00Z",
          "revision_interval": 3
        }
      ],
      "xp": 1200,
      "level": 3,
      "level_title": "Adventurer",
      "streak": {
        "current": 5,
        "longest": 12,
        "last_activity_date": "2026-02-10",
        "freezes_remaining": 1,
        "freeze_used_this_month": 2
      },
      "stats": {
        "total_campaigns_completed": 2,
        "total_questions_answered": 347,
        "total_correct": 281,
        "total_practice_minutes": 210,
        "arcade_high_scores": {
          "number_rush": 1250,
          "word_builder": null,
          "sort_it": null
        }
      },
      "weekly_mistakes": [
        {
          "topic_id": "math_meas_money_basic",
          "question_id": "q_money_034",
          "question_text": "Ira buys a pencil for ₹3 and an eraser for ₹2. How much total?",
          "child_answer": "₹4",
          "correct_answer": "₹5",
          "timestamp": "2026-02-10T19:45:00Z"
        }
      ]
    }
  }
}
```

#### Collection: `curriculum_maps`

Stores the full topic library for each Grade + Board combination.

**Document ID:** `{country}_{board}_{grade}_{subject}` (e.g., `IN_CBSE_Grade1_Math`)

```json
{
  "country": "IN",
  "board": "CBSE",
  "grade": 1,
  "subject": "Math",
  "academic_start_month": 4,
  "last_updated": "2026-01-15T00:00:00Z",
  "topics": [
    {
      "universal_id": "math_shapes_space",
      "display_title": "Shapes & Space",
      "short_description": "2D shapes, spatial vocabulary (Top/Bottom, Near/Far)",
      "icon_asset": "assets/icons/shapes.svg",
      "typical_month": 0,
      "typical_month_label": "April",
      "difficulty_tier": "foundational",
      "prerequisite_topics": [],
      "related_topics": ["math_num_1to9"],
      "tags": ["geometry", "spatial"]
    },
    {
      "universal_id": "math_num_1to9",
      "display_title": "Numbers 1-9 & Zero",
      "short_description": "Counting, writing numerals, concept of zero",
      "icon_asset": "assets/icons/numbers.svg",
      "typical_month": 1,
      "typical_month_label": "May",
      "difficulty_tier": "foundational",
      "prerequisite_topics": [],
      "related_topics": ["math_add_1digit"],
      "tags": ["numbers", "counting"]
    },
    {
      "universal_id": "math_add_1digit",
      "display_title": "Addition (1-digit)",
      "short_description": "Adding numbers up to 9 using symbols",
      "icon_asset": "assets/icons/addition.svg",
      "typical_month": 3,
      "typical_month_label": "July",
      "difficulty_tier": "core",
      "prerequisite_topics": ["math_num_1to9"],
      "related_topics": ["math_sub_1digit"],
      "tags": ["operations", "addition"]
    },
    {
      "universal_id": "math_sub_1digit",
      "display_title": "Subtraction (1-digit)",
      "short_description": "Taking away, using the minus symbol",
      "icon_asset": "assets/icons/subtraction.svg",
      "typical_month": 4,
      "typical_month_label": "August",
      "difficulty_tier": "core",
      "prerequisite_topics": ["math_add_1digit"],
      "related_topics": ["math_num_10to50"],
      "tags": ["operations", "subtraction"]
    },
    {
      "universal_id": "math_num_10to50",
      "display_title": "Numbers 10-50",
      "short_description": "Tens and ones, number names, counting forward/backward",
      "icon_asset": "assets/icons/tens.svg",
      "typical_month": 6,
      "typical_month_label": "October",
      "difficulty_tier": "core",
      "prerequisite_topics": ["math_num_1to9"],
      "related_topics": ["math_meas_money_basic"],
      "tags": ["numbers", "place_value"]
    },
    {
      "universal_id": "math_meas_money_basic",
      "display_title": "Money",
      "short_description": "Coins, notes, simple transactions",
      "icon_asset": "assets/icons/coin.svg",
      "typical_month": 9,
      "typical_month_label": "January",
      "difficulty_tier": "applied",
      "prerequisite_topics": ["math_add_1digit", "math_sub_1digit"],
      "related_topics": [],
      "tags": ["measurement", "money", "real_world"]
    }
  ]
}
```

#### Collection: `topic_popularity` (for "What Kids Are Learning")

Updated hourly by Cloud Function.

**Document ID:** `{board}_{grade}_{topic_id}` (e.g., `CBSE_1_math_meas_money_basic`)

```json
{
  "board": "CBSE",
  "grade": 1,
  "topic_id": "math_meas_money_basic",
  "display_title": "Money",
  "subject": "Math",
  "active_family_count": 247,
  "total_campaigns_started_30d": 892,
  "total_campaigns_completed_30d": 534,
  "average_completion_rate": 0.60,
  "last_updated": "2026-02-10T12:00:00Z"
}
```

#### Collection: `content_cache`

Pre-generated Campaign content, shared across users with same (Board, Grade, Topic).

**Document ID:** `cache_{board}_{grade}_{topic_id}_v{version}`

```json
{
  "board": "CBSE",
  "grade": 1,
  "topic_id": "math_meas_money_basic",
  "version": 1,
  "generated_at": "2026-02-01T00:00:00Z",
  "ai_model": "gemini-3-pro",
  "content": {
    "decode_script": {
      "analogy": {
        "visual": "🪙 → 🍎",
        "text": "Money is like trading magic tokens for things you want!"
      },
      "script": {
        "hook": "Ask your child: If you had 10 magic coins, what would you buy?",
        "steps": [
          "Step 1: Show real coins (₹1, ₹2, ₹5). Let them feel, stack, sort by size.",
          "Step 2: Play 'Shop Shop!' -- put 3 toys with price tags. Ask: 'This car costs ₹5. Can you give me the right coins?'",
          "Step 3: Introduce addition with coins: 'If a pencil is ₹3 and an eraser is ₹2, how many coins do you need?'"
        ],
        "duration_minutes": 3
      },
      "pitfall": "Children often confuse coin SIZE with VALUE. A ₹1 coin is bigger than a ₹2 coin! Explicitly teach: 'Bigger coin doesn't mean more money.'"
    },
    "revised_script_day2": {
      "focus": "Common pitfalls from Day 1",
      "key_points": [
        "Coin size ≠ coin value (revisit)",
        "Making change: 'If something costs ₹3 and you give ₹5, how much do you get back?'",
        "Combination of coins: '₹5 = ₹2 + ₹2 + ₹1'"
      ],
      "duration_minutes": 2
    },
    "practice_pad_questions": {
      "day1": [
        {"id": "pp_1", "q": "₹2 + ₹3 = ?", "a": "5", "type": "numeric", "difficulty": "easy"},
        {"id": "pp_2", "q": "₹5 + ₹1 = ?", "a": "6", "type": "numeric", "difficulty": "easy"},
        {"id": "pp_3", "q": "A pencil costs ₹3. An eraser costs ₹2. Total?", "a": "5", "type": "numeric", "difficulty": "medium"},
        {"id": "pp_4", "q": "₹10 - ₹4 = ?", "a": "6", "type": "numeric", "difficulty": "medium"},
        {"id": "pp_5", "q": "Which is more: ₹5 or ₹2?", "a": "5", "type": "numeric", "difficulty": "easy"},
        {"id": "pp_6", "q": "₹1 + ₹1 + ₹1 = ?", "a": "3", "type": "numeric", "difficulty": "easy"},
        {"id": "pp_7", "q": "A toy costs ₹7. You have ₹10. Change?", "a": "3", "type": "numeric", "difficulty": "hard"},
        {"id": "pp_8", "q": "₹5 + ₹5 = ?", "a": "10", "type": "numeric", "difficulty": "easy"},
        {"id": "pp_9", "q": "Rohit has ₹8. He buys a ball for ₹5. Left?", "a": "3", "type": "numeric", "difficulty": "medium"},
        {"id": "pp_10", "q": "₹2 + ₹2 + ₹1 = ?", "a": "5", "type": "numeric", "difficulty": "medium"}
      ],
      "day2": "... (15 questions, harder) ...",
      "extra_pool": "... (25 additional questions for Practice Pad free-play) ..."
    },
    "quiz_questions": {
      "easy": "... (10 MCQ questions) ...",
      "medium": "... (10 MCQ questions) ...",
      "hard": "... (10 MCQ questions) ...",
      "legend": "... (20 mixed questions for Day 5) ..."
    },
    "daily_spark": {
      "riddles": [
        "I have a head and a tail but no body. What am I? (A coin!)",
        "I can be earned, saved, and spent, but I'm not time. What am I? (Money!)"
      ],
      "fun_facts": [
        "The first coins were made 2,600 years ago in a place called Lydia (now Turkey)!",
        "In India, the first coins were punched-marked silver coins from about 600 BC!"
      ],
      "stories": [
        "The Magic Coin Jar: Once upon a time, Ira found a jar that doubled every coin put inside...",
        "Rohan's Shop: Rohan decided to open a shop selling his drawings for ₹2 each..."
      ],
      "activities": [
        "Pretend Shop: Set up a shop at home with toys. Give your child ₹20 in play money. Let them buy and calculate change!",
        "Coin Sorting: Empty a jar of coins. Sort by value (₹1, ₹2, ₹5, ₹10). Count each pile. Which pile is worth the most?"
      ],
      "mini_challenges": [
        {"q": "Quick! ₹5 + ₹2 + ₹1 = ?", "a": "8"},
        {"q": "You have ₹10. You buy something for ₹6. How much left?", "a": "4"},
        {"q": "Which is more: ₹2 + ₹2 or ₹5?", "a": "₹5"}
      ]
    },
    "arcade_data": {
      "number_rush": {
        "problems": [
          {"q": "₹2 + ₹3", "a": 5, "wrong_options": [3, 4, 6]},
          {"q": "₹10 - ₹4", "a": 6, "wrong_options": [4, 5, 7]}
        ]
      }
    },
    "beat_the_parent": [
      {"q": "A pencil costs ₹3 and a rubber costs ₹2. Total?", "options": ["₹4", "₹5", "₹6", "₹3"], "correct": 1},
      {"q": "Which coin is worth MORE: a big ₹1 coin or a small ₹2 coin?", "options": ["₹1 coin", "₹2 coin", "Both same", "Can't tell"], "correct": 1}
    ],
    "fridge_art_asset": "assets/fridge_art/money_piggybank.svg",
    "certificate_title": "Money Master"
  },
  "verification": {
    "math_verified": true,
    "content_reviewed": false,
    "play_count": 0,
    "flag_count": 0
  }
}
```

#### Collection: `question_bank`

Individual verified questions (built up over time from AI generation + community validation).

```json
{
  "id": "qb_math_money_001",
  "universal_topic_id": "math_meas_money_basic",
  "grade": 1,
  "board": "CBSE",
  "difficulty": "medium",
  "type": "mcq",
  "content": {
    "question_text": "Ira buys a pencil for ₹3 and an eraser for ₹2. How much does she pay?",
    "options": ["₹4", "₹5", "₹6", "₹3"],
    "correct_option_index": 1,
    "explanation_child": "Count on your fingers: ₹3... then ₹4, ₹5! So the answer is ₹5! 🖐️",
    "explanation_parent": "This is a simple addition word problem. Help your child by acting it out with real coins: give them 3 coins, then 2 more, and count the total together."
  },
  "meta": {
    "source": "ai_generated",
    "ai_model": "gemini-3-pro",
    "generated_at": "2026-02-01T00:00:00Z",
    "verification_status": "verified",
    "play_count": 87,
    "correct_rate": 0.72,
    "flag_count": 0,
    "last_flagged_at": null,
    "math_auto_verified": true
  }
}
```

### Annexure B: The Hybrid Database Waterfall Logic (Revised)

Executed when the app needs questions for any activity (Practice Pad, Quiz, Arcade, Revision Check):

```javascript
async function getQuestions({ topic_id, grade, board, difficulty, count, exclude_ids = [] }) {

  // STEP 1: Check local cache (Hive) first -- fastest, works offline
  let localQuestions = await hiveCache.getQuestions(topic_id, difficulty, count, exclude_ids);
  if (localQuestions.length >= count) {
    return shuffle(localQuestions).slice(0, count);
  }

  // STEP 2: Check Firestore question_bank -- verified questions
  let dbQuestions = await firestore
    .collection('question_bank')
    .where('universal_topic_id', '==', topic_id)
    .where('grade', '==', grade)
    .where('difficulty', '==', difficulty)
    .where('verification_status', '==', 'verified')
    .limit(count * 2)  // Fetch extra to allow filtering
    .get();

  let allQuestions = [...localQuestions];
  for (let doc of dbQuestions.docs) {
    if (!exclude_ids.includes(doc.id) && !allQuestions.find(q => q.id === doc.id)) {
      allQuestions.push(doc.data());
    }
  }

  if (allQuestions.length >= count) {
    // Cache in Hive for offline use
    await hiveCache.storeQuestions(allQuestions);
    return shuffle(allQuestions).slice(0, count);
  }

  // STEP 3: Check content_cache (pre-generated Campaign content)
  let cacheQuestions = await getCachedCampaignQuestions(topic_id, grade, board, difficulty);
  allQuestions = [...allQuestions, ...cacheQuestions.filter(q => !exclude_ids.includes(q.id))];

  if (allQuestions.length >= count) {
    await hiveCache.storeQuestions(allQuestions);
    return shuffle(allQuestions).slice(0, count);
  }

  // STEP 4: Generate remaining via Gemini AI (last resort)
  const remainingCount = count - allQuestions.length;
  try {
    const aiQuestions = await generateQuestionsViaAI(topic_id, grade, board, difficulty, remainingCount);

    // STEP 4a: Programmatic verification (Math only)
    const verifiedAiQuestions = await verifyMathQuestions(aiQuestions);

    // STEP 4b: Save to question_bank as "unverified" (for non-math) or "auto_verified" (for math)
    await saveToQuestionBank(verifiedAiQuestions, {
      source: 'ai_generated',
      verification_status: aiQuestions[0].type === 'numeric' ? 'auto_verified' : 'unverified'
    });

    allQuestions = [...allQuestions, ...verifiedAiQuestions];
  } catch (aiError) {
    // AI failed -- serve what we have, even if fewer than requested
    console.error('AI generation failed:', aiError);
    logToAnalytics('ai_generation_failed', { topic_id, error: aiError.message });
  }

  await hiveCache.storeQuestions(allQuestions);
  return shuffle(allQuestions).slice(0, count);
}

// Math verification: solve the equation programmatically
async function verifyMathQuestions(questions) {
  return questions.filter(q => {
    if (q.type !== 'numeric') return true; // Non-numeric: pass through
    try {
      // Simple arithmetic evaluation
      const expression = q.q.replace(/[₹$€£]/g, '').replace('= ?', '').trim();
      const computed = evaluateSimpleArithmetic(expression);
      if (String(computed) !== String(q.a)) {
        console.warn(`Math verification FAILED: "${q.q}" expected ${q.a}, computed ${computed}`);
        return false; // Discard incorrect question
      }
      return true;
    } catch (e) {
      return true; // Word problems: can't auto-verify, pass through
    }
  });
}

// Auto-promotion: runs weekly via Cloud Function
async function autoPromoteQuestions() {
  const unverified = await firestore
    .collection('question_bank')
    .where('verification_status', '==', 'unverified')
    .where('meta.play_count', '>=', 50)
    .get();

  for (let doc of unverified.docs) {
    const data = doc.data();
    const correctRate = data.meta.correct_rate;

    if (correctRate >= 0.40 && correctRate <= 0.85) {
      // Healthy range: promote to verified
      await doc.ref.update({ 'meta.verification_status': 'verified' });
    } else if (correctRate < 0.20) {
      // Likely broken question: flag for review
      await doc.ref.update({ 'meta.verification_status': 'flagged_for_review' });
    }
    // 0.20-0.40 or >0.85: keep as unverified, gather more data
  }
}
```

### Annexure C: AI System Prompts (Gemini 3 Pro)

#### Prompt 1: Campaign Content Generator (Batch)

```
ROLE: You are an expert elementary education content creator.

CONTEXT:
- Grade: ${grade}
- Board: ${board} (${board_description})
- Subject: ${subject}
- Topic: ${topic_name}
- Topic Description: ${topic_description}
- Country: ${country}

TASK: Generate a complete 5-Day Campaign content package for this topic.

REQUIREMENTS:
- Use ${board}-specific terminology (e.g., CBSE says "Borrow", ICSE says "Regroup")
- Use ${country}-specific currency and cultural references
- All content must be age-appropriate for Grade ${grade} (age ~${grade + 5})
- Practice Pad questions must have ONE unambiguous correct numeric/text answer
- Word problems should use common Indian/relevant names (Ira, Rohan, Priya, etc.)
- Difficulty levels: Easy (30%), Medium (50%), Hard (20%)

OUTPUT FORMAT: Return a JSON object with this exact structure:
{
  "decode_script": {
    "analogy": { "visual": "emoji representation", "text": "one-sentence metaphor" },
    "script": {
      "hook": "opening question to engage the child (1 sentence)",
      "steps": ["step 1 (2-3 sentences with parent instruction)", "step 2", "step 3"],
      "duration_minutes": 3
    },
    "pitfall": "most common mistake children make with this topic (1-2 sentences)"
  },
  "revised_script_day2": {
    "focus": "what to revisit from Day 1",
    "key_points": ["point 1", "point 2", "point 3"],
    "duration_minutes": 2
  },
  "practice_pad_questions": {
    "day1": [10 questions, each: {"id": "pp_N", "q": "question text", "a": "answer", "type": "numeric", "difficulty": "easy|medium|hard"}],
    "day2": [15 questions, harder],
    "extra_pool": [25 additional questions for free-play]
  },
  "quiz_questions": {
    "easy": [10 MCQ questions, each: {"q": "text", "options": ["A","B","C","D"], "correct": 0-3, "explanation_child": "simple explanation", "explanation_parent": "teaching tip"}],
    "medium": [10 questions],
    "hard": [10 questions],
    "legend": [20 mixed-difficulty questions for Day 5]
  },
  "daily_spark": {
    "riddles": ["riddle 1 (with answer in parentheses)", "riddle 2"],
    "fun_facts": ["fact 1", "fact 2"],
    "stories": ["short story 1 (3-4 sentences)", "short story 2"],
    "activities": ["physical activity idea 1", "activity 2"],
    "mini_challenges": [{"q": "quick question", "a": "answer"}, ...]
  },
  "arcade_data": {
    "number_rush": {"problems": [{"q": "expression", "a": number, "wrong_options": [3 wrong numbers]}]}
  },
  "beat_the_parent": [5 MCQ questions (harder, includes at least 1 trap question and 1 multi-step problem): {"q": "text", "options": ["A","B","C","D"], "correct": 0-3}],
  "certificate_title": "topic mastery title for certificate"
}

IMPORTANT:
- Generate EXACTLY the specified number of questions for each section
- Every question must have ONE correct answer
- Do not include explanations in practice_pad questions (those are speed exercises)
- Include explanations in quiz_questions (those are learning exercises)
- Make stories engaging and relatable to a ${grade}-year-old in ${country}
```

#### Prompt 2: OCR Topic Detection

```
ROLE: You are an educational curriculum classifier.

CONTEXT:
- Grade: ${grade}
- Board: ${board}
- Country: ${country}
- Available topics: ${JSON.stringify(curriculum_topics)}

INPUT: OCR-extracted text from a student's homework/diary page:
"""
${ocr_text}
"""

TASK: Identify which topic(s) from the available topics list this homework relates to.

OUTPUT FORMAT: Return a JSON object:
{
  "detected_topics": [
    {
      "topic_id": "the universal_id from the curriculum",
      "confidence": 0.0-1.0,
      "reasoning": "brief explanation of why this topic matches"
    }
  ],
  "grade_match": true | false,
  "detected_grade_level": "estimated grade level if different from input grade",
  "raw_subjects_detected": ["math", "english", "science"]
}

RULES:
- Return at most 3 topic matches, ordered by confidence
- If no topic matches with confidence > 0.3, return empty detected_topics array
- If the content appears to be from a different grade level, set grade_match to false
- Be conservative: prefer false negatives over false positives
```

#### Prompt 3: Strengths & Weaknesses Analysis (for Report Card)

```
ROLE: You are a child education analyst.

CONTEXT:
- Child: Grade ${grade}, ${board}
- Topics mastered: ${JSON.stringify(mastered_topics)}
- Recent quiz scores: ${JSON.stringify(recent_scores)}
- Practice Pad accuracy by topic: ${JSON.stringify(accuracy_data)}
- Common mistakes: ${JSON.stringify(mistake_patterns)}

TASK: Generate a brief, parent-friendly analysis of the child's strengths and weaknesses.

OUTPUT FORMAT: Return a JSON object:
{
  "summary": "2-3 sentence overview of the child's progress (encouraging tone)",
  "strengths": ["strength 1 with specific topic reference", "strength 2"],
  "areas_for_improvement": ["area 1 with specific actionable advice", "area 2"],
  "recommended_next_topic": "topic_id of the suggested next Campaign topic",
  "recommendation_reason": "1 sentence explaining why this topic is recommended next"
}

RULES:
- Always lead with positives
- Be specific (refer to actual topics and scores)
- Advice must be actionable ("practice coin problems" not "try harder")
- Never compare to other children
- Use encouraging, warm language
- Do NOT include the child's name (the app will insert it)
```

### Annexure D: Notification Content Templates

```json
{
  "notifications": {
    "N01_daily_spark": {
      "monday": {"title": "Monday Riddle 🤔", "body": "${riddle_text}"},
      "tuesday": {"title": "Fun Fact! 💡", "body": "${fun_fact_text}"},
      "wednesday": {"title": "Quick Challenge ⚡", "body": "Can ${child_name} solve 3 ${topic_name} questions in under a minute?"},
      "thursday": {"title": "Story Time 📖", "body": "A new ${topic_name} story is waiting for ${child_name}!"},
      "friday": {"title": "Fun Friday Activity 🎨", "body": "${activity_text}"},
      "saturday": {"title": "Weekend Review 📋", "body": "How much does ${child_name} remember? Quick 5-question check!"},
      "sunday": {"title": "Sunday Rewards! 🖨️", "body": "${child_name}'s Certificate and Worksheet are ready to print!"}
    },
    "N02_streak_at_risk": {
      "title": "Keep the streak! 🔥",
      "body": "${child_name}'s ${streak_count}-day streak is still going! A quick practice keeps it alive."
    },
    "N03_streak_last_chance": {
      "title": "Last chance! ⚠️",
      "body": "${child_name}'s ${streak_count}-day streak ends at midnight. 5 questions is all it takes!"
    },
    "N04_campaign_progress": {
      "title": "Campaign check-in 📊",
      "body": "Day ${day} of ${topic_name}: ${step_name} is ready! ${estimated_minutes} minutes to complete."
    },
    "N05_campaign_ready": {
      "title": "Ready to go! 🚀",
      "body": "${child_name}'s ${topic_name} Campaign is prepared! Start Day 1 now."
    },
    "N06_post_campaign": {
      "title": "What's next? 🌟",
      "body": "After mastering ${topic_name}, how about ${recommended_topic}? ${family_count} families are doing it!"
    },
    "N07_beat_the_parent": {
      "title": "Challenge time! 🏆",
      "body": "Can you outscore ${child_name} on ${topic_name}? Take the 5-question parent challenge!"
    },
    "N08_sunday_printer": {
      "title": "Sunday Rewards! 🖨️",
      "body": "${child_name}'s Certificate and Worksheet are ready to print!"
    },
    "N09_revision_due": {
      "title": "Quick review 🧠",
      "body": "${child_name} mastered ${topic_name} ${weeks_ago} weeks ago. 5 questions to keep the Gold badge!"
    },
    "N10_48h_inactive": {
      "title": "Almost there! 💪",
      "body": "${child_name} is on Day ${day} of ${topic_name} -- just ${remaining_days} more days to the certificate! 🏅"
    },
    "N11_7d_inactive": {
      "title": "Welcome back! 👋",
      "body": "It's been a while! ${child_name}'s ${topic_name} Campaign is waiting. Start where you left off?"
    },
    "N12_streak_milestone": {
      "title": "${streak_count}-DAY STREAK! 🎉",
      "body": "🔥 ${child_name} is unstoppable! Share the achievement?"
    },
    "N13_level_up": {
      "title": "Level Up! 🌟",
      "body": "${child_name} just became a ${level_title}! Level ${level} unlocked!"
    }
  }
}
```

### Annexure E: Master Curriculum Database

*(Full curriculum data from PRD v8.0 is retained unchanged. See original PRD v8.0 Annexure E for the complete CBSE Grade 1-5 and ICSE Grade 1-5 curriculum data across Math, English, Science/EVS, and Social Studies.)*

**Additional Requirements for Ingestion:**
- Each topic must be assigned a `universal_id` following the pattern: `{subject}_{category}_{specific}` (e.g., `math_meas_money_basic`, `eng_gram_nouns`, `evs_body_senses`)
- `typical_month` must be calculated relative to the `academic_start_month` for the board (April = 0 for CBSE/ICSE, September = 0 for Common Core)
- Topics with month ranges (e.g., "July - August") should use the midpoint month
- `prerequisite_topics` and `related_topics` must be populated based on curriculum sequence
- `difficulty_tier` assigned as: first 1/3 of year = "foundational", middle 1/3 = "core", last 1/3 = "applied"

### Annexure F: Topic Popularity Aggregation (Cloud Function)

Runs hourly to update `topic_popularity` collection.

```javascript
// Cloud Function: updateTopicPopularity
// Schedule: Every hour

exports.updateTopicPopularity = functions.pubsub
  .schedule('every 1 hours')
  .onRun(async (context) => {

    // Get all unique (board, grade) combinations
    const users = await admin.firestore().collection('users').get();

    const popularityMap = {}; // key: `${board}_${grade}_${topic_id}`

    for (const userDoc of users.docs) {
      const userData = userDoc.data();
      if (!userData.children) continue;

      for (const [childId, child] of Object.entries(userData.children)) {
        if (!child.active_topic_id) continue;

        const key = `${child.board}_${child.grade}_${child.active_topic_id}`;
        if (!popularityMap[key]) {
          popularityMap[key] = {
            board: child.board,
            grade: child.grade,
            topic_id: child.active_topic_id,
            active_family_count: 0
          };
        }
        popularityMap[key].active_family_count++;
      }
    }

    // Write to topic_popularity collection
    const batch = admin.firestore().batch();
    for (const [key, data] of Object.entries(popularityMap)) {
      const ref = admin.firestore().collection('topic_popularity').doc(key);
      batch.set(ref, {
        ...data,
        last_updated: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    }

    await batch.commit();
    console.log(`Updated popularity for ${Object.keys(popularityMap).length} topics`);
  });
```

**Note:** At scale (100K+ users), this function should be optimized to use incremental counters rather than full-scan aggregation. Consider using Firestore distributed counters or a dedicated analytics pipeline (BigQuery).

### Annexure G: Campaign Content Pre-Generation (Cloud Function)

Triggered when a user pins a topic.

```javascript
// Cloud Function: generateCampaignContent
// Trigger: Firestore write on users/{userId}/children/{childId}.active_topic_id

exports.generateCampaignContent = functions.firestore
  .document('users/{userId}')
  .onUpdate(async (change, context) => {
    const before = change.before.data();
    const after = change.after.data();

    // Detect topic pin changes for any child
    for (const [childId, childAfter] of Object.entries(after.children || {})) {
      const childBefore = before.children?.[childId];
      if (childBefore?.active_topic_id === childAfter.active_topic_id) continue;

      // New topic pinned!
      const { grade, board, active_topic_id } = childAfter;
      const country = after.country_code;

      // Check if content already cached
      const cacheId = `cache_${board}_G${grade}_${active_topic_id}`;
      const existingCache = await admin.firestore()
        .collection('content_cache')
        .where('topic_id', '==', active_topic_id)
        .where('grade', '==', grade)
        .where('board', '==', board)
        .limit(1)
        .get();

      if (!existingCache.empty) {
        // Content already exists -- link to user
        const cacheDocId = existingCache.docs[0].id;
        await change.after.ref.update({
          [`children.${childId}.campaign.content_cache_id`]: cacheDocId
        });
        // Send "Ready" notification
        await sendNotification(context.params.userId, 'N05_campaign_ready', {
          child_name: childAfter.name,
          topic_name: active_topic_id
        });
        return;
      }

      // Generate new content via Gemini
      const topicMeta = await getTopicMeta(active_topic_id, grade, board);
      const prompt = buildCampaignPrompt(grade, board, country, topicMeta);

      try {
        const aiResponse = await callGeminiPro(prompt);
        const content = JSON.parse(aiResponse);

        // Verify math questions
        if (topicMeta.subject === 'Math') {
          content.practice_pad_questions = verifyMathQuestionsServer(content.practice_pad_questions);
        }

        // Save to content_cache
        const cacheDoc = await admin.firestore().collection('content_cache').add({
          board, grade, topic_id: active_topic_id,
          version: 1,
          generated_at: admin.firestore.FieldValue.serverTimestamp(),
          ai_model: 'gemini-3-pro',
          content,
          verification: { math_verified: topicMeta.subject === 'Math', content_reviewed: false, play_count: 0, flag_count: 0 }
        });

        // Link to user
        await change.after.ref.update({
          [`children.${childId}.campaign.content_cache_id`]: cacheDoc.id
        });

        // Send "Ready" notification
        await sendNotification(context.params.userId, 'N05_campaign_ready', {
          child_name: childAfter.name,
          topic_name: topicMeta.display_title
        });

        // Also seed question_bank with individual questions
        await seedQuestionBank(content, active_topic_id, grade, board);

      } catch (error) {
        console.error('Campaign content generation failed:', error);
        // Fallback: mark campaign as "content_pending" -- app will use question_bank directly
        await change.after.ref.update({
          [`children.${childId}.campaign.content_cache_id`]: 'pending'
        });
      }
    }
  });
```

---

## End of PRD v9.0

**Total Modules:** 11 (A through K)
**Total Annexures:** 7 (A through G)
**Key Changes from v8.0:** 28 improvements across UX, monetization, retention, technical architecture, privacy, and analytics.

**Next Steps:**
1. Technical review of architecture decisions
2. Legal review of privacy/compliance framework
3. Design mockups for key flows (First Topic Wizard, Campaign Day View, Practice Pad, Kid Mode)
4. Finalize curriculum data ingestion (Annexure E → Firestore)
5. Begin Phase 1 development (Week 1-8 scope)
