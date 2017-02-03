'use strict'
const test = require('ava')
test('this should pass', t => {
  t.pass()
})
test('esto deberia fallar', t => {
  t.fail()
})
test('it should support async/await', async t => {
  let p = Promise.resolve(42)
  let secret = await p
  t.is(secret, 42)
})
