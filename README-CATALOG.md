# MI-CARES data catalog starter

This ZIP is an overlay for the existing `micares-health/micares-data-portal` repository. It is not a replacement for the full repository.

## Important

Keep the existing `package.json`, `package-lock.json`, `.github` directory, and other repository files. The deployment workflow runs `npm ci`, so the existing lock file must remain in the repository.

## Install the overlay

1. Extract this ZIP.
2. Copy its contents into the root of your existing `micares-data-portal` checkout.
3. Allow `static.json` to be replaced.
4. Keep all existing files that are not included in this ZIP.
5. Review `git status` before committing.
6. Commit and push to the `main` branch.

Example:

```text
unzip micares-data-portal-catalog-overlay.zip
cp -R micares-data-portal-catalog-overlay/. /path/to/micares-data-portal/
cd /path/to/micares-data-portal
git status
git add static.json content docs README-CATALOG.md
git commit -m "Add public dataset catalog"
git push origin main
```

## What this adds

- `content/index.md` - public catalog homepage
- `content/accessing-data.md` - user access instructions
- `content/datasets/micares-research-data-collection.md` - starter detail page
- `docs/ADD-A-DATASET.md` - editor instructions
- `static.json` - preserves the current Globus client and collection IDs and adds a subtitle

## Expected routes after deployment

- `/micares-data-portal/`
- `/micares-data-portal/accessing-data`
- `/micares-data-portal/datasets/micares-research-data-collection`
- `/micares-data-portal/transfer`

## Before public release

Replace all prototype metadata, example privacy policy text, and example terms text with approved content. Also change the root Globus link to a folder-specific link for each dataset whenever those paths are available.
