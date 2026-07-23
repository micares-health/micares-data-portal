# Add a dataset to the MI-CARES catalog

This starter uses ordinary Markdown files. No database or custom backend is required.

## 1. Create the dataset page

Copy:

`content/datasets/micares-research-data-collection.md`

Rename the copy with a URL-friendly filename, for example:

`content/datasets/baseline-survey-release-1.md`

Edit the title, overview, release summary, file list, notes, access requirements, and contact section.

The filename becomes the page route. The example above will be available at:

`/datasets/baseline-survey-release-1`

## 2. Add the dataset to the catalog

Open `content/index.md`, copy the existing dataset entry, and update its title, summary metadata, detail-page link, and Globus link.

## 3. Build a folder-specific Globus link

Use this pattern:

`https://app.globus.org/file-manager?origin_id=COLLECTION_UUID&origin_path=URL_ENCODED_PATH`

The current collection UUID is:

`8c54bcd0-d1fa-45d5-bc88-4609de7c786f`

For a collection folder named `/baseline-release-1/`, use:

`https://app.globus.org/file-manager?origin_id=8c54bcd0-d1fa-45d5-bc88-4609de7c786f&origin_path=%2Fbaseline-release-1%2F`

The beginning and ending slashes are encoded as `%2F`.

## 4. Test the links

Confirm that:

- the dataset page opens from the catalog;
- the back-to-catalog link works;
- the Globus link opens the intended folder;
- an authorized user can see the files; and
- an unauthorized user does not receive unintended access.

## 5. Commit and deploy

Commit the new and edited Markdown files and push them to `main`. The existing `static` GitHub Actions workflow should rebuild and publish the portal.
