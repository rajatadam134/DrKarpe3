# Tighten Sticky Sidebar Spacing on Desktop Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Constraint:** DO NOT run `git push`! All changes must remain local.

**Goal:** Modify `css/custom.css` to reduce spacing and padding between treatments list items on desktop, saving approximately `170px` of vertical height to make the entire box fit within the viewport on standard desktop screens.

---

### Task 1: Update custom.css

**Files:**
- [MODIFY] [css/custom.css](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/css/custom.css)

- [ ] **Step 1: Add spacing rules for desktop treatments sidebar**
  Update the desktop media query `@media (min-width: 992px)` (around line 7032) in `css/custom.css` to add the following rules:
  * Reduce `.service-catagery-list h3` bottom margin: `margin-bottom: 15px !important;` (saving `15px`).
  * Reduce `.service-catagery-list ul li` bottom margin and padding: `margin-bottom: 8px !important; padding-bottom: 8px !important;` (saving `154px`).

---

### Task 2: Local Verification & Commit

- [ ] **Step 1: Verify the changes locally**
  Inspect treatment pages (e.g. `dental-implants.html`) in the browser on desktop to confirm that the treatments sidebar list is compact, highly readable, and fully visible without vertical cutoff.
- [ ] **Step 2: Stage and commit changes locally**
  Stage the files and commit them locally with:
  `git commit -m "style: tighten treatments sticky list spacing on desktop"`
  Do NOT run `git push`.
