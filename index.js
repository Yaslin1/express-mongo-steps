//Line 2-4 installed modules from terminal and assigning it a variable.
import express from "express"
import cors from "cors"
import dotenv from 'dotenv'

//import functions by name in furniture
import { addFurniture, getAllFurniture } from "./furniture.js"

//Starting and config express app
dotenv.config() //setting up environment variables
const app = express() //running express and the return function will be contained in app. API 
app.use(cors()) //run method called use that has a paramater of cors. Request from different origins.
app.use(express.json()) //using cors and json on ever file. 

//Choosing a PORT
const PORT = process.env.PORT || 4040 //No process.env.PORT then it will return 4040

//13-14 are the routes. / at the end of the website.
app.get("/", getAllFurniture) //make get request it will run the getAllFurniture function
app.post('/', addFurniture) ///make get request it will run the addFurniture function

//
app.listen(PORT, ()=>{ //listen for a request on the port
    console.log(`Api is listen on ${PORT} `) //Call back it will run that function
})



