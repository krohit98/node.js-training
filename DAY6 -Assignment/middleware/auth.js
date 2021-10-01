const jwt = require('jsonwebtoken');

exports.verify = function(req,res,next){
    let accessToken = req.body.token || req.query.token || req.headers["x-access-token"];

    if(!token)
        res.status(403).send("A token is required for authentication");

    try{
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    }
    catch(error){
        res.status(401).send("Invalid token")
    }
    return next();
}