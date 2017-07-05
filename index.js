'use strict'

const currenci = require('currenci')
const findCurrencyCode = require('find-currency-code')
const hasCurrencyCode = require('has-currency-code')
const isCurrencyCode = require('is-currency-code')

module.exports = str => {
  return new Promise((resolve, reject) => {
    const code = findCurrencyCode(str)

    if (hasCurrencyCode(str) && isCurrencyCode(code)) {
      currenci.list.filter(currency => {
        if (currency.code === code) {
          const index = str.indexOf(code)
          resolve(str.replace(str.substring(index, index + 3), currency.symbol))
        }
      })
    }

    reject(new TypeError('Currency not found'))
  })
}
