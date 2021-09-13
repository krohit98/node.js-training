const MongoClient = require('mongoDb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';
let db;

const client = MongoClient.connect(url,{
    useNewURLParser: true,
    useUnifiedTopology: true
},(error, client)=>{
    if(error){
        return console.log(error);
    }

    return client;
});

db = client.db('productStore')
const products = db.collection('products');
console.log(products.namespace);