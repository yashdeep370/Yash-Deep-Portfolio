"use strict";

// Scroll-reveal, project-card tilt/spotlight, and hero role rotator.
// All motion respects prefers-reduced-motion.
(function () {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --- Hero role rotator ---
    const roleEl = document.getElementById("role-rotator");
    if (roleEl) {
        const roles = [
            "Full-Stack Developer",
            "Cloud Security Enthusiast",
            "AI & ML Explorer",
            "Data Science Practitioner"
        ];
        if (reducedMotion) {
            roleEl.textContent = roles[0];
        } else {
            let roleIndex = 0;
            let charIndex = 0;
            let deleting = false;
            (function tick() {
                const role = roles[roleIndex];
                charIndex += deleting ? -1 : 1;
                roleEl.textContent = role.slice(0, charIndex);
                let delay = deleting ? 40 : 80;
                if (!deleting && charIndex === role.length) {
                    deleting = true;
                    delay = 1800;
                } else if (deleting && charIndex === 0) {
                    deleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    delay = 350;
                }
                setTimeout(tick, delay);
            })();
        }
    }

    // --- Scroll-reveal ---
    const revealTargets = document.querySelectorAll(
        "section h2, #solutions .grid > div, #skills .grid > div, #experience .group, #certifications .grid > div, #projects .grid > div, #github .grid > div, #connect .grid > div"
    );
    if (!reducedMotion && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

        revealTargets.forEach((el, i) => {
            el.classList.add("reveal");
            el.style.transitionDelay = `${(i % 4) * 90}ms`;
            observer.observe(el);
        });
    }

    // --- Project card tilt + spotlight (desktop pointers only) ---
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (finePointer && !reducedMotion) {
        document.querySelectorAll("#projects .grid > div").forEach((card) => {
            const glow = document.createElement("div");
            glow.className = "card-spotlight";
            card.appendChild(glow);

            card.addEventListener("mouseenter", () => {
                // Reveal transition would slow the tilt transform, so detach it.
                card.classList.remove("reveal", "revealed");
                card.style.transitionDelay = "";
                card.style.transition = "transform 0.15s ease-out";
            });

            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--spot-x", x + "px");
                card.style.setProperty("--spot-y", y + "px");
                const rotateX = (y / rect.height - 0.5) * -6;
                const rotateY = (x / rect.width - 0.5) * 6;
                card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener("mouseleave", () => {
                card.style.transition = "transform 0.4s ease";
                card.style.transform = "";
            });
        });
    }
})();
