const express = require('express');
const axios = require('axios');
const parser = require('body-parser');
const productStoreApp = express();
productStoreApp.use(parser.json())
productStoreApp.use(parser.urlencoded({extended:false}));

productStoreApp.set("view engine","ejs");
productStoreApp.set("views","./src/views")

// array to store products fetched from API
var products=[];


// homepage
productStoreApp.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/home.html");
})

// URL mapped to return 10 products from API

/***********Making a single async get call using axios**************/
// productStoreApp.get("/getproducts",async (req,res)=>{

//         try{
//             let response = await axios.get('https://fakestoreapi.com/products');
//             let result = response.data.slice(0,10)
//             products = [...result]
//             res.render("index.ejs",{data:products})
//         } catch(error){
//             console.error(error);
//         }    
// });

/***********Making multiple async get calls using axios.all METHOD-1**************/
productStoreApp.get("/getproducts",async (req,res)=>{

    try{
         // getting response array as responses and then assigning it to separate arrays
        axios.all([
            axios.get('https://fakestoreapi.com/products'),
            axios.get('https://fakestoreapi.com/users')
        ]).then(responses=>{
            const productResponse = responses[0];
            const userResponse = responses[1];
            let result = productResponse.data.slice(0,10)
            products = [...result]
            res.render("index.ejs",{productData:products, userData:userResponse.data})
        })   
    } catch(error){
        console.error(error);
    }    
});

/***********Making multiple async get calls using axios.all METHOD-2**************/
// productStoreApp.get("/getproducts",async (req,res)=>{

//     try{
//         //getting response array using axios.spread()
//         axios.all([
//             axios.get('https://fakestoreapi.com/products'),
//             axios.get('https://fakestoreapi.com/users')
//         ]).then(axios.spread((productResponse, userResponse)=>{
//             let result = productResponse.data.slice(0,10)
//             products = [...result]
//             res.render("index.ejs",{productData:products, userData:userResponse.data})
//         }))   
//     } catch(error){
//         console.error(error);
//     }    
// });

/***********Making multiple async get calls using axios.all METHOD-3**************/
// productStoreApp.get("/getproducts",async (req,res)=>{

//     try{
//         // getting response array using destructuring
//         let [productResponse, userResponse] = await axios.all([
//             axios.get('https://fakestoreapi.com/products'),
//             axios.get('https://fakestoreapi.com/users')
//         ])
//         let result = productResponse.data.slice(0,10)
//         products = [...result]
//         res.render("index.ejs",{productData:products, userData:userResponse.data})
           
//     } catch(error){
//         console.error(error);
//     }    
// });

// URL mapped to a form for adding a new product
productStoreApp.get('/addproduct',async (req,res)=>{
    res.render("product.ejs")
})

// URL mapped to return the fetched products from API along with the newly added product
productStoreApp.post('/postproduct',async (req,res)=>{

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

    try{
        let response = await axios.get("https://fakestoreapi.com/products");
        let result = response.data.slice(0,10)
        products = [...result]  
        products.push(newProduct) 
        res.render('index2.ejs', {productData: products})
    }catch(error){
        console.error(error);
    };
});


productStoreApp.listen(5000,()=>{console.log("Server is up on 5000")})