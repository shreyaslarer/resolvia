# RESOLVIA — MASTER WEBSITE DESIGN SYSTEM
**Purpose:** Canonical design database for Resolvia's new website and front-end experience.  
**Audience:** AI coding agents, product designers and front-end engineers.  
**Stack:** Next.js, React, TypeScript; existing MERN-oriented project architecture.  
**Direction:** Greenfield redesign. Do not carry forward the previous Resolvia palette, font pair or template.

## 0. Instructions to the Coding Agent

Before coding, inspect the actual repository, Next.js version, styling system, scripts, dependencies and available assets. Treat this document as the new visual direction. Reuse engineering infrastructure where practical, but do not inherit old visual styling just because it exists. Do not silently mix old and new design tokens. Build in small, verifiable stages: static hero, animation proof of concept, then full UI. Render and inspect at desktop, tablet and mobile widths. Compiling successfully is not proof of visual quality.

Do not invent institutional rules, testimonials, user counts, customer logos, endorsements, official approval or backend capabilities. Mark demonstration data clearly. Keep the experience understandable to students with different levels of academic and technical confidence.

---

## 1. Product and Audience

Resolvia connects a student's institutional question to an explanation, the relevant official evidence and a practical next step. It is not merely a generic chatbot, search-results page or university dashboard.

**Core journey:** Ask naturally → clarify only what matters → understand what applies → inspect the official source → know the next step.

Primary users include students who do not know university terminology, are unsure which scheme or circular applies, need simple explanations, want to verify information independently, or use a phone on a slow connection.

Product personality: clear, grounded, capable, human, calm under pressure, modern and distinctive.

**Product promise:** “Understand what applies to you. See the source. Know what to do next.”

Resolvia explains information; the issuing institution remains the authority.

---

## 2. Chosen Visual Direction: Signal & Structure

Create a contemporary, high-contrast interface combining a clean light canvas, deep graphite/navy ink, a vivid acid-lime signal color and a cinematic 3D scene that transitions from complexity to clarity.

This is a fresh visual identity, not a continuation of the previous warm-paper/copper template. The result should feel like a modern digital product with serious academic purpose—not a cyberpunk experiment or generic AI landing page.

Use one strong focal point per viewport. Use asymmetry, deliberate whitespace, typography and alignment instead of repeating centered headings followed by identical cards. The hero can be expressive; the question and answer experience must be calm and highly readable.

### Prohibited patterns

- Purple/blue AI gradients, neon cyberpunk styling or glowing outlines.
- Glassmorphism as the main layout system.
- Floating 3D blobs unrelated to the product.
- Robots, AI sparkles, neural-network wallpaper or code rain.
- The same three-card grid repeated in every section.
- Every content group inside a rounded card.
- Random accent colors, multiple unrelated gradients or giant shadows.
- Fake statistics, testimonials, institution logos or trust badges.
- Emoji as interface icons.
- Large animation that blocks the main action.
- Decorative 3D imagery behind dense text.
- A dark theme applied to every section just because the site uses 3D.
- Excessively rounded controls or constant motion.

---

## 3. New Color System

These are greenfield tokens, not inherited values. Implement them semantically and avoid scattering raw hex values through components.

| Token | Hex | Use |
|---|---|---|
| `--color-canvas` | `#F4F6F3` | Main page background |
| `--color-canvas-alt` | `#E9EDE8` | Occasional alternate section |
| `--color-surface` | `#FFFFFF` | Inputs and limited reading surfaces |
| `--color-ink` | `#111A22` | Primary text, headings, dark surfaces |
| `--color-ink-soft` | `#34424D` | Secondary text |
| `--color-ink-muted` | `#596772` | Metadata; verify contrast in context |
| `--color-signal` | `#D6F36A` | Signature accent and primary CTA background |
| `--color-signal-hover` | `#C5E45A` | CTA hover |
| `--color-signal-pressed` | `#B4D54B` | CTA pressed |
| `--color-dark` | `#111A22` | Hero/feature dark region and footer |
| `--color-dark-raised` | `#1A2731` | Secondary dark surface |
| `--color-dark-line` | `#35434C` | Dividers on dark surfaces |
| `--color-border` | `#D4DBD6` | Standard light border |
| `--color-border-strong` | `#AAB6AE` | Stronger field/separator border |
| `--color-link` | `#245B49` | Inline links on light surfaces |
| `--color-focus` | `#245B49` | Keyboard focus |
| `--color-success` | `#216747` | Success only |
| `--color-warning` | `#855710` | Warning only |
| `--color-error` | `#A52E32` | Error only |

