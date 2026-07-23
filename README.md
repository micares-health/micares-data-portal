# MI-CARES NHANES-style catalog upgrade

This package upgrades the working MI-CARES Globus portal overlay into a searchable, NHANES-style catalog while preserving Globus authentication and file delivery.

## What changes

- Replaces the Markdown homepage with a React catalog page
- Adds search plus release and component filters
- Presents separate Documentation and Data actions in each row
- Deep-links each data row to an exact Globus folder
- Adds public Documentation and Access Guide navigation
- Keeps the existing Globus OAuth client and collection IDs

## Install into the existing repository

The previous overlay created `content/index.md`. The new homepage is `content/index.jsx`, so the old homepage must be removed to avoid two files claiming the same route.

From this extracted package, run:

```bash
bash install.sh /path/to/micares-data-portal
```

The installer removes only the old homepage variants, copies the new files, and leaves `package.json`, `package-lock.json`, `.github`, and all other repository files untouched.

Then review and commit:

```bash
cd /path/to/micares-data-portal
git status
git add static.json content docs
git commit -m "Add searchable dataset and documentation catalog"
git push origin main
```

## Files to edit first

1. `content/index.jsx` - edit the `DATASETS` array near the top.
2. `content/datasets/micares-research-data-collection.md` - replace the prototype documentation.
3. `static.json` - replace the example privacy policy and terms.
4. `docs/EDIT-CATALOG.md` - follow the examples for additional datasets and documentation.

## Expected routes

- `/micares-data-portal/` - searchable dataset catalog
- `/micares-data-portal/documentation` - documentation hub
- `/micares-data-portal/accessing-data` - access instructions
- `/micares-data-portal/datasets/micares-research-data-collection` - starter dataset record
- `/micares-data-portal/transfer` - authenticated built-in transfer interface
