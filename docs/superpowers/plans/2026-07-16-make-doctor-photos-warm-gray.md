# Make Doctor Photos Warm Gray & Full-Frame Sizing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Constraint:** DO NOT run `git push`! All changes must remain local.
> **Constraint:** DO NOT delete the raw JPEG files from `assets/img/New_Images/` after processing. Keep them there.

**Goal:** Remove backgrounds from Dr. Vivekanand Karpe's new photo, Dr. Ashvini Karpe's new photo, and Dr. Muniza Qureshi's existing photo. Place them on a solid Warm Gray backdrop (`#EAE7E1`), and resize them to a uniform `682x1024` WebP without cropping their head/shoulder framing.

---

### Task 1: Create and Run Background Replacer Script

**Files:**

- [NEW] Create: `scratch/process_portraits_gray.py`

- [ ] **Step 1: Create the python script `scratch/process_portraits_gray.py`**
      Create a python script that will:

1. Load `assets/img/New_Images/Dr. Vivekanand Karpe.jpg`, `assets/img/New_Images/Dr. Ashvini Karpe.jpg`, and the original upload of Dr. Muniza.
2. Run `rembg.remove` on each image to isolate the subject transparently.
3. Fit the transparent subject to exactly `682x1024` using `ImageOps.fit` (to preserve framing).
4. Create a solid background image of `682x1024` with color `#EAE7E1` (RGB: `234, 231, 225`).
5. Paste the fitted transparent subject onto the Warm Gray background.
6. Save the output to `assets/img/team/Dr-Vivekanand-Karpe.webp`, `assets/img/team/Dr-Ashvini-Karpe.webp`, and `assets/img/team/Dr-Muniza-Qureshi.webp`.

- [ ] **Step 2: Run the python processing script**
      Run `python scratch/process_portraits_gray.py` and inspect the output logs.

---

### Task 2: Local Verification & Commit

- [ ] **Step 1: Verify the changes locally**
      Open `index.html` and `about.html` in the browser, verifying that all three doctors' portraits are set against a matching Warm Gray background and have their natural, uncropped framing.
- [ ] **Step 2: Stage and commit changes locally**
      Stage all changes and commit locally with:
      `git commit -m "feat: replace doctor backgrounds with solid warm gray and restore natural framing"`
      Do NOT run `git push`.
