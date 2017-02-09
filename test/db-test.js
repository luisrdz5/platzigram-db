'use strict'

const test = require('ava')
const uuid = require('uuid-base62')
const Db = require('../lib/db.js')
const r = require('rethinkdb')

const dbName = `platzigram_${uuid.v4()}`
const db = new Db({ db: dbName })

test.before('creando base de datos', async t => {
  await db.connect()
  t.true(db.connected, 'debera estar conectado')
})

test.after('desconectando de la base de datos', async t => {
  await db.disconnect()
  t.false(db.connected, 'deberia estar desconectado')
})

test.after.always('limpiando base de datos', async t => {
  let conn = await r.connect({host: '192.168.4.145', port: 28015})
  await r.dbDrop(dbName).run(conn)
})

test('save image', async t => {
  t.is(typeof db.saveImage, 'function', 'saveImage es una funcion')
  let image = {
    url: `https://platzigram.test/${uuid.v4()}.jpg`,
    likes: 0,
    liked: false,
    user_id: uuid.uuid()
  }
  let created = await db.saveImage(image)
  t.is(created.url, image.url)
  t.is(created.likes, image.likes)
  t.is(created.liked, image.liked)
  t.is(created.user_id, image.user_id)
  t.is(typeof created.id, 'string')
  t.truthy(created.createdAt)
})
