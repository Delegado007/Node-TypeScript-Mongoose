import dotenv from 'dotenv';
import server from './src/server'
import { MongoClient } from "mongodb";
import { LogError, LogSuccess } from './src/utils/logger';

// * Enviroment Variables
dotenv.config();

const port = process.env.PORT || 8000

// Execute SERVER

server.listen(port, () => {
  LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`)
})

server.on('error', (error) => {
  LogError(`[SERVER ERROR]: ${error}`)
})

// connect to mongoDB
// Connection URI
const uri = "mongodb://root:root@localhost:27017/?authMechanism=DEFAULT";

// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    const database = await client.db("test-api");
    const userCollection = await database.collection("users")
    console.log("Connected successfully to server");
    console.log(userCollection)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);