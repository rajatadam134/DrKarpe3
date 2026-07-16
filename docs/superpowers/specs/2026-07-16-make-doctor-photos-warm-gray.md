# Design Spec — Make Doctor Photos Warm Gray & Full-Frame Sizing

This design document outlines the corrected process of extracting the subject (foreground) of the three doctor portraits (Dr. Vivek Karpe, Dr. Ashwini Karpe, and Dr. Muniza Qureshi), replacing their backgrounds with a consistent solid **Warm Gray** studio color (`#EAE7E1`), and resizing them to a uniform `682x1024` WebP format using full-frame aspect-fill to preserve the original professional framing.

> **Constraint:** All changes must remain local for verification. Do NOT run `git push` to upload to GitHub.
> **Asset Constraint:** Do NOT delete the raw JPEG files from `assets/img/New_Images/` after processing. Keep them there.

---

## 1. Background Color Selection
* **Target Background Color:** Solid Warm Gray `#EAE7E1` (RGB: `234, 231, 225`).
* **Rationale:** A warm, neutral studio backdrop that provides excellent contrast for the light blue clinical scrubs and integrates beautifully with the website's warm-toned elements.

---

## 2. Image Sizing & Layout Correction
* **Root Cause of Cropping Issue:** The previous script cropped the transparent subject to its tightest bounding box before scaling, which distorted the photographer's intentional framing and made the faces unnaturally large.
* **Correction Method:** We will use `ImageOps.fit()` to scale and crop the transparent subject to exactly `682x1024` while maintaining its original aspect ratio, preserving the original head/shoulder headroom and framing.

---

## 3. Python Processing Script (`scratch/process_portraits_gray.py`)
A custom Python script will be created to:
1. Load `assets/img/New_Images/Dr. Vivek Karpe.jpg`, `assets/img/New_Images/Dr. Ashwini Karpe.jpg`, and the original upload of Dr. Muniza.
2. Run `rembg.remove` on each image to isolate the subject transparently.
3. Fit the transparent subject to exactly `682x1024` using `ImageOps.fit` (retaining the photographer's exact framing).
4. Create a solid Warm Gray background of `682x1024` with color `#EAE7E1`.
5. Composite the transparent subject onto the Warm Gray background.
6. Save the output to `assets/img/team/Dr-Vivek-Karpe.webp`, `assets/img/team/Dr-Ashwini-Karpe.webp`, and `assets/img/team/Dr-Muniza-Qureshi.webp`.

---

## 4. Verification Plan
* Open the local website homepage and about page.
* Confirm that the three doctor cards render their new Warm Gray portraits with correct, natural headroom and framing.
* Ensure all three portraits are aligned and have the exact same size (`682x1024`).
