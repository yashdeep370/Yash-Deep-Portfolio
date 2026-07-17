"use strict";

// Live GitHub stats for the #github section. Unauthenticated API calls
// (60 req/hr per visitor IP) — every element keeps a "—" fallback if the
// request fails or is rate-limited.
(function () {
    const USERNAME = "yashdeep370";
    const reposEl = document.getElementById("gh-repos");
    if (!reposEl) return;

    const starsEl = document.getElementById("gh-stars");
    const followersEl = document.getElementById("gh-followers");

    fetch(`https://api.github.com/users/${USERNAME}`)
        .then((r) => {
            if (!r.ok) throw new Error(r.status);
            return r.json();
        })
        .then((user) => {
            reposEl.textContent = user.public_repos;
            followersEl.textContent = user.followers;
        })
        .catch(() => {});

    fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`)
        .then((r) => {
            if (!r.ok) throw new Error(r.status);
            return r.json();
        })
        .then((repos) => {
            starsEl.textContent = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        })
        .catch(() => {});
})();
