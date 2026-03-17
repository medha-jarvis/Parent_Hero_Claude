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

## Phase 1: Build the Base Product (Weeks 3-26)

**Only after Phase 0 confirms demand.** If validation is weak, iterate on positioning first.

Phase 1 = the complete product, built before launch. Three internal build sprints. You launch once with everything working — not in stages.

> **Full feature details:** See `FEATURE_MATRIX.md`. Full phased module list: see PRD Section 15.

---

### Sprint A — Core Loop (Weeks 3-10)

**Goal:** Build the interaction model end-to-end. Prove the script → practice → certificate loop works before adding breadth.

#### Technical Setup (Week 3)

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
   - Start with: CBSE Grade 1-3, Math only (~20 topics)
   - Use the Firestore schema defined in `CURRICULUM_RESEARCH.md` Part 7.1
   - The full list of 20 seed topics with `topicId`s is in `CURRICULUM_RESEARCH.md` Part 7.3
   - Upload to Firestore `curriculum_topics` collection

4. **Pre-generate content for all 20 topics**
   - Write a script that calls Gemini for each topic
   - Generate all Campaign content (scripts, questions, riddles)
   - QA all math answers programmatically (see PRD Section 4.3.4)
   - Store in `content_cache` — NO real-time AI calls in Sprint A; everything pre-cached
   - Total cost: ~20 topics × $0.01 = $0.20

5. **Set up Razorpay test account**

#### Build Plan (Weeks 4-9)

| Week | What to Build | Deliverable |
|------|--------------|-------------|
| Week 4 | Onboarding + Firebase Auth (Google only) + child profile storage | User can create account and add child |
| Week 5 | Dashboard (Hero Card + Library grid) + curriculum data display | User can browse topics and pin one |
| Week 6 | Campaign Day View + Teaching Script (tappable cards + TTS) | User can start Campaign and read Day 1 script |
| Week 7 | Practice Pad (Math, numeric input + MCQ, 10 Qs, dual explanation) | User can complete a Practice Pad session |
| Week 8 | Basic Quiz + Campaign day progression + Day 5 completion | Full 5-day Campaign works end-to-end |
| Week 9 | Certificate PDF + Razorpay + paywall soft gate at Day 4 | Payment works; free/pro gating works |

#### Sprint A Testing (Week 10)
- Test full flow yourself 10+ times across different topics
- Get 5 parents from Phase 0 to test (give free Pro access)
- Fix critical bugs; confirm all Analytics events firing (see PRD Section 11.2)
- **Gate:** Does the core loop feel right? Is the teaching script format working? Fix before moving to Sprint B.

---

### Sprint B — Engagement + Content Depth (Weeks 11-18)

**Goal:** Add retention mechanics, engagement features, and expand to all subjects. Build everything the product needs except board expansion.

| Week | Focus Area | Key Deliverables |
|------|-----------|-----------------|
| Week 11 | Auth + Streak | Phone OTP auth; daily streak tracking + XP + level-up |
| Week 12 | Arcade | Number Rush (Math) + Word Builder (English); free quota enforced |
| Week 13 | Beat the Parent + Car Mode | Async quiz reveal; audio-only script playback |
| Week 14 | Report Card + Kid Mode | Campaign history + mastery chart; navigation lock + PIN |
| Week 15 | Engagement polish | Daily Spark full rotation; whiteboard in Practice Pad; inline visuals in scripts |
| Week 16 | Payments + offline | Stripe integration; family plans; full offline mode (Hive caching) |
| Week 17 | Sunday Printer + accessibility | Worksheet PDF; high contrast; data export |
| Week 18 | Content: English + ICSE | CBSE+ICSE Grade 1-4 Math+English content (~70 topics total) |

#### Sprint B Testing (end of Week 18)
- Full regression of all Sprint A + B features
- Specific test: streak continuity over 7 days; offline → online sync; Arcade lives quota reset
- **Gate:** Full engagement loop (Campaign → Arcade → Streak → Certificate) feels complete. No major UX gaps.

