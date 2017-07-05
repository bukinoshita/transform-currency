# transform-currency [![Build Status](https://travis-ci.org/bukinoshita/transform-currency.svg?branch=master)](https://travis-ci.org/bukinoshita/transform-currency)

> Transform currency code to symbol


## Install

```
$ npm install --save transform-currency
```


## Usage

```js
const transformCurrency = require('transform-currency')

transformCurrency(`I'm selling my shoes for USD25`)
// => I'm selling my shoes for $25
```


## API

### transformCurrency(input)

Returns a `promise`

#### input

Type: `string`<br/>
Required


## Related

- [find-currency-code](https://github.com/bukinoshita/find-currency-code) — Find currency code from given string
- [has-currency-code](https://github.com/bukinoshita/has-currency-code) — Check if given string has currency code
- [currenci](https://github.com/bukinoshita/currenci) — List of currencies and get random currency


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
