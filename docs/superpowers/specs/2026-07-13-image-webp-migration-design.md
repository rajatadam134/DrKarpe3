# Design Spec — Image WebP Migration & Cleanup

This design document outlines the systematic migration of the website's used image assets from heavy formats (PNG, JPG, JPEG) to the WebP format, along with the cleanup of the original files and the preservation of specific brand assets.

---

## 1. Safety and Constraint Rules
* **Brand Asset Exclusions:** `logo.png` and `Just_logo.png` will remain completely untouched. They will not be converted or deleted.
* **Hero Image Preservation:** `assets/img/New_Images/Implant_Section.jpeg` (the hero background image) will be converted to WebP and referenced as WebP, but the original `.jpeg` file will **not** be deleted.
* **Unused Images Protection:** Do **not** touch, convert, or delete any image file that is **not currently in use** (i.e. not referenced in any HTML or CSS files). Leave them completely as is.
* **Duplicate Cleanup:** Delete the original `.png` or `.jpg`/`.jpeg` files for the 8 images that were already converted to WebP previously and are currently in use:
  - `advanced_dental_tech_photo.jpg`
  - `Dental_Implant_image.png`
  - `Dental_Tools.png`
  - `Enhanced-Clinic-Front.png`
  - `Enhanced-Root-Canal-Section.png`
  - `Enhanced-Team.png`
  - `enhanced_reception.jpg`
  - `realistic_quality_assurance.jpg`

---

## 2. Processing Steps
1. **Analyze Usage:** Scan all 28 `.html` files in the root directory and all `.css` files in `css/` to build a list of all referenced image file paths (e.g. `assets/img/...`).
2. **Convert In-Use Images:** For each referenced image that is a `.png`, `.jpg`, or `.jpeg` (and not in the logo/icon exclusion list):
   - Check if a `.webp` version already exists. If not, convert it to WebP using Pillow.
   - For PNGs, preserve transparency during WebP conversion.
3. **Update References:** Replace the file paths (specifically the extension) in all HTML and CSS files to point to the new `.webp` paths.
4. **Clean Up Originals:** Delete the original non-WebP image files from the workspace directory for the successfully migrated and referenced images (except `Implant_Section.jpeg`).
5. **Git Checkpoint:** Run all commands locally; do not stage or commit until the user confirms.

---

## 3. Verification Plan
* Validate that all updated image paths inside the HTML/CSS code exist in the file system as WebP.
* Confirm that `logo.png` and `Just_logo.png` still exist and function as PNGs.
* Confirm that `Implant_Section.jpeg` still exists in `assets/img/New_Images/`.
* Confirm that unused image files were not deleted or modified.
