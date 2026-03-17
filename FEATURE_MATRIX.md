# ParentHero Feature Matrix
**Single source of truth for feature scope, access tier, board/grade coverage.**

Last updated: 2026-03-17

> **How to use this file:** Before adding any feature to a sprint, confirm its phase here. Before writing PRD detail for any feature, confirm its Free vs. Pro tier here. All other documents (PRD, NEXT_STEPS, CONTENT_EVALUATION) should reference this file rather than re-stating tier boundaries.

---

## Phase Structure

| Phase | Name | Goal | When |
|-------|------|------|------|
| **Phase 1** | Base Product | Build the complete product — all subjects, boards, engagement features — before launch | Weeks 3-26 (pre-launch) |
| **Phase 2** | Scale | Post-launch expansion — new markets, languages, community, advanced tooling | Weeks 27+ (post-launch) |

> **Note:** Phase 1 has internal build sprints (A → B → C) to sequence work. Sprint A covers the core loop. Sprint B adds engagement and content depth. Sprint C adds boards and global expansion. All sprints complete before launch.

---

## Legend

| Column | Meaning |
|--------|---------|
| **Phase** | ✅ Phase 1 (base product, build before launch) · ⏳ Phase 2 (post-launch) |
| **Sprint** | A = core loop (Weeks 3-10) · B = engagement + content (Weeks 11-18) · C = boards + global (Weeks 19-26) |
| **Free** | ✅ Available to free users · ❌ Pro only · ⚡ Partial (see note) |
| **Pro** | ✅ Available to Pro subscribers |
| **Board** | Which curriculum boards support this feature at the end of Phase 1 |
| **Grades** | Which grade levels support this feature at the end of Phase 1 |

---

## Module A — Onboarding & Account

| Feature | Phase | Sprint | Free | Pro | Board | Grades | Notes |
|---------|-------|--------|------|-----|-------|--------|-------|
| Phone OTP sign-up | ✅ | A | ✅ | ✅ | All | All | Primary auth for India |
| Google Sign-In | ✅ | A | ✅ | ✅ | All | All | Secondary |
| Apple Sign-In | ✅ | C | ✅ | ✅ | All | All | Required for iOS App Store |
| Child profile creation (name, grade, board) | ✅ | A | ✅ | ✅ | All | 1-5 | Sprint A: CBSE G1-3 only; expands each sprint |
| Multi-child support | ✅ | C | ✅ | ✅ | All | All | Phase 1; up to 3 children |
| Guest mode (no account) | ✅ | A | ✅ | — | CBSE | 1-3 | Data synced on sign-up |

---

## Module B — Dashboard (Home Screen)

| Feature | Phase | Sprint | Free | Pro | Board | Grades | Notes |
|---------|-------|--------|------|-----|-------|--------|-------|
| Active Campaign card | ✅ | A | ✅ | ✅ | All | 1-5 | — |
| Topic Library browse | ✅ | A | ✅ | ✅ | All | 1-5 | Read-only; pinning starts Campaign |
| "What Kids Are Learning" row | ✅ | A | ✅ | ✅ | All | 1-5 | Requires connectivity; cached fallback |
| Streak counter display | ✅ | B | ✅ | ✅ | All | All | — |
| XP/Level display | ✅ | B | ✅ | ✅ | All | All | — |
| Filter by subject/grade | ✅ | A | ✅ | ✅ | All | 1-5 | — |
| Offline cached dashboard | ✅ | B | ✅ | ✅ | All | All | Full offline mode Sprint B |

---

## Module C — Campaign (5-Day Learning Arc)

| Feature | Phase | Sprint | Free | Pro | Board | Grades | Notes |
|---------|-------|--------|------|-----|-------|--------|-------|
| Day 1-3 access | ✅ | A | ✅ | ✅ | All | 1-5 | Free users get full Days 1-3 |
| Day 4-5 access | ✅ | A | ❌ | ✅ | All | 1-5 | Paywall at Day 4; soft gate (2-min preview) |
| Campaign progress tracking | ✅ | A | ✅ | ✅ | All | 1-5 | Stored locally + Firestore |
| Daily campaign reminder notification | ✅ | A | ✅ | ✅ | All | All | Opt-in at onboarding |
| Campaign completion badge | ✅ | A | ❌ | ✅ | All | 1-5 | Pro only; shown as teaser to free users |
| Spaced repetition / Revision Ring | ✅ | C | — | ✅ | All | All | Phase 1; post-completion feature |

---

## Module D — Teaching Script

| Feature | Phase | Sprint | Free | Pro | Board | Grades | Notes |
|---------|-------|--------|------|-----|-------|--------|-------|
| Tappable card-based script display | ✅ | A | ✅ | ✅ | All | 1-5 | Max ~5 cards per script |
| Text-to-Speech (TTS) narration | ✅ | A | ✅ | ✅ | All | 1-5 | `flutter_tts`; fallback: text-only |
| "If Struggling" fallback block | ✅ | A | ✅ | ✅ | All | 1-5 | One fallback per script |
| Inline visual aids / emoji diagrams | ✅ | B | ✅ | ✅ | All | All | Needed for Science topics in Sprint B |
| Script progress bar | ✅ | A | ✅ | ✅ | All | 1-5 | — |

