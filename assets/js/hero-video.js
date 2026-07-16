(function () {
    'use strict';

    const HLS_SRC =
        'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

    function initHeroVideo() {
        const video = document.getElementById('hero-video');
        if (!video) return;

        const playSafe = () => {
            const p = video.play();
            if (p && typeof p.catch === 'function') {
                p.catch(function () {
                    /* autoplay blocked — acceptable */
                });
            }
        };

        if (window.Hls && window.Hls.isSupported()) {
            const hls = new window.Hls({
                enableWorker: true,
                lowLatencyMode: false,
            });
            hls.loadSource(HLS_SRC);
            hls.attachMedia(video);
            hls.on(window.Hls.Events.MANIFEST_PARSED, playSafe);
            hls.on(window.Hls.Events.ERROR, function (_event, data) {
                if (data.fatal) {
                    hls.destroy();
                }
            });
            return;
        }

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = HLS_SRC;
            video.addEventListener('loadedmetadata', playSafe, { once: true });
            return;
        }

        /* Fallback: hide video layer if HLS unavailable */
        const layer = document.querySelector('#hero .hero-video-layer');
        if (layer) layer.style.display = 'none';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeroVideo);
    } else {
        initHeroVideo();
    }
})();
