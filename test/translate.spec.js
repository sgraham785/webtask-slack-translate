import test from 'ava'
import translate from '../src/translate'

test('should tranlate', async t => {
  var ctx = {
    data: {
      text: 'Hello World -- es'
    }
  }

  const result = await translate(ctx, (err, result) => {
    return result
  })
  t.is(result.text, 'Hola Mundo')
})

test('bad pattern match', async t => {
  var ctx = {
    data: {
      text: 'Hello'
    }
  }

  const result = await translate(ctx, (err, result) => {
    return result
  })
  t.is(result.text, 'Invalid format. Should be "translate TEXT -- LANG".')
})
