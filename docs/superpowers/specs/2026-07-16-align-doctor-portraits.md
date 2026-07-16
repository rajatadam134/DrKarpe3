# Design Spec — Align Doctor Portraits Headroom & Sizing

This design document outlines the corrected layout and cropping of the doctor portraits on `index.html` and `about.html` to align them symmetrically with Dr. Muniza Qureshi's portrait framing.

> **Constraint:** All changes must remain local for verification. Do NOT run `git push` to upload to GitHub.
> **Asset Constraint:** Do NOT delete the raw JPEG files from `assets/img/New_Images/` after processing. Keep them there.

---

## 1. Root Cause of Cropping Discrepancy
* **Problem:** Dr. Vivek and Dr. Ashwini's faces appeared too large and zoomed-in, with their heads close to the top of the canvas, whereas Dr. Muniza's portrait had ample headroom at the top.
* **Root Cause:** In the raw photos, Dr. Vivek and Dr. Ashwini have only 7%–8% of headroom above their heads, whereas Dr. Muniza's photo has 23% headroom. Resizing the full frames directly to `682x1024` preserved this difference, causing them to look completely mismatched.

---

## 2. Aligned Composition Design
To make all three doctor portraits visually consistent, we will:
1. Extract the transparent subject (the doctor) from their raw images.
2. Crop each subject to its tightest bounding box.
3. Rescale each subject cutout so that its height is exactly **`788` pixels** (which is 77% of the canvas height, matching Dr. Muniza's subject ratio).
4. Paste the scaled cutout centered horizontally and **aligned to the bottom edge** of the `682x1024` canvas (`paste_y = 1024 - 788 = 236`).
5. This leaves exactly **`236` pixels** (23%) of headroom at the top for all three doctors, matching them in position, scale, and composition.

---

## 3. Python Processing Script (`scratch/process_portraits_aligned.py`)
A custom Python script will be created to:
1. Load `assets/img/New_Images/Dr. Vivek Karpe.jpg`, `assets/img/New_Images/Dr. Ashwini Karpe.jpg`, and the original upload of Dr. Muniza.
2. Run `rembg.remove` on each image to isolate the subject transparently.
3. Find the tightest bounding box of the subject.
4. Scale the bounding box cutout to a height of exactly `788` pixels.
5. Composite the scaled subject centered horizontally on a solid Warm Gray canvas (`#EAE7E1`) of `682x1024`, pasting it at `y = 236` (bottom-aligned).
6. Save the output to `assets/img/team/Dr-Vivek-Karpe.webp`, `assets/img/team/Dr-Ashwini-Karpe.webp`, and `assets/img/team/Dr-Muniza-Qureshi.webp`.

---

## 4. Verification Plan
* Open the local website homepage and about page.
* Confirm that the three doctor cards render their portraits with matching headroom and waist-up scale.
* Ensure all three portraits are aligned and have the exact same size (`682x1024`).
