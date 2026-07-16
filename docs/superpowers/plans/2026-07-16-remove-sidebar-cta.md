# Remove Sidebar CTA Box Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Constraint:** DO NOT run `git push`! All changes must remain local.

**Goal:** Remove the "Need Help" CTA box from all 12 treatment HTML files and revert/simplify the CSS in `css/custom.css` to use a clean, single-component sticky sidebar offset.

---

### Task 1: Execute Python CTA Remover Script

**Files:**
- [MODIFY] [invisalign-aligners.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/invisalign-aligners.html)
- [MODIFY] [laser-dentistry.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/laser-dentistry.html)
- [MODIFY] [dental-braces.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/dental-braces.html)
- [MODIFY] [aligners.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/aligners.html)
- [MODIFY] [dentures.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/dentures.html)
- [MODIFY] [dental-implants.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/dental-implants.html)
- [MODIFY] [kids-dentistry.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/kids-dentistry.html)
- [MODIFY] [preventive-dentistry.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/preventive-dentistry.html)
- [MODIFY] [advanced-care-treatment.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/advanced-care-treatment.html)
- [MODIFY] [dental-crowns-bridges.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/dental-crowns-bridges.html)
- [MODIFY] [veneers-laminates.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/veneers-laminates.html)
- [MODIFY] [minimal-invasive-dentistry.html](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/minimal-invasive-dentistry.html)

- [ ] **Step 1: Write and run the Python CTA removal script**
  Create a script `scratch/remove_cta_boxes.py` that parses all 12 treatment HTML files, searches for the CTA box markup using regex, and deletes it. Run the script.

---

### Task 2: Simplify custom.css Sticky Rules

**Files:**
- [MODIFY] [css/custom.css](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/css/custom.css)

- [ ] **Step 1: Update desktop treatments media query**
  Update the `@media (min-width: 992px)` media query (around line 7032) to remove the flex layout and bottom-aligned CTA rules, making `.service-sidebar` itself natively sticky at `top: 115px !important` with `margin-top: -80px !important`.
- [ ] **Step 2: Clean up tablet/mobile media query**
  Update the `.service-sidebar` class inside the `@media (max-width: 991px)` media query (around line 4374) to clean up the overrides.

---

### Task 3: Local Verification & Commit

- [ ] **Step 1: Verify the changes locally**
  Inspect treatment pages in a local browser. Ensure:
  * The "Need Help" CTA box is completely gone.
  * The treatments list sidebar is sticky, starts exactly below the navigation header, and flows smoothly during scroll.
- [ ] **Step 2: Stage and commit changes locally**
  Stage the changes and commit them locally with:
  `git commit -m "style: remove treatments sidebar Need Help CTA box completely"`
  Do NOT run `git push`.
