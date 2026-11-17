# Emmanuelle Faith Zoe — Personal Website

An editorial, multi-page personal portfolio built as clean static HTML/CSS/JS.
Palette: warm ivory, espresso brown and taupe. Type: Cormorant Garamond (serif) + Inter (sans).

## Structure
```
emmanuelle-site/
├── index.html        Home
├── about.html        About
├── research.html     Research & Thinking
├── work.html         Selected Work
├── ventures.html     Ventures
├── contact.html      Contact
├── sitemap.xml       SEO sitemap
├── robots.txt        SEO crawler rules
└── assets/
    ├── css/styles.css   Design system (all colours & type live here)
    ├── js/main.js       Nav, scroll reveal, form handling
    └── img/portrait.png Headshot (swap for final photography)
```

## How to edit
- **Text:** open any `.html` file and edit between the tags — no build step needed.
- **Colours & fonts:** change the variables at the top of `assets/css/styles.css` (`:root { ... }`).
- **Photos:** replace `assets/img/portrait.png` and add project images into `assets/img/`.
- **Placeholders** marked `[To be added]` / "Verified … to be added" are ready for real details (university, graduation year, dates, LinkedIn URL, email).

## Before launch — to supply
- Final professional headshots & project photography
- LinkedIn URL and professional email (update in footer + contact page)
- University, graduation year, dissertation abstract
- Verified Motivez roles/dates and campaign assets
- Links to the Her Healing Heart and FAITHZOE Group platforms

## Making the contact form live
The form currently validates and confirms on the front end only. To receive messages,
connect it to a no-code service — e.g. [Formspree](https://formspree.io) or Netlify Forms —
by setting the `<form>` `action`/`method`, then enable spam protection (honeypot/reCAPTCHA).

## Hosting (recommended)
Deploy the `emmanuelle-site` folder to **Netlify**, **Vercel** or **Cloudflare Pages**
(free tier, automatic SSL, custom domain). Point the domain `emmanuellefaithzoe.com`
at the host and keep ownership of the domain, hosting, admin and analytics.

## Still to add (future-proofing)
- Google Analytics / Plausible snippet (privacy-conscious)
- Favicon / wordmark
- A lightweight CMS layer (e.g. Decap/Netlify CMS) once writing volume grows
