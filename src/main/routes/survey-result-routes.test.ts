import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helper/mongo-helper'
import { Collection } from 'mongodb'
import { sign } from 'jsonwebtoken'
import env from '../config/env'

let surveyCollection: Collection
let accountCollection: Collection

describe('Survey Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.deleteMany({})
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('PUT /surveys:surveyId/results', () => {
    test('Should return 403 on save survey result without accessToken', async () => {
      await request(app)
        .put('/api/surveys/any_id/results')
        .send({
          answer: 'any_answer'
        })
        .expect(404)
    })

    test('Should return 200 on save survey result with accessToken', async () => {
      const res = await accountCollection.insertOne({
        name: 'Rodrigo',
        email: 'rodrigo.manguinho@gmail.com',
        password: '123'
      })
      const id = res.ops[0]._id
      const accessToken = sign({ id }, env.jwtSecret)
      await accountCollection.updateOne({
        _id: id
      }, {
        $set: {
          accessToken
        }
      })
      const httpResponse = await surveyCollection.insertOne({
        question: 'Question',
        answers: [{
          answer: 'Answer 1',
          image: 'https://image-name.com'
        }, {
          answer: 'Answer 2'
        }],
        date: new Date()
      })
      await request(app)
        .put(`/api/surveys/${httpResponse.ops[0]._id}/results`)
        .set('x-access-token', accessToken)
        .send({
          answer: 'Answer 1'
        })
        .expect(404)
    })
  })
})
