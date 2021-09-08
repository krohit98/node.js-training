const express = require('express');
const axios = require('axios');
const parser = require('body-parser');
const app = express();
app.use(parser.json())
app.use(parser.urlencoded({extended:false}));

app.set("view engine","ejs");
app.set("views","./src/views")

// array to store products fetched from API
var products=[];


// homepage
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/home.html");
})

// URL mapped to return 10 products from API
app.get("/getproducts",async (req,res)=>{
        await axios.get('https://fakestoreapi.com/products')
        .then(response => {
            let result = response.data.slice(0,10)
            products = [...result]
        })
        .catch(error => {
        console.error(error);
        });
        res.render("index.ejs",{data:products})
});

// URL mapped to a form for adding a new product
app.get('/addproduct',async (req,res)=>{
    res.render("product.ejs")
})

// URL mapped to return the fetched products from API along with the newly added product
app.post('/postproduct',async (req,res)=>{

    let newProduct = {
        "id":parseInt(req.body.id),
        "title":req.body.title,
        "price":parseFloat(req.body.price),
        "description":req.body.desc,
        "category":req.body.category,
        "image":req.body.image,
        "rating":{
            "rate":parseFloat(req.body.rate),
            "count":parseInt(req.body.count)
        }
    }

    await axios.get("https://fakestoreapi.com/products")
    .then(response => {
        let result = response.data.slice(0,10)
        products = [...result]  
        products.push(newProduct) 
    }).catch(error => {
        console.error(error);
    });
    res.render('index.ejs', {data: products});

});


app.listen(5000,()=>{console.log("Server is up on 5000")})