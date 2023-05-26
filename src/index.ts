import express, { Express } from 'express'
import dotenv from 'dotenv'
import { router } from './routers/router'
import { connectToMongoDb } from './bootstrap/database';

dotenv.config();

const app = express();
const port = process.env.PORT

const startServer = async (app: Express, port: string | undefined) => {

  const mongoDbURL = process.env.MONGODB_URL!
  connectToMongoDb(mongoDbURL)

  app.use('/', router)

  if (!port) {
    throw new Error(`Please pass in a port number, current port number: ${port}`)
  }
  app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`)
  })
}

startServer(app, port);

export { app }