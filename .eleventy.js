module.exports = function(eleventyConfig){

    // Browser will automatically open when running dev mode
    eleventyConfig.setBrowserSyncConfig({
      open: "local",
      hot: true
    })
  
  return {
    markdownTemplateEngine: "hbs",
    templateFormat: ["html", "hbs", "md"],
    dir: {
      output: "public",
      input: "src", 
      // includes: "includes"
    }
  }
}