import Mongoose from "mongoose"

export const connectToMongoDb = async (connectionString: string): Promise<void> => {
  try {
    await Mongoose.connect(connectionString, {
      directConnection: true
    })
    console.log(`Successfully connected to mongoDb`)
  } catch (e) {
    console.log(`There has been an error connect to mongodb: `, e)
  }
}