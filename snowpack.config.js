/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: "@snowpack/app-scripts-svelte",
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [
    [
      "@snowpack/plugin-build-script",
      { cmd: "postcss", input: [".css"], output: [".css"] },
    ],
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
  ],
  packageOptions: { types: true },
  devOptions: {
    open: "none", // set to '**Default**' to open browser on run
  },
};
