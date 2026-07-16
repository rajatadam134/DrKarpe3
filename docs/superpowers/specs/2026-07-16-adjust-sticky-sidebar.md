# Design Spec — Move Sticky Treatments Sidebar Upwards

This design document outlines the layout adjustments to shift the treatments sidebar (`.service-sidebar`) upwards on desktop views to prevent the bottom treatments from being cut off.

> **Constraint:** All changes must remain local for verification. Do NOT run `git push` to upload to GitHub.

---

## 1. Root Cause Analysis
* **Problem:** On individual treatment pages, the sticky treatments sidebar list is very tall (containing 12 items). A few treatments at the bottom of the list are being cut off by the bottom of the screen.
* **Root Cause:** 
  1. **Resting Position:** The sidebar starts too low on the page because of the standard container padding.
  2. **Sticky Scroll Offset:** On screens `min-width: 992px`, the sidebar has `top: 73px !important`. This large offset pushes the bottom of the list past the bottom edge of the viewport.

---

## 2. Layout Adjustment
We will shift the entire block upwards on desktop (screens `min-width: 992px`) without modifying any internal margins, padding, text sizes, or item distances:
1. **Shifting resting position:** Apply a negative top margin of `-80px` (`margin-top: -80px !important`) to `.service-sidebar`. This pulls the box upwards into the page section's top padding, aligning it beautifully.
2. **Shifting sticky position:** Change the sticky offset `top` from `73px !important` to `10px !important`. This shifts the sidebar upwards by `63px` during scroll.

---

## 3. CSS Modifications (`css/custom.css`)

We will update the desktop sticky query block at lines 7032–7043 in `css/custom.css`:

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
}
```

---

## 4. Verification Plan
* Open an individual treatment page (e.g. `dental-implants.html`).
* Verify that the treatments sidebar is shifted upwards and its bottom items are visible.
* Scroll down and verify that the sticky behavior remains smooth and does not cut off the bottom items.
