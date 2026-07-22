# Fix Dr. Muniza Qureshi's Dark Outline Border Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Constraint:** DO NOT run `git push`! All changes must remain local.
> **Constraint:** DO NOT delete the raw JPEG files from `assets/img/New_Images/` after processing. Keep them there.

**Goal:** Modify the Python image processing script to enable alpha matting and a 1-pixel alpha mask erosion. Re-process the doctor portraits to completely remove the dark outline border around Dr. Muniza Qureshi's hair and clothes, keeping the headroom and sizing aligned.

---

### Task 1: Create and Run Improved Aligned Image Processor Script

**Files:**

- [NEW] Create: `scratch/process_portraits_aligned_v2.py`

- [ ] **Step 1: Create the python script `scratch/process_portraits_aligned_v2.py`**
      Create a python script that will:

1. Load `assets/img/New_Images/Dr. Vivek Karpe.jpg`, `assets/img/New_Images/Dr. Ashvini Karpe.jpg`, and the original upload of Dr. Muniza.
2. Run `rembg.remove` with **`alpha_matting=True`** on each image to isolate the subject.
3. Extract the alpha channel and apply a 1-pixel erosion using `cv2.erode` with a `3x3` rectangular kernel.
4. Crop the transparent subject to its eroded bounding box.
5. Scale the cutout to exactly `788` pixels tall.
6. Create a solid background image of `682x1024` with color `#EAE7E1` (RGB: `234, 231, 225`).
7. Paste the scaled transparent subject centered horizontally on the Warm Gray background, bottom-aligned (`paste_y = 1024 - 788 = 236`).
8. Save the output to `assets/img/team/Dr-Vivek-Karpe.webp`, `assets/img/team/Dr-Ashvini-Karpe.webp`, and `assets/img/team/Dr-Muniza-Qureshi.webp`.

- [ ] **Step 2: Run the python processing script**
      Run `python scratch/process_portraits_aligned_v2.py` and verify successful output logs.

---

### Task 2: Local Verification & Commit

- [ ] **Step 1: Verify the changes locally**
      Open `index.html` and `about.html` in the browser, verifying that Dr. Muniza's portrait has no dark outline, and all three portraits are beautifully aligned.
- [ ] **Step 2: Stage and commit changes locally**
      Stage all changes and commit locally with:
      `git commit -m "feat: resolve dark outline border on Dr. Muniza Qureshi portrait using alpha matting and erosion"`
      Do NOT run `git push`.
