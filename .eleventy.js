module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: [
      './public/css/**/*.css',
      './public/js/**/*.js'
    ]
  })

  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy('src/js')

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
