const mongoose = require('mongoose');
require('dotenv').config()
exports.DB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
        console.log("Database:", mongoose.connection.name);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}