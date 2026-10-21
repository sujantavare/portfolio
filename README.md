# Sujan B Tavarenavar — Portfolio

A responsive single-page portfolio built with HTML, CSS, and vanilla JavaScript.

## Preview

Open `dist/index.html` in your browser, or run from this folder:

```sh
python3 -m http.server 4173 --directory dist
```

Then visit http://localhost:4173. The clipboard button works on localhost and HTTPS; when unavailable, the page provides manual-copy guidance.

## Files

- `dist/index.html` — content, project links, and inline SVG icons
- `dist/styles.css` — glass panels, responsive layouts, themes, and reduced-motion support
- `dist/script.js` — theme preference, email copy feedback, and footer year

Fonts load from Google Fonts, with local fallbacks if offline. Deploy the contents of `dist/` to any static host; no build step is required.

## Verification

- Browser checked at 1280px and 400px; no horizontal page overflow.
- Light and dark themes checked; preference survives reload.
- Email copy feedback verified in the local browser.
- All three supplied project URLs are wired correctly.
- JavaScript syntax check passed.
- CSS includes visible keyboard focus states and a reduced-motion override.

Hosted publication was blocked by session permissions. The local website is complete.
