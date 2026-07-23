# Footer, Timings, and Team Updates Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Constraint:** DO NOT run `git push`! All changes must remain local.

**Goal:** Modify the footer styling, remove tagline text, update all branch timings, strip the `(Main)` label, and refine the home page Team section layout.

---

### Task 1: Footer and Timing Layout Changes

**Files:**

- Modify: `css/custom.css`
- Modify: all 28 HTML files
- Modify: `js/chatbot.js`, `assets/js/chatbot.js`
- Modify: `js/faqs.json`, `assets/js/faqs.json`

- [ ] **Step 1: Update `.footer-logo img` style in `css/custom.css`**

Add background, padding, and border-radius rules to `.footer-logo img`.

```css
.footer-logo img {
  width: auto !important;
  max-height: 50px !important;
  background: #ffffff;
  padding: 6px 12px;
  border-radius: 6px;
}
```

- [ ] **Step 2: Globally remove tagline and strip "(Main)" from HTML footers**

Replace the following in all 28 HTML files:
_From:_

```html
<p>
  Dedicated to providing world-class dental diagnostics and procedures in a
  comfortable, hygienic, and relaxed environment. Our ratings reflect the
  quality of our commitment.
</p>
```

_To:_

```html
<p>
  Dedicated to providing world-class dental diagnostics and procedures in a
  comfortable, hygienic, and relaxed environment.
</p>
```

Also, replace `<strong style="color: var(--accent-color); font-size: 16px;">Solapur Branch (Main)</strong>` with `<strong style="color: var(--accent-color); font-size: 16px;">Solapur Branch</strong>` across all 28 HTML files.

- [ ] **Step 3: Update timing strings and branch name in `contact.html`**

Open `contact.html`:

- Replace branch title `Solapur Branch (Main)` with `Solapur Branch`.
- Replace timing on line 224: `Mon-Sat: 10:00 AM - 1:30 PM &amp; 5:00 PM - 9:00 PM` with `Mon-Sat: 10 am to 8:30 pm`.
- Replace timing on line 241: `Mon-Sat: 10:00 AM - 2:00 PM &amp; 5:00 PM - 8:00 PM` with `Mon-Sat: 10 am to 8:30 pm`.

- [ ] **Step 4: Update home page (`index.html`) specific timing and address**

Open `index.html`:

- Replace `Mon-Sat: 10 AM - 3 PM, 6 PM - 8:30 PM` with `Mon-Sat: 10 am to 8:30 pm` in the opening hours CTA box.
- Replace `Solapur Branch (Main):` with `Solapur Branch:` in the branch address list.

- [ ] **Step 5: Update Chatbot and FAQ configuration files**

Replace all timings and `(Main)` references in:

- `js/chatbot.js` & `assets/js/chatbot.js`
- `js/faqs.json` & `assets/js/faqs.json`

---

### Task 2: Home Page Team Section Updates

**Files:**

- Modify: `index.html`

- [ ] **Step 1: Simplify Team Section header title**

In `index.html`, replace `<span>Our Friendly</span> Dentists Team` with `<span>Our</span> Team`.

- [ ] **Step 2: Remove hover social icons from both doctors**

In `index.html`:

- Delete the `<div class="team-social-icon">...</div>` block from Doctor 1 (Dr. Vivekanand Karpe).
- Delete the `<div class="team-social-icon">...</div>` block from Doctor 2 (Dr. Ashvini Karpe).

---

### Task 3: Local Verification

- [ ] **Step 1: Run local checks**
      Verify changes on a local server. Check footer logo legibility, timing texts, and home page Team hover effects.
- [ ] **Step 2: Commit changes locally**
      Run `git add .` and `git commit -m "style: local updates to footer, timings, and team layout"`. **Do NOT run git push.**
