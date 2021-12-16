import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,

  async connect (): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}
