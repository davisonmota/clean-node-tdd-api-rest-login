const request = require('supertest')
const app = require('../config/app')

describe('App Setup', () => {
  test('Should disable x-powered-by header', async () => {
    app.get('/test', (req, res) => {
      res.send('')
    })
    const res = await request(app).get('/')
    expect(res.headers['x-powered-by']).toBeUndefined()
  })
})
