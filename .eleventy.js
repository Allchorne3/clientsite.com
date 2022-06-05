module.exports = function(eleventyConfig){

    // Browser will automatically open when running dev mode
    eleventyConfig.setBrowserSyncConfig({
      open: "local",
      hot: true
    })
  
  return {
    dir: {
      output: "public",
      input: "src", 
      includes: "includes"
    }
  }
}