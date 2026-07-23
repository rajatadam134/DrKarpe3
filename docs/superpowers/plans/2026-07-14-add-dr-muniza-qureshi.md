# Add Dr. Muniza Qureshi to Team Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Dr. Muniza Qureshi's profile card to the homepage and the About Us page, and adjust bootstrap column sizes to maintain layout symmetry.

**Assets:** The photo has been converted to `assets/img/team/Dr-Muniza-Qureshi.webp`.

---

### Task 1: Add to Homepage (index.html)

**Files:**

- Modify: `index.html`

- [ ] **Step 1: Add Dr. Muniza's card to the Team section**

Open `index.html` around line 580:
Find the team section grid row (`row justify-content-center`) containing the doctor cards. Append the following markup card for Dr. Muniza Qureshi directly below Dr. Ashvini Karpe's card:

```html
<div class="col-lg-4 col-md-6">
  <!-- Team Member Item Start -->
  <div class="team-member-item wow fadeInUp" data-wow-delay="0.5s">
    <!-- Team Image Start -->
    <div class="team-image">
      <figure class="image-anime">
        <img
          src="assets/img/team/Dr-Muniza-Qureshi.webp"
          alt="Dr. Muniza Qureshi"
        />
      </figure>
    </div>
    <!-- Team Image End -->

    <!-- Team Content Start -->
    <div class="team-content">
      <h3>Dr. Muniza Qureshi</h3>
      <p>Endodontist</p>
    </div>
    <!-- Team Content End -->
  </div>
  <!-- Team Member Item End -->
</div>
```

---

### Task 2: Add to About Us Page (about.html)

**Files:**

- Modify: `about.html`

- [ ] **Step 1: Update existing column classes to col-lg-4**

Open `about.html` around line 380:

- Find Dr. Vivekanand Karpe's column card container:
  _Change from:_ `<div class="col-lg-5 col-md-6 col-12">`
  _To:_ `<div class="col-lg-4 col-md-6 col-12">`
- Find Dr. Ashvini Karpe's column card container:
  _Change from:_ `<div class="col-lg-5 col-md-6 col-12">`
  _To:_ `<div class="col-lg-4 col-md-6 col-12">`

- [ ] **Step 2: Append Dr. Muniza's card to the row**

Directly below Dr. Ashvini's column closing `</div>` and before the row closing `</div>` (line 411), insert Dr. Muniza's profile card:

```html
<!-- Dr. Muniza -->
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
        aesthetic dentistry, and minor surgical procedures, she is dedicated to
        continuous learning.
      </p>
    </div>
  </div>
</div>
```

---

### Task 3: Local Verification & Commit

- [ ] **Step 1: Verify the changes locally**
      Verify that both files render properly on desktop, tablet, and mobile, and that the new doctor card displays the converted WebP photo.
- [ ] **Step 2: Stage, commit, and push to GitHub**
      Stage files, commit, and push to GitHub main branch.
