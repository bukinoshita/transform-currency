'use strict'

import test from 'ava'
import m from './'

test(async t => {
  const error = await t.throws(m('no money'))
  t.is(
    await m('Just selling my shoes for USD25'),
    'Just selling my shoes for $25'
  )
  t.is(await m('I have EUR300'), 'I have €300')
  t.is(error.message, 'Currency not found')
})
