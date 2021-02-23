const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
};
