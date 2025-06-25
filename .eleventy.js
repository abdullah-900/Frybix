module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style/style.css");
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
