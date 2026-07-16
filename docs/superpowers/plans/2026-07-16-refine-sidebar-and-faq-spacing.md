# Refine Treatments Layout and Spacing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Constraint:** DO NOT run `git push`! All changes must remain local.

**Goal:** Correct the unclosed layout `div` tags, inject 5 topic-specific FAQs into all 11 generated treatment HTML files, and refine CSS styles in `css/custom.css` to fix sticky offsets and margin spacing on desktop.

---

### Task 1: Execute Python FAQ and Div Fixer Script

**Files:**
- [MODIFY] [invisalign-aligners.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/invisalign-aligners.html)
- [MODIFY] [laser-dentistry.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/laser-dentistry.html)
- [MODIFY] [dental-braces.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/dental-braces.html)
- [MODIFY] [aligners.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/aligners.html)
- [MODIFY] [dentures.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/dentures.html)
- [MODIFY] [kids-dentistry.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/kids-dentistry.html)
- [MODIFY] [preventive-dentistry.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/preventive-dentistry.html)
- [MODIFY] [advanced-care-treatment.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/advanced-care-treatment.html)
- [MODIFY] [dental-crowns-bridges.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/dental-crowns-bridges.html)
- [MODIFY] [veneers-laminates.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/veneers-laminates.html)
- [MODIFY] [minimal-invasive-dentistry.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/minimal-invasive-dentistry.html)

- [ ] **Step 1: Run the Python fixer script**
  Run the script at `C:\Users\rajat\.gemini\antigravity\brain\19e3c935-c574-4eb4-9584-ec6ae8fb4084\scratch\fix_faqs_and_divs.py` to fix all 11 HTML pages.

---

### Task 2: Update custom.css Spacing and Sticky Rules

**Files:**
- [MODIFY] [css/custom.css](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/css/custom.css)

- [ ] **Step 1: Replace desktop sticky sidebar CSS**
  Update the `@media (min-width: 992px)` media query (around line 7032) to remove old sticky sidebar styles and implement the new column-stretching flex layout, selective sticky list, and bottom-aligned CTA layout.
- [ ] **Step 2: Add FAQ section spacing rules**
  Add `.service-faqs { margin-top: 80px; }` at the root of `css/custom.css` to add a spacious gap above the FAQ section.
- [ ] **Step 3: Add content headings spacing rules**
  Add `.service-entry h3 { margin-top: 45px !important; margin-bottom: 20px !important; }` to create clean gaps before content headings.
- [ ] **Step 4: Add mobile/tablet margin-top overrides**
  Update the `.service-sidebar` class inside the `@media (max-width: 991px)` media query (around line 4374) to override flex and margin parameters:
  * `display: block !important;`
  * `height: auto !important;`
  * `margin-top: 0 !important;`
  Update the `.sidebar-cta-box` inside the same media query:
  * `margin-top: 0 !important;`
  * `margin-bottom: 30px !important;`

---

### Task 3: Local Verification & Commit

- [ ] **Step 1: Verify the layout and FAQs locally**
  Inspect several treatment pages (e.g. `invisalign-aligners.html`) in a local browser. Ensure:
  * The sticky treatments sidebar menu is aligned exactly below the navigation bar.
  * The treatments list does not overflow at the bottom of the screen.
  * The "Need Help" CTA box sits at the very end of the page column with proper spacing before the footer.
  * Spacings near headers and the FAQ section are consistent and beautiful.
  * FAQs are unique to each treatment and display exactly 5 relevant items.
  * The Dental Implants page (`dental-implants.html`) content, text, and FAQs are unchanged.
- [ ] **Step 2: Stage and commit changes locally**
  Stage the changes and commit them locally with:
  `git commit -m "style: refine treatments layout, inject custom FAQs, and correct nested divs"`
  Do NOT run `git push`.
