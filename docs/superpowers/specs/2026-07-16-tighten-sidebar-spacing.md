# Design Spec — Tighten Sticky Sidebar Spacing on Desktop

This design document outlines the CSS spacing adjustments to reduce the vertical height of the treatments sidebar on desktop viewports.

> **Constraint:** All changes must remain local for verification. Do NOT run `git push` to upload to GitHub.

---

## 1. Root Cause Analysis
* **Problem:** Even with the sidebar moved upward, a few treatments at the bottom can still be cut off on smaller desktop viewports (e.g. 768px height) because the list contains 12 items.
* **Root Cause:** By default, each item in the treatments list has `margin-bottom: 15px` and `padding-bottom: 15px` (totalling 30px of vertical gap per item). Across 12 items, this accounts for over 330px of vertical padding, making the box unnecessarily tall on desktop.

---

## 2. Layout Adjustment
We will reduce the padding and margin of list items *only* on desktop views (`min-width: 992px`), leaving mobile/tablet stacked layouts untouched:
1. **List spacing:** Reduce `.service-catagery-list ul li` spacing from `15px` to `8px` (both padding-bottom and margin-bottom).
2. **Title margin:** Reduce the margin-bottom of the `.service-catagery-list h3` header inside the box from `30px` to `15px` to save another `15px` of height.
3. **Total height saved:** Saves approximately `170px` in total height, ensuring the entire box fits comfortably on standard desktop viewports.

---

## 3. CSS Modifications (`css/custom.css`)

We will update the desktop media query block at lines 7032–7044 in `css/custom.css`:

```css
@media (min-width: 992px) {
	html, body {
		overflow-x: visible !important;
	}
	.service-sidebar {
		position: sticky !important;
		top: 10px !important;
		margin-top: -80px !important;
		align-self: start !important;
		z-index: 10;
		will-change: transform;
	}
	.service-catagery-list h3 {
		margin-bottom: 15px !important;
	}
	.service-catagery-list ul li {
		margin-bottom: 8px !important;
		padding-bottom: 8px !important;
	}
}
```

---

## 4. Verification Plan
* Open `dental-implants.html` on a desktop viewport.
* Verify that all 12 treatments are fully visible inside the treatments sidebar and no longer cut off at the bottom of the screen.
