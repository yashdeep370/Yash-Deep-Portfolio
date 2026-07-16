(function () {
    'use strict';

    const DURATION_MS = 2700;
    const WORD_CYCLE_MS = 900;
    const WORDS = ['Design', 'Create', 'Inspire'];
    const DONE_DELAY_MS = 400;

    function initLoadingScreen() {
        const overlay = document.getElementById('loading-screen');
        if (!overlay) {
            document.dispatchEvent(new CustomEvent('portfolio:loaded'));
            return;
        }

        const counterEl = document.getElementById('loading-counter');
        const wordEl = document.getElementById('loading-word');
        const progressEl = document.getElementById('loading-progress');
        const startTime = performance.now();
        let wordIndex = 0;
        let wordTimer = null;

        document.body.classList.add('is-loading');

        function setWord(index) {
            if (!wordEl) return;
            wordEl.classList.add('is-exit');
            window.setTimeout(() => {
                wordEl.textContent = WORDS[index];
                wordEl.classList.remove('is-exit');
            }, 280);
        }

        if (wordEl) {
            wordEl.textContent = WORDS[0];
            wordTimer = window.setInterval(() => {
                wordIndex = (wordIndex + 1) % WORDS.length;
                setWord(wordIndex);
            }, WORD_CYCLE_MS);
        }

        function finish() {
            if (wordTimer) window.clearInterval(wordTimer);
            overlay.classList.add('is-done');
            document.body.classList.remove('is-loading');
            window.setTimeout(() => {
                overlay.remove();
                document.dispatchEvent(new CustomEvent('portfolio:loaded'));
            }, 520);
        }

        function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / DURATION_MS, 1);
            const count = Math.floor(progress * 100);

            if (counterEl) {
                counterEl.textContent = String(count).padStart(3, '0');
            }
            if (progressEl) {
                progressEl.style.transform = 'scaleX(' + progress + ')';
            }

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                window.setTimeout(finish, DONE_DELAY_MS);
            }
        }

        requestAnimationFrame(tick);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLoadingScreen);
    } else {
        initLoadingScreen();
    }
})();