---

## Module E — Practice Pad

| Feature | Phase | Sprint | Free | Pro | Board | Grades | Notes |
|---------|-------|--------|------|-----|-------|--------|-------|
| 10-question session | ✅ | A | ✅ | ✅ | All | 1-5 | Free: capped at 10 Qs per session |
| Unlimited sessions | ✅ | A | ❌ | ✅ | All | 1-5 | Pro unlocks unlimited sessions |
| Numeric input questions | ✅ | A | ✅ | ✅ | All | 1-5 | — |
| Multiple choice questions | ✅ | A | ✅ | ✅ | All | 1-5 | — |
| Drag-to-label questions | ✅ | B | ✅ | ✅ | All | All | Required for Science (plants, body parts) |
| Dual explanation on wrong answer | ✅ | A | ✅ | ✅ | All | 1-5 | Core differentiator; Child + Parent mode |
| Drawing / whiteboard input | ✅ | B | ✅ | ✅ | All | All | Math working-out space |
| Difficulty progression within session | ✅ | A | ✅ | ✅ | All | 1-5 | Easy → Medium → Hard across 10 Qs |
| Question pool randomization | ✅ | A | ✅ | ✅ | All | 1-5 | 50-question pool; 10 randomly selected |

---

## Module F — Beat the Parent Quiz

| Feature | Phase | Sprint | Free | Pro | Board | Grades | Notes |
|---------|-------|--------|------|-----|-------|--------|-------|
| End-of-campaign quiz (5 questions) | ✅ | B | ❌ | ✅ | All | 1-5 | Gated at Day 5 (Pro) |
| Parent vs. child reveal moment | ✅ | B | ❌ | ✅ | All | 1-5 | Countdown + confetti animation |
| Share result image | ✅ | B | ❌ | ✅ | All | 1-5 | Shareable image generated client-side |
| Trap question included | ✅ | B | ❌ | ✅ | All | 1-5 | Q4 is always the "trick" question |

---

## Module G — Car Mode

| Feature | Phase | Sprint | Free | Pro | Board | Grades | Notes |
|---------|-------|--------|------|-----|-------|--------|-------|
| Audio-only script playback | ✅ | B | ❌ | ✅ | All | All | Unique differentiator; Pro only |
| Voice-response practice Qs (STT) | ⏳ | — | ❌ | ✅ | All | All | Phase 2; STT reliability risk |

---

## Module H — Arcade

| Feature | Phase | Sprint | Free | Pro | Board | Grades | Notes |
|---------|-------|--------|------|-----|-------|--------|-------|
| Number Rush (Math) | ✅ | B | ⚡ | ✅ | All | 1-5 | Free: 3 plays/day |
| Word Builder (English) | ✅ | B | ⚡ | ✅ | All | All | Free: 3 plays/day |
| Sort It! (Science) | ✅ | C | ⚡ | ✅ | All | All | Free: 3 plays/day |
| Combo/power-up mechanics | ⏳ | — | ❌ | ✅ | All | All | Phase 2 enhancement |

---

## Module I — Streak & XP System

| Feature | Phase | Sprint | Free | Pro | Board | Grades | Notes |
|---------|-------|--------|------|-----|-------|--------|-------|
| Daily streak tracking | ✅ | B | ✅ | ✅ | All | All | — |
| XP points per action | ✅ | B | ✅ | ✅ | All | All | — |
| Level-up celebration | ✅ | B | ✅ | ✅ | All | All | — |
| Streak freeze / grace day | ✅ | B | ❌ | ✅ | All | All | Pro perk |

---

## Module J — Parent Report Card

| Feature | Phase | Sprint | Free | Pro | Board | Grades | Notes |
|---------|-------|--------|------|-----|-------|--------|-------|
| Campaign completion history | ✅ | B | ❌ | ✅ | All | All | — |
| Mastery chart by subject | ✅ | B | ❌ | ✅ | All | All | `fl_chart` |
| Scan Diary / OCR topic intake | ✅ | C | ❌ | ✅ | All | All | `google_mlkit_text_recognition` |
| Weekly progress email digest | ⏳ | — | ❌ | ✅ | All | All | Phase 2 |

---

## Module K — Settings

| Feature | Phase | Sprint | Free | Pro | Board | Grades | Notes |
|---------|-------|--------|------|-----|-------|--------|-------|
| Account management (name, phone) | ✅ | A | ✅ | ✅ | All | All | DPDP: delete account option required |
| Child profile edit (grade, board) | ✅ | A | ✅ | ✅ | All | All | — |
| Notification preferences + time picker | ✅ | A | ✅ | ✅ | All | All | — |
| Subscription management | ✅ | A | ✅ | ✅ | All | All | Links to Razorpay/Stripe portal |
| Dyslexia font toggle | ✅ | A | ✅ | ✅ | All | All | — |
| TTS speed control | ✅ | A | ✅ | ✅ | All | All | 0.75x, 1.0x, 1.25x |
| High contrast mode | ✅ | B | ✅ | ✅ | All | All | Accessibility |
| Export my data | ✅ | B | ✅ | ✅ | All | All | GDPR/DPDP requirement |
| Privacy policy / Terms links | ✅ | A | ✅ | ✅ | All | All | Required for store compliance |

