'use strict'
module.exports = plugin

const m = require('markdownscript')
const reserved = require('reserved-words')

function plugin (markdown) {
  const scope = { m }
  Object.keys(m).filter(key => !reserved.check(key, 'next')).forEach(key => { scope[key] = m[key] })
  return scope
}
