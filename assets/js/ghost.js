"use strict";

// Little ghost buddy that chases the cursor: wakes on mouse movement,
// tilts toward where it's heading, and dozes off (fades) when idle.
// CSS hides it entirely on touch devices and for reduced-motion users.
(function () {
    const buddy = document.getElementById("ghost-buddy");
    if (!buddy) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const SIZE = 56;
    const TRAIL_OFFSET = 30; // hovers just below-right of the cursor
    const FOLLOW_SPEED = 0.06;
    const DOZE_AFTER_MS = 2500;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let started = false;
    let dozeTimer = null;

    window.addEventListener("mousemove", (e) => {
        targetX = e.clientX + TRAIL_OFFSET;
        targetY = e.clientY + TRAIL_OFFSET;
        if (!started) {
            started = true;
            x = targetX;
            y = targetY;
        }
        buddy.classList.add("awake");
        buddy.classList.remove("drowsy");
        clearTimeout(dozeTimer);
        dozeTimer = setTimeout(() => {
            buddy.classList.remove("awake");
            buddy.classList.add("drowsy");
        }, DOZE_AFTER_MS);
    }, { passive: true });

    (function follow() {
        const dx = targetX - x;
        x += dx * FOLLOW_SPEED;
        y += (targetY - y) * FOLLOW_SPEED;
        const tilt = Math.max(-16, Math.min(16, dx * 0.08));
        buddy.style.transform = `translate(${x - SIZE / 2}px, ${y - SIZE / 2}px) rotate(${tilt}deg)`;
        requestAnimationFrame(follow);
    })();
})();
