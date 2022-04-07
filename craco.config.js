module.exports = {
    devServer: {
    port: 8082,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
      {
          plugin: require("./craco-plugins/module-federation")
      },
  ],
};