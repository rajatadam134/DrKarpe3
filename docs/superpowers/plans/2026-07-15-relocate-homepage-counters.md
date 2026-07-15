# Relocate Homepage Counters to CTA Box Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Constraint:** DO NOT run `git push`! All changes must remain local.

**Goal:** Relocate the 4 statistics counter items from the middle of the homepage to the top-fold CTA box on `index.html` and update CSS styling for appropriate contrast and layout.

---

### Task 1: CSS Layout and Typography Style Updates

**Files:**
- Modify: `css/custom.css`

- [ ] **Step 1: Append `.cta-counter-item` style definition to `css/custom.css`**

Open `css/custom.css` and append the following styles at the end:
```css
/* CTA Counter Item Layout & Color Overrides */
.cta-counter-item {
	padding: 10px 15px;
	text-align: center;
}
.cta-counter-item h2 {
	font-size: 48px !important;
	color: var(--accent-color) !important;
	font-weight: 700 !important;
	margin-bottom: 5px !important;
}
.cta-counter-item h3 {
	font-size: 14px !important;
	text-transform: uppercase !important;
	color: var(--white-color) !important;
	margin-top: 10px !important;
	font-weight: 500 !important;
	letter-spacing: 0.5px !important;
}
@media (min-width: 992px) {
	.cta-counter-item {
		border-right: 1px solid rgba(255, 255, 255, 0.15);
	}
	.col-lg-3:last-child .cta-counter-item {
		border-right: none;
	}
}
```

---

### Task 2: HTML Content Relocation

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Remove old content and place new 4 counters inside CTA Box**

Open `index.html` around line 166:
Find the Call To Action section (`<div class="cta-box">...</div>`). Replace the entire content of the row with:
```html
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="cta-counter-item wow fadeInUp">
                        <h2><span class="counter">20000</span>+</h2>
                        <h3>Happy Patients</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="cta-counter-item wow fadeInUp" data-wow-delay="0.2s">
                        <h2><span class="counter">4.9</span>/5</h2>
                        <h3>Average Rating</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="cta-counter-item wow fadeInUp" data-wow-delay="0.4s">
                        <h2><span class="counter">25</span>+ Yrs</h2>
                        <h3>Clinical Experience</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="cta-counter-item wow fadeInUp" data-wow-delay="0.6s">
                        <h2><span class="counter">2</span></h2>
                        <h3>Clinic Branches</h3>
                    </div>
                </div>
```

- [ ] **Step 2: Delete the old counter section**

Open `index.html` around line 413:
Delete the entire `our-counter` section (lines 413-444).

---

### Task 3: Local Verification & Commit

- [ ] **Step 1: Verify the changes locally**
Open the homepage locally. Ensure that the 4 counters appear at the top-fold CTA box, look sharp (green numbers and white text), and that the old counter section is gone.
- [ ] **Step 2: Stage and commit changes locally**
Stage all changes and commit locally with:
`git commit -m "feat: relocate homepage counter statistics to top CTA section"`
Do NOT run `git push`.
