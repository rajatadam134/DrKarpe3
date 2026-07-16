# Design Spec — Redesign of Treatments & Individual Treatment Pages

This design document outlines the complete architectural and content overhaul of the Treatments section for Dr. Karpe's Centre for Advanced Dentistry. We will transition from the current 8-treatment layout to a 12-treatment taxonomy.

---

## 1. Scope of Changes

### A. Main Treatments List Page (`treatments.html`)
* **Redesign:** Overhaul the cards block to display the 12 new treatments in the exact ordered sequence.
* **Layout:** A grid using `col-lg-3 col-md-6 col-12` (4 columns on desktop, 2 on tablet, 1 on mobile). Each card will feature:
  1. A unique SVG icon.
  2. The treatment title (`<h3>`).
  3. A concise patient-focused description.
  4. A "Read More" button linking to its individual treatment subpage.
* **Why Choose Us & Testimonials:** These sections will be preserved exactly as they are now.

### B. Navigation Bar Dropdown Menu
* **Files Affected:** All active HTML files (approx. 24 files).
* **Dropdown Layout:** Update the "Treatments" dropdown to list all 12 treatments in a single, clean, vertical dropdown sequence.
* **Implementation:** A custom Python script will scan and replace the submenu block in all HTML files to ensure 100% template consistency.

### C. Homepage "Our Services" Section (`index.html`)
* **Highlighted Treatments:** Showcase the 4 key treatments selected:
  1. **Invisalign Aligners**
  2. **Laser Dentistry**
  3. **Dental Implants**
  4. **Advanced Care Treatment**
* Update the titles, icons, descriptions, and page links of these 4 homepage cards.

### D. 12 Individual Treatment Subpages
We will maintain the double-column template layout:
* **Sidebar (`col-lg-4`):** Lists all 12 treatments. The current treatment will have the `active` class and matching highlight styles. Includes the standard CTA Box linking to the contact page.
* **Main Content (`col-lg-8`):**
  * **Featured WebP Image:** A realistic, premium, clinical/lifestyle photo representing the treatment.
  * **Professional Patient-Focused Copy:** Structured with headings (`<h3>`), bullet points, and paragraphs explaining:
    * What the treatment is.
    * Who should get this treatment / Indications.
    * Key benefits & advanced technology used.
    * What patients can expect during the procedure.

---

## 2. The 12-Item Treatment Taxonomy

Below is the list of treatments with their designated filenames, icon mappings, and copy guidelines:

| Order | Treatment Name | Filename | Icon Source | Content Structure |
|---|---|---|---|---|
| 1 | **Invisalign Aligners** | `invisalign-aligners.html` | `images/icon-services-5.svg` | Clear aligner technology, digital scanning (iTero), benefits over braces, virtual care. |
| 2 | **Laser Dentistry** | `laser-dentistry.html` | `images/icon-services-6.svg` | Waterlase/Biolase technology, painless fillings, bloodless gum surgery, rapid healing. |
| 3 | **Dental Braces** | `dental-braces.html` | `images/icon-services-5.svg` | Metal, ceramic, and self-ligating braces, orthodontic alignment, age-specific treatments. |
| 4 | **Aligners** | `aligners.html` | `images/icon-services-5.svg` | General clear aligner systems, digital setups, teeth straightening for mild-to-moderate cases. |
| 5 | **Dentures** | `dentures.html` | `images/icon-services-8.svg` | Complete and partial dentures, BPS dentures, implant-supported overdentures, care guide. |
| 6 | **Dental Implants** | `dental-implants.html` | `images/icon-services-2.svg` | [EXISTING] Biocompatible titanium posts, single/multiple restorations, all-on-4/6. |
| 7 | **Kids Dentistry** | `kids-dentistry.html` | `images/icon-services-7.svg` | [COPIED/UPDATED] Fluoride therapy, pit & fissure sealants, habit breaking appliances. |
| 8 | **Preventive Dentistry** | `preventive-dentistry.html` | `images/icon-services-1.svg` | Regular scaling & polishing, oral cancer screening, deep cleaning, hygiene education. |
| 9 | **Advanced Care Treatment** | `advanced-care-treatment.html` | `images/icon-services-4.svg` | Full mouth rehabilitation, TMJ pain therapy, sleep apnea dental appliances, digital smile design. |
| 10 | **Dental Crowns & Bridges** | `dental-crowns-bridges.html` | `images/icon-services-8.svg` | Zirconia and E-Max crowns, fixed dental bridges, restorative strength and aesthetics. |
| 11 | **Veneers & Laminates** | `veneers-laminates.html` | `images/icon-services-3.svg` | Porcelain veneers, composite laminates, smile enhancement, minimally invasive prep. |
| 12 | **Minimal Invasive Dentistry** | `minimal-invasive-dentistry.html` | `images/icon-services-1.svg` | Air abrasion, micro-dentistry, conservative cavity prep, preserving maximum natural tooth structure. |

