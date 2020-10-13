import { expect, test } from '@jest/globals'
import supertest from 'supertest'
import { createApp } from './createApp.js'

test('The app should respond to queries', async () => {
  const app = await createApp()
  const response = await supertest(app)
    .get('/myPath?foo=bar')
    .set('x-role-names', 'admin')

  expect(response.status).toEqual(200)
  expect(response.text).toMatch(/myPath/)
  expect(response.text).toMatch(/foo/)
  expect(response.text).toMatch(/bar/)
})
