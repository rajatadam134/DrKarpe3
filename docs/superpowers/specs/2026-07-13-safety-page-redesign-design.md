# Design Spec — Safety First Layout Refinements & Navigation Bar Fix

This design document outlines the layout refinements for the Patient Safety First and Clinical Technology sections on the new `safety-protocols.html` page, alongside the global CSS adjustments to prevent text wrapping in the main navigation menu.

---

## 1. Patient Safety First Section Layout
* **Old Layout:** Symmetrical grid with 2 steps on the left, central image, and 2 steps on the right.
* **New Layout:** Left column containing the high-quality, uncropped visual asset (`Dental_Tools.webp`) and right column containing the 4 sterilisation steps vertically stacked.
* **Title Color:** Update the section heading to use the clinic's standard two-tone style. E.g., `Gold Standard in <span class="text-primary">Disinfection</span> & Sterilisation` to incorporate the navy slate shade (`--primary-color`).
* **Image Sizing:** Set explicit max-width and border-radius rules so the WebP image displays clearly and sharply without any cropping or distortion.

---

## 2. Clinical Technology Section Layout
* **Old Layout:** 2-column layout (cards on the left, image on the right).
* **New Layout (Approach 1):** Centered vertical stack.
  * Centered section title.
  * Centered featured technology image (`advanced_dental_tech_photo.jpg`), set to a clean maximum width (e.g. 700px) with elegant borders and shadow.
  * Balanced 3-column grid of cards below the image (2 rows of 3 cards each).

---

## 3. Navigation Bar Wrap Prevention
* **Goal:** Ensure all navigation menu items remain on a single line on all desktop viewports.
* **Actions:**
  1. Add `white-space: nowrap !important` to `.main-menu ul li a`.
  2. Reduce default font-size of nav links slightly to `14.5px` (from `16px`).
  3. Reduce horizontal margins of menu items slightly to `5px` (from `9px`).
  4. Keep responsive slicknav trigger active under `991px`.

---

## 4. Reversion Safety Plan
* **Local Git Snapshot:** We will create a local git commit of the current working tree (`git add . && git commit -m "checkpoint: pre-redesign of safety layouts"`) before making any code modifications.
* **Reversion Command:** If you wish to revert to the current state, you can run `git reset --hard HEAD` in your terminal.
