# My TypeScript project

Made from the Orralearn **starter-ts** template (Level 3, lessons 1.11 and 1.12, project P1).

**Live site:** add your link here (Settings → Pages shows it).

## Commands

Run them in this folder (`cd` into it first).

| Command | What it does |
|---|---|
| `npm install` | Installs the tools into `node_modules` (once; about 40 MB, Wi-Fi is better). Later projects: `npm install --prefer-offline`. |
| `npm run dev` | Serves the site at http://localhost:5173 while you edit. Save a file: the page updates. |
| `npm run check` | TypeScript checks every file. The dev page still runs with type errors; `check` and `build` don't let them through. |
| `node tests.ts` | Runs your tests (`tests.ts`). Node removes the types first, like the runner. |
| `npm test -- --run` | Runs Vitest test files (`*.test.ts`), if you have any. |
| `npm run build` | Checks the types, then makes the `dist` folder for the web. |

Node must be 22.18 or newer: `node --version`. In Termux, `pkg upgrade nodejs` if it's older.

## Publishing

Every `git push` to `main` runs the workflow (`.github/workflows/pages.yml`): it checks,
tests and builds your project, then publishes `dist`. The Actions tab shows a green tick when
it worked. Once per repository: **Settings → Pages → Source: GitHub Actions**.

## On a phone

- The **console button** (bottom right, only with `npm run dev`) shows what `console.log`
  prints and your errors: Chrome on Android has no DevTools.
- Chrome on the same phone opens http://localhost:5173 while `npm run dev` runs in Termux.

## Data and storage

- One `npm install` per project, on Wi-Fi. npm keeps a copy in its cache, so the next project
  uses `npm install --prefer-offline` and downloads almost nothing.
- `node_modules` takes 40 MB or more. After publishing, `rm -rf node_modules` frees it: your
  code is safe on GitHub, and `npm install --prefer-offline` brings it back.

## Older phones

On an older 32-bit phone, `npm run build` can stop with an error about **lightningcss** (a
tool with no version for that phone's processor). Open `vite.config.ts` and remove the two
slashes in front of `build: { cssMinify: false },`, save, and build again: your CSS is then
published without being made smaller, which changes nothing you can see.

## Files

| File | |
|---|---|
| `index.html` | The page. |
| `src/main.ts` | Page code: finds elements, handles events. |
| `src/logic.ts` | Pure functions (your tests call these). |
| `tests.ts` | Your tests. |
| `src/test.ts` | Made for you: `test(label, actual, expected)`. |
| `src/base.ts` | Made for you: the site's address on GitHub Pages (`asset("data.json")`). |
| `src/phone-console.ts` | Made for you: the console button (development only). |
