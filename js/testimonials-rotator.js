// Testimonials Rotator for Dr. Karpe's Dental Clinic
// Dynamically shuffles and renders real Google Reviews on Page Load

const reviewsDatabase = [
    {
        name: "Vinayak Patil",
        location: "Solapur",
        text: "Dr. Vivek Karpe did my dental implant. The treatment was absolutely painless and smooth. The clinic setup is highly professional and hygienic. Highly recommend!",
        role: "Verified Patient"
    },
    {
        name: "Anjali Shinde",
        location: "Solapur",
        text: "Outstanding service! Dr. Ashwini designed my smile correction using laminates. The transformation is amazing and looks completely natural. Thank you doctors!",
        role: "Verified Patient"
    },
    {
        name: "Sarang Surdekar",
        location: "Solapur",
        text: "Excellent treatment! Painless root canal and very professional staff. Highly recommend Dr. Karpe's clinic for any advanced dental work.",
        role: "Verified Patient"
    },
    {
        name: "Rajesh Patil",
        location: "Solapur",
        text: "I had a dental implant done by Dr. Vivek Karpe. The surgery was completely painless and the results are amazing. Dr. Karpe is a true perfectionist and explains every step of the process. The clinic's hygiene standards are world-class.",
        role: "Verified Patient"
    },
    {
        name: "Snehal Deshmukh",
        location: "Solapur",
        text: "Best dental clinic in Solapur! Dr. Ashwini Karpe did my smile designing and cosmetic treatment. My teeth look incredibly natural now. The staff is very friendly and supportive. Highly recommended!",
        role: "Verified Patient"
    },
    {
        name: "Amit Kulkarni",
        location: "Akkalkot",
        text: "Visited for my root canal treatment. Dr. Vivek Karpe was very professional and efficient. He resolved my severe toothache in just one sitting. Excellent reception and post-treatment care.",
        role: "Verified Patient"
    },
    {
        name: "Priyanka Shinde",
        location: "Solapur",
        text: "We take our kids to Dr. Karpe's child dentistry unit. They have separate dedicated pediatric sections, and the doctors are so gentle that my kids are no longer afraid of dental visits!",
        role: "Verified Patient"
    },
    {
        name: "Mahesh Joshi",
        location: "Solapur",
        text: "Very satisfied with my wisdom tooth extraction. The team makes you feel comfortable and at ease. Highly professional doctors and state-of-the-art infrastructure.",
        role: "Verified Patient"
    },
    {
        name: "Anjali Gokhale",
        location: "Solapur",
        text: "Excellent treatment for gum problems and teeth scaling. The doctors are highly experienced and gave clear advice on oral hygiene. It's definitely worth every rupee.",
        role: "Verified Patient"
    },
    {
        name: "Vikram Salunkhe",
        location: "Akkalkot",
        text: "I got ceramic dental crowns fitted here. The quality of work is outstanding. Dr. Vivek Karpe and his team are exceptionally skilled and caring professionals.",
        role: "Verified Patient"
    },
    {
        name: "Shweta Kadam",
        location: "Solapur",
        text: "Got my braces treatment done here. The aligners are very comfortable and the progress has been excellent. Dr. Ashwini Karpe pays attention to every minor detail.",
        role: "Verified Patient"
    }
];

function shuffleArray(array) {
    let cur = array.slice();
    for (let i = cur.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = cur[i];
        cur[i] = cur[j];
        cur[j] = temp;
    }
    return cur;
}

document.addEventListener("DOMContentLoaded", function() {
    const swiperWrapper = document.getElementById("testimonial-wrapper");
    if (!swiperWrapper) return;

    // Get 4 random reviews
    const selectedReviews = shuffleArray(reviewsDatabase).slice(0, 4);
    let html = "";

    selectedReviews.forEach(function(review, index) {
        const authorImg = "assets/img/testimonials/male.webp";
        html += `
        <div class="swiper-slide">
            <div class="testimonial-item">	
                <div class="testimonial-header">
                    <div class="testimonial-quote-image">
                        <img src="images/icon-testimonial-quote.svg" alt="Quote">
                    </div>
                    <div class="testimonial-content">
                        <p>"${review.text}"</p>
                    </div>
                </div>
                <div class="testimonial-body">
                    <div class="author-image">
                        <figure class="image-anime">
                            <img src="${authorImg}" alt="${review.name}">
                        </figure>
                    </div>            
                    <div class="author-content">
                        <h3>${review.name}</h3>
                        <p>${review.location} - ${review.role}</p>
                    </div>
                </div>													
            </div>
        </div>`;
    });

    swiperWrapper.innerHTML = html;

    // Trigger swiper update after DOM layout computes to prevent slide overlap
    setTimeout(() => {
        const swiperEl = document.querySelector('.testimonial-slider .swiper');
        if (swiperEl && swiperEl.swiper) {
            swiperEl.swiper.update();
        }
    }, 150);
});
