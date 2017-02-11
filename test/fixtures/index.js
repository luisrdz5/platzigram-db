'use strict'

const uuid = require('uuid-base62')

const fixtures = {
  getImage () {
    return {
      descripcion: 'an #Awesome picture with #tags in #platzi',
      url: `https://platzigram.test/${uuid.v4()}.jpg`,
      likes: 0,
      liked: false,
      user_id: uuid.uuid()
    }
  }
}
module.exports = fixtures
