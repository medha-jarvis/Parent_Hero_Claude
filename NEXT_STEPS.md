# ParentHero -- What To Do Next (Action Plan)

**Date:** February 10, 2026
**Last reviewed:** March 16, 2026

> **Document alignment:** This file defines the actionable roadmap. Feature scope and access tiers are the source of truth in:
> - `FEATURE_MATRIX.md` — full feature-by-feature breakdown (MVP vs. Phase 2/3, Free vs. Pro)
> - `PARENTHERO_PRD_v9.md` — product specs (Section 15 for phased roadmap, Section 11.2 for analytics events)
> - `CURRICULUM_RESEARCH.md` — curriculum schema and MVP topic seed list (Part 7)
>
> If you find contradictions between this file and those, defer to `FEATURE_MATRIX.md` and the PRD.

---

## The Honest Assessment of Where You Are

You have a detailed PRD. That's 5% of the work. The other 95% is:
- Validating that real parents will pay for this (before writing code)
- Building the MVP (8 weeks if focused)
- Getting your first 100 users (harder than building)
- Iterating based on real data (never ends)

The biggest mistake you can make right now is going heads-down on code for 3 months without talking to parents. The second biggest mistake is trying to build everything in the PRD at once.

Here's what to do, in order.

---

## Phase 0: Validate Before You Build (Week 1-2)

**Goal:** Confirm that parents will actually use and pay for this. Kill bad assumptions early.

### Action 1: Talk to 10 Parents (This Week)

Find 10 parents of Grade 1-5 kids. Your own network, WhatsApp groups, school gate, neighborhood. Ask them these questions (in person or video call, NOT a survey form):

