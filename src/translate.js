//
// Summary: translate text to any google supported language
// Install:
//    $ sudo npm install -g wt-cli
//    $ wt init <youremail>
//    $ wt create translate.js --name slack-translate \
//                        --secret-file .env \
//                        --dependency axios@0.16.2
// Usage:
//    /translate This text from engish to spanish -- es
//    Response: Este texto de engish a español

import axios from 'axios'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const translate = ({ data }, callback) => {
  const GOOGLE_URL = 'https://translation.googleapis.com/language/translate/v2'
  const GOOGLE_KEY = process.env.GOOGLE_KEY || data.GOOGLE_KEY
  const PATTERN = /^(.*) -- (.*)$/i
  const MATCH = PATTERN.exec(data.text)
  if (!MATCH) return callback(null, { text: 'Invalid format. Should be "translate TEXT -- LANG".' })

  const CONTENT = MATCH[1]
  const LANG = MATCH[2]

  axios.request({
    url: GOOGLE_URL,
    params: {
      key: GOOGLE_KEY,
      q: CONTENT,
      target: LANG
    },
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      callback(null, { text: response.data.data.translations[0].translatedText })
    })
    .catch(error => callback(error.response.data))
}

export default translate
