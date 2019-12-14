const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Pranav Shridhar's Blog", // <title>
  shortSiteTitle: "Pranav's Blog", // <title> ending for posts and pages
  siteDescription: "Personal Blog of Pranav Shridhar",
  siteUrl: "https://pranav.dev",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Pranav Shridhar",
  authorTwitterAccount: "pranavmodx",
  // info
  infoTitle: "Pranav Shridhar",
  infoTitleNote: "Coder, Chess Player",
  // manifest.json
  manifestName: "PersonalBlog",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "pranavmodx@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/pranavmodx" },
    { name: "twitter", url: "https://twitter.com/pranavmodx" },
    { name: "facebook", url: "https://facebook.com/pranavmodx" }
  ]
};
