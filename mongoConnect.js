////everything below is to connecting to firestore
//Line 2-4 your are destructuring {}. Your importing the information in the curly brackets from existing folders.
import { MongoClient } from "mongodb"
import dotenv from 'dotenv'
dotenv.config()

//starting a new object to communicate to mongo
const client = new MongoClient(process.env.MONGO_URI)

//using a method that exsist in that object to connect to that database
const db = client.db("my-mongo-store")

//connecting to databse inside that project
export default db 