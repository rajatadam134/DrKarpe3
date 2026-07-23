/**
 * Dr. Karpe's Dental Clinic — Interactive FAQ Chatbot Widget (Smart Fuzzy Engine)
 * Dynamically injected on all pages with local offline & CORS fallbacks
 */

(function () {
  // --- ROBUST LOCAL FALLBACK DATABASE ---
  // Guarantees immediate load, offline access, and file:// protocol compatibility.
  const localFallbackFaqs = {
    "menu": {
      "welcome": {
        "text": "Hello! Welcome to Dr. Karpe's Centre for Advanced Dentistry. 🦷<br><br>I am your digital support assistant. How can I help you today? Please click one of the options below or ask a question directly:",
        "options": [
          { "text": "⏰ Clinic Hours & Locations", "nextKey": "hours_locations" },
          { "text": "📅 Book an Appointment", "nextKey": "booking" },
          { "text": "🦷 Dental Treatments", "nextKey": "treatments" },
          { "text": "🚨 Dental Emergency Advice", "nextKey": "emergency" },
          { "text": "💬 Chat on WhatsApp", "action": "whatsapp" }
        ]
      },
      "hours_locations": {
        "text": "We have two branches equipped with state-of-the-art dental diagnostics:<br><br>📍 <strong>Solapur Branch:</strong><br>139, Vijay Tower, Near Bombay Bakery, Railway Line, Solapur.<br>🕒 Mon-Sat: 10 am to 8:30 pm.<br><br>📍 <strong>Akkalkot Branch:</strong><br>35, Shiv Chatrapati Vyapari Sankul, Kanda Bazaar, Akkalkot.<br>🕒 Mon-Sat: 10 am to 8:30 pm.<br><br>⚠️ Both branches are closed on Sundays.",
        "options": [
          { "text": "📅 Book Appointment", "nextKey": "booking" },
          { "text": "🦷 Check Treatments", "nextKey": "treatments" },
          { "text": "↩️ Back to Main Menu", "nextKey": "welcome" }
        ]
      },
      "booking": {
        "text": "You can schedule your consultation session in two easy ways:<br><br>1. 📝 Fill out our online booking form on the website.<br>2. 📞 Call/WhatsApp our reception desk directly.<br><br>Which option would you prefer?",
        "options": [
          { "text": "💻 Open Booking Form", "action": "link", "url": "contact.html#book" },
          { "text": "💬 Chat on WhatsApp", "action": "whatsapp" },
          { "text": "↩️ Back to Main Menu", "nextKey": "welcome" }
        ]
      },
      "treatments": {
        "text": "Dr. Karpe's clinic provides advanced procedures in a comfortable, hygienic environment:<br><br>• <strong>Dental Implants:</strong> Life-like full-arch replacements.<br>• <strong>Smile Designing:</strong> Natural cosmetic veneers and laminates.<br>• <strong>Root Canal:</strong> Painless single-visit root canals.<br>• <strong>Orthodontics:</strong> Invisible aligners and braces.<br>• <strong>Pediatric Care:</strong> Gentle child dentistry.<br><br>Select a treatment category to learn more:",
        "options": [
          { "text": "🦷 Dental Implants & All-on-4", "nextKey": "faq_implants" },
          { "text": "✨ Smile Design & Veneers", "nextKey": "faq_cosmetic" },
          { "text": "⚡ Painless Root Canal (RCT)", "nextKey": "faq_rct" },
          { "text": "😬 Clear Aligners & Braces", "nextKey": "faq_ortho" },
          { "text": "👶 Child Dentistry (Pediatric)", "nextKey": "faq_pediatric" },
          { "text": "↩️ Back to Main Menu", "nextKey": "welcome" }
        ]
      },
      "emergency": {
        "text": "⚠️ <strong>Dental Emergency Advice:</strong><br><br>• <strong>Severe Toothache:</strong> Rinse with warm water and take an over-the-counter painkiller. Avoid placing aspirin directly on the gums.<br>• <strong>Knocked-Out Tooth:</strong> Keep it moist in milk or saliva and contact us immediately. If seen within 1 hour, we can often save the tooth!<br>• <strong>Bleeding or Swelling:</strong> Apply clean cold compress and seek emergency care.<br><br>📞 Call us immediately: Solapur <strong>+91 94055-49094</strong> or Akkalkot <strong>+91 95031-59509</strong>.",
        "options": [
          { "text": "📞 Call Solapur Clinic", "action": "call", "phone": "+919405549094" },
          { "text": "💬 Chat on WhatsApp", "action": "whatsapp" },
          { "text": "↩️ Back to Main Menu", "nextKey": "welcome" }
        ]
      },
      "faq_implants": {
        "text": "<strong>Dental Implants at Dr. Karpe's Clinic:</strong><br><br>👨‍⚕️ Conducted by <strong>Dr. Vivekanand Karpe</strong> (BDS GDC Mumbai), who has 25+ years experience and trained in Germany for the 'All-on-4' concept.<br><br>• <strong>Lifespan:</strong> Can last a lifetime with proper care.<br>• <strong>Pain:</strong> Performed under local anesthesia, virtually painless.<br>• <strong>Cost:</strong> Varies depending on material (Titanium/Zirconia) and case complexity.",
        "options": [
          { "text": "💬 Chat on WhatsApp for Quote", "action": "whatsapp" },
          { "text": "📅 Book Consultation", "nextKey": "booking" },
          { "text": "↩️ Back to Treatments Menu", "nextKey": "treatments" }
        ]
      },
      "faq_cosmetic": {
        "text": "<strong>Smile Designing & Cosmetic Dentistry:</strong><br><br>👩‍⚕️ Conducted by <strong>Dr. Ashvini Karpe</strong> (BDS GDC Aurangabad), specializing in aesthetic smile makeovers with 20+ years experience.<br><br>• <strong>Veneers & Laminates:</strong> High-grade porcelain shells custom-bonded to teeth for correcting shape, gap, and discoloration.<br>• <strong>Whitening:</strong> Safe, advanced bleaching protocols for bright teeth.",
        "options": [
          { "text": "📅 Book Consultation", "nextKey": "booking" },
          { "text": "↩️ Back to Treatments Menu", "nextKey": "treatments" }
        ]
      },
      "faq_rct": {
        "text": "<strong>Painless Single-Visit Root Canal Treatment (RCT):</strong><br><br>• Using advanced rotary endodontics, RCT is performed in a single visit, alleviating pain and saving the natural tooth structure.<br>• <strong>Is it painful?</strong> No, modern anesthesia makes it as comfortable as a simple filling.<br>• <strong>Crown/Cap:</strong> A ceramic or zirconia cap is highly recommended post-RCT to protect the tooth from fractures.",
        "options": [
          { "text": "📅 Book RCT Session", "nextKey": "booking" },
          { "text": "↩️ Back to Treatments Menu", "nextKey": "treatments" }
        ]
      },
      "faq_ortho": {
        "text": "<strong>Braces & Clear Aligners:</strong><br><br>• <strong>Traditional Braces:</strong> Metal and ceramic options to correct alignment.<br>• <strong>Clear Aligners:</strong> Near-invisible, removable plastic trays that straighten teeth comfortably.<br>• <strong>Who is it for?</strong> Suitable for teenagers and adults of all ages.",
        "options": [
          { "text": "📅 Book Alignment Scan", "nextKey": "booking" },
          { "text": "↩️ Back to Treatments Menu", "nextKey": "treatments" }
        ]
      },
      "faq_pediatric": {
        "text": "<strong>Pediatric Child Dentistry:</strong><br><br>• A gentle and friendly environment designed specifically for kids.<br>• <strong>Treatments:</strong> Sealants to prevent cavities, fluoride application, pediatric root canals (pulpectomy), and gentle extractions.<br>• <strong>Age:</strong> Children should visit the dentist by their first birthday.",
        "options": [
          { "text": "📅 Book Child Appointment", "nextKey": "booking" },
          { "text": "↩️ Back to Treatments Menu", "nextKey": "treatments" }
        ]
      },
      "fallback": {
        "text": "I'm still learning! 🧠<br><br>You can click one of the quick options below, or chat directly with our clinic representative on WhatsApp for personal assistance.",
        "options": [
          { "text": "💬 Chat on WhatsApp", "action": "whatsapp" },
          { "text": "↩️ Back to Main Menu", "nextKey": "welcome" }
        ]
      }
    },
    "faqs": [
      {
        "keywords": ["doctor", "doctors", "dentist", "dentists", "specialist", "specialists", "Vivekanand", "Ashvini", "who"],
        "question": "Who are the doctors at the clinic?",
        "answer": "Our clinic is run by two highly qualified dental specialists:<br><br>👨‍⚕️ <strong>Dr. Vivekanand Karpe (Implantologist):</strong> BDS from GDC Mumbai with 25+ years experience. Trained in Germany for dental implants.<br><br>👩‍⚕️ <strong>Dr. Ashvini Karpe (Cosmetic Dentist):</strong> BDS from GDC Aurangabad with 20+ years experience, specializing in aesthetic smile design."
      },
      {
        "keywords": ["hours", "timings", "open", "time", "schedule", "opening", "days"],
        "question": "What are the clinic timings?",
        "answer": "We are open Monday through Saturday:<br><br>📍 <strong>Solapur:</strong> 10 am to 8:30 pm.<br>📍 <strong>Akkalkot:</strong> 10 am to 8:30 pm.<br><br>🛑 Both branches are closed on Sundays."
      },
      {
        "keywords": ["sunday", "sundays", "holiday", "weekend"],
        "question": "Is the clinic open on Sundays?",
        "answer": "No, both our Solapur and Akkalkot branches are closed on Sundays. For dental emergencies on weekends, please contact our WhatsApp helpline at +91 87672-23224."
      },
      {
        "keywords": ["solapur", "main", "vijay tower", "bakery", "solapur branch"],
        "question": "Where is the Solapur branch located?",
        "answer": "Our Solapur clinic is located at: <strong>139, Vijay Tower, Near Bombay Bakery, Railway Line, Solapur.</strong><br>📞 Contact: +91 94055-49094."
      },
      {
        "keywords": ["akkalkot", "kanda bazaar", "vyapari sankul", "akkalkot branch"],
        "question": "Where is the Akkalkot branch located?",
        "answer": "Our Akkalkot clinic is located at: <strong>35, Shiv Chatrapati Vyapari Sankul, Kanda Bazaar, Akkalkot.</strong><br>📞 Contact: +91 95031-59509."
      },
      {
        "keywords": ["implant", "implants", "screw", "missing tooth", "tooth replacement"],
        "question": "What are dental implants?",
        "answer": "Dental implants are titanium posts surgically placed into the jawbone to act as artificial tooth roots. Once integrated, a lifelike porcelain or zirconia crown is attached. They are the most durable and natural-looking way to replace missing teeth."
      },
      {
        "keywords": ["implant pain", "does it hurt", "painful", "surgical pain"],
        "question": "Are dental implants painful?",
        "answer": "Not at all. The procedure is performed under local anesthesia, so you won't feel pain. Post-procedure discomfort is mild and easily managed with standard painkillers."
      },
      {
        "keywords": ["all on 4", "full arch", "all-on-4", "german concept", "no teeth"],
        "question": "What is the All-on-4 implant technique?",
        "answer": "The All-on-4 concept allows replacement of an entire arch of teeth (upper or lower) using only four strategically placed implants. Dr. Vivekanand Karpe trained in Germany for this procedure, enabling patients with complete tooth loss to get a fixed set of teeth quickly."
      },
      {
        "keywords": ["veneer", "veneers", "laminate", "laminates", "smile correction", "gaps"],
        "question": "What are veneers and laminates?",
        "answer": "Veneers and laminates are wafer-thin, custom-made shells of porcelain or composite resin bonded to the front of teeth. Dr. Ashvini Karpe uses them to cover chips, close gaps, correct misalignment, and mask severe staining."
      },
      {
        "keywords": ["teeth whitening", "whitening", "bleaching", "yellow teeth"],
        "question": "Do you offer teeth whitening?",
        "answer": "Yes, we provide professional in-office teeth whitening (bleaching) that can brighten your teeth by several shades in a single visit. It is completely safe for your enamel under our supervision."
      },
      {
        "keywords": ["root canal", "rct", "painless rct", "tooth ache", "decay"],
        "question": "What is single-visit Root Canal Treatment (RCT)?",
        "answer": "Root Canal Treatment saves a severely decayed or infected tooth by removing the damaged pulp, cleaning the canals, and sealing them. We use advanced rotary systems to perform this painlessly in just a single visit."
      },
      {
        "keywords": ["crown", "cap", "zirconia", "ceramic", "post rct"],
        "question": "Is a crown/cap necessary after a root canal?",
        "answer": "Yes. A root canal leaves the tooth brittle and prone to fracturing under chewing pressure. A customized crown (zirconia or metal-ceramic) acts as a protective shield, restoring its full strength."
      },
      {
        "keywords": ["braces", "aligners", "invisalign", "invisible", "straighten", "crooked"],
        "question": "What is the difference between braces and clear aligners?",
        "answer": "Traditional braces use metal/ceramic brackets and wires to move teeth. Clear aligners are transparent, removable plastic trays that do the same job invisibly and comfortably. Both are offered at our clinic for patients of all ages."
      },
      {
        "keywords": ["kids", "child", "children", "pediatric", "first visit", "milkteeth"],
        "question": "When should my child first visit the dentist?",
        "answer": "We recommend a child's first dental checkup by their first birthday. Early visits help children get comfortable in the dental chair and allow us to monitor jaw development and prevent decay."
      },
      {
        "keywords": ["cost", "price", "consultation fee", "fees", "charges"],
        "question": "What is the consultation fee?",
        "answer": "Our basic consultation and examination fee is nominal. Detailed digital X-rays or specialized diagnostic scans may incur additional fees. Please message us on WhatsApp at +91 87672-23224 to verify the current fee."
      },
      {
        "keywords": ["book", "appointment", "schedule", "online form", "reception"],
        "question": "How can I book an appointment?",
        "answer": "You can book by clicking 'Open Booking Form' on our Contact page, or by calling/sending a WhatsApp message directly to +91 87672-23224."
      },
      {
        "keywords": ["whatsapp", "phone number", "call", "mobile", "contact"],
        "question": "What is the clinic's phone number?",
        "answer": "You can reach us at:<br>📞 Solapur Branch: +91 94055-49094<br>📞 Akkalkot Branch: +91 95031-59509<br>💬 WhatsApp Support: +91 87672-23224."
      },
      {
        "keywords": ["wisdom", "wisdom tooth", "extraction", "removal", "impaction"],
        "question": "Do you perform wisdom tooth extractions?",
        "answer": "Yes. Impaction of wisdom teeth often causes pain, swelling, and damage to adjacent teeth. We perform surgical extractions under local anesthesia with minimal discomfort and quick recovery."
      },
      {
        "keywords": ["bleeding", "gums", "bleeding gums", "brushing pain", "pyorrhea"],
        "question": "Why do my gums bleed when brushing?",
        "answer": "Bleeding gums are a primary sign of plaque buildup and gum inflammation (gingivitis). A professional dental scaling and cleaning is highly recommended to remove tartar and restore gum health."
      },
      {
        "keywords": ["bad breath", "halitosis", "mouth odor"],
        "question": "How can I treat bad breath?",
        "answer": "Bad breath is often caused by bacteria on the tongue, gum disease, or hidden tooth decay. Routine dental cleaning, filling cavities, and daily tongue scraping/flossing are highly effective solutions."
      },
      {
        "keywords": ["scaling", "cleaning", "polishing", "tartar", "stain"],
        "question": "How often should I get my teeth cleaned?",
        "answer": "We recommend a professional dental scaling and cleaning every six months. This removes hardened tartar (calculus) that regular brushing cannot clean, preventing cavities and gum disease."
      },
      {
        "keywords": ["payment", "upi", "card", "cash", "gpay", "payment modes"],
        "question": "What payment methods are accepted?",
        "answer": "We accept cash, all major credit/debit cards, and mobile UPI payments including GPay, PhonePe, and Paytm."
      },
      {
        "keywords": ["insurance", "dental insurance", "mediclaim"],
        "question": "Is dental treatment covered under health insurance?",
        "answer": "Most general health insurance policies in India do not cover cosmetic dental procedures or implants, but some cover accidental dental surgeries. We provide all necessary bills and treatment certificates if you have a policy that supports dental claims."
      },
      {
        "keywords": ["sterilization", "hygiene", "safety", "cleanliness", "covid"],
        "question": "What safety and sterilization protocols do you follow?",
        "answer": "Patient safety is our highest priority. We use Class-B autoclaves for vacuum sterilization of all instruments, disposable examination kits, and strict clinic disinfection protocols between every patient."
      },
      {
        "keywords": ["zirconia", "metal free", "crown types", "zirconia crown"],
        "question": "What are zirconia crowns?",
        "answer": "Zirconia crowns are metal-free, highly biocompatible caps that offer superior strength and natural tooth-like translucency. They do not leave a dark metal line at the gum line over time and are ideal for both front and back teeth."
      },
      {
        "keywords": ["emergency", "severe pain", "accident", "broken tooth", "swelling"],
        "question": "What constitutes a dental emergency?",
        "answer": "Severe throbbing toothache, facial swelling, a knocked-out permanent tooth, or bleeding from oral trauma are emergencies. Please call us immediately at Solapur: +91 94055-49094 or Akkalkot: +91 95031-59509."
      },
      {
        "keywords": ["fillings", "cavity", "cementing", "decay filling", "composite"],
        "question": "What type of cavity fillings do you use?",
        "answer": "We use tooth-colored composite resins and glass ionomer cements. These materials bond directly to the tooth structure, restoring strength and blending invisibly with your natural teeth."
      },
      {
        "keywords": ["fluoride", "pediatric fluoride", "cavity prevention"],
        "question": "What is fluoride therapy for kids?",
        "answer": "Fluoride therapy involves applying a safe, highly concentrated fluoride varnish or gel to children's teeth. This strengthens the enamel, making it highly resistant to acid attacks and tooth decay."
      },
      {
        "keywords": ["sensitive", "sensitivity", "cold water", "hot tea"],
        "question": "Why do my teeth hurt with cold or hot items?",
        "answer": "Tooth sensitivity occurs when the protective enamel wears down, exposing the dentin layer underneath. This can be caused by harsh brushing, gum recession, or cavities. We offer desensitizing treatments and fillings to resolve this."
      },
      {
        "keywords": ["about", "clinic history", "infrastructure", "establishment"],
        "question": "Can you tell me about the clinic's history?",
        "answer": "Dr. Karpe's Centre for Advanced Dentistry is a premier dental healthcare facility in Solapur and Akkalkot, offering advanced diagnostics and clinical treatments. Led by Dr. Vivekanand Karpe and Dr. Ashvini Karpe, we deliver specialized, multi-disciplinary dental care under one roof."
      }
    ]
  };

  let faqData = localFallbackFaqs;

  // --- ASYNC DYNAMIC LOAD FROM JSON (FOR LIVE WEB SERVICE) ---
  fetch("js/faqs.json")
    .then((res) => {
      if (!res.ok) throw new Error("Network status not OK");
      return res.json();
    })
    .then((data) => {
      if (data && data.menu && data.faqs) {
        faqData = data;
      }
    })
    .catch((err) => {
      // Gracefully falls back to localFallbackFaqs defined above
      console.warn("Faqs.json fetch blocked/failed (expected in local file:// runs). Using precompiled FAQ fallback.", err);
    });

  // WhatsApp Configuration
  const whatsappPhone = "+918767223224"; // Tested phone number
  const whatsappBaseUrl = "https://wa.me/" + whatsappPhone + "?text=";

  // --- FUZZY SEARCH MATCHING LOGIC ---

  // Calculate Sørensen-Dice coefficient between two strings (highly efficient text-similarity)
  function getStringSimilarity(str1, str2) {
    str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, "");
    str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (str1 === str2) return 1.0;
    if (str1.length < 2 || str2.length < 2) return 0.0;

    const getBigrams = (str) => {
      const bigrams = new Set();
      for (let i = 0; i < str.length - 1; i++) {
        bigrams.add(str.substring(i, i + 2));
      }
      return bigrams;
    };

    const bigrams1 = getBigrams(str1);
    const bigrams2 = getBigrams(str2);

    let intersection = 0;
    for (const bigram of bigrams1) {
      if (bigrams2.has(bigram)) {
        intersection++;
      }
    }

    return (2.0 * intersection) / (bigrams1.size + bigrams2.size);
  }

  // Tokenizes search inputs and ranks FAQs based on keyword weights + string similarity
  function findBestFAQMatch(query, faqsList) {
    const stopWords = new Set([
      "what", "is", "are", "the", "a", "an", "for", "to", "in", "of", "on", "at", 
      "how", "can", "do", "you", "have", "clinic", "please", "help", "with", "would",
      "tell", "me", "about", "give", "show", "get", "need", "want"
    ]);

    // Clean and tokenize query
    const queryTokens = query.toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .split(/\s+/)
      .filter((token) => token && !stopWords.has(token));

    if (queryTokens.length === 0) return null;

    let bestMatch = null;
    let highestScore = 0;

    faqsList.forEach((faq) => {
      let score = 0;

      faq.keywords.forEach((keyword) => {
        // 1. Direct match: Entire keyword matches query string directly
        if (query.includes(keyword)) {
          score += 2.5; 
        }

        // 2. Fuzzy token match: check token overlap and bigram similarities
        queryTokens.forEach((token) => {
          if (token === keyword) {
            score += 1.8;
          } else {
            const similarity = getStringSimilarity(token, keyword);
            if (similarity > 0.65) {
              score += similarity * 1.5;
            }
          }
        });
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = faq;
      }
    });

    // We require a minimum confidence threshold score of 1.0 to prevent arbitrary matches
    return highestScore >= 1.0 ? bestMatch : null;
  }

  // --- INITIALIZE INTERFACE ---

  document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject HTML Elements
    const chatbotContainer = document.createElement("div");
    chatbotContainer.id = "dr-karpe-chatbot-root";
    chatbotContainer.innerHTML = `
      <!-- Floating Toggle Bubble (Uses Just_logo.png) -->
      <button class="chatbot-toggle" aria-label="Open support chat" title="Patient Support">
        <img src="assets/img/Just_logo.png" alt="Dr. Karpe's Clinic Logo" />
      </button>

      <!-- Chatbot Window (Header Panel, Spacious) -->
      <div class="chatbot-window" aria-hidden="true">
        <!-- Header Panel with Avatar, Info & Close -->
        <div class="chatbot-header">
          <div class="cb-header-avatar">
            <img src="assets/img/Just_logo.png" alt="Dr. Karpe Avatar" />
            <span class="cb-online-indicator"></span>
          </div>
          <div class="cb-header-info">
            <h4 class="cb-header-title">Dr. Karpe's Clinic</h4>
            <span class="cb-header-status">Online Support</span>
          </div>
          <button class="chatbot-close" aria-label="Close support chat" type="button">&times;</button>
        </div>

        <!-- Messages stream -->
        <div class="chatbot-messages"></div>

        <!-- Text input field -->
        <form class="chatbot-input-area" autocomplete="off">
          <input type="text" placeholder="Ask a question..." aria-label="Chat input field" />
          <button type="submit" class="chatbot-send" aria-label="Send message">
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </form>
      </div>
    `;
    document.body.appendChild(chatbotContainer);

    // Selectors
    const toggleBtn = chatbotContainer.querySelector(".chatbot-toggle");
    const chatWindow = chatbotContainer.querySelector(".chatbot-window");
    const closeBtn = chatbotContainer.querySelector(".chatbot-close");
    const messagesContainer = chatbotContainer.querySelector(".chatbot-messages");
    const inputForm = chatbotContainer.querySelector(".chatbot-input-area");
    const textInput = chatbotContainer.querySelector("input");

    let isInitialized = false;

    // Open/Close Logic
    toggleBtn.addEventListener("click", () => {
      const isActive = chatWindow.classList.toggle("active");
      chatWindow.setAttribute("aria-hidden", !isActive);

      if (isActive && !isInitialized) {
        initializeChat();
      }
    });

    closeBtn.addEventListener("click", () => {
      chatWindow.classList.remove("active");
      chatWindow.setAttribute("aria-hidden", "true");
    });

    // Conversation Engine
    function initializeChat() {
      isInitialized = true;
      const welcomeNode = faqData.menu.welcome;
      showBotMessage(welcomeNode.text, welcomeNode.options);
    }

    function appendMessage(sender, text, isHtml = false) {
      const bubble = document.createElement("div");
      bubble.className = `cb-msg ${sender}`;

      if (isHtml) {
        bubble.innerHTML = text;
      } else {
        bubble.textContent = text;
      }

      messagesContainer.appendChild(bubble);

      if (sender === "user") {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      } else {
        // Smoothly scroll to the bottom
        messagesContainer.scrollTo({
          top: bubble.offsetTop - 60,
          behavior: "smooth"
        });
      }
    }

    function showTypingIndicator() {
      const indicator = document.createElement("div");
      indicator.className = "cb-msg bot cb-typing-indicator-wrapper";
      indicator.innerHTML = `
        <div class="cb-typing">
          <span class="cb-typing-dot"></span>
          <span class="cb-typing-dot"></span>
          <span class="cb-typing-dot"></span>
        </div>
      `;
      messagesContainer.appendChild(indicator);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      return indicator;
    }

    function removeTypingIndicator(indicatorElement) {
      if (indicatorElement && indicatorElement.parentNode) {
        indicatorElement.parentNode.removeChild(indicatorElement);
      }
    }

    function showBotMessage(text, options = []) {
      const indicator = showTypingIndicator();

      // Simulate typing delay
      setTimeout(() => {
        removeTypingIndicator(indicator);
        appendMessage("bot", text, true);
        renderOptions(options);
      }, 600);
    }

    function renderOptions(options) {
      if (!options || options.length === 0) return;

      const group = document.createElement("div");
      group.className = "cb-options-group";

      options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.className = "cb-inline-option";
        btn.textContent = opt.text;

        btn.addEventListener("click", () => {
          // Remove options from timeline once clicked
          group.parentNode.removeChild(group);

          // Append user response bubble
          appendMessage("user", opt.text);

          // Route action events
          if (opt.action === "whatsapp") {
            setTimeout(() => {
              window.open(whatsappBaseUrl + encodeURIComponent("Hi Dr. Karpe, I have a question regarding: " + opt.text), "_blank");
              showBotMessage("Opening WhatsApp to chat with our front desk... Let me know if you need anything else!", [
                { "text": "↩️ Back to Main Menu", "nextKey": "welcome" }
              ]);
            }, 500);
          } else if (opt.action === "link") {
            setTimeout(() => {
              window.location.href = opt.url;
            }, 300);
          } else if (opt.action === "call") {
            window.location.href = "tel:" + opt.phone;
          } else if (opt.nextKey) {
            const nextNode = faqData.menu[opt.nextKey];
            if (nextNode) {
              showBotMessage(nextNode.text, nextNode.options);
            }
          }
        });

        group.appendChild(btn);
      });

      messagesContainer.appendChild(group);
    }

    // Submit Action for Search Input
    inputForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const rawText = textInput.value.trim();
      if (!rawText) return;

      // Add user bubble
      appendMessage("user", rawText);
      textInput.value = ""; // Clear input field

      // Query fuzzy engine
      setTimeout(() => {
        const bestMatch = findBestFAQMatch(rawText, faqData.faqs);

        if (bestMatch) {
          showBotMessage(bestMatch.answer, [
            { "text": "📅 Book Appointment", "nextKey": "booking" },
            { "text": "↩️ Back to Main Menu", "nextKey": "welcome" }
          ]);
        } else {
          // Fallback response if confidence is too low
          showBotMessage(faqData.menu.fallback.text, faqData.menu.fallback.options);
        }
      }, 400);
    });
  });
})();