**Discovery Questions:**
1. "When your child comes home with homework, what do you do first?"
2. "What's the hardest part about helping with schoolwork?"
3. "Have you tried any learning apps? Which ones? What did you like/hate?"
4. "How much time do you spend helping with homework each day?"
5. "If an app could explain how to teach your child [today's school topic] in 3 minutes, would you use it?"
6. "Would you pay ₹299/month for that?"
7. "Show me the last homework your child brought home." (Look at what they're actually dealing with)

**What you're looking for:**
- Do they ACTUALLY struggle with this? Or is it a mild inconvenience?
- Have they tried other solutions? Why did they stop?
- Is the "teaching script" concept something they'd value, or do they just want the child to practice independently?
- Is ₹299/month in their range, or is that a dealbreaker?

**Red flags to watch for:**
- "I just send my child to tuition" (they've solved it differently -- you're competing with tutors, not apps)
- "The school handles it, I don't really help" (they don't have the problem)
- "I'd use it if it were free" (they won't pay)

### Action 2: Build a Landing Page (2 Days)

Before writing any Flutter code, build a simple landing page to test demand.

**Tools:** Carrd.co ($19/year) or a simple HTML page.

**Content:**
```
Headline: "Your child's school teaches it. We help you explain it."

Subheadline: "ParentHero gives you ready-made teaching scripts, 
practice worksheets, and rewards -- aligned to your child's school curriculum."

3 Bullets:
✓ Follows CBSE/ICSE curriculum, topic by topic
✓ 5-Day Campaigns to master any topic
✓ Printable certificates your child will love

CTA: [Join the Waitlist -- Get 3 Months Free at Launch]

Collect: Email + Child's Grade + Board
```

**Run a small ad test:**
- ₹2,000-5,000 on Instagram/Facebook
- Target: Parents in Indian cities, age 28-42, interested in education/parenting
- 3-4 ad creatives (test different hooks):
  - Hook A: "Struggling with your child's Math homework?"
  - Hook B: "Your child's school teaches it. We help you explain it."
  - Hook C: "Get your child a Mastery Certificate every week"
  - Hook D: "What if homework help took 10 minutes, not 1 hour?"

**Success metric:** If you get 200+ waitlist signups from ₹5,000 spend, there's real demand. If you get <50, rethink the positioning before building.

### Action 3: Prototype the Core Flow (3 Days)

Build a clickable prototype (Figma or even Google Slides) of just one flow:

```
Onboarding → First Topic Wizard → Dashboard (with active topic) 
→ Campaign Day 1 → Teaching Script → Practice Pad (3 questions)
→ "Day 1 Complete!" screen
```

Show this to 5 parents from Action 1. Watch them use it. Note:
- Do they understand what to do without explanation?
- Where do they hesitate or get confused?
- What's their reaction to the Teaching Script?
- Would they come back tomorrow for Day 2?

---

## Phase 1: Build the MVP (Weeks 3-10)

**Only after Phase 0 confirms demand.** If validation is weak, iterate on positioning first.

### What to Build (and What to Skip)

Your PRD has 11 modules. Your MVP needs 5.

**BUILD (MVP Scope):**

| Module | What to Build | What to Skip for Now |
|--------|--------------|---------------------|
| **Onboarding** | Name, Grade, Board, First Topic Wizard (browse only, no scan) | Scan diary, country auto-detect (hardcode India) |
| **Dashboard** | Hero Card + Library grid. Hardcode "What Kids Are Learning" data. | Real-time popularity aggregation, Catch Up row |
| **Campaign Day View** | Linear 3-step flow for Days 1-5. Day advancement on step completion. | Bonus activities section, past days view |
| **Teaching Script** | Static script display with TTS. AI-generated, cached per topic. | Revised script for Day 2 (use same script) |
| **Practice Pad** | Swipe-page model. Math only. Numeric input. 10 questions. | Whiteboard (add later), English/Science modes |
| **Basic Quiz** | MCQ, 10 questions. Correct/wrong feedback. | Explanation sheets, difficulty ladder, Legend Quiz |
| **Certificate** | Simple PDF. Child name + topic + date. Shareable as image. | Worksheet, Fridge Art, "Preview only" paywall |

**SKIP FOR MVP (Add in Phase 2-3):**

- Arcade (all games)
- Car Mode
- Beat the Parent
- Report Card
- Daily Spark notifications
- Sunday Printer (full)
- Streak system
- XP / Levels
- Kid Mode
- Multi-child
- Offline mode
- Scan diary OCR
- Spaced repetition

**Why this cut?** The core hypothesis is: "Parents will use teaching scripts + guided practice aligned to their school curriculum." You need to prove THAT before building gamification, Car Mode, and everything else. Every extra feature delays learning whether the core works.

### Technical Setup (Week 3)

1. **Create the Flutter project**
   ```
   flutter create parenthero
   ```

2. **Set up Firebase project**
   - Firebase Auth (Google Sign-In + Phone OTP)
   - Cloud Firestore
   - Cloud Functions
   - Firebase Analytics
   - Crashlytics

3. **Seed the curriculum data**
   - Start with: CBSE Grade 1-3, Math only (6-8 topics per grade = ~20 topics total)
   - Use the Firestore schema defined in `CURRICULUM_RESEARCH.md` Part 7.1
   - The full list of 20 seed topics with `topicId`s is in `CURRICULUM_RESEARCH.md` Part 7.3
   - Upload to Firestore `curriculum_topics` collection

4. **Pre-generate content for all 20 topics**
   - Write a script that calls Gemini for each topic
   - Generate all Campaign content (scripts, questions, riddles)
   - Store in `content_cache`
   - This means NO real-time AI calls in MVP -- everything is pre-cached
   - Total cost: ~20 topics × $0.01 = $0.20

5. **Set up Razorpay test account**

### Build Sprint Plan (Weeks 4-9)

| Week | What to Build | Deliverable |
|------|--------------|-------------|
| Week 4 | Onboarding flow + Firebase Auth (Google only) + child profile storage | User can create account and add child |
| Week 5 | Dashboard (Hero Card + Library grid) + curriculum data display | User can browse topics and pin one |
| Week 6 | Campaign Day View + Teaching Script screen + TTS | User can start Campaign and read Day 1 script |
| Week 7 | Practice Pad (Math, numeric input, swipe-page) | User can complete Practice Pad session |
| Week 8 | Basic Quiz + Campaign day progression + Day 5 completion | Full 5-day Campaign works end to end |
| Week 9 | Certificate generation + Razorpay integration + paywall at Day 4 | Payment works, free/pro gating works |

### Week 10: Internal Testing

- Test full flow yourself 10+ times
- Get 5 parents from Phase 0 to test (give them free Pro access)
- Fix critical bugs
- Confirm Analytics events are firing (see PRD Section 11.2 for the full event taxonomy)

---

## Phase 2: Launch & Get First 100 Users (Weeks 11-14)

### Soft Launch (Week 11)

- Deploy to Google Play (internal testing → open testing → production)
- iOS can wait (Play Store approval is faster; India is Android-first)
- Email your waitlist: "ParentHero is live! Here's your free 3-month Pro code."

### First Users Strategy

**Your first 100 users will NOT come from ads.** They'll come from:

1. **Your waitlist** (from Phase 0 landing page)
2. **WhatsApp groups** -- Find 5-10 parent WhatsApp groups (school groups, apartment groups, parenting groups). Post a genuine message:
   > "Hey everyone, I built an app that helps parents explain school topics to kids. It's aligned to CBSE curriculum and gives you a 3-minute teaching script for any topic. Would love your feedback -- it's free for the first 3 months. [link]"
3. **Personal network** -- Every parent you know. Ask them to try it and give honest feedback.
4. **Instagram/Facebook parenting pages** -- Reach out to 5-10 parenting micro-influencers (5K-50K followers). Offer free lifetime Pro in exchange for an honest review.

### What to Measure (Weeks 11-14)

| Metric | How to Measure | Target | What It Tells You |
|--------|---------------|--------|-------------------|
| Day 1 Campaign completion | Analytics event | 50%+ of users who start | Is Day 1 content engaging? |
| Day 1 → Day 2 return | Analytics event | 40%+ | Will they come back? |
| Day 5 Campaign completion | Analytics event | 25%+ | Is the full flow working? |
| Practice Pad session duration | Analytics event | 8+ minutes | Are kids actually practicing? |
| Qualitative feedback | WhatsApp messages, in-app feedback | N/A | What do parents love/hate? |
| Paywall conversion | Analytics event | 5%+ | Will they pay? |

### Iterate Based on Data

After 2 weeks with 50-100 users, you'll know:
- **If Day 1 completion is low:** Your teaching script isn't resonating. Interview parents. Maybe they want video, not text. Maybe the script is too long or too short.
- **If Day 1→2 return is low:** The hook isn't strong enough. The first session didn't create enough value to come back. Consider: is the Practice Pad engaging? Is there a reason to return?
- **If Campaign completion is low but early days are fine:** The middle days are weak. You might need Arcade/gamification sooner than planned.
- **If paywall conversion is <3%:** Either the price is wrong, the free tier gives too much, or the Pro features aren't compelling. Experiment.

---

## Phase 3: Add Engagement Features (Weeks 15-20)

**Only build these after MVP data confirms the core loop works.**

Priority order (based on expected impact on retention):

1. **Streak system** -- Easiest to build, highest retention impact
2. **Arcade (Number Rush)** -- Drives session duration
3. **Daily Spark notifications** -- Drives daily return
4. **Scan Diary (OCR)** -- Wow factor, reduces friction for topic selection
5. **XP / Levels** -- Progression system for kids
6. **Kid Mode** -- Important for trust/safety
7. **Car Mode** -- Unique differentiator
8. **Report Card** -- Retention for parents (shows value)

---

## Phase 4: Scale to $20K MRR (Weeks 21-40)

### Expand Content
- Add English module (Practice Pad + Word Builder Arcade)
- Add Science/EVS module
- Add ICSE curriculum
- Add Grades 4-5
- Add Common Core (US market)

### Grow Users
- Paid ads (Instagram, Facebook, Google UAC)
- Target CAC: <$3 (India), <$10 (US)
- Target LTV: >$15 (India), >$40 (US)
- ASO (App Store Optimization): screenshots, keywords, ratings
- Referral program: "Invite a parent, both get 1 month free"
- Content marketing: Parent tips blog/Instagram

### Pricing Optimization
- A/B test: ₹199 vs ₹299 vs ₹399
- A/B test: paywall at Day 3 vs Day 4
- Introduce Annual plans
- Introduce Family plan

### $20K MRR Math

| Scenario | Price | Paid Users Needed | Installs Needed (at 4% conversion) |
|----------|-------|-------------------|-------------------------------------|
| India only | ₹299 (~$3.50) | 5,714 | 143,000 |
| India only | ₹399 (~$4.70) | 4,255 | 106,000 |
| India + US mix (80/20) | Blended $5 | 4,000 | 100,000 |

At 100-140K installs over ~6 months, that's ~500-800 installs/day. Achievable with a mix of organic (ASO, referrals, word-of-mouth) and paid (~₹30K-50K/month ad spend).

---

## Immediate To-Do List (This Week)

- [ ] **Today:** Message 3-5 parents you know and schedule 15-min calls for this week
- [ ] **Tomorrow:** Set up a Carrd landing page with waitlist form
- [ ] **Day 3:** Run the first Instagram/Facebook ad (₹1,000 test budget)
- [ ] **Day 4-5:** Conduct 5 parent interviews
- [ ] **Day 5-6:** Build a clickable Figma prototype of the core flow
- [ ] **Day 7:** Show prototype to 3 parents. Record their reactions.
- [ ] **End of Week 2:** Decision point -- are parents excited enough to proceed to building?

---

## The One Thing That Matters Most Right Now

**Talk to parents.** Not surveys. Not assumption-based building. Actual conversations where you watch their face as you describe the product and show the prototype.

If 7 out of 10 parents say "I would use this TODAY" (not "that sounds interesting"), you have something. Build it fast.

If they say "that sounds interesting" with a polite smile, dig deeper. You might be solving the wrong problem, or solving the right problem the wrong way.

The PRD is ready. The plan is ready. Now go find out if real humans want this.
