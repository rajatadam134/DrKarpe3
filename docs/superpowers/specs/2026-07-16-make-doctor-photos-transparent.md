# Design Spec — Make Doctor Photos Transparent & Resized

This design document outlines the process of extracting the subject (foreground) of the three doctor portraits (Dr. Vivek Karpe, Dr. Ashwini Karpe, and Dr. Muniza Qureshi), making their backgrounds transparent, and resizing them to a uniform `682x1024` WebP format.

> **Constraint:** All changes must remain local for verification. Do NOT run `git push` to upload to GitHub.

---

## 1. Image Sources & Destinations
* **Dr. Vivek Karpe (New Photo):**
  * Source: `assets/img/New_Images/Dr. Vivek Karpe.jpg`
  * Destination: `assets/img/team/Dr-Vivek-Karpe.webp`
* **Dr. Ashwini Karpe (New Photo):**
  * Source: `assets/img/New_Images/Dr. Aswini Karpe.jpg`
  * Destination: `assets/img/team/Dr-Ashwini-Karpe.webp`
* **Dr. Muniza Qureshi (Existing Photo):**
  * Source: `assets/img/team/Dr-Muniza-Qureshi.webp` (Wait, since we need to extract her background from the current WebP or her original raw upload, we will process the WebP or use the original temp media upload `media__1784025499508.png`).
  * Destination: `assets/img/team/Dr-Muniza-Qureshi.webp`

---

## 2. Background Removal & Processing Method

### A. Python Environment Preparation
We will install the `rembg` library, which uses a pre-trained U2Net neural network to accurately segment the subject from the background.
```bash
pip install rembg opencv-python pillow
```

### B. Python Processing Script (`scratch/process_portraits.py`)
A custom Python script will be created to:
1. Load each image.
2. Run `rembg.remove()` to extract the doctor from the background, creating a transparent alpha channel.
3. Crop/resize the output to exactly `682x1024` while maintaining the aspect ratio (padding or centering the subject if necessary).
4. Save the result as a transparent `WebP` image with `lossless=True` or `quality=90` inside `assets/img/team/`.
5. Clean up by deleting the raw files in `assets/img/New_Images/`.

---

## 3. Verification Plan
* Open the local website homepage and about page.
* Confirm that the three doctor cards render their new transparent portraits seamlessly against the card backgrounds.
* Ensure all three portraits are aligned and have the exact same size (`682x1024`).
