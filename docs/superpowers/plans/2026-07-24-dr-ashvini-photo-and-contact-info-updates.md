# Dr. Ashvini Karpe Photo & Contact Information Updates Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Crop Dr. Ashvini Karpe's portrait from bottom to waist level while preserving theme and background, and update clinic email and WhatsApp numbers across all site files.

**Architecture:** Python PIL + rembg script for portrait background removal, studio warm gray fill (`#EAE7E1`), top headroom alignment, and waist crop. Batch replace strings in HTML and JS for contact info.

**Tech Stack:** Python (PIL, rembg, numpy), HTML, JavaScript.

## Global Constraints

- Dr. Ashvini portrait dimensions must be `682x1024` WebP.
- Background color must match studio Warm Gray `#EAE7E1`.
- Email target: `drkarpesdentalclinic@gmail.com`.
- WhatsApp target: `+91 94055-49094` (`919405549094`).

---

### Task 1: Re-process Dr. Ashvini Karpe Portrait (Waist-Crop Framing)

**Files:**
- Source: `assets/img/New_Images/Dr. Ashwini Karpe.jpg`
- Output: `assets/img/team/Dr-Ashvini-Karpe.webp`

- [ ] **Step 1: Write python portrait processing script**

Write `scratch/process_ashvini_portrait.py` to extract subject via `rembg`, create a Warm Gray `682x1024` canvas (`#EAE7E1`), position subject head top at y=238, scale subject to crop at waist level, and export as WebP.

- [ ] **Step 2: Run processing script**

Run: `python scratch/process_ashvini_portrait.py`

- [ ] **Step 3: Verify output dimensions and subject bounds**

Run: `python -c "from PIL import Image; img=Image.open('assets/img/team/Dr-Ashvini-Karpe.webp'); print(img.size)"`
Expected: `(682, 1024)`

---

### Task 2: Replace Legacy Email Addresses Across Codebase

**Files:**
- Modify: `index.html`, `about.html`, `contact.html`, `appointment.html`, `privacy-policy.html`, `team-single.html`

- [ ] **Step 1: Replace legacy emails in HTML files**

Replace `smile@drkarpe.com`, `privacy@drkarpe.com`, `domain@gmail.com` with `drkarpesdentalclinic@gmail.com`.

- [ ] **Step 2: Verify zero legacy email occurrences remain**

Run: `grep -rn "drkarpe.com" *.html` and `grep -rn "domain@gmail.com" *.html`
Expected: 0 matches for old emails (excluding website domain URL references if valid).

---

### Task 3: Replace Test WhatsApp Number Across Codebase

**Files:**
- Modify: `assets/js/main.js`, `assets/js/chatbot.js`, `js/appointment.js`, `contact.html`

- [ ] **Step 1: Replace test phone number `8767223224` with clinic WhatsApp number `9405549094`**

In `assets/js/main.js`, `assets/js/chatbot.js`, `js/appointment.js`, and `contact.html`, replace `8767223224` / `+918767223224` with `9405549094` / `+919405549094`.

- [ ] **Step 2: Verify zero test number occurrences remain**

Run: `grep -rn "8767223224" .`
Expected: 0 matches.
