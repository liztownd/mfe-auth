const deps = require("./package.json").dependencies;

module.exports = {
  name: "auth",
  filename: 'remoteEntry.js',
  exposes: {
      './AuthApp': './src/bootstrap',
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
