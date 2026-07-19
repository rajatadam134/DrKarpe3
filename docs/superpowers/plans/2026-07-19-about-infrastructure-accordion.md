# About Us Infrastructure Accordion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Constraint:** DO NOT run `git push`! Save to local git branch `about-infra-redesign`. Do not merge to `main`.

**Goal:** Remove the 4 specialty units cards and hygiene compliance text from `about.html`, add a custom horizontal image gallery accordion, configure responsive mobile overrides, and verify all page transitions locally.

---

### Task 1: Modify HTML Layout in `about.html`

**Files:**
- [MODIFY] [about.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/about.html)

- [ ] **Step 1: Remove Specialty Units Section**
  Delete lines 178 to 216 containing `<div class="our-mission-vision" ...>...</div>`.
- [ ] **Step 2: Add Infrastructure Gallery Accordion**
  Insert the `<div class="infrastructure-gallery" ...>...</div>` section in its place.
- [ ] **Step 3: Add Toggling JS Script**
  Add the interactive click/hover class-toggling script before the closing `</body>` tag (around line 700).

---

### Task 2: Append CSS Styles to `css/custom.css`

**Files:**
- [MODIFY] [css/custom.css](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/css/custom.css)

- [ ] **Step 1: Append Styles to end of file**
  Add all `.infra-accordion-container`, `.infra-panel`, `.infra-panel.active`, hover zooms, overlays, text gradients, vertical labels, and tablet/mobile media query overrides to the bottom of `css/custom.css`.

---

### Task 3: Local Verification & Branch Commit

- [ ] **Step 1: Verify the changes locally**
  Open `about.html` in a local browser. Ensure:
  * The 4 units cards and hygiene text are gone.
  * The new horizontal accordion shows 7 panels.
  * Hovering/clicking a panel expands it smoothly while shrinking the others.
  * In mobile viewports (e.g. max-width 991px), the accordion stacks vertically and clicking an item expands its height smoothly.
  * Image references point to the new `.webp` files and load instantly.
- [ ] **Step 2: Commit changes to local branch**
  Stage the changes and commit them locally on the `about-infra-redesign` branch:
  `git commit -m "feat: replace about page specialty units with interactive image accordion"`
  Do NOT push to main.
