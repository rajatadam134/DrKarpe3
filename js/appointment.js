document.addEventListener('DOMContentLoaded', () => {
  /* ---- FORM SUBMISSION (WhatsApp Redirection) ---- */
  const apptForm = document.getElementById('appt-form');
  if (apptForm) {
    apptForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Gather input values
      const name = apptForm.querySelector('#name').value;
      const phone = apptForm.querySelector('#phone').value;
      const email = apptForm.querySelector('#email').value || 'N/A';
      const branchVal = apptForm.querySelector('#branch').value;
      const date = apptForm.querySelector('#date').value;
      const message = apptForm.querySelector('#message').value || 'None';

      // Map treatment value to readable label
      const treatmentSelect = apptForm.querySelector('#treatment');
      const treatmentText = treatmentSelect.options[treatmentSelect.selectedIndex].text;

      // Define WhatsApp numbers (Format: country code + number, no +, no spaces)
      const whatsappNumber = '919405549094'; 
      const branchName = branchVal === 'solapur' ? 'Solapur Main Branch' : 'Akkalkot Branch';

      // Format the WhatsApp message (using bold markdown *text*)
      const messageText = 
`*New Appointment Request*
---------------------------------
*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}
*Branch:* ${branchName}
*Date:* ${date}
*Treatment:* ${treatmentText}
*Message:* ${message}
---------------------------------
_Submitted via website form_`;

      // URL encode the text
      const encodedText = encodeURIComponent(messageText);

      // Construct final WhatsApp link
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      // Display custom success card inline on the website
      apptForm.innerHTML = `
        <div class="form-success-message" style="text-align: center; padding: 2rem 0; animation: fadeInUp 0.6s ease forwards;">
          <div style="width: 4rem; height: 4rem; background: rgba(74, 144, 164, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; color: var(--accent);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3 class="display-heading display-sm" style="margin-bottom: 0.5rem; color: var(--black);">Redirecting to WhatsApp...</h3>
          <p class="body-md" style="color: var(--gray-muted); max-width: 28rem; margin: 0 auto 1.5rem auto;">
            Thank you, <strong>${name}</strong>. We have opened a WhatsApp chat with our clinic containing your appointment request. Please send the pre-filled message in WhatsApp to confirm your slot.
          </p>
          <button type="button" class="btn btn-outline" onclick="window.location.reload()" style="margin: 0 auto;">Book Another Slot</button>
        </div>
      `;
    });
  }

  /* ---- DENTAL CAMP FORM SUBMISSION (WhatsApp Redirection) ---- */
  const campForm = document.getElementById('dental-camp-form');
  if (campForm) {
    campForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = campForm.querySelector('#camp-name').value;
      const email = campForm.querySelector('#camp-email').value;
      const phone = campForm.querySelector('#camp-phone').value;

      const whatsappNumber = '919405549094';

      const messageText = 
`*Dental Camp Request*
---------------------------------
*Name/Workplace:* ${name}
*Phone:* ${phone}
*Email:* ${email}
---------------------------------
_Submitted via website (Dental Camp Form)_`;

      const encodedText = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

      window.open(whatsappUrl, '_blank');

      campForm.innerHTML = `
        <div class="form-success-message" style="text-align: center; padding: 1.5rem 0; animation: fadeInUp 0.6s ease forwards;">
          <div style="width: 3.5rem; height: 3.5rem; background: rgba(141, 191, 58, 0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; color: var(--accent-color);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h4 style="margin-bottom: 0.5rem; color: var(--primary-color); font-weight: 700;">Redirecting to WhatsApp...</h4>
          <p style="color: var(--text-color); max-width: 28rem; margin: 0 auto 1.5rem auto; font-size: 0.9rem;">
            Thank you, <strong>${name}</strong>. We have opened a WhatsApp chat with Dr. Karpe's team for your dental camp request. Please send the pre-filled message in WhatsApp to confirm.
          </p>
          <button type="button" class="btn-default" onclick="window.location.reload()" style="margin: 0 auto; padding: 10px 24px;">Request Another Camp</button>
        </div>
      `;
    });
  }
});

