# Make Doctor Photos Transparent & Resized Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Constraint:** DO NOT run `git push`! All changes must remain local.

**Goal:** Remove backgrounds from Dr. Vivekanand Karpe's new photo, Dr. Ashvini Karpe's new photo, and Dr. Muniza Qureshi's existing photo to make them transparent, resize them all to `682x1024`, and output them as WebP.

---

### Task 1: Environment Setup & Python Script Preparation

**Files:**

- [NEW] Create: `scratch/process_portraits.py`

- [ ] **Step 1: Install Python background-removal library `rembg`**
      Run the pip install command for `rembg`, `pillow`, `opencv-python`, and `onnxruntime` (cpu version to make it fast and lightweight).

```bash
pip install rembg opencv-python pillow onnxruntime
```

- [ ] **Step 2: Create the python script `scratch/process_portraits.py`**
      Create a python script that will:

1. Load `assets/img/New_Images/Dr. Vivekanand Karpe.jpg`, `assets/img/New_Images/Dr. Aswini Karpe.jpg`, and the original upload of Dr. Muniza `C:\Users\rajat\.gemini\antigravity\brain\19e3c935-c574-4eb4-9584-ec6ae8fb4084\media__1784025499508.png`.
2. Run `rembg.remove` on each image to isolate the doctor.
3. Automatically crop the bounding box of the subject.
4. Scale/pad the image to exactly `682x1024` with transparency.
5. Save the output to `assets/img/team/Dr-Vivekanand-Karpe.webp`, `assets/img/team/Dr-Ashvini-Karpe.webp`, and `assets/img/team/Dr-Muniza-Qureshi.webp`.

---

### Task 2: Execute Processing & Cleanup

- [ ] **Step 1: Run the python processing script**
      Run `python scratch/process_portraits.py` and inspect the output.

- [ ] **Step 2: Delete raw source files**
      Delete:
- `assets/img/New_Images/Dr. Vivekanand Karpe.jpg`
- `assets/img/New_Images/Dr. Aswini Karpe.jpg`
  Keep other unrelated files in `New_Images` intact.

---

### Task 3: Local Verification & Commit

- [ ] **Step 1: Verify the changes locally**
      Open `index.html` and `about.html` in the browser, verifying that all three doctors' portraits are transparent, align perfectly, and have the exact same size.
- [ ] **Step 2: Stage and commit changes locally**
      Stage all changes and commit locally with:
      `git commit -m "feat: convert doctor portraits to transparent backgrounds and resize to 682x1024"`
      Do NOT run `git push`.
