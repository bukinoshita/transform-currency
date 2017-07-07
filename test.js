'use strict'

import test from 'ava'
import currenci from 'currenci'
import m from './'

test(async t => {
  currenci.list.map(async currency =>
    t.is(await m(`I have ${currency.code}25`), `I have ${currency.symbol}25`)
  )
  const error = await t.throws(m('no money'))
  t.is(error.message, 'Currency not found')
})
