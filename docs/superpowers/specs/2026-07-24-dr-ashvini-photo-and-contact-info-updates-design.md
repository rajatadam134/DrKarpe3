# Design Spec: Dr. Ashvini Karpe Photo & Contact Information Updates

## Goal
Update Dr. Ashvini Karpe's portrait to crop subject from bottom to waist level while preserving existing Warm Gray background and top headroom. Update clinic contact info across all codebase files (replace legacy emails with `drkarpesdentalclinic@gmail.com` and replace test WhatsApp number with clinic WhatsApp number `+91 94055-49094`).

## Component 1: Dr. Ashvini Karpe Portrait Processing
- **Source**: `assets/img/New_Images/Dr. Ashwini Karpe.jpg`
- **Output Target**: `assets/img/team/Dr-Ashvini-Karpe.webp` (Dimensions: `682x1024` WebP)
- **Processing Logic**:
  - Remove original background via `rembg`.
  - Place subject on solid Warm Gray studio background (`#EAE7E1`).
  - Align top headroom (y ~ 238px) with Dr. Vivekanand Karpe and Dr. Muniza Qureshi portraits.
  - Scale subject so bottom edge crops at waist height inside `682x1024` canvas.

## Component 2: Email Address Update
- Replace all legacy/placeholder email addresses (`smile@drkarpe.com`, `privacy@drkarpe.com`, `domain@gmail.com`) with `drkarpesdentalclinic@gmail.com`.
- Target files:
  - `index.html`
  - `about.html`
  - `contact.html`
  - `appointment.html`
  - `privacy-policy.html`
  - `team-single.html`

## Component 3: WhatsApp Number Update
- Replace test phone number (`8767223224` / `+91 8767223224`) with clinic WhatsApp number `+91 94055-49094` (`919405549094`).
- Target files:
  - `assets/js/main.js`
  - `assets/js/chatbot.js`
  - `js/appointment.js`
  - `contact.html`

## Verification
- Verify generated WebP dimensions (`682x1024`) and visual alignment with existing team photos.
- Grep codebase to confirm zero remaining instances of legacy emails or test phone numbers.
