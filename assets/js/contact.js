"use strict";

// Contact form posts to a Google Form inside a hidden iframe so the visitor
// stays on the page; the iframe's load event after submit means Google
// accepted the response.
(function () {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const success = document.getElementById("contact-success");
    const submitButton = document.getElementById("contact-submit");
    const target = document.getElementsByName("contact-form-target")[0];

    let submitted = false;

    form.addEventListener("submit", function () {
        submitted = true;
        submitButton.disabled = true;
        submitButton.textContent = "Sending…";
    });

    target.addEventListener("load", function () {
        if (!submitted) return;
        submitted = false;
        form.reset();
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
        success.classList.remove("hidden");
    });
})();
