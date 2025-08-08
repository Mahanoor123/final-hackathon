import mongoose from "mongoose";


const dbConnection = () => {
    return mongoose.connect(process.env.MONGODB_URI).then(()=> {console.log("MongoDb connection acheived!")
    }).catch((error) => {console.log("Error in MongoDb connection!", error)});
}

export default dbConnection;