const mongoose = require('mongoose');
const { MONGO_URI, MONGO_URI_TEST } = process.env;

exports.connect = () => {

    let connString;
    let successMsg;
    if(process.env.npm_lifecycle_event === "test"){
        connString = MONGO_URI_TEST;
        successMsg = "Successfully connected to test database"
    }
    else{
        connString = MONGO_URI;   
        successMsg = "Successfully connected to database"     
    }

    //connecting to database
    mongoose
    .connect(connString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log(successMsg);
    })
    .catch((error)=>{
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
    });
};