const path = require(`path`)
module.exports = recipe => {
  const cli = require(`import-jsx`)(require.resolve(`./cli`))
  cli(recipe)
}
