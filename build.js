const { build } = require("esbuild");
const sharedConfig = {
  entryPoints: ["src/main.ts"],
  bundle: true,
  minify: true,
};
build({
  ...sharedConfig,
  outfile: "dist/main.js",
  platform: 'neutral', // for ESM
  format: "esm",
});