//importing my connection to db 
import db from "./mongoConnect.js"

//reference to furniture collection so you can do things to that collection
const furnitureDb = db.collection('furniture')

//CRUD
//CREATE
export const addFurniture = async (req,res) => { //exporting add furniture function to use it in my route
    const newFurniture = {type: "sofa", collection: "Edgewater", special: false, price: 4899, in_stock:false} //creating an objection that is hardcoded which is just for demo 
   const newFurnitureAdd = await furnitureDb.insertOne(req.body) //add furniture to our mongo db
   console.log(newFurnitureAdd)

   res.status(201).send(newFurnitureAdd) //using res object to set status to 201 sending the caller object
}

//READ
export const getAllFurniture =  async (req,res) => { //exporting add furniture function to use it in my route
    try {
        const data = await furnitureDb.find({}).limit(10).toArray(); 
        //furnitureDb reference to collction furnitureDB. 
        //.find({}) find object and an empty objection will return everything
        //.limit() limited to 10 items
        //.toArray()turns a response to an array
        res.status(200).send(data) //using res object to set status to 200 sending the caller object
    } catch (error) { 
    res.status(400).send(error) //using res object to set status to 400 sending the caller object
}
}
