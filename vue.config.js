const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "https://patriziomadferitmilione.github.io/pokemon-finder/" : "https://patriziomadferitmilione.github.io/pokemon-finder//",
};