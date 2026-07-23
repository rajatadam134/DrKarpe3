# Align Doctor Portraits Headroom & Sizing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Constraint:** DO NOT run `git push`! All changes must remain local.
> **Constraint:** DO NOT delete the raw JPEG files from `assets/img/New_Images/` after processing. Keep them there.

**Goal:** Correct the cropping and scale issues by isolating the doctor subjects, resizing them to exactly `788` pixels tall (matching Dr. Muniza's proportion), bottom-aligning them, and placing them on a solid Warm Gray backdrop (`#EAE7E1`) within a `682x1024` WebP canvas.

---

### Task 1: Create and Run Aligned Image Processor Script

**Files:**

- [NEW] Create: `scratch/process_portraits_aligned.py`

- [ ] **Step 1: Create the python script `scratch/process_portraits_aligned.py`**
      Create a python script that will:

1. Load `assets/img/New_Images/Dr. Vivekanand Karpe.jpg`, `assets/img/New_Images/Dr. Ashvini Karpe.jpg`, and the original upload of Dr. Muniza.
2. Run `rembg.remove` on each image to isolate the subject transparently.
3. Crop the transparent subject to its tightest bounding box.
4. Scale the cropped subject to a height of exactly `788` pixels.
5. Create a solid background image of `682x1024` with color `#EAE7E1` (RGB: `234, 231, 225`).
6. Paste the scaled transparent subject centered horizontally on the Warm Gray background, bottom-aligned (`paste_y = 1024 - 788 = 236`).
7. Save the output to `assets/img/team/Dr-Vivekanand-Karpe.webp`, `assets/img/team/Dr-Ashvini-Karpe.webp`, and `assets/img/team/Dr-Muniza-Qureshi.webp`.

- [ ] **Step 2: Run the python processing script**
      Run `python scratch/process_portraits_aligned.py` and check logs.

---

### Task 2: Local Verification & Commit

- [ ] **Step 1: Verify the changes locally**
      Open `index.html` and `about.html` in the browser, verifying that all three doctors' portraits are set against a matching Warm Gray background and have their natural, uncropped framing.
- [ ] **Step 2: Stage and commit changes locally**
      Stage all changes and commit locally with:
      `git commit -m "feat: align doctor portraits headroom and scale with solid warm gray background"`
      Do NOT run `git push`.
