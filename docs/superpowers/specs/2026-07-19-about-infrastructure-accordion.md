# About Us Infrastructure Accordion Design Spec

This design document outlines the removal of the 4 specialty unit cards/hygiene text and the addition of a premium horizontal image accordion on the About Us page (`about.html`).

> **Constraint:** All changes must remain local. Do NOT push to `main` branch. Save to `about-infra-redesign` branch.

---

## 1. HTML Layout Changes (`about.html`)

* **Remove:** Entire Specialty Units Section (lines 178 to 216):
  ```html
  <!-- Specialty Units Section Start -->
  <div class="our-mission-vision" ...>
      ...
  </div>
  <!-- Specialty Units Section End -->
  ```

* **Add:** New Infrastructure Gallery section with a horizontal accordion:
  ```html
  <!-- Infrastructure Gallery Section Start -->
  <div class="infrastructure-gallery" style="padding: 80px 0; background: var(--secondary-color);">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-8">
                  <div class="section-title" style="text-align: center; margin-bottom: 50px;">
                      <h3 class="wow fadeInUp">our facilities</h3>
                      <h2 class="text-anime-style-2" data-cursor="-opaque">Tour Our Advanced Clinical Infrastructure</h2>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-12">
                  <div class="infra-accordion-container">
                      <!-- Panel 1: Reception -->
                      <div class="infra-panel active" data-infra="0">
                          <img src="assets/img/New_Images/Enhanced Reception.webp" alt="Enhanced Reception Area">
                          <div class="infra-panel-overlay"></div>
                          <div class="infra-panel-content">
                              <h3>Enhanced Reception Area</h3>
                              <p>A welcoming, warm environment designed to put patients at ease from the moment they step in.</p>
                          </div>
                          <div class="infra-panel-vertical-label">Enhanced Reception</div>
                      </div>
                      
                      <!-- Panel 2: Consulting Room -->
                      <div class="infra-panel" data-infra="1">
                          <img src="assets/img/New_Images/consulting room.webp" alt="Consulting Room">
                          <div class="infra-panel-overlay"></div>
                          <div class="infra-panel-content">
                              <h3>Consulting Room</h3>
                              <p>Private, comfortable consultation space for digital diagnostic review and treatment discussion.</p>
                          </div>
                          <div class="infra-panel-vertical-label">Consulting Room</div>
                      </div>
                      
                      <!-- Panel 3: Root Canal Section -->
                      <div class="infra-panel" data-infra="2">
                          <img src="assets/img/New_Images/Enhanced-Root-Canal-Section.webp" alt="Enhanced Root Canal Section">
                          <div class="infra-panel-overlay"></div>
                          <div class="infra-panel-content">
                              <h3>Enhanced Root Canal Section</h3>
                              <p>Equipped with state-of-the-art rotary endodontic systems for precise, single-visit root canal treatments.</p>
                          </div>
                          <div class="infra-panel-vertical-label">Root Canal Section</div>
                      </div>
                      
                      <!-- Panel 4: Implant Section -->
                      <div class="infra-panel" data-infra="3">
                          <img src="assets/img/New_Images/Implant_Section.webp" alt="Implant Section">
                          <div class="infra-panel-overlay"></div>
                          <div class="infra-panel-content">
                              <h3>Implant Section</h3>
                              <p>Sterile operatory suite dedicated to precise, 3D-planned implant placements and oral surgery.</p>
                          </div>
                          <div class="infra-panel-vertical-label">Implant Section</div>
                      </div>
                      
                      <!-- Panel 5: Pediatric Section -->
                      <div class="infra-panel" data-infra="4">
                          <img src="assets/img/New_Images/Pediatric Section.webp" alt="Pediatric Section">
                          <div class="infra-panel-overlay"></div>
                          <div class="infra-panel-content">
                              <h3>Pediatric Section</h3>
                              <p>A vibrant, warm environment tailored to make dental visits fun and anxiety-free for children.</p>
                          </div>
                          <div class="infra-panel-vertical-label">Pediatric Section</div>
                      </div>
                      
                      <!-- Panel 6: OPG Section -->
                      <div class="infra-panel" data-infra="5">
                          <img src="assets/img/New_Images/OPG Section.webp" alt="OPG Section">
                          <div class="infra-panel-overlay"></div>
                          <div class="infra-panel-content">
                              <h3>OPG Section</h3>
                              <p>Advanced digital panoramic X-ray room for immediate, low-radiation full-mouth diagnostics.</p>
                          </div>
                          <div class="infra-panel-vertical-label">OPG Section</div>
                      </div>
                      
                      <!-- Panel 7: Sterilization Section -->
                      <div class="infra-panel" data-infra="6">
                          <img src="assets/img/New_Images/Sterlization.webp" alt="Sterilization Section">
                          <div class="infra-panel-overlay"></div>
                          <div class="infra-panel-content">
                              <h3>Sterilization Section</h3>
                              <p>Class-B autoclaves and strictly monitored multi-step hygiene flow meeting international standards.</p>
                          </div>
                          <div class="infra-panel-vertical-label">Sterilization</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- Infrastructure Gallery Section End -->
  ```

