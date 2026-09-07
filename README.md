# Kosha — shared foundation kit

Everyone starts from this. Don't let your AI chat invent its own colors,
fonts, or card markup — that's how five pages stop looking like one site.

## What's in here

```
kosha-kit/
  styles.css          <- design tokens + base styles. Link this, don't edit it.
  include.js           <- loads navbar/footer into every page
  reveal.js             <- scroll fade-in effect, works out of the box
  template.html        <- a working example page. Copy this to start your page.
  components/
    navbar.html         <- shared navbar (loaded automatically)
    footer.html         <- shared footer (loaded automatically)
```

## Setup (everyone does this once)

1. Clone the shared repo.
2. Copy `template.html`, rename it to your page (e.g. `festivals.html`), and
   build inside it. Don't start from a blank file.
3. Install the **Live Server** extension in VS Code. Right-click your HTML
   file → "Open with Live Server". Do NOT just double-click the file to open
   it in a browser — the navbar/footer won't load (they're fetched with
   JavaScript, which needs a real local server, not `file://`).

## The rules that keep five pages looking like one site

- **Never redefine a CSS variable.** If you think you need a new color,
  say so in the team chat first — don't add `--my-blue: #123456` inside
  your own page.
- **Headings are always `var(--font-display)`, body text is always
  `var(--font-body)`.** Don't introduce a third font.
- **Card content = image background + gradient overlay + content pinned to
  bottom.** Every card in the whole site — festival, dish, state, character
  — follows the `.card` structure in `template.html`. Change the content,
  not the shape.
- **One page = one HTML file**, using the navbar/footer include pattern.
  Don't build your section as a `<div>` that some other page has to import.

## Video handling (for Person 3 and anyone doing the art-form video experience)

```html
<video autoplay muted loop playsinline poster="assets/yakshagana-poster.jpg">
  <source src="assets/yakshagana.mp4" type="video/mp4">
</video>
```

- Always include a `poster` image — it shows instantly while the video loads.
- Keep clips short (5-15 seconds) and compressed. If you don't have a real
  clip yet, show the poster image with a "Coming soon" label instead of a
  broken video — never leave a blank box.

## Git workflow

- One shared GitHub repo, one branch per person (`person1-landing`,
  `person3-states`, etc.).
- Push your branch daily, not just on the last day — the integration owner
  needs to merge and check things early, not discover conflicts on day 3.
- Whoever is the integration owner opens a pull request from each branch
  into `main`, checks it in the browser, then merges.

## Prompt template — paste this at the start of every AI coding session

Copy this into ChatGPT (or whichever tool you're using) before asking it to
build your section, so every teammate's AI output starts from the same
constraints:

```
I'm building one page of a multi-page website called Kosha, a cinematic
cultural exploration site for India. The site already has a shared design
system I must use exactly as-is — do not invent new colors, fonts, or
button/card styles.

Here is the shared styles.css: [paste the file]
Here is the navbar partial: [paste navbar.html]
Here is the footer partial: [paste footer.html]
Here is a working template page showing the patterns: [paste template.html]

Rules:
- Use var(--font-display) for all headings, var(--font-body) for all body/UI text.
- Use only the CSS variables already defined in styles.css. Don't add new colors.
- Reuse the .card, .btn-primary, .btn-ghost, .tag, and .modal patterns exactly
  as structured in template.html — don't redesign them.
- Include <div id="navbar-slot"></div> at the top of <body> and
  <div id="footer-slot"></div> near the end, then <script src="include.js"></script>
  before </body>, exactly as template.html does.
- Add class="reveal" to sections that should fade in on scroll — reveal.js
  handles the rest automatically.

My section is: [describe your specific page — e.g. "Explore by State: a
selector for Karnataka, Rajasthan, and Kerala that changes the page's hero
image, accent treatment, and featured content based on the state chosen"]
```

Filling in your specific section at the bottom is what makes this useful —
the constraints above are what keep it consistent with everyone else's work.
