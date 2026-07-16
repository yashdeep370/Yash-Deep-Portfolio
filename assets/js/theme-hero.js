(function () {
    'use strict';

    function initNavScroll() {
        const nav = document.getElementById('site-nav');
        if (!nav) return;

        const onScroll = () => {
            nav.classList.toggle('nav-scrolled', window.scrollY > 100);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    function initHeroMotion() {
        if (typeof gsap === 'undefined') return;

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from('.name-reveal', {
            opacity: 0,
            y: 50,
            duration: 1.2,
            delay: 0.1,
        }).from(
            '.blur-in',
            {
                opacity: 0,
                y: 20,
                filter: 'blur(10px)',
                duration: 1,
                stagger: 0.1,
            },
            '-=0.85'
        );
    }

    document.addEventListener('portfolio:loaded', function () {
        initNavScroll();
        initHeroMotion();
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavScroll);
    } else {
        initNavScroll();
    }
})();
