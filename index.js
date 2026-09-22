// =====================================================
// SMART MOVE CONSULTANT - MAIN JAVASCRIPT
// =====================================================


// =====================================================
// EMAILJS CONFIGURATION
// =====================================================

const EMAILJS_PUBLIC_KEY = "ElTUHKGm_ls_1xNGM";

const EMAILJS_SERVICE_ID = "service_ln2vf8s";

const EMAILJS_TEMPLATE_ID = "template_9j2amsf";


// Initialize EmailJS

if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
    });

    console.log("EmailJS initialized successfully");

} else {

    console.error("EmailJS library not loaded.");

}


// =====================================================
// SEND EMAIL FUNCTION
// =====================================================

function sendEmail(data) {

    return emailjs.send(

        EMAILJS_SERVICE_ID,

        EMAILJS_TEMPLATE_ID,

        {
            name: data.name || "",
            phone: data.phone || "",
            email: data.email || "",
            service: data.service || "",
            message: data.message || ""
        }

    );

}


// =====================================================
// FAQ
// =====================================================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const item = question.parentElement;

        item.classList.toggle("active");

    });

});


// =====================================================
// APPLY NOW POPUP
// =====================================================

function openApplyForm() {

    const applyModal =
        document.getElementById("applyModal");

    if (applyModal) {

        applyModal.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

}


function closeApplyForm() {

    const applyModal =
        document.getElementById("applyModal");

    if (applyModal) {

        applyModal.style.display = "none";

        document.body.style.overflow = "";

    }

}


// =====================================================
// APPLY MODAL OUTSIDE CLICK
// =====================================================

const applyModal =
    document.getElementById("applyModal");

if (applyModal) {

    applyModal.addEventListener(
        "click",
        function (event) {

            if (event.target === applyModal) {

                closeApplyForm();

            }

        }
    );

}


// =====================================================
// APPLY FORM SUBMISSION
// EMAIL + WHATSAPP
// =====================================================

const applyForm = document.getElementById("applyForm");

if (applyForm) {

    applyForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        // Validation
        if (!name || !phone || !email || !service) {
            alert("Please fill all required fields.");
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        // WhatsApp Message
        const whatsappMessage =
            "🔔 New Application - Smart Move Consultant\n\n" +
            "👤 Name: " + name + "\n" +
            "📱 Mobile: " + phone + "\n" +
            "📧 Email: " + email + "\n" +
            "💼 Service: " + service + "\n" +
            "📝 Query: " + (message || "Not provided");

        const whatsappURL =
            "https://wa.me/919217589490?text=" +
            encodeURIComponent(whatsappMessage);

        // OPEN WHATSAPP IMMEDIATELY
        // This prevents browser popup blocking
        window.open(whatsappURL, "_blank");

        // Send Email
        sendEmail({
            name: name,
            phone: phone,
            email: email,
            service: service,
            message: message || "Not provided"
        })

        .then(function (response) {

            console.log("Application email sent:", response);

            alert("Application submitted successfully!");

            applyForm.reset();

            closeApplyForm();

        })

        .catch(function (error) {

            console.error("Application Email Error:", error);

            alert(
                "WhatsApp message has been opened.\n\n" +
                "Email could not be sent. Please check EmailJS settings."
            );

        });

    });

}

// =====================================================
// QUERY POPUP
// =====================================================

