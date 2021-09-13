const express = require('express')
const {MongoClient} = require('mongodb')
const serverApp = express();
const parser = require('body-parser');

const connString = 'mongodb+srv://krohit98:12345@cluster0.pzxvx.mongodb.net/node_integration_project?retryWrites=true&w=majority'
serverApp.use(parser.json())
serverApp.use(parser.urlencoded({extended:false}))

serverApp.set('views','./src/views')
serverApp.set('view engine','ejs')
serverApp.use(express.static("public"));

serverApp.get("/",(req,res)=>{
    res.render("index.ejs")
})

// connecting to mongoDB cluster
MongoClient.connect(connString, (err,client)=>{
    if(err){
        return console.error(err)
    }

    // fetching the database and collection
    const usersDB = client.db('empData');
    const usersCollection = usersDB.collection('employees');
    console.log("connected to database");

    //making route to create imp info
    serverApp.post('/createEmp',(req,res)=>{
    usersCollection.insertOne(req.body)
    .then(result=>res.redirect('/getEmp'))
    .catch(error=>console.error(error))
    }); 

    //making route to get emp info
    serverApp.get('/getEmp',async (req,res)=>{
        try{
            employees = await usersCollection.find().toArray();
            res.render('employees.ejs',{employees:employees})
        } catch(error){
            console.error(error);
        } 
    });

    //making route to update emp info
    serverApp.put('/updateEmp',(req,res)=>{
        usersCollection.findOneAndUpdate({
            empName:req.body.updateName
        },
        {
            $set: {
                empName:req.body.updateNameTo
            }
        },
        {
            upsert:true,
        })
        .then(result=>res.send('info updated'))
        .catch(error=>console.error(error))
    });

    //making route to delete emp info
    serverApp.delete('/deleteEmp',(req,res)=>{
        usersCollection.deleteOne({empName:req.body.name})
        .then(result => {
            if(result.deletedCount === 0)
                return res.send('delete operation failed');
            else
                return res.send('deleted');
        })
        .catch(error => console.error(error))
    });
})

serverApp.listen(5500);