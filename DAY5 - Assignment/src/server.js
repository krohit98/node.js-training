//DEPENDENCIES
const express = require('express');
const parser = require('body-parser');
const {MongoClient} = require('mongodb');

const todoApp = express();
todoApp.use(parser.json());
todoApp.use(parser.urlencoded({extended:false}));
todoApp.use(express.static("public"));
todoApp.set('views','./src/views');
todoApp.set('view engine','ejs');
connectionString = 'mongodb+srv://krohit98:12345@cluster0.pzxvx.mongodb.net/node_integration_project?retryWrites=true&w=majority'

// connecting to mongoDB cluster
MongoClient.connect(connectionString,(err,client)=>{
    if(err){
        return console.error(err);
    }

    // fetching the database and collection
    const todoDB = client.db('todo_app');
    const todoCollection = todoDB.collection('todos');
    console.log("connected to database!");

    //ROUTES
    //GET todo items
    todoApp.get('/',async (req,res)=>{
        try{
            const todoList = await todoCollection.find().toArray();
            //res.send(todoList);
            res.render('index.ejs',{data:todoList})
        } catch(error){
            console.log(error);
        }
    });

    //POST todo items
    todoApp.post('/postTodo',async (req,res)=>{
        try{
            const todoList = await todoCollection.find().toArray();
            newTodo={
                _id: `${todoList.length+1}`,
                item:req.body.item
            }
            await todoCollection.insertOne(newTodo);
            res.redirect('/');
        } catch(error){
            console.error(error);
        }
    });

    //PUT todo items
    todoApp.put('/updateTodo', async(req,res)=>{
        try{
            await todoCollection.findOneAndUpdate({
            _id:req.body.id
            },
            {
                $set:{
                    item:req.body.item
                }
            },
            {
                upsert:true
            })
            res.redirect('/');
        } catch(error){
            console.error(error);
        }
    });

    //DELETE todo items
    todoApp.delete('/deleteTodo', async(req,res)=>{
        try{
            const result = await todoCollection.deleteOne({_id:req.body.id});
            if(result.deletedCount === 0){
                return res.send('delete operation failed');
            }    
            else{
                return res.redirect('/');                
            }

        } catch(error){
            console.error(error);
        }
    })

})

todoApp.listen(8000,()=>console.log("App is up on 8000!"))