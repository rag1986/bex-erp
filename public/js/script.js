// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Pain/Fix Banner — Mobile Accordion
const banner = document.querySelector('.banner');
const painPanel = banner ? banner.querySelector('.left') : null;
const fixPanel = banner ? banner.querySelector('.right') : null;

function isMobile() {
    return window.innerWidth <= 968;
}

if (painPanel) {
    painPanel.addEventListener('click', () => {
        if (!isMobile()) return;
        const isAlreadyActive = banner.classList.contains('mobile-pain-active');
        banner.classList.remove('mobile-pain-active', 'mobile-fix-active');
        if (!isAlreadyActive) {
            banner.classList.add('mobile-pain-active');
        }
    });
}

if (fixPanel) {
    fixPanel.addEventListener('click', () => {
        if (!isMobile()) return;
        const isAlreadyActive = banner.classList.contains('mobile-fix-active');
        banner.classList.remove('mobile-pain-active', 'mobile-fix-active');
        if (!isAlreadyActive) {
            banner.classList.add('mobile-fix-active');
        }
    });
}

// Clean up mobile classes on desktop resize
window.addEventListener('resize', () => {
    if (!isMobile() && banner) {
        banner.classList.remove('mobile-pain-active', 'mobile-fix-active');
    }
});


// Insights Slider
const sliderTrack = document.querySelector('.slider-track');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const totalSlides = 4;

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    sliderTrack.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

// Dot click handlers
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Auto-advance slider every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}, 5000);

// Leaders Slider
const sliderTrackLeaders = document.querySelector('.slider-track-leaders');
const dotsLeaders = document.querySelectorAll('.dot-leader');
let currentSlideLeaders = 0;
const totalSlidesLeaders = 4;

function goToSlideLeaders(slideIndex) {
    currentSlideLeaders = slideIndex;
    sliderTrackLeaders.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Update dots
    dotsLeaders.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

// Dot click handlers for leaders
dotsLeaders.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlideLeaders(index);
    });
});

// Auto-advance leaders slider every 5 seconds
setInterval(() => {
    currentSlideLeaders = (currentSlideLeaders + 1) % totalSlidesLeaders;
    goToSlideLeaders(currentSlideLeaders);
}, 5000);

// Feature Slider (Mobile On-Premise - Only works on mobile ≤720px)
const featuresGrid = document.querySelector('.features-grid');
const featureDots = document.querySelectorAll('.feature-dot');
let currentFeature = 0;
const totalFeatures = 3;
let featureInterval;

function goToFeature(featureIndex) {
    // Only work on mobile
    if (!featuresGrid || window.innerWidth > 720) return;

    currentFeature = featureIndex;
    featuresGrid.style.transform = `translateX(-${featureIndex * 100}%)`;

    // Update dots
    featureDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === featureIndex);
    });
}

// Dot click handlers for features
if (featureDots.length > 0) {
    featureDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (window.innerWidth <= 720) {
                goToFeature(index);
                // Reset auto-advance timer
                if (featureInterval) {
                    clearInterval(featureInterval);
                    startFeatureAutoAdvance();
                }
            }
        });
    });
}

// Auto-advance feature slider
function startFeatureAutoAdvance() {
    // Only work on mobile
    if (featuresGrid && window.innerWidth <= 720) {
        featureInterval = setInterval(() => {
            currentFeature = (currentFeature + 1) % totalFeatures;
            goToFeature(currentFeature);
        }, 5000);
    }
}

// Start auto-advance on load if mobile
startFeatureAutoAdvance();

// Reset slider on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && featuresGrid) {
        // Reset transform on desktop
        featuresGrid.style.transform = 'translateX(0)';
        if (featureInterval) {
            clearInterval(featureInterval);
        }
    } else if (window.innerWidth <= 720 && !featureInterval) {
        // Restart slider on mobile
        startFeatureAutoAdvance();
    }
});