function openQueryForm() {

    const queryPopup =
        document.getElementById("queryPopup");

    if (queryPopup) {

        queryPopup.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

}


function closeQueryForm() {

    const queryPopup =
        document.getElementById("queryPopup");

    if (queryPopup) {

        queryPopup.style.display = "none";

        document.body.style.overflow = "";

    }

}


// =====================================================
// QUERY POPUP OUTSIDE CLICK
// =====================================================

const queryPopup =
    document.getElementById("queryPopup");

if (queryPopup) {

    queryPopup.addEventListener(
        "click",
        function (event) {

            if (event.target === queryPopup) {

                closeQueryForm();

            }

        }
    );

}

// ===============================
// ENQUIRE NOW - EMAIL + WHATSAPP
// ===============================


        // ===============================
// ENQUIRE NOW - EMAIL + WHATSAPP
// ===============================
// ===============================
// ENQUIRE NOW - EMAIL + WHATSAPP
// ===============================

const queryForm = document.getElementById("queryForm");

if (queryForm) {

    queryForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("clientName").value.trim();
        const phone = document.getElementById("clientPhone").value.trim();
        const service = document.getElementById("clientService").value;
        const message = document.getElementById("clientQuery").value.trim();

        if (!name || !phone || !service || !message) {
            alert("Please fill all the fields.");
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        const whatsappMessage =
            "🔔 New Website Enquiry - Smart Move Consultant\n\n" +
            "👤 Name: " + name + "\n" +
            "📞 Phone: " + phone + "\n" +
            "📋 Service: " + service + "\n" +
            "💬 Query: " + message;

        const whatsappURL =
            "https://wa.me/919217589490?text=" +
            encodeURIComponent(whatsappMessage);

        // OPEN WHATSAPP IMMEDIATELY
        window.open(whatsappURL, "_blank");

        const submitButton =
            queryForm.querySelector("button[type='submit']");

        submitButton.disabled = true;
        submitButton.innerText = "Sending...";

        // SEND EMAIL
        sendEmail({
            name: name,
            phone: phone,
            email: "Website Enquiry",
            service: service,
            message: message
        })

        .then(function (response) {

            console.log("Enquiry email sent:", response);

            alert("Your enquiry has been submitted successfully!");

            queryForm.reset();

            closeQueryForm();

        })

        .catch(function (error) {

            console.error("Enquiry Email Error:", error);

            alert(
                "WhatsApp message has been opened.\n\n" +
                "Email could not be sent. Please check EmailJS settings."
            );

        })

        .finally(function () {

            submitButton.disabled = false;
            submitButton.innerText = "Submit Query";

        });

    });

}
// =====================================================
// BUSINESS & GOVERNMENT SERVICES POPUPS
// =====================================================

function openPopup(id) {

    const popup = document.getElementById(id);

    if (popup) {

        popup.style.display = "flex";

        document.body.style.overflow = "hidden";

    } else {

        console.error("Popup not found:", id);

    }

}


function closePopup(id) {

    const popup = document.getElementById(id);

    if (popup) {

        popup.style.display = "none";

        document.body.style.overflow = "";

    }

}
// =====================================================
// CLOSE SERVICE POPUP BY CLICKING OUTSIDE
// =====================================================

document.querySelectorAll(".service-popup").forEach(function (popup) {

    popup.addEventListener("click", function (event) {

        if (event.target === popup) {
            closePopup(popup.id);
        }

    });

});
function openLearnMore() {
    const popup = document.getElementById("learnMorePopup");

    if (popup) {
        popup.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeLearnMore() {
    const popup = document.getElementById("learnMorePopup");

    if (popup) {
        popup.style.display = "none";
        document.body.style.overflow = "";
    }
}// ===================================
// CERTIFICATE PREVIEW
// ===================================

function openCertificate(imageSrc) {

    const modal = document.getElementById("certificateModal");
    const preview = document.getElementById("certificatePreview");

    preview.src = imageSrc;
    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function closeCertificate() {

    const modal = document.getElementById("certificateModal");

    modal.style.display = "none";

    document.body.style.overflow = "";
}


// Popup ke bahar click karne par close

document.getElementById("certificateModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeCertificate();
    }

});
// =====================================================
// OFFER SLIDER
// =====================================================

const offerTrack = document.querySelector(".offer-track");
const offerSlides = document.querySelectorAll(".offer-slide");

let currentOfferSlide = 0;

function moveOfferSlider() {

    if (!offerTrack || offerSlides.length === 0) return;

    const slideWidth = offerSlides[0].offsetWidth;

    currentOfferSlide++;

    if (currentOfferSlide >= offerSlides.length) {
        currentOfferSlide = 0;
    }

    offerTrack.style.transform =
        `translateX(-${currentOfferSlide * slideWidth}px)`;
}


// Auto slide every 3 seconds
setInterval(moveOfferSlider, 3000);


// Recalculate position when screen size changes
window.addEventListener("resize", function () {

    if (!offerTrack || offerSlides.length === 0) return;

    const slideWidth = offerSlides[0].offsetWidth;

    offerTrack.style.transform =
        `translateX(-${currentOfferSlide * slideWidth}px)`;

});