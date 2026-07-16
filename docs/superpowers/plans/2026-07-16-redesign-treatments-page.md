# Overhaul of Treatments & Individual Treatment Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Constraint:** DO NOT run `git push`! All changes must remain local.
> **Asset Constraint:** DO NOT delete the raw JPEG files from `assets/img/New_Images/` after processing. Keep them there.

**Goal:** Overhaul the treatments taxonomy from 8 items to 12 items. Redesign `treatments.html` with a 12-card grid, create 12 matching subpages with detailed patient-friendly copy, replace navigation bar dropdowns across all active files using a Python script, update the homepage featured services, and generate premium WebP images for all new pages.

---

### Task 1: Generate Premium WebP Images for New Treatments

- [ ] **Step 1: Generate Invisalign Aligners image**
  * Generate `assets/img/New_Images/Invisalign_Aligners.webp`.
- [ ] **Step 2: Generate Laser Dentistry image**
  * Generate `assets/img/New_Images/Laser_Dentistry.webp`.
- [ ] **Step 3: Generate Dental Braces image**
  * Generate `assets/img/New_Images/Dental_Braces.webp`.
- [ ] **Step 4: Generate Aligners image**
  * Generate `assets/img/New_Images/Aligners.webp`.
- [ ] **Step 5: Generate Dentures image**
  * Generate `assets/img/New_Images/Dentures.webp`.
- [ ] **Step 6: Generate Kids Dentistry image**
  * Generate `assets/img/New_Images/Kids_Dentistry.webp`.
- [ ] **Step 7: Generate Preventive Dentistry image**
  * Generate `assets/img/New_Images/Preventive_Dentistry.webp`.
- [ ] **Step 8: Generate Advanced Care Treatment image**
  * Generate `assets/img/New_Images/Advanced_Care_Treatment.webp`.
- [ ] **Step 9: Generate Dental Crowns & Bridges image**
  * Generate `assets/img/New_Images/Dental_Crowns_Bridges.webp`.
- [ ] **Step 10: Generate Veneers & Laminates image**
  * Generate `assets/img/New_Images/Veneers_Laminates.webp`.
- [ ] **Step 11: Generate Minimal Invasive Dentistry image**
  * Generate `assets/img/New_Images/Minimal_Invasive_Dentistry.webp`.

---

### Task 2: Create Python Script to Automate Navbar & Sidebar Replacements

- [ ] **Step 1: Write `scratch/update_navbars_and_sidebars.py`**
  Write a script that will:
  1. Find all active HTML files in the workspace directory.
  2. Parse the navbar treatments dropdown submenu block and replace it with the new 12-item list.
  3. Scan individual treatment pages, parse their sidebar categories lists, and replace them with the new 12-item sidebar list. On each page, the link to the current page must have the `active` class and standard highlight styling.
- [ ] **Step 2: Dry-run and test the script on a single file**
  Test and verify that the replacement is executed correctly without destroying surrounding code.

---

### Task 3: Create and Copy Individual Treatment Pages

- [ ] **Step 1: Create new treatment files by copying standard layout**
  For each of the 11 new/updated pages, copy a standard layout (e.g., `dental-implants.html` or `root-canal-treatment.html`), update the title tag, page headers, breadcrumbs, featured WebP image paths, and content section containers:
  * `invisalign-aligners.html`
  * `laser-dentistry.html`
  * `dental-braces.html`
  * `aligners.html`
  * `dentures.html`
  * `kids-dentistry.html` (copying/updating `child-dentistry.html`)
  * `preventive-dentistry.html`
  * `advanced-care-treatment.html`
  * `dental-crowns-bridges.html`
  * `veneers-laminates.html`
  * `minimal-invasive-dentistry.html`
- [ ] **Step 2: Draft patient-friendly clinical copywriting for each new page**
  Flesh out all text sections with highly professional, engaging, and medically structured information detailing treatments, patient indications, benefits, and procedures.

---

### Task 4: Run the Automations Script

- [ ] **Step 1: Run the script to update all navbars and sidebars**
  Execute `python scratch/update_navbars_and_sidebars.py` to propagate changes across all HTML files.

---

### Task 5: Redesign Main Treatments Page & Homepage Sections

- [ ] **Step 1: Overhaul treatments grid in `treatments.html`**
  Modify the card block to display the 12 treatments in the correct order, with proper grid classes (`col-lg-3 col-md-6 col-12`), unique SVG icons, concise description copies, and custom link targets.
- [ ] **Step 2: Update homepage featured treatments in `index.html`**
  Update the 4 service cards to display: Invisalign Aligners, Laser Dentistry, Dental Implants, and Advanced Care Treatment.

---

### Task 6: Local Verification & Commit

- [ ] **Step 1: Perform full quality audit locally**
  Check all internal links, grid layouts, image assets, responsive behaviors, and typography in the browser.
- [ ] **Step 2: Stage and commit all changes locally**
  Run `git add` and `git commit` to commit changes locally. Do NOT run `git push`!
