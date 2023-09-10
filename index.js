const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const routeProfile = require('./routes/profile');

require('dotenv').config();
app.use(express.json());
app.use(bodyParser.json())


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

app.get('/', (req, res) => {
    res.send("connected");
});

app.use("/profile", routeProfile);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`listening on port  ${process.env.SERVER_PORT}`);
})
const startApp = async () => {
    await connectDB();
}
startApp();


