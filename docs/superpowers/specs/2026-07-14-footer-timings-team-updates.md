# Design Spec — Footer, Timings, and Team Section Layout Updates

This specification document outlines the local updates to the footer logo, timing details, branch names, and team layout configurations in the `Dr. Karpe 3` workspace.

> **Constraint:** Do NOT push any of these changes to the remote GitHub repository. They are to remain local for user testing and verification.

---

## 1. Scope of Changes

### A. Footer Logo Legibility
* **Problem:** The dark subtext ("Centre for advanced dentistry and implantology") inside the transparent logo image `logo.png` is unreadable against the dark footer background.
* **Solution (Approach A):** Apply a global CSS rule to wrap the footer logo image in a soft-white, rounded pill background.
* **Code Modification:**
  Add to `css/custom.css` under `.footer-logo img`:
  ```css
  .footer-logo img {
      width: auto !important;
      max-height: 50px !important;
      background: #ffffff;
      padding: 6px 12px;
      border-radius: 6px;
  }
  ```

### B. Footer Tagline Removal
* **Problem:** Remove `" Our ratings reflect the quality of our commitment."` from the footer description.
* **Solution:** Replace the string globally in all 28 HTML files:
  - *From:* `<p>Dedicated to providing world-class dental diagnostics and procedures in a comfortable, hygienic, and relaxed environment. Our ratings reflect the quality of our commitment.</p>`
  - *To:* `<p>Dedicated to providing world-class dental diagnostics and procedures in a comfortable, hygienic, and relaxed environment.</p>`

### C. Timing Updates
* **Problem:** Change all branch timings to `"10 am to 8:30 pm"`.
* **Solution:** Replace the target timing strings in:
  - `index.html` (CTA Hours block)
  - `contact.html` (Branch details)
  - `js/chatbot.js` & `assets/js/chatbot.js` (Chatbot responses)
  - `js/faqs.json` & `assets/js/faqs.json` (FAQ knowledgebase)

### D. Branch "Main" Label Removal
* **Problem:** Remove the `(Main)` label from `"Solapur Branch (Main)"` and `"Solapur (Main)"`.
* **Solution:** Scan and strip `(Main)` from:
  - The footer section across all 28 HTML files.
  - The contacts page branch card and address sections.
  - The chatbot and FAQ files.

### E. Home Page Team Section refinements
* **Problem:** Update titles and remove hover links from doctors' images.
* **Solution:**
  - Change team section title in `index.html` from `<span>Our Friendly</span> Dentists Team` to `<span>Our</span> Team`.
  - Delete the entire `<div class="team-social-icon">...</div>` wrapper blocks for both doctors inside `index.html`.

---

## 2. Verification Plan
* Validate layout rendering of the footer logo container.
* Check that all occurrences of the old timings and `(Main)` are removed.
* Verify the team section hover effect no longer displays links.
