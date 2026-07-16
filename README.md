# Yash Deep — Portfolio

Personal portfolio website. Single-page site built with HTML, Tailwind CSS (CDN), and vanilla JavaScript, featuring a WebGL fluid-simulation background.

**Live:** deployed on Vercel via GitHub.

## Structure

```
index.html            # The site (hero, skills, experience, projects, contact)
script.js             # WebGL fluid background (splash-canvas)
assets/
  css/main.css        # Custom styles (nav pill, flashcard modals)
  js/nav.js           # Mobile menu + scroll-spy nav highlight
  js/flashcards.js    # Skill-card detail modals
old clips/            # Archived earlier iterations
```

## Run locally

No build step — open `index.html` in a browser, or serve the folder:

```
npx serve .
```
