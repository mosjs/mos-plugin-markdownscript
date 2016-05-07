'use strict'
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect

const markdownscriptPlugin = require('.')

describe('mos-plugin-markdownscript', () => {
  it('should extend markdown scope with markdownscript helpers', () => {
    const scope = markdownscriptPlugin({})
    expect(scope.m).to.be.a('function')
    expect(scope.h1).to.be.a('function')
    expect(scope.blockquote).to.be.a('function')
  })
})
