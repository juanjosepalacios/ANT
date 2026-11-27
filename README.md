# ANT website

Source for the [ANT — Atomistic NanoTransport website](https://juanjosepalacios.github.io/ANT/).

## Codes

- **ANT.Gaussian09**: Gaussian09 interface; source in the public [ANT.Gaussian repository](https://github.com/juanjosepalacios/ANT.Gaussian).
- **ANT.Gaussian16**: Python/GauOpen interface; its source repository is private and requires authorised access.
- **ANT.Crystal**: upcoming; the website currently contains a placeholder section.

## Documentation

Each Gaussian interface has six section links: Overview, Installation instructions, Keyword reference, Input files, Publication and citation, and Example outputs. Overview, Keyword reference and Publication and citation are shared. Installation instructions, Input files and Example outputs have separate pages for each interface; Gaussian16’s output-example page is currently empty.

The Gaussian16 installation guide includes its command-line options. Its input-file guide includes repository examples and downloadable inputs. Shared pages retain the selected interface through the `code=gaussian16` URL parameter.

## Browse locally

Open `index.html` in a browser. No build step or server is required. Documentation, images, PDFs and example inputs are bundled under `doc/` and use relative links. External repositories, remote fonts and package downloads require internet access; fallback fonts are available offline.

An offline snapshot is also included in both code repositories at `doc/website/index.html`.

## Update and publish

Edit `index.html` for the landing page and `doc/*.html` for documentation. Shared documentation styling and navigation behavior live in `doc/docs.css` and `doc/docs.js`.

GitHub Pages publishes the root of the `main` branch. Check internal file links and fragment targets before pushing, and confirm the Pages build completes afterward. Source-code changes in a code repository do not automatically update this website or its bundled snapshots; documentation and snapshots must be refreshed explicitly.
