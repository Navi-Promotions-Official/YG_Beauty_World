function downloadImage() {
    const imageUrl = "assets/images/main-img/scanner-img.png";

    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = "scanner-img.png"; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function scrollToContact() {
    let contactSection = document.querySelector('.contact-details'); 
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' }); 
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const shareButton = document.querySelector('.qr-btn .btn1 a');

    if (shareButton) {
        shareButton.addEventListener("click", function () {
            let productModalEl = document.getElementById("product-modal");
            let shareModalEl = document.getElementById("share-media-modal");

            let productModal = bootstrap.Modal.getInstance(productModalEl) || new bootstrap.Modal(productModalEl);
            let shareModal = bootstrap.Modal.getInstance(shareModalEl) || new bootstrap.Modal(shareModalEl);

            // Hide the product modal first
            productModal.hide();

            // Wait for modal to completely disappear
            setTimeout(() => {
                // Remove any lingering modal-backdrop to prevent a black screen
                document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());

                // Show the share modal
                shareModal.show();
            }, 300);
        });
    }

    // Ensure backdrops are removed when any modal is closed
    document.addEventListener('hidden.bs.modal', function () {
        document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const currentURL = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);

    // Social media share URLs
    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`,
        whatsapp: `https://wa.me/?text=${pageTitle}%20${currentURL}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${currentURL}&title=${pageTitle}`,
        twitter: `https://twitter.com/intent/tweet?text=${pageTitle}&url=${currentURL}`,
        telegram: `https://t.me/share/url?url=${currentURL}&text=${pageTitle}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${currentURL}&description=${pageTitle}`,
        email: `mailto:?subject=${pageTitle}&body=${currentURL}`
    };

    // Set href attributes dynamically
    document.getElementById("share-facebook").href = shareLinks.facebook;
    document.getElementById("share-whatsapp").href = shareLinks.whatsapp;
    document.getElementById("share-linkedin").href = shareLinks.linkedin;
    document.getElementById("share-twitter").href = shareLinks.twitter;
    document.getElementById("share-telegram").href = shareLinks.telegram;
    document.getElementById("share-pinterest").href = shareLinks.pinterest;
    document.getElementById("share-email").href = shareLinks.email;

    // Handle "Share" button click to close the current modal and open the share modal
    document.querySelector('.qr-btn .btn1 a[data-bs-target="#share-media-modal"]').addEventListener("click", function () {
        let productModal = new bootstrap.Modal(document.getElementById("product-modal"));
        productModal.hide();

        let shareModal = new bootstrap.Modal(document.getElementById("share-media-modal"));
        setTimeout(() => {
            shareModal.show();
        }, 300);
    });
});
