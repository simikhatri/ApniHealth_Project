const mongoose = require('mongoose');
const connectToMongo = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/ApniHealth", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connection Successfull"))
    .catch((err) => console.log(err));
}

module.exports = connectToMongo;




// const express = require("express");
// const mongoose = require("mongoose");
// var bodyParser = require("body-parser");
// const cors = require("cors")


// const app = express();


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// // const userschema = new mongoose.Schema({

// //     Username: String,
// //     Email: String,
// //     password: String,
// //     Phone: Number
// // })
// // const Users = mongoose.model("Users", userschema)

// mongoose.set('strictQuery', false);
// mongoose.connect('mongodb+srv://root:root@cluster0.4y4qr9k.mongodb.net/ApniHealth', { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', () => console.log("Error in conecting to database"))
// db.once('open', () => console.log("Connected to database"));
// app.post("/signup", async (req, resp) => {
//     const { Username, Email, Phone, password } = req.body
//     const data = {
//         "Username": Username,
//         "Phone": Phone,
//         "Email": Email,
//         "password": password,
//     }
//     db.collection('Users').insertOne(data, (err, collection) => {
//         if (err) {
//             throw err;
//         }
//         console.log("record inserted")
//     });
// }
// )

// app.listen(3200, () => {
//     console.log("Server is running at port 3200");
// });