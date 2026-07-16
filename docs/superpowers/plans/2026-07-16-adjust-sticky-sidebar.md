# Move Sticky Treatments Sidebar Upwards Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Constraint:** DO NOT run `git push`! All changes must remain local.

**Goal:** Modify `css/custom.css` to shift the sticky treatments sidebar container upwards by `-80px` in its resting position and reduce the sticky `top` parameter from `73px` to `10px` for desktop views.

---

### Task 1: Update custom.css

**Files:**
- [MODIFY] [css/custom.css](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/css/custom.css)

- [ ] **Step 1: Replace desktop sticky sidebar CSS**
  Update the `.service-sidebar` class inside the `@media (min-width: 992px)` media query (around line 7032) to include:
  * `top: 10px !important;` (changed from `73px !important`)
  * `margin-top: -80px !important;` (new rule to pull the container up)
- [ ] **Step 2: Add mobile/tablet margin-top override**
  Update the `.service-sidebar` class inside the `@media (max-width: 991px)` media query (around line 4374) to override the margin-top:
  * `margin-top: 0 !important;` (to ensure the sidebar behaves correctly when stacked on tablet/mobile)

---

### Task 2: Local Verification & Commit

- [ ] **Step 1: Verify the changes locally**
  Inspect treatment pages (e.g. `dental-implants.html`) at the top and during scroll to ensure the sidebar fits within the viewport and the bottom treatments are fully visible.
- [ ] **Step 2: Stage and commit changes locally**
  Stage the files and commit them locally with:
  `git commit -m "style: shift sticky treatments sidebar upwards on desktop views"`
  Do NOT run `git push`.
