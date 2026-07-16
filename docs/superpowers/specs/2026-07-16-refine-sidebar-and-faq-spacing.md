# Refine Treatments Layout and Spacing Design Spec

This design document outlines the HTML nested div corrections, FAQ content overrides, and CSS sticky layout enhancements for the treatments section.

> **Constraint:** All changes must remain local for verification. Do NOT run `git push` to upload to GitHub.

---

## 1. Structural Fix: Closing `service-single-content`
* **Problem:** All 11 generated treatment HTML files are missing a closing `</div>` tag for the `.service-single-content` wrapper. This nests the FAQ section, page layout structures, and sometimes footer sections inside the content column, breaking margins, paddings, and responsiveness.
* **Solution:** A Python script will parse all 11 HTML pages and insert the closing `</div>` exactly after the `.service-entry` container:
  ```html
  </div>
  <!-- Service Single Content End -->
  ```

---

## 2. Topic-Specific FAQs (4 to 5 per Treatment)
* **Problem:** Currently, the generated pages use placeholder FAQs related to "Root Canal Therapy".
* **Solution:** The Python script will replace the placeholder accordions with **exactly 5 custom, high-quality, medically accurate FAQs** specific to each treatment topic (e.g., Invisalign questions for Invisalign, Laser safety questions for Laser dentistry, etc.).
* **Note:** `dental-implants.html` content, text, and FAQ structure will remain **100% unchanged** as requested by the user.

---

## 3. Sidebar Sticky and Spacing Refinement (Desktop)
* **Problem:** Since the sidebar contains both the treatments list and the CTA box, making the entire sidebar sticky results in a container that is too tall (approx. `1010px`), causing bottom items to overflow and cut off. Also, the CTA box sits right against the footer at the bottom of the page.
* **Solution:**
  1. **Column Stretching:** Make `.service-sidebar` stretch to full height (`height: 100%`) using a flexbox layout.
  2. **Selective Sticky list:** Make *only* the treatments list `.service-catagery-list` sticky at `top: 115px !important` (right below the sticky header).
  3. **Bottom-Aligned CTA:** Align `.sidebar-cta-box` to the bottom of the sidebar column using `margin-top: auto`. Add a `margin-bottom: 50px` to create a clean breathing space before the footer.
  4. **Tighten List Spacing:** Reduce padding of `.service-catagery-list` to `22px 25px` and list item spacing to `7px` to ensure the box fits standard laptops cleanly.

---

## 4. Spacing and Alignment Enhancements
We will update `css/custom.css` to add the following clean spacing rules:
1. **FAQ Section Spacing:** Add `margin-top: 80px;` to `.service-faqs` to separate it elegantly from the case images or text above it.
2. **Text Headings Spacing:** Add `margin-top: 45px !important; margin-bottom: 20px !important;` to `.service-entry h3` to create professional reading columns.

---

## 5. CSS Modifications (`css/custom.css`)

We will update the desktop media query block at lines 7032–7049 in `css/custom.css`:

```css
@media (min-width: 992px) {
	html, body {
		overflow-x: visible !important;
	}
	.service-sidebar {
		display: flex !important;
		flex-direction: column !important;
		height: 100% !important;
		margin-top: -80px !important;
	}
	.service-catagery-list {
		position: sticky !important;
		top: 115px !important;
		z-index: 10;
		will-change: transform;
		padding: 22px 25px !important;
	}
	.service-catagery-list h3 {
		margin-bottom: 12px !important;
	}
	.service-catagery-list ul li {
		margin-bottom: 7px !important;
		padding-bottom: 7px !important;
	}
	.service-catagery-list ul li a {
		font-size: 15px !important;
	}
	.sidebar-cta-box {
		margin-top: auto !important;
		margin-bottom: 50px !important;
	}
}

.service-faqs {
	margin-top: 80px;
}

.service-entry h3 {
	margin-top: 45px !important;
	margin-bottom: 20px !important;
}
```
