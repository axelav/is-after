'use strict'

module.exports = function isAfter (date, afterDate) {
  return date.getTime() > afterDate.getTime()
}
