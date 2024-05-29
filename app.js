require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const product_route = require('./routes/productRoutes');
const connectDB = require('./db/connectDB');

app.get('/', (req, res)=>{
    res.send("Server is live");
})

//middleware
app.use("/api/products", product_route);

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, (req, res)=>{
            console.log(`Server running on ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
}

start();
