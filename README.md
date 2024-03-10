# tmp-vite1

This is just a temp vite project, showing having multiple HTML files, and importing a JSON file in 2
different ways.

There are 2 `index.html` files at `/` and `/main2/`. To get multiple pages in the build output
requires adding them to `vite.config.ts`, as stated here:
https://vitejs.dev/guide/build.html#multi-page-app

The output of `pnpm build` is:

```
./main2/index.html
./index.html
./assets/mydata-CodJdqGk.js
./assets/main-EODQF50w.js
./assets/nested-Bj2RrcPu.js
./assets/mydata-DXqdwr8W.json
./assets/mydata-IH3_R_oK.css
./vite.svg
```

`main.ts` imports `mydata.json` as data, and as a URL, just to show doing both even though you would
probably do one or the other. Importing as a URL is what causes `mydata-DXqdwr8W.json` to show up in
the assets, where `DXqdwr8W` is a content hash. Note that I had to set `build.assetsInlineLimit` to
`0` in `vite.config.ts`, otherwise vite inlines the small `mydata.json` as base64.

### Setup

```
pnpm i
```

### Run

Develop:
```
pnpm dev
```

or build:
```
pnpm build
```
