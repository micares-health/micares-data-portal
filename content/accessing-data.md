# Accessing MI-CARES Data

[Back to the data catalog](/)

The catalog and documentation pages are public. Globus remains responsible for authentication, authorization, download, and transfer of the actual data files.

## Recommended access flow

1. Find the dataset in the catalog.
2. Open its **Documentation** link and review the population, contents, release notes, and access requirements.
3. Select **Open files** in the dataset row.
4. Sign in to Globus with an accepted identity.
5. Complete any collection activation or authorization step presented by Globus.
6. Download an HTTPS-enabled file or transfer selected files to another Globus collection.

## Why each dataset has its own link

Each data action should point to the exact dataset or release folder rather than the collection root. This reduces browsing and helps users confirm that the folder name matches the documentation they just reviewed.

A folder-specific link follows this pattern:

`https://app.globus.org/file-manager?origin_id=COLLECTION_UUID&origin_path=URL_ENCODED_PATH`

The link identifies a location only. It does not grant access or bypass the collection's permissions.

## Browser download versus Globus transfer

When HTTPS access is enabled, Globus may offer browser download for individual files. Larger releases are generally better transferred to a Globus collection available to the user, such as institutional storage or Globus Connect Personal.

## Current collection

[Open the connected collection in Globus File Manager](https://app.globus.org/file-manager?origin_id=8c54bcd0-d1fa-45d5-bc88-4609de7c786f&origin_path=%2F)

After dataset folders are finalized, replace the root path in each catalog record with its exact folder path.
