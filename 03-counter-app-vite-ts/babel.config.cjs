module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // Aquí puedes ajustar a qué entornos deseas apuntar:
        // Por ejemplo, browserslist: ["last 2 versions", "ie 11"]
        targets: {
          node: "current"
        }
      }
    ]
  ]
};
