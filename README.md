# MyPortfolio

Static developer/IT portfolio (no build step).

## Run locally
You can open `index.html` directly, but using a local server is recommended.

- Live Server (VS Code): Right-click `index.html` -> `Open with Live Server`
- Python: `python -m http.server 5500` then open `http://localhost:5500/`

## GitHub Pages
1. Create a GitHub repo (e.g. `my-portfolio`).
2. Commit and push this folder contents to the repo root.
3. In GitHub:
   - Settings
   - Pages
   - **Build and deployment**: Deploy from a branch
   - **Branch**: `main` / `(root)`
4. Your site will be available at:
   - `https://<username>.github.io/<repo>/`

## Customize
- Update content in `index.html`.
- Replace `assets/images/MyPhoto.png` with your preferred profile photo (keep the same filename for no-code changes).
- Replace `CV_RESUME.docx` with your latest resume (keep the same filename so the download button keeps working).

## Project demo pages
- Demo pages live in `projects/`
- Main demo index: `projects/index.html`