// Module Tabs (Desktop) & Accordion (Mobile)
const moduleSlides = document.querySelectorAll('.module-slide');
const moduleItemsDesktop = document.querySelectorAll('.module-list-desktop .module-item');
const moduleAccordionItems = document.querySelectorAll('.module-accordion-item');
let currentModule = 0;

// Show a slide by index (fade-in)
function goToModule(moduleIndex) {
    currentModule = moduleIndex;

    // Update slides: hide all, show active
    moduleSlides.forEach((slide, index) => {
        slide.classList.toggle('active', index === moduleIndex);
    });

    // Update tab highlights
    moduleItemsDesktop.forEach((item, index) => {
        item.classList.toggle('active', index === moduleIndex);
    });
}

// Initialise: show first slide
goToModule(0);

let moduleInterval = null;
function startModuleAutoAdvance() {
    if (window.innerWidth <= 968 || moduleSlides.length === 0) return;
    moduleInterval = setInterval(() => {
        const nextModule = (currentModule + 1) % moduleSlides.length;
        goToModule(nextModule);
    }, 5000);
}
startModuleAutoAdvance();

// Desktop tab click handlers
moduleItemsDesktop.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (window.innerWidth > 968) {
            goToModule(index);
        }
    });
});

// Mobile accordion function
function toggleAccordion(index) {
    const clickedItem = moduleAccordionItems[index];
    const clickedButton = clickedItem.querySelector('.module-item');
    const clickedPanel = clickedItem.querySelector('.module-display');
    const wasActive = clickedButton.classList.contains('active');

    // Close all accordions
    moduleAccordionItems.forEach(item => {
        const btn = item.querySelector('.module-item');
        const panel = item.querySelector('.module-display');
        btn.classList.remove('active');
        panel.classList.remove('active');
    });

    // If wasn't active, open it
    if (!wasActive) {
        clickedButton.classList.add('active');
        clickedPanel.classList.add('active');
    }
}

// Mobile accordion click handlers
moduleAccordionItems.forEach((item, index) => {
    const button = item.querySelector('.module-item');
    button.addEventListener('click', () => {
        if (window.innerWidth <= 968) {
            toggleAccordion(index);
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 968) {
        // Stop desktop auto-advance on mobile
        if (moduleInterval) {
            clearInterval(moduleInterval);
            moduleInterval = null;
        }
    } else {
        // Restart desktop auto-advance
        if (!moduleInterval) {
            startModuleAutoAdvance();
        }
    }
});

// Form submission — sends to /send-email via Node.js/Zoho SMTP
const contactForm = document.getElementById('contactForm');
const demoSection = document.querySelector('.demo');

if (contactForm && demoSection) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const btn = this.querySelector('.submit-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Sending…';
        btn.disabled = true;

        const formData = new FormData(this);

        fetch('/send-email', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    // Show inline success card, hide form
                    contactForm.style.display = 'none';
                    const successCard = document.createElement('div');
                    successCard.className = 'form-success-card';
                    successCard.innerHTML = `
                <div class="form-success-icon">✓</div>
                <h3>Request received!</h3>
                <p>${data.message}</p>
                <button class="btn-primary form-success-reset" style="margin-top:24px;border:none;cursor:pointer;">Submit Another Request</button>
            `;
                    demoSection.appendChild(successCard);
                    successCard.querySelector('.form-success-reset').addEventListener('click', () => {
                        successCard.remove();
                        contactForm.reset();
                        contactForm.style.display = '';
                        btn.textContent = originalText;
                        btn.disabled = false;
                    });
                } else {
                    showFormError(data.message || 'Something went wrong. Please try again.');
                    btn.textContent = originalText;
                    btn.disabled = false;
                }
            })
            .catch(() => {
                showFormError('Network error. Please check your connection and try again.');
                btn.textContent = originalText;
                btn.disabled = false;
            });

        function showFormError(msg) {
            let errEl = contactForm.querySelector('.form-error-msg');
            if (!errEl) {
                errEl = document.createElement('p');
                errEl.className = 'form-error-msg';
                contactForm.appendChild(errEl);
            }
            errEl.textContent = msg;
        }
    });
}


// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
