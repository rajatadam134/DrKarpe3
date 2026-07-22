# Design Spec — Add Dr. Muniza Qureshi to Team Sections

This design document outlines the addition of Dr. Muniza Qureshi's profile card to the Homepage and the About Us page, including column adjustments to maintain layout symmetry.

---

## 1. Assets Preparation

- **Image Conversion:** The user-uploaded photo `media__1784025499508.png` has been converted to a lightweight WebP format and saved as `assets/img/team/Dr-Muniza-Qureshi.webp`.

---

## 2. Layout & Content Changes

### A. Homepage (`index.html`)

- **Section:** "Our Team"
- **Columns:** Keep the `col-lg-4 col-md-6` grid. With 3 doctors, they will align in a single, balanced 3-column row on desktop.
- **Content:** Add a third card right after Dr. Ashvini Karpe:
  ```html
  <div class="col-lg-4 col-md-6">
    <div class="team-member-item wow fadeInUp" data-wow-delay="0.5s">
      <div class="team-image">
        <figure class="image-anime">
          <img
            src="assets/img/team/Dr-Muniza-Qureshi.webp"
            alt="Dr. Muniza Qureshi"
          />
        </figure>
      </div>
      <div class="team-content">
        <h3>Dr. Muniza Qureshi</h3>
        <p>Endodontist</p>
      </div>
    </div>
  </div>
  ```

### B. About Us Page (`about.html`)

- **Section:** "Our Team"
- **Columns:** Update all 3 doctor cards to use `col-lg-4 col-md-6 col-12` (previously `col-lg-5`) so that they fit on a single desktop row.
- **Content:** Add Dr. Muniza Qureshi's card as the third column (animating with `data-wow-delay="0.5s"`):
  ```html
  <div class="col-lg-4 col-md-6 col-12">
    <div
      class="team-member-item wow fadeInUp"
      data-wow-delay="0.5s"
      style="margin-bottom: 30px;"
    >
      <div class="team-image">
        <figure class="image-anime">
          <img
            src="assets/img/team/Dr-Muniza-Qureshi.webp"
            alt="Dr. Muniza Qureshi"
          />
        </figure>
      </div>
      <div class="team-content">
        <h3>Dr. Muniza Qureshi</h3>
        <p
          style="color: var(--accent-color); font-weight: 600; margin-bottom: 10px; min-height: 44px; line-height: 1.4;"
        >
          B.D.S. (Fellowship in Endodontics)<br />Endodontist
        </p>
        <p
          class="bio-text"
          style="font-size: 14px; line-height: 1.6; color: var(--text-color);"
        >
          Dr. Muniza Qureshi completed her BDS in 2022 and further enhanced her
          clinical expertise with a fellowship in Endodontics from Hyderabad in
          2024. Specializing in clinical endodontics, she focuses on painless,
          patient-centered care and modern minimally invasive root canal
          treatments. Certified in rotary endodontics, indirect restorations,
          aesthetic dentistry, and minor surgical procedures, she is dedicated
          to continuous learning.
        </p>
      </div>
    </div>
  </div>
  ```

---

## 3. Verification Plan

- Validate grid responsiveness of the Team section on `index.html` and `about.html`.
- Ensure the WebP image loads correctly on both pages.
