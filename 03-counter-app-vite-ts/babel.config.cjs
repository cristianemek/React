const { run } = require("node:test");

module.exports = {
  presets: [
    [
      "@babel/preset-env",{targets: { esmodules: true } },
    ],
    [
      "@babel/preset-react",{runtime: "automatic" }
    ],
  ],
};
