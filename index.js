const _ = require('lodash')

module.exports = function (array=[], size=1) {
  return _.chunk(array, size)
}