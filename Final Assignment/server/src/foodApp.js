// IMPORTS
const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();
require("./config/database").connect();

// APP SETUP
const foodApp = express();
foodApp.use(cors());
foodApp.use(parser.json());
foodApp.use(parser.urlencoded({extended:false}));

// IMPORTING MODELS
const Restaurants = require("./model/restaurants");
const Queries = require("./model/queries");
const Users = require("./model/users");

// API ENDPONTS

// GET METHOD TO FETCH RESTAURANT DATA
foodApp.get("/getListOfPlaces", async(req,res)=>{
    try{
        // fetching all the restaurant data from database
        const data = await Restaurants.find({});
        res.status(200).send(data);
    }
    catch(error){
        res.status(400).send(error._message);
    }

})

// POST METHOD TO CREATE QUERIES
foodApp.post("/createQuery", async (req,res)=>{
    try{
        // obtaining input from request body
        const newQuery = {
            user:req.body.user,
            restaurant:req.body.restaurant,
            query:req.body.query,
            contact:req.body.contact
        }

        // creating a new query document in database
        const query = await Queries.create(newQuery);
        res.status(200).send(query);
    } 
    catch(error){
        res.status(400).send(error._message);
    }
    
})

// REGISTER USER
foodApp.post("/register",async (req,res)=>{
    try{
        // obtaining input values
        const {firstName, lastName, email, password} = req.body;

        // validating if all required values are present
        if(!(email && password && firstName && lastName))
            res.status(400).send("All input is required");

        // checking if user already exists in database
        const existingUser = await Users.findOne({email});

        if(existingUser)
            res.status(409).send("User already exists. Please login!");

        // encrypting user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // creating a new user object
        const newUser = {
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: encryptedPassword
        }

        // creating new user in database
        const addedUser = await Users.create(newUser);

        // generating a jwt 
        const token = jwt.sign(
            {user_id:addedUser._id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h"
            }
        );

        // save user token
        addedUser.token = token;

        // return new user
        res.json({addedUser});

    }
    catch(error){
        res.status(400).send(error._message);
    }
})

// LOGIN USER
foodApp.post("/login",async (req,res)=>{
    try{
        // obtaining input values
        const{email, password} = req.body;

        // validating if all required values are present
        if(!(email && password))
            res.status(400).send("All input is required");

        // checking if user is registered
        const user = await Users.findOne({email})

        if(user){
            // if user email exists in database
            
            // checking if entered password matches the user password in database
            const validPassword = await bcrypt.compare(password, user.password);

            if(validPassword){
                //entered password is valid

                //create jwt token
                const token = jwt.sign(
                    {user_id:user._id, email},
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h"
                    }
                );

                // save user token
                user.token = token;

                // return user token
                res.json({user});
            }
            else{
                // entered password is not valid
                res.status(403).send("Invalid Credentials!");
            }
        } 
        else{
            // if user email does not exist in database
            res.status(403).send("User not registered!");
        }
    }
    catch(error){
        res.status(400).send(error._message);
    }
})

// ALLOCATING PORT TO SERVER
foodApp.listen(5000, ()=>console.log("Server is up on 5000!"));

module.exports = foodApp;
