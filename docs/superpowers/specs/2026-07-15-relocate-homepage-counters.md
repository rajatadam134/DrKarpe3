# Design Spec — Relocate Homepage Counters to CTA Box

This design document outlines the relocation of the statistics counter items (Happy Patients, Average Rating, Clinical Experience, and Clinic Branches) from the middle of the homepage to the top-fold CTA box on `index.html`.

> **Constraint:** All changes must remain local for verification. Do NOT run `git push` to upload to GitHub.

---

## 1. Layout & Styling Changes

### A. Global CSS Updates (`css/custom.css`)

To support a 4-column counter layout inside the CTA box, we will add styling for `.cta-counter-item`.
These styles ensure:

1. The numbers are rendered in the accent brand green (`var(--accent-color)`).
2. The labels are rendered in white (`var(--white-color)`).
3. On desktop (screens $\ge$ 992px), vertical border dividers are placed between columns, which automatically disappear when stacked on tablet and mobile.

Add to `css/custom.css`:

```css
.cta-counter-item {
  padding: 10px 15px;
  text-align: center;
}
.cta-counter-item h2 {
  font-size: 48px;
  color: var(--accent-color);
  font-weight: 700;
  margin-bottom: 5px;
}
.cta-counter-item h3 {
  font-size: 14px;
  text-transform: uppercase;
  color: var(--white-color);
  margin-top: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
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

## 2. HTML Markup Modifications (`index.html`)

### A. Relocate CTA Box Content

- **Old CTA Content:** Remove the 3 columns (need dental services, opening hours, make appointment).
- **New CTA Content:** Replace with 4 columns of size `col-lg-3 col-md-6 col-12`, enclosing the counter animations:
  ```html
  <div class="col-lg-3 col-md-6 col-12">
    <div class="cta-counter-item wow fadeInUp">
      <h2><span class="counter">200000</span>+</h2>
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

### B. Delete Old Counter Section

- **Action:** Delete the entire old `our-counter` section (lines 413-444) from `index.html`.

---

## 3. Animation Preservation

- **Mechanism:** The jQuery CounterUp script (`js/function.js`) listens for any element with class `counter` (`$('.counter').counterUp({ delay: 10, time: 1000 })`). Since we reuse `class="counter"` inside our new markup, the animation triggers automatically on page load.

---

## 4. Verification Plan

- Open the local homepage and verify that the 4 counters appear at the top CTA box with green numbers and white text.
- Confirm that the numbers animate upwards (from 0 to target values) on page load.
- Verify that the borders render correctly on desktop and disappear on smaller screens.
- Check that the old counter section is completely gone from the page body.