---

## 3. High-Fidelity Image Plan
We will generate premium WebP images for the new pages. The prompts are designed for maximum realism (avoiding cartoonish or generic stock-photo aesthetics):

1. **Invisalign Aligners:** `assets/img/New_Images/Invisalign_Aligners.webp`
   * *Prompt:* A professional macro photograph of a transparent, clear Invisalign aligner tray held in a gloved hand in front of a modern dental clinic background. Soft lighting, realistic textures, highly detailed plastic reflection.
2. **Laser Dentistry:** `assets/img/New_Images/Laser_Dentistry.webp`
   * *Prompt:* A close-up shot of a modern dental laser handpiece emitting a precise red guidance light in a clean, state-of-the-art clinic. Crisp clinical details, professional lighting, photorealistic.
3. **Dental Braces:** `assets/img/New_Images/Dental_Braces.webp`
   * *Prompt:* Macro shot of ceramic orthodontic braces on a high-fidelity dental model. Soft, warm background, detailed medical brackets and wires, highly realistic.
4. **Aligners:** `assets/img/New_Images/Aligners.webp`
   * *Prompt:* Two clear dental aligners resting on a sterile metallic tray next to a straight teeth plaster model. Modern dental setup, soft clinical lighting, crisp details.
5. **Dentures:** `assets/img/New_Images/Dentures.webp`
   * *Prompt:* A high-quality set of complete upper and lower dentures sitting on a clean granite countertop in a modern clinic. Real-looking pink acrylic gum and prosthetic teeth textures.
6. **Kids Dentistry:** `assets/img/New_Images/Kids_Dentistry.webp`
   * *Prompt:* A warm, friendly dental operatory with a cute dinosaur-themed dental chair and colorful child-friendly environment. Warm ambient lighting, inviting atmosphere.
7. **Preventive Dentistry:** `assets/img/New_Images/Preventive_Dentistry.webp`
   * *Prompt:* A dental hygienist's tray with scaling tools, a mirror, and a small cup of polishing paste under clean clinic lights. Real textures, high detail, medical hygiene theme.
8. **Advanced Care Treatment:** `assets/img/New_Images/Advanced_Care_Treatment.webp`
   * *Prompt:* A modern, high-tech dental operatory showing a luxury ergonomic patient chair, operating microscope, and clean screens. Warm, premium clinical setting.
9. **Dental Crowns & Bridges:** `assets/img/New_Images/Dental_Crowns_Bridges.webp`
   * *Prompt:* A custom zirconia dental crown and fixed bridge sitting on a stone jaw model in a dental laboratory. Soft laboratory light, detailed porcelain anatomy, realistic.
10. **Veneers & Laminates:** `assets/img/New_Images/Veneers_Laminates.webp`
    * *Prompt:* Extremely close macro shot of thin, translucent porcelain veneers resting on a clean clinical tile. Showcasing lifelike translucency and natural light reflections.
11. **Minimal Invasive Dentistry:** `assets/img/New_Images/Minimal_Invasive_Dentistry.webp`
    * *Prompt:* A high-precision magnifying dental loupe and a micro-dentistry handpiece resting on a blue sterile cloth. Sharp focus, clean textures, professional.

---

## 4. Verification Plan
1. **Broken Links Audit:** Ensure every link in the dropdown menu and sidebars works perfectly.
2. **Responsive Check:** Test the 12-item grid layout on mobile, tablet, and desktop views.
3. **Visual Quality Review:** Confirm that the generated WebP images load correctly and match the brand styling.
