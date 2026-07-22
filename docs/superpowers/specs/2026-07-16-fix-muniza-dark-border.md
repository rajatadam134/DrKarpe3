# Design Spec — Fix Dr. Muniza Qureshi's Dark Outline Border

This design document outlines the technical solution to eliminate the dark gray edge outline (halo artifact) around Dr. Muniza Qureshi's portrait on `index.html` and `about.html`.

> **Constraint:** All changes must remain local for verification. Do NOT run `git push` to upload to GitHub.
> **Asset Constraint:** Do NOT delete the raw JPEG files from `assets/img/New_Images/` after processing. Keep them there.

---

## 1. Root Cause Analysis

- **Problem:** A noticeable dark gray line appears around the edges of Dr. Muniza Qureshi's portrait.
- **Root Cause:** Dr. Muniza's original image had a medium-dark gray background (`RGB=[137, 137, 133]`). During background removal, the anti-aliased edge pixels (where the subject's hair/clothes meet the background) retained some dark gray color from the backdrop. When composite-pasted onto the new solid Warm Gray canvas (`#EAE7E1`), these dark border pixels became visible as a dark outline.

---

## 2. Correction Method

To completely clean up the border, we will update the Python processing script to use **Alpha Matting** and **Alpha Channel Erosion**:

1. **Alpha Matting:** Enable `alpha_matting=True` in `rembg.remove()`. This uses a matting algorithm to smoothly blend the edges (especially hair) and discard background color bleed.
2. **Mask Erosion (Optional but robust):** Perform a 1-pixel erosion (`cv2.erode`) on the alpha channel mask. This cuts exactly 1 pixel inward along the boundary of the transparent cutout, completely deleting any lingering dark background edge pixels.

---

## 3. Python Processing Script (`scratch/process_portraits_aligned_v2.py`)

A custom Python script will:

1. Load Dr. Muniza's original photo.
2. Run `rembg.remove(img_data, alpha_matting=True)`.
3. Erode the alpha mask by 1 pixel using OpenCV (`cv2.erode`).
4. Reapply the eroded mask to the image.
5. Perform the same headroom scaling (height `788` pixels) and paste it bottom-aligned onto the Warm Gray canvas.
6. Re-process Dr. Vivek and Dr. Ashvini's images as well to ensure all three have the same clean edge quality.

---

## 4. Verification Plan

- Open the local website homepage and about page.
- Confirm that Dr. Muniza's portrait has no dark outline and blends cleanly with the Warm Gray background.
- Ensure all three portraits remain aligned.
