const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require ("dotenv").config();

const items = require('./routes/api/items');

const app = express();

// Body-parser Middle-ware
app.use(express.json());

const port = 4001
const uri = process.env.MONGODB_CONNECTION_STRING;


mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("MongoDB database connection established successfully.");
});

app.listen(port, () => {console.log(`App is listening at http://localhost:${port}`);
});

// // DB Config
// const db = require('./config/keys').mongoURI;

// // Connect to Mongo
// mongoose
    // .connect(db)
    // .then(() => console.log('MongoDB Connected...'))
    // .catch(err => console.log(err));

// // Use routes
app.use('/api/items', items);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


// const port = process.env.PORT || 4001

// app.listen(port, () => console.log(`Server started on port ${port}`))