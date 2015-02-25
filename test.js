var test = require('tape')
var isAfter = require('./index')

test('isAfter test', function (t) {
  t.plan(3)

  t.equal(typeof isAfter, 'function')
  var now = new Date()
  var earlier = new Date('1/1/1990')
  t.equal(isAfter(now, earlier), true)
  t.equal(isAfter(earlier, now), false)
})