### Color usage

- Keep the light canvas dominant for reading and form interfaces.
- Use dark regions selectively for the cinematic hero and possibly the footer.
- Use lime sparingly: primary CTA, selected state and one or two meaningful visual accents. Lime is a signal, not a background for every section.
- Primary CTA text must be dark ink, not white on lime.
- Do not add blue/purple as a secondary brand palette.
- Check actual contrast against WCAG 2.2 AA; adjust foregrounds when a combination fails.
- Semantic colors must never be decorative or the only way a status is communicated.

Example token block for a CSS-first project (adapt to the current styling architecture rather than creating a second source of truth):

```css
:root {
  --color-canvas: #F4F6F3;
  --color-canvas-alt: #E9EDE8;
  --color-surface: #FFFFFF;
  --color-ink: #111A22;
  --color-ink-soft: #34424D;
  --color-ink-muted: #596772;
  --color-signal: #D6F36A;
  --color-signal-hover: #C5E45A;
  --color-signal-pressed: #B4D54B;
  --color-dark: #111A22;
  --color-dark-raised: #1A2731;
  --color-dark-line: #35434C;
  --color-border: #D4DBD6;
  --color-border-strong: #AAB6AE;
  --color-link: #245B49;
  --color-focus: #245B49;
  --color-success: #216747;
  --color-warning: #855710;
  --color-error: #A52E32;

  /* Spatial Liquid Glass System */
  --glass-ambient-bg: rgba(17, 26, 34, 0.20);
  --glass-surface-bg: rgba(17, 26, 34, 0.36);
  --glass-elevated-bg: rgba(17, 26, 34, 0.58);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-subtle: rgba(255, 255, 255, 0.05);
  --glass-border-highlight: rgba(255, 255, 255, 0.18);
  --glass-inner-specular: inset 0 1px 0 0 rgba(255, 255, 255, 0.14);
  --glass-shadow-soft: 0 16px 36px -10px rgba(0, 0, 0, 0.45);
  --glass-shadow-elevated: 0 24px 50px -12px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.06);
}
```

---

## 4. Typography — Google Fonts Only

Use Google Fonts only via `next/font/google`. Load only weights used by the design.

### Approved font pairing (Premium Spatial Redesign)

- **Inter Tight:** hero display and section headings. Gives the brand a precise, compact, contemporary editorial character.
- **Inter:** navigation, buttons, labels, form controls, body copy, answer content, and source metadata. Highly legible and institutional.

Do not add a third font family. Keep system fallbacks if Google Font loading fails.

### Weights

- Inter Tight: 400, 500, 600, 700 only as needed.
- Inter: 400, 500, 600, 700 only as needed.

Avoid ultra-bold display text everywhere and avoid making every paragraph medium weight.

### Type scale

| Role | Desktop | Mobile | Line height |
|---|---:|---:|---:|
| Hero display | 56–76px | 38–48px | 0.98–1.08 |
| Page heading | 40–48px | 30–38px | 1.08–1.18 |
| Section heading | 28–36px | 24–29px | 1.15–1.25 |
| Small heading | 20–24px | 19–22px | 1.25–1.35 |
| Lead text | 18–20px | 17–18px | 1.5–1.65 |
| Body | 16–17px | 16px | 1.55–1.75 |
| Controls/labels | 14–16px | 14–16px | 1.4–1.5 |
| Metadata | 12–13px | 12–13px | 1.4–1.5 |

Hero/section headings use Inter Tight 500–600; body/UI uses Inter 400–600. Use `clamp()` for responsive display type. Keep reading line lengths around 60–75 characters. Use sentence case, subtle tracking only for small labels, and real HTML for all meaningful text. Never bake interface text into the 3D render.

---

## 5. Layout, Spacing and Shape

### Containers

- Global max width: 1240px.
- Reading content max width: 720–780px.
- Standard content max width: 1120–1240px.
- Hero visual can use a wider canvas while text remains aligned to the global grid.
- Use asymmetric layouts when they improve hierarchy; do not force every section into centered symmetry.

### Gutters

