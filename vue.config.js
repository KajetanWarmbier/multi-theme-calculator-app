const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/styles/_themes.scss";
                         @import "~@/assets/styles/style.scss";`,
      },
    },
  },
});
