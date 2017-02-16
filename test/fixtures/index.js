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
  },
  getImages (n) {
    let images = []
    while (n-- > 0) {
      images.push(this.getImage())
    }
    return images
  },
  getUser () {
    return {
      name: 'A Random User ',
      username: `user_${uuid.v4()}`,
      password: uuid.uuid(),
      email: `${uuid.v4()}@platzi.test`
    }
  }
}

module.exports = fixtures
