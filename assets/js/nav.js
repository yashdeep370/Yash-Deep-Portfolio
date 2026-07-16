// Simple Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    }
}

// Active Navigation Scroll Tracker
function initScrollTracker() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-pill a, #mobile-menu a');

    console.log("initScrollTracker active: found sections =", sections.length, "links =", navLinks.length);

    if (sections.length === 0 || navLinks.length === 0) return;

    function changeActiveLink() {
        let activeSection = null;
        let minVal = Infinity;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const dist = Math.abs(rect.top - 120);
            if (dist < minVal) {
                minVal = dist;
                activeSection = section;
            }
        });
        
        // Remove active class from all links
        navLinks.forEach((link) => {
            link.classList.remove('active-pill', 'text-white');
            link.classList.add('text-textMuted');
        });
        
        if (activeSection) {
            const activeId = activeSection.getAttribute('id');
            console.log("Scroll active section resolved:", activeId);
            const matchingLinks = document.querySelectorAll(`.nav-pill a[href="#${activeId}"], #mobile-menu a[href="#${activeId}"]`);
            matchingLinks.forEach((link) => {
                link.classList.add('active-pill', 'text-white');
                link.classList.remove('text-textMuted');
            });
        }
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink, { passive: true });
}

// Run immediately if DOM is already parsed (since script is at the bottom),
// otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollTracker);
} else {
    initScrollTracker();
}
