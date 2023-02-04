import mongoose from "mongoose";
const connection = {};


export async function connectDb() {
    if (connection.isConnected) {
        console.log("Already connected to the database.");
    }
    await mongoose.disconnect();
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            console.log("Use previous connection to the database.");
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(
        process.env.MONGGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("new connection to the database");
    connection.isConnected = db.connections[0].readyState;
}