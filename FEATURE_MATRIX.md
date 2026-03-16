# ParentHero Feature Matrix
**Single source of truth for feature scope, access tier, board/grade coverage.**

Last updated: 2026-03-16

> **How to use this file:** Before adding any feature to a sprint, confirm its MVP status here. Before writing PRD detail for any feature, confirm its Free vs. Pro tier here. All other documents (PRD, NEXT_STEPS, CONTENT_EVALUATION) should reference this file rather than re-stating tier boundaries.

---

## Legend

| Column | Meaning |
|--------|---------|
| **MVP** | ✅ In MVP build (Weeks 3-10) · ⏳ Phase 2 (Weeks 11-20) · 🔜 Phase 3+ |
| **Free** | ✅ Available to free users · ❌ Pro only · ⚡ Partial (see note) |
| **Pro** | ✅ Available to Pro subscribers |
| **Board** | Which curriculum boards are supported at launch |
| **Grades** | Which grade levels are supported at launch |

---

## Module A — Onboarding & Account

| Feature | MVP | Free | Pro | Board | Grades | Notes |
|---------|-----|------|-----|-------|--------|-------|
| Phone OTP sign-up | ✅ | ✅ | ✅ | All | All | Primary auth method |
| Google Sign-In | ✅ | ✅ | ✅ | All | All | Secondary |
| Apple Sign-In | ⏳ | ✅ | ✅ | All | All | Phase 2 (iOS launch) |
| Child profile creation (name, grade, board) | ✅ | ✅ | ✅ | CBSE | 1-3 | MVP: CBSE G1-3 only |
| Multi-child support | ⏳ | ✅ | ✅ | All | All | Phase 2 |
| Guest mode (no account) | ✅ | ✅ | — | CBSE | 1-3 | Data synced on sign-up |

---

## Module B — Dashboard (Home Screen)

| Feature | MVP | Free | Pro | Board | Grades | Notes |
|---------|-----|------|-----|-------|--------|-------|
| Active Campaign card | ✅ | ✅ | ✅ | CBSE | 1-3 | — |
| Topic Library browse | ✅ | ✅ | ✅ | CBSE | 1-3 | Read-only; pinning starts campaign |
| "What Kids Are Learning" row | ✅ | ✅ | ✅ | CBSE | 1-3 | Requires connectivity; cached fallback |
| Streak counter display | ⏳ | ✅ | ✅ | All | All | Phase 2 |
| XP/Level display | ⏳ | ✅ | ✅ | All | All | Phase 2 |
| Filter by subject/grade | ✅ | ✅ | ✅ | CBSE | 1-3 | — |
| Offline cached dashboard | ✅ | ✅ | ✅ | CBSE | 1-3 | Timestamp shown when offline |

---

## Module C — Campaign (5-Day Learning Arc)

| Feature | MVP | Free | Pro | Board | Grades | Notes |
|---------|-----|------|-----|-------|--------|-------|
| Day 1-3 access | ✅ | ✅ | ✅ | CBSE | 1-3 | Free users get full Days 1-3 |
| Day 4-5 access | ✅ | ❌ | ✅ | CBSE | 1-3 | Paywall at Day 4; soft gate (2-min preview) |
| Campaign progress tracking | ✅ | ✅ | ✅ | CBSE | 1-3 | Stored locally + Firestore |
| Daily campaign reminder notification | ✅ | ✅ | ✅ | All | All | Opt-in at onboarding |
| Campaign completion badge | ✅ | ❌ | ✅ | CBSE | 1-3 | Pro only; shown as teaser to free users |
| Spaced repetition / Revision Ring | 🔜 | — | ✅ | All | All | Phase 3+ |

---

## Module D — Teaching Script

| Feature | MVP | Free | Pro | Board | Grades | Notes |
|---------|-----|------|-----|-------|--------|-------|
| Tappable card-based script display | ✅ | ✅ | ✅ | CBSE | 1-3 | Max ~5 cards per script |
| Text-to-Speech (TTS) narration | ✅ | ✅ | ✅ | CBSE | 1-3 | `flutter_tts`; fallback: text-only |
| "If Struggling" fallback block | ✅ | ✅ | ✅ | CBSE | 1-3 | One fallback per script |
| Inline visual aids / emoji diagrams | ⏳ | ✅ | ✅ | All | All | Phase 2 (Science topics especially) |
| Script progress bar | ✅ | ✅ | ✅ | CBSE | 1-3 | — |

---

## Module E — Practice Pad

| Feature | MVP | Free | Pro | Board | Grades | Notes |
|---------|-----|------|-----|-------|--------|-------|
| 10-question session (Math) | ✅ | ✅ | ✅ | CBSE | 1-3 | Free: capped at 10 Qs per session |
| Unlimited questions (Math) | ✅ | ❌ | ✅ | CBSE | 1-3 | Pro unlocks unlimited sessions |
| Numeric input questions | ✅ | ✅ | ✅ | CBSE | 1-3 | — |
| Multiple choice questions | ✅ | ✅ | ✅ | CBSE | 1-3 | — |
| Drag-to-label questions | ⏳ | ✅ | ✅ | All | All | Phase 2 (Science topics) |
| Dual explanation on wrong answer (Child + Parent mode) | ✅ | ✅ | ✅ | CBSE | 1-3 | Core differentiator |
| Drawing / whiteboard input | ⏳ | ✅ | ✅ | All | All | Phase 2 |
| Difficulty progression within session | ✅ | ✅ | ✅ | CBSE | 1-3 | Easy → Medium → Hard across 10 Qs |
| Question pool randomization (50-question pool, show 10) | ✅ | ✅ | ✅ | CBSE | 1-3 | Prevents repetition on replay |

---

## Module F — Beat the Parent Quiz

| Feature | MVP | Free | Pro | Board | Grades | Notes |
|---------|-----|------|-----|-------|--------|-------|
| End-of-campaign quiz (5 questions) | ✅ | ❌ | ✅ | CBSE | 1-3 | Gated at Day 5 (Pro) |
| Parent vs. child reveal moment | ✅ | ❌ | ✅ | CBSE | 1-3 | Countdown + confetti animation |
| Share result image | ✅ | ❌ | ✅ | CBSE | 1-3 | Shareable image generated client-side |
| Trap question included | ✅ | ❌ | ✅ | CBSE | 1-3 | Q4 is always the "trick" question |

---

## Module G — Car Mode

| Feature | MVP | Free | Pro | Board | Grades | Notes |
|---------|-----|------|-----|-------|--------|-------|
| Audio-only script playback | ⏳ | ❌ | ✅ | All | All | Phase 2 |
| Voice-response practice Qs | ⏳ | ❌ | ✅ | All | All | Phase 3 (STT complexity) |

---

## Module H — Arcade

| Feature | MVP | Free | Pro | Board | Grades | Notes |
|---------|-----|------|-----|-------|--------|-------|
| Number Rush (Math) | ⏳ | ⚡ | ✅ | CBSE | 1-3 | Phase 2; Free: 3 plays/day |
| Word Builder (English) | ⏳ | ⚡ | ✅ | All | All | Phase 3 |
| Sort It! (Science) | ⏳ | ⚡ | ✅ | All | All | Phase 3 |
| Combo/power-up mechanics | 🔜 | ❌ | ✅ | All | All | Phase 3+ |

---

## Module I — Streak & XP System

| Feature | MVP | Free | Pro | Board | Grades | Notes |
|---------|-----|------|-----|-------|--------|-------|
| Daily streak tracking | ⏳ | ✅ | ✅ | All | All | Phase 2 |
| XP points per action | ⏳ | ✅ | ✅ | All | All | Phase 2 |
| Level-up celebration | ⏳ | ✅ | ✅ | All | All | Phase 2 |
| Streak freeze / grace day | ⏳ | ❌ | ✅ | All | All | Phase 2; Pro perk |

---

## Module J — Parent Report Card

| Feature | MVP | Free | Pro | Board | Grades | Notes |
|---------|-----|------|-----|-------|--------|-------|
| Campaign completion history | ⏳ | ❌ | ✅ | All | All | Phase 2 |
| Mastery chart by subject | ⏳ | ❌ | ✅ | All | All | Phase 2 |
| Weekly progress email digest | 🔜 | ❌ | ✅ | All | All | Phase 3+ |
| Scan diary / OCR intake | 🔜 | ❌ | ✅ | All | All | Phase 3+ |

---

## Module K — Settings

| Feature | MVP | Free | Pro | Board | Grades | Notes |
|---------|-----|------|-----|-------|--------|-------|
| Account management (name, phone) | ✅ | ✅ | ✅ | All | All | DPDP compliance: delete account option |
| Child profile edit (grade, board) | ✅ | ✅ | ✅ | CBSE | 1-3 | — |
| Notification preferences | ✅ | ✅ | ✅ | All | All | Toggle + time picker |
| Subscription management | ✅ | ✅ | ✅ | All | All | Links to Razorpay/Stripe portal |
| Dyslexia font toggle | ✅ | ✅ | ✅ | All | All | Accessibility |
| TTS speed control | ✅ | ✅ | ✅ | All | All | 0.75x, 1x, 1.25x |
| High contrast mode | ⏳ | ✅ | ✅ | All | All | Phase 2 |
| Privacy policy / Terms links | ✅ | ✅ | ✅ | All | All | Required for compliance |
| Export my data | ⏳ | ✅ | ✅ | All | All | Phase 2; GDPR/DPDP requirement |

---

## Module — Certificates & Rewards

| Feature | MVP | Free | Pro | Board | Grades | Notes |
|---------|-----|------|-----|-------|--------|-------|
| Campaign completion certificate (PDF) | ✅ | ❌ | ✅ | CBSE | 1-3 | Pro only |
| Printable worksheet | ⏳ | ❌ | ✅ | CBSE | 1-3 | Phase 2 |
| Fridge Art SVG (topic-specific) | ⏳ | ❌ | ✅ | All | All | Phase 2 |
| Personalized certificate (name + score) | ✅ | ❌ | ✅ | CBSE | 1-3 | Name from child profile; score from quiz |

---

## Module — Kid Mode

| Feature | MVP | Free | Pro | Board | Grades | Notes |
|---------|-----|------|-----|-------|--------|-------|
| Kid Mode UI (large touch targets) | ⏳ | ✅ | ✅ | All | All | Phase 2 |
| Navigation lock (3-second hold to exit) | ⏳ | ✅ | ✅ | All | All | Phase 2 |
| Parent PIN to exit Kid Mode | ⏳ | ✅ | ✅ | All | All | Phase 2; more robust than hold-only |

---

## Monetization Summary

### Pricing

| Plan | India | US/Global | Billing |
|------|-------|-----------|---------|
| Free | ₹0 | $0 | — |
| Pro Monthly | ₹299/month | $4.99/month | Auto-renew |
| Pro Annual | ₹1,999/year | $39.99/year | Auto-renew; ~44% saving |

### Paywall Behavior

- **Free tier:** Full access to Days 1-3 of any campaign, 10 Practice Pad questions per session, basic Dashboard browsing
- **Day 4 soft gate:** Free users see a 2-minute preview of Day 4 content, then a paywall prompt. They cannot complete Day 4 without subscribing.
- **Trial:** No separate trial period. Days 1-3 ARE the trial (functional, not time-boxed).
- **Grace period:** 3 days on failed renewal before downgrade to free tier.
- **Downgrade behavior:** In-progress campaigns remain visible but Day 4+ locked. Completed campaigns and certificates retained.

---

## Curriculum Scope by Phase

| Phase | Boards | Grades | Subjects | Approx Topics |
|-------|--------|--------|----------|--------------|
| MVP (Weeks 3-10) | CBSE only | Grade 1-3 | Math only | ~20 topics |
| Phase 2 (Weeks 11-20) | CBSE, ICSE | Grade 1-4 | Math + English | ~60 topics |
| Phase 3 (Weeks 21-30) | + Common Core | Grade 1-5 | Math + English + Science/EVS | ~120 topics |
| Phase 4 (Weeks 31-40) | + IB PYP, State Boards | Grade 1-5 | All subjects | ~200+ topics |

---

## Open Questions (to resolve before Phase 2)

1. **Multi-child:** Is free tier limited to 1 child profile or unlimited children?
2. **Board expansion:** When adding ICSE, does sequencing change (ICSE is 6-12 months ahead of CBSE)?
3. **Arcade free quota:** "3 plays/day" for free — is this per game type or total arcade plays?
4. **Annual plan timing:** Offer annual plan from Day 1 or only after user completes first campaign?
