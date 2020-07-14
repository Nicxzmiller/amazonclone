import express from 'express';
import data from "./data";
import dotenv from 'dotenv';
import config from "./config";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './models/routes/userRoute';
import productRoute from './models/routes/productRoute';
import orderRoute from './models/routes/orderRoute';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

// app.get("/api/products/:id", (req, res) => {
//     const productId = req.params.id;
//     const product = data.products.find(x=>x._id === productId);
//     if(product)
//         res.send(product);
//     else
//         res.status(404).send({msg: "Product does not exist"})
// });

// app.get("/api/products", (req, res) => {
//     res.send(data.products);
// });

app.listen(5000, () => {console.log("E-commerce Server started at http://localhost:5000")});