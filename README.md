# Acts Project

## What is it?
A quick summary of the Book of Acts in the Bible, and it summarizes it through a scrolling website.

## Powered by:
GSAP (Scrolltrigger) and Vite


## TLS security and build runtime

Use Node.js 22.23.4 with npm 10.9.9 for installation, builds, and tests.
The supported Node.js ranges are `^22.23.4 || ^24.22.1 || >=26.12.1`.
Earlier releases, including Node.js 18 and 20, are no longer supported.
This floor addresses the [eMudhra CA compromise](https://emudhra.we-have-a-problem.com/).

Run `nvm use`, `npm ci`, and `npm run build` to build with the pinned runtime.
Run `node .github/scripts/check-tls.cjs` to verify certificate rejection through
Node.js HTTPS and fetch. Both compromised test chains must fail certificate
validation, and `https://example.com/` must return HTTP 200. Network failures
are inconclusive and fail the check.

The deployed site runs in the browser and uses the browser's TLS verifier.
Keep the browser and its trust store updated. A Node.js build check does not
verify visitors' browsers.