---

## 2. Interactive Script Integration (`about.html`)

Add the following event listener script before the closing `</body>` tag:
```html
<script>
document.addEventListener("DOMContentLoaded", function() {
    const panels = document.querySelectorAll('.infra-panel');
    panels.forEach(panel => {
        // Toggle on click
        panel.addEventListener('click', () => {
            panels.forEach(p => p.classList.remove('active'));
            panel.classList.add('active');
        });
        // Desktop hover integration
        panel.addEventListener('mouseenter', () => {
            if (window.innerWidth >= 992) {
                panels.forEach(p => p.classList.remove('active'));
                panel.classList.add('active');
            }
        });
    });
});
</script>
```

---

## 3. CSS Styles (`css/custom.css`)

We will append the styling for the horizontal image accordion at the end of `css/custom.css`:

```css
/* ==========================================
   Infrastructure Horizontal Gallery Accordion
   ========================================== */
.infra-accordion-container {
	display: flex;
	width: 100%;
	height: 550px;
	gap: 15px;
	margin-top: 40px;
}

.infra-panel {
	position: relative;
	flex: 1;
	height: 100%;
	border-radius: 24px;
	overflow: hidden;
	cursor: pointer;
	transition: flex 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
	will-change: flex;
}

.infra-panel.active {
	flex: 5.5;
}

.infra-panel img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.6s ease;
}

.infra-panel:hover img {
	transform: scale(1.04);
}

.infra-panel-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 65%);
	z-index: 1;
}

.infra-panel-content {
	position: absolute;
	bottom: 30px;
	left: 30px;
	right: 30px;
	z-index: 2;
	color: var(--white-color);
	transition: opacity 0.4s ease, transform 0.4s ease;
}

.infra-panel-content h3 {
	color: var(--accent-color) !important;
	font-size: 24px;
	font-weight: 700;
	margin-bottom: 10px;
}

.infra-panel-content p {
	font-size: 15px;
	margin: 0;
	line-height: 1.6;
	color: rgba(255, 255, 255, 0.9);
}

/* Hide descriptions on inactive panels */
.infra-panel:not(.active) .infra-panel-content {
	opacity: 0;
	transform: translateY(15px);
	pointer-events: none;
}

/* Inactive vertical text labels */
.infra-panel-vertical-label {
	position: absolute;
	bottom: 50px;
	left: 50%;
	transform: translateX(-50%) rotate(-90deg);
	transform-origin: left bottom;
	z-index: 2;
	color: var(--white-color);
	font-weight: 700;
	font-size: 16px;
	text-transform: uppercase;
	letter-spacing: 2px;
	white-space: nowrap;
	pointer-events: none;
	transition: opacity 0.4s ease;
	opacity: 0.8;
}

.infra-panel.active .infra-panel-vertical-label {
	opacity: 0;
}

/* Responsive vertical accordion for tablets/mobile */
@media (max-width: 991px) {
	.infra-accordion-container {
		flex-direction: column;
		height: 750px;
		gap: 12px;
	}
	
	.infra-panel {
		flex: 1;
		width: 100%;
		transition: flex 0.5s ease;
	}
	
	.infra-panel.active {
		flex: 4;
	}
	
	.infra-panel-vertical-label {
		position: absolute;
		top: 50%;
		left: 30px;
		transform: translateY(-50%);
		transform-origin: center;
		font-size: 15px;
		letter-spacing: 1px;
	}
	
	.infra-panel-content {
		bottom: 20px;
		left: 20px;
		right: 20px;
	}
	
	.infra-panel-content h3 {
		font-size: 20px;
	}
	
	.infra-panel-content p {
		font-size: 14px;
	}
}