---

### Sprint C — Boards + Global Expansion (Weeks 19-26)

**Goal:** Expand to all boards, all grades, Science/EVS, and advanced features. Get to ~150 topics and full global readiness.

| Week | Focus Area | Key Deliverables |
|------|-----------|-----------------|
| Week 19 | Science/EVS | Sort It! Arcade; drag-to-label in Practice Pad; Science content (CBSE Grade 1-3) |
| Week 20 | Multi-child + Revision Ring | Up to 3 child profiles; spaced repetition logic |
| Week 21 | Scan Diary / OCR | `google_mlkit_text_recognition`; topic detection; fallback to manual selection |
| Week 22 | Apple Sign-In + iOS build | App Store compliance; Apple Sign-In required |
| Week 23 | Common Core + IB PYP | Board-specific content overlay; curriculum mapping |
| Week 24 | Grades 4-5 | Content expansion across all subjects + boards |
| Week 25 | Fridge Art SVG + Hindi scripts | Topic-specific art assets; Hindi-language teaching scripts |
| Week 26 | Full QA + content audit | All ~150 topics reviewed; all error fallbacks tested; launch readiness check |

#### Sprint C Gate (End of Week 26)
- All content QA'd and human-reviewed (see PRD Section 4.3.4)
- All 11 modules working end-to-end on both Android and iOS
- All Analytics events confirmed firing
- All payment flows tested (Razorpay + Stripe, all plans, renewal + cancellation + downgrade)
- **No launch until this gate passes.** There is no soft launch or beta — we launch complete.

---

## Launch: Full Release (Week 27)

- Deploy to Google Play (Android) + App Store (iOS) simultaneously
- Email waitlist: "ParentHero is live — and it's the full product."
- WhatsApp groups + personal network + micro-influencer outreach
- First 100 users from waitlist get free 3-month Pro code

### What to Measure at Launch

| Metric | Target | What It Tells You |
|--------|--------|-------------------|
| Day 1 Campaign completion | 50%+ | Is Day 1 content engaging? |
| Day 1 → Day 2 return | 40%+ | Will they come back? |
| Day 5 Campaign completion | 25%+ | Is the full loop working? |
| Practice Pad session duration | 8+ minutes | Are kids actually practicing? |
| Paywall conversion | 5%+ | Will they pay? |
| Streak 7-day retention | 30%+ | Is the daily habit forming? |

---

## Phase 2: Scale to $20K MRR (Weeks 27+, post-launch)

**Build Phase 2 only after launch data confirms what to prioritize.**

### Grow Users
- Paid ads (Instagram, Facebook, Google UAC) — Target CAC: <₹250 (India), <$10 (US)
- ASO (App Store Optimization): screenshots, keywords, ratings
- Content marketing: Parent tips blog/Instagram
- Referral program: "Invite a parent, both get 1 month free"

### Expand Content
- State Board curriculum (Maharashtra, Rajasthan, Karnataka — based on user demand data)
- Hindi/Tamil/Telugu app UI (localization)

### Optimize Monetization
- A/B test: ₹199 vs ₹299 vs ₹399
- A/B test: paywall at Day 3 vs Day 4
- A/B testing framework (needs sufficient traffic volume)

### Phase 2 Features
- Voice-response practice questions (STT)
- Arcade combo/power-up mechanics
- Weekly progress email digest
- Community features (per-topic discussion boards)
- Advanced accessibility (screen reader, OpenDyslexic)
- Tablet-optimized layouts

### $20K MRR Math

| Scenario | Price | Paid Users Needed | Installs Needed (at 4% conversion) |
|----------|-------|-------------------|-------------------------------------|
| India only | ₹299 (~$3.50) | 5,714 | 143,000 |
| India only | ₹399 (~$4.70) | 4,255 | 106,000 |
| India + US mix (80/20) | Blended $5 | 4,000 | 100,000 |

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