- Large desktop: 48–72px.
- Laptop: 36–48px.
- Tablet: 24–32px.
- Mobile: 18–24px.

### Spacing scale

Use a 4px base scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120px`.

Use 8–16px for control gaps, 14–20px for paragraph gaps, and roughly 72–112px section spacing on desktop / 48–72px on mobile. Keep whitespace generous without making users scroll excessively before reaching the product.

### Shape language

- Standard control radius: 8–12px.
- Larger media radius: 12–18px only where composition needs it.
- Document rows may use subtle corners or square edges.
- No pill-shaped containers everywhere; no repeated 24px+ radius cards.
- Default shadow: none. Use borders, contrast and spacing first.

---

## 6. Header and Footer

### Header

Desktop content: wordmark `Resolvia`, links `How it works`, `What we resolve`, `About`, and actions `Sign in` (only if a real destination exists) plus primary CTA `Start a resolution`.

- Height target: 72–84px.
- Align to the global content container.
- Canvas background or transparent-over-hero only when contrast and scroll behavior are reliable.
- No floating capsule, default glass blur or heavy shadow.
- Use a subtle divider where useful.
- Use an existing approved logo asset if one exists; otherwise use a typographic wordmark. Do not invent a complex symbol.
- Mobile menu must be accessible and functional.
- Links must target real sections/routes. No dead links or fake authentication.

### Footer

Use a dark ink background only if it gives the overall page a clear finish. Keep the footer compact: wordmark, one-sentence product description, relevant links and real legal/contact links only where destinations exist. Use a restrained divider. Do not invent social links, contact details, partnerships or approval claims. Do not build a giant sitemap or decorative illustration.

---

## 7. Cinematic 3D Hero

### Purpose and art direction

The hero should express **complex institutional information becoming a clear path**. Use one controlled scene with precise camera, lighting and materials. A possible concept is document-like layers or pathways that begin dispersed and align into a coherent route.

The result should feel architectural and tactile, not cyberpunk. Avoid fake documents containing generated gibberish, random floating cubes, blobs, glowing orbs and excessive particles.

### Composition

- Desktop target: around 85–100svh, subject to usability testing.
- Mobile height should be content-driven; avoid forcing a long full-screen pinned sequence.
- Headline, support copy and CTA are real HTML, not part of the rendered image.
- Keep the visual separate from the reading area.
- Use the dark palette with restrained signal-lime details.
- The first CTA must be visible immediately.
- Show a static poster while animation assets load.

Suggested copy:
- **Headline:** “Make the rules make sense.”
- **Supporting text:** “Ask your institutional question. Get a clear explanation, the source behind it, and your next step.”
- **CTA:** “Start a resolution”

These are draft copy choices, not claims that all workflows are already live.

### Animation story

1. **Complexity:** abstract layers or routes appear unaligned.
2. **Connection:** selected elements move into a coherent relationship.
3. **Clarity:** the scene settles into a simple ordered composition.

Do not depict official approval or a verified outcome unless the product is actually showing one.

### Scroll rules

- Native browser scrolling remains in control.
- Scroll progress maps to animation progress; reverse scrolling reverses the frames.
- Pin only the hero if it improves the story, and keep the pinned duration reasonable.
- Never force users to complete the animation before using the question input.
- Stop unnecessary animation work after leaving the hero.
- Respect `prefers-reduced-motion`.
- If JavaScript/canvas fails, the static poster and HTML content remain usable.

---

## 8. 3D and Motion Stack

Use the smallest stack that meets the goal. Inspect existing dependencies before installing anything.

| Need | Preferred tool | Purpose |
|---|---|---|
| UI | Next.js + React + TypeScript | Application |
| Styling | Existing CSS/Tailwind setup | Avoid duplicate styling systems |
| Scroll timeline | GSAP + ScrollTrigger | Scroll progress and optional pinning |
| Frame rendering | Canvas 2D | Draw the selected frame |
| 3D scene | Blender | Consistent camera, materials, lighting and geometry |
| Frame processing | FFmpeg | Extract, resize and optimize |
| Icons | Lucide React | One icon family only when needed |

Do not add Three.js/React Three Fiber for a pre-rendered frame sequence. Add real-time 3D only when a specific interaction requires it and the performance cost is justified.

### Production workflow

1. Storyboard and create a static reference.
2. Build/refine a controlled Blender scene.
3. Animate the camera and selected objects.
4. Render a consistent sequence at fixed dimensions.
5. Optimize with FFmpeg.
6. Test a short sequence in Canvas.
7. Map normalized scroll progress to a frame index.
8. Test real desktop/mobile performance before increasing frame count or resolution.

AI image-to-video is acceptable for exploration. Do not assume it will maintain geometry, object identity or camera composition consistently enough for the final precise frame sequence.

### Canvas/frame rules

- Start with a small test sequence; do not pre-commit to hundreds of frames.
- Keep frame dimensions and aspect ratio consistent.
- Preload poster and a small initial set, then load progressively.
- Do not decode every high-resolution frame into memory at once on mobile.
- Reserve dimensions to prevent layout shifts.
- Use `requestAnimationFrame` or equivalent to avoid redundant drawing.
- Map scroll progress to a frame index and preserve aspect ratio.
- Clean up listeners, observers and GSAP timelines on unmount.
- Provide a fallback if a frame fails.
- Avoid continuous rendering when the selected frame has not changed.
- Test CPU/network throttling and a mid-range phone.

A video is easier to deliver; an image sequence offers more deterministic scroll-to-frame control but may use more memory and requests. Start with a small optimized frame sequence and benchmark it. If it performs poorly, evaluate a carefully engineered video-seeking fallback or a simpler static/short-video hero.

### Motion beyond the hero

- Hover/focus: 120–180ms.
- Standard transition: 180–240ms.
- Small panel transition: 220–320ms.

Avoid bouncing everywhere, constant loops, animated gradients, whole-page parallax and motion that delays user input.

---

## 9. Website Information Architecture

Build a continuous editorial/product experience, not a card-based dashboard.

1. Header.
2. Cinematic hero and primary action.
3. How it works.
4. What Resolvia can help with.
5. Demonstration of an answer and official evidence.
6. Evidence/reliability explanation.
7. Final CTA.
8. Footer.

The question interface must be reachable from the hero. Do not require users to read the whole marketing page first.

### How it works

Explain simply: ask in your own words → answer a brief clarification if needed → understand what applies → open the official source → follow the next step.

Use a numbered editorial list, process line or one visual sequence. Do not repeat icon-heading-card patterns for every step.

### Capabilities

Use plain-language examples and text links rather than identical card grids. Possible topics include exam rules, registration deadlines, revaluation procedures and academic notifications, but only show workflows in scope. Clearly distinguish demo behavior from live functionality.

### Trust and reliability

Explain how official documents are linked and how uncertainty is handled. Do not claim “100% accurate”, “zero hallucinations”, “officially approved” or “guaranteed decisions”.

---

## 10. Question, Answer and Official Evidence UI

### Question input

Prompt: **“What do you need help with?”**

Supporting text: “Ask in your own words. We'll help you understand the applicable information and find the official source.”

Example suggestions as plain text links:
- “What documents do I need for revaluation?”
- “Where can I find the exam registration deadline?”
- “Which regulation applies to my semester?”

Do not imply examples are live if the backend is not connected.

### Clarification

- Ask only for information that can change the answer.
- Ask one clear question at a time.
- Explain unfamiliar terms.
- Offer “I'm not sure” when appropriate.
- Preserve the user's earlier input.
- Avoid long forms without explaining why the details are needed.

### Answer hierarchy

Use one readable column:

1. **Direct answer or current status**
2. **What it means for the student**
3. **What to do next**
4. **Official source**
5. **Limitation or human escalation**, only when necessary

Use headings, lists, whitespace and subtle dividers instead of putting every item inside a card.

### Official source section

Show, when available:
- Official document title.
- Issuing institution/authority.
- Publication or issue date.
- Relevant clause, section or page.
- Direct original official link.
- Effective date and supersession information where relevant.
- Last-checked time only if the system actually records it.

Use a clear document row/editorial source section. Never invent titles, dates, clauses, URLs, deadlines or verification. If sources conflict or evidence is insufficient, say so and give a practical next step.

### Prototype honesty

Use local demonstration data before backend integration. Mark simulated answers clearly when they could be mistaken for real VTU guidance. Never simulate a submission, eligibility confirmation or source verification as if it happened.

---

## 11. Components and Engineering Rules

Inspect the current structure and follow its conventions. Suggested responsibilities (not mandatory filenames):

- `Navigation`: wordmark, links, primary CTA.
- `Hero`: text, CTA, static poster.
- `ScrollSequence`: frame loading, canvas and scroll timeline.
- `QuestionInput`: question entry and submission state.
- `ClarificationPrompt`: one necessary follow-up.
- `ResolutionView`: answer and next steps.
- `OfficialSource`: metadata and source link.
- `Footer`: actual navigation and site information.

Possible structure:

```text
frontend/src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    navigation/
    hero/
    motion/
    question/
    clarification/
    resolution/
    evidence/
    footer/
  lib/
    demo-data.ts
