# Remove Sidebar CTA Box Design Spec

This design document outlines the removal of the "Need Help" CTA box from the treatments sidebar layout and the simplification of the CSS sticky rules.

> **Constraint:** All changes must remain local for verification. Do NOT run `git push` to upload to GitHub.

---

## 1. HTML Modification
We will remove the following block from all 12 treatment HTML files:
```html
<!-- Sidebar Cta Box Start -->
<div class="sidebar-cta-box ...">
    ...
</div>
<!-- Sidebar Cta Box End -->
```
This applies to:
* `invisalign-aligners.html`, `laser-dentistry.html`, `dental-braces.html`, `aligners.html`, `dentures.html`, `dental-implants.html`, `kids-dentistry.html`, `preventive-dentistry.html`, `advanced-care-treatment.html`, `dental-crowns-bridges.html`, `veneers-laminates.html`, `minimal-invasive-dentistry.html`.

---

## 2. CSS Simplification (`css/custom.css`)
Since the "Need Help" box is removed, the `.service-sidebar` is now very compact (around `480px` tall). We can revert to the native sticky layout for `.service-sidebar` itself at `top: 115px !important` and remove the flexbox/height parameters.

```css
@media (min-width: 992px) {
	html, body {
		overflow-x: visible !important;
	}
	.service-sidebar {
		position: sticky !important;
		top: 115px !important;
		margin-top: -80px !important;
		align-self: start !important;
		z-index: 10;
		will-change: transform;
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
}
```

---

## 3. Verification Plan
* Verify that the "Need Help" box is completely gone from the sidebars of all 12 pages.
* Verify that the treatments sidebar is sticky, starting exactly below the sticky navigation bar, and scrolls cleanly alongside the content.
