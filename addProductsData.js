const Product = require('./model/productsModel');
const connectDB = require('./db/connectDB');
require('dotenv').config();
const productsData = require('./file.json');

// Log the imported JSON data
console.log(productsData);

const start = async () => {
    try {
        // Check if MONGO_URI is defined
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in the environment variables');
        }

        // Connect to the database
        await connectDB(process.env.MONGO_URI);

        await Product.deleteMany();
        // Insert the products data into the database
        await Product.create(productsData);

        // Close the database connection
        console.log('Data successfully loaded');
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();