```

This is guidance, not a reason to refactor working code unnecessarily.

- Strict TypeScript; no `any`.
- Server components by default; use client components only for browser interactions.
- Isolate animation from answer content and future institutional logic.
- Keep design tokens in one source of truth.
- Reuse suitable existing components.
- Avoid unnecessary dependencies and multiple icon libraries.
- Use semantic HTML, real buttons and real links.
- No fake endpoints or backend success states.
- Keep components understandable rather than over-abstracted.

---

## 12. Controls and States

### Primary CTA

- Background: `--color-signal`.
- Text: `--color-ink`.
- Hover: `--color-signal-hover`.
- Pressed: `--color-signal-pressed`.
- Focus: visible 2–3px outline with sufficient contrast and offset.
- Disabled state is obvious, with a reason where useful.
- No glow, gradient or exaggerated pill radius.

### Secondary actions

Use text links or restrained outlined buttons. Do not give every action equal emphasis.

### Inputs

- Visible or accessible label; placeholder alone is not a label.
- Height target: 44–52px.
- Semantic border and focus tokens.
- Plain-language validation near the field.
- Preserve text when an action fails.
- Predictable keyboard submission.

### Loading/error/success

- Prefer concise inline messages.
- No full-screen spinner for a small operation.
- Never show stack traces or internal errors.
- Never show success before confirmation.
- Label simulated UI states honestly.

---

## 13. Responsive Design

### Desktop
Use the full cinematic scene where it helps; keep the text and CTA aligned to the global grid and constrain answer width.

### Tablet
Simplify the composition if the headline and 3D scene compete. Reduce frame resolution or animation complexity as necessary.

### Mobile
- Prioritize question entry and answer readability.
- Use a poster or reduced sequence if needed.
- Avoid long pinned sections and scroll trapping.
- Keep body text at least 16px.
- Target touch areas of 44×44px or larger.
- Use an accessible compact menu.
- Keep official-source links easy to find and tap.
- Do not merely shrink the desktop hero.
- Test narrow viewports, landscape and zoom.

---

## 14. Accessibility

- Target WCAG 2.2 AA for text and controls.
- All main flows work by keyboard.
- Visible focus states and semantic heading order.
- Accessible control names and descriptive source links.
- Respect `prefers-reduced-motion: reduce`; replace pinned animation with a poster or minimal transition.
- Avoid flashing and abrupt camera movement.
- Keep the page usable if canvas or JavaScript fails.
- Never rely on color alone for status.
- Test at 200% zoom and keyboard-only.
- Check contrast for lime, muted text and dark surfaces in actual combinations.

---

## 15. Performance, Failure Recovery and SEO

### Performance
- Show poster before the full sequence loads.
- Reserve media dimensions to prevent layout shifts.
- Load only needed font weights.
- Defer below-the-fold assets.
- Avoid decoding all frames at once.
- Stop unnecessary animation outside the hero.
- Test under network/CPU throttling.
- Measure LCP, INP and CLS in the running site.
- No autoplay audio.

### Failure recovery
- Failed frames leave the poster and text visible.
- JavaScript/canvas failure does not hide essential content.
- Demo failures preserve the question and explain the state.
- Do not expose internal errors.
- Browser back/forward behavior remains normal.

### SEO
Use Next.js metadata facilities. Suggested title: `Resolvia — Make the Rules Make Sense`  
Suggested description: `Understand institutional information, see the official source behind an answer, and know what to do next.`

Only add canonical URLs, social images and brand assets that actually exist. Do not invent affiliations or endorsements.

---

## 16. UI-First Scope

### Included
- New visual system and tokens.
- Responsive homepage/navigation.
- Static hero.
- Small scroll-controlled frame-sequence proof of concept.
- How-it-works and capability sections.
- Question input with demonstration interactions.
- Answer and official-source layout.
- Loading, empty, error and success states.
- Real section navigation and source links where available.

### Excluded until backend integration
- Live VTU collection/crawling.
- Real-time source verification.
- Database access.
- Student-specific eligibility determinations.
- Authentication/authorization.
- Official applications, payments or submissions.
- Claims that an institutional task was completed.
- Production security/audit guarantees.

Keep interfaces integration-ready without pretending excluded capabilities work.

---

## 17. Implementation Workflow

### Phase A — Audit
1. Inspect repository, branch and working tree.
2. Identify Next.js version, styling, dependencies and scripts.
3. Locate old tokens only to identify dependencies that need replacing/isolation; do not carry old visual decisions forward.
4. Check existing brand assets.
5. Confirm whether animation libraries already exist.
6. Establish the new tokens in one source of truth.
7. Load Space Grotesk and Manrope using the supported Next.js method.

### Phase B — Static hero
1. Build the hero with final palette and typography.
2. Make sure it works without animation.
3. Review at 1440px, 768px and 390px.
4. Prepare a static poster and short storyboard.
5. Do not render a long high-resolution sequence yet.

### Phase C — Animation proof
1. Produce a small consistent sequence.
2. Render it on Canvas.
3. Map scroll progress to frame index.
4. Test forward/reverse scrolling.
5. Test pin duration, reduced motion and asset failure.
6. Test mobile and throttled performance.
7. Measure before expanding the sequence.

### Phase D — Full UI
1. Implement the remaining sections.
2. Add question and clarification interactions.
3. Add answer and source presentation.
4. Implement required states.
5. Ensure every action works or is honestly marked unavailable/demo.

### Phase E — QA
1. Run actual lint, type-check, tests and build scripts.
2. Inspect the running site at desktop, tablet and mobile.
3. Test keyboard, focus, reduced motion, contrast, zoom and overflow.
4. Fix the most important visual issues and review again.
5. Report what is complete, simulated and outstanding.

---

## 18. Acceptance Checklist

### Design
- [ ] Signal & Structure is implemented as a coherent identity.
- [ ] Old palette/template is not accidentally reused.
- [ ] Colors come from semantic tokens.
- [ ] Only Space Grotesk and Manrope are used from Google Fonts.
- [ ] Header/footer follow the new system.
- [ ] One clear focal point per view.
- [ ] No unnecessary card grids.
- [ ] No generic AI styling, fake proof or random decoration.
- [ ] CTA is visually distinct and accessible.

### Hero/motion
- [ ] Static hero works before animation loads.
- [ ] Animation communicates complexity becoming clarity.
- [ ] Scroll maps predictably to frames and reverse scrolling works.
- [ ] No scroll hijacking or forced waiting.
- [ ] Reduced-motion and mobile fallbacks work.
- [ ] Frame loading/memory are measured.
- [ ] Animation resources are cleaned up.

### Product/evidence
- [ ] Natural-language question input works.
- [ ] Clarification asks only necessary details.
- [ ] Answer and next steps are readable.
- [ ] Official source is easy to find and open.
- [ ] Demo data is not misrepresented as verified.
- [ ] No action is reported complete before confirmation.

### Engineering
- [ ] Repository inspected first.
- [ ] No duplicate styling system or unnecessary dependencies.
- [ ] Strict TypeScript; no `any`.
- [ ] Tested at 1440, 768 and 390px.
- [ ] Keyboard and reduced-motion behavior tested.
- [ ] Contrast, touch targets and overflow checked.
- [ ] Lint/type-check/tests/build pass where configured.
- [ ] Running application visually inspected.

---

## 19. Final Directive

Build Resolvia as a product, not a visual-effects demo. Use the new Signal & Structure palette, Space Grotesk + Manrope, a carefully controlled scroll-linked 3D sequence and an uncluttered student-first interaction model. The 3D layer makes the brand memorable; the answer and official-source experience makes the product trustworthy.

Start with a static hero and a small animation proof of concept. Inspect the rendered result at real viewport sizes before expanding the sequence or building the rest of the website.

**Design standard: distinctive, modern, precise, accessible, fast, evidence-led and intentionally art-directed.**
