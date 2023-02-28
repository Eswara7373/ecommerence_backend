const {MongoClient} = require("mongodb");
// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2
const url="mongodb+srv://mahesh:TCPzsJRtO6OQ5HD9@cluster0.obfk2as.mongodb.net/?retryWrites=true&w=majority"


const client= new MongoClient(url);

const findAllFromDb = async (collectionName) => {
    try {
        await client.connect();
        console.log("connection succesfull to db")
        const database = client.db("ecommerce");
        const collection = database.collection(collectionName);
        const dbResponse = await collection.find().toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message;
    }
}

module.exports={findAllFromDb}