---

## Module — Certificates & Rewards

| Feature | Phase | Sprint | Free | Pro | Board | Grades | Notes |
|---------|-------|--------|------|-----|-------|--------|-------|
| Campaign completion certificate (PDF) | ✅ | A | ❌ | ✅ | All | 1-5 | Pro only |
| Personalized certificate (name + score) | ✅ | A | ❌ | ✅ | All | 1-5 | Score from quiz |
| Printable worksheet | ✅ | B | ❌ | ✅ | All | All | Sunday Printer |
| Fridge Art SVG (topic-specific) | ✅ | C | ❌ | ✅ | All | All | — |

---

## Module — Kid Mode

| Feature | Phase | Sprint | Free | Pro | Board | Grades | Notes |
|---------|-------|--------|------|-----|-------|--------|-------|
| Kid Mode UI (large touch targets) | ✅ | B | ✅ | ✅ | All | All | — |
| Navigation lock (3-sec hold to exit) | ✅ | B | ✅ | ✅ | All | All | — |
| Parent PIN to exit Kid Mode | ✅ | B | ✅ | ✅ | All | All | More robust than hold-only |

---

## Monetization Summary

### Pricing

| Plan | India | US/Global | Billing |
|------|-------|-----------|---------|
| Free | ₹0 | $0 | — |
| Pro Monthly | ₹299/month | $4.99/month | Auto-renew |
| Pro Annual | ₹1,999/year | $39.99/year | Auto-renew; ~44% saving |
| Pro Family Monthly | ₹399/month | $6.99/month | Up to 3 children |
| Pro Family Annual | ₹3,499/year | $59.99/year | Up to 3 children |

### Paywall Behavior

- **Free tier:** Full access to Days 1-3 of any campaign, 10 Practice Pad questions per session, basic Dashboard browsing
- **Day 4 soft gate:** Free users see a 2-minute preview of Day 4 content, then a paywall prompt. They cannot complete Day 4 without subscribing.
- **Trial:** No separate trial period. Days 1-3 ARE the trial (functional, not time-boxed).
- **Grace period:** 3 days on failed renewal before downgrade to free tier.
- **Downgrade behavior:** In-progress campaigns remain visible but Day 4+ locked. Completed campaigns and certificates retained.

---

## Curriculum Scope

| Phase | Sprint | Boards | Grades | Subjects | Approx Topics |
|-------|--------|--------|--------|----------|--------------|
| Phase 1 | Sprint A | CBSE | 1-3 | Math | ~20 |
| Phase 1 | Sprint B | CBSE + ICSE | 1-4 | Math + English | ~70 |
| Phase 1 | Sprint C | + Common Core, IB PYP | 1-5 | Math + English + Science/EVS | ~150 |
| Phase 2 | — | + State Boards | 1-5 | All + regional subjects | ~200+ |

---

## Phase 2 Feature List (Post-Launch)

These features are explicitly out of scope for the base product launch:

| Feature | Rationale for deferral |
|---------|----------------------|
| Voice-response practice Qs (STT) | STT accuracy on children's voices is unreliable; high support risk |
| Arcade combo/power-up mechanics | Enhancement; core game loop ships in Phase 1 |
| Weekly progress email digest | Needs email infrastructure and content templates; low urgency |
| State Board curriculum (Rajasthan, Maharashtra, etc.) | Small incremental audience; high content effort |
| Hindi/Tamil/Telugu UI | Localization tooling needed; Phase 1 ships English UI only |
| A/B testing framework | Requires meaningful traffic volume to be useful |
| Referral program | Needs subscription base before referrals have value |
| Community features (per-topic discussion boards) | Trust & safety overhead; requires moderation |
| Advanced accessibility (screen reader, OpenDyslexic) | Phase 1 has dyslexia font + high contrast; full a11y is Phase 2 |
| Tablet-optimized layouts | Phone-first; tablet optimization after core UX is stable |

---

## Open Questions (to resolve before Sprint B)

1. **Multi-child free tier:** Is free tier limited to 1 child profile or unlimited? (Recommend: unlimited children, but only 1 active Campaign at a time on free)
2. **Arcade free quota scope:** "3 plays/day" — is this per game type or total across all Arcade games?
3. **Annual plan timing:** Offer annual plan from Day 1 or surface it only after user hits paywall?
4. **ICSE sequencing:** ICSE is 6-12 months ahead of CBSE — does the "What Kids Are Learning" row need board-aware filtering to avoid showing Grade 2 content to a Grade 1 ICSE parent?
