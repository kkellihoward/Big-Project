const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createToken = function(id, username, password){
    return _createToken(id, username, password);
}

_createToken = function(id, username, password){
    try{
        const expiration = new Date();
        const user = {id:id, username:username, password:password};

        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SERCRET, {expiresIn: '10m'});
        
        var ret = {accessToken:accessToken};
    }
    catch(e){
        var ret = {error:e.message};
    }

    return ret;
}

exports.isExpired = function(token){
    var isError = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,
        (err, verifiedJWT) =>
        {
            if(err){
                return true;
            }
            else{
                return false;
            }
        })
}

exports.refresh = function(token){
    var ud = jwt.decode(token, {complete:true});

    var id = ud.payload.id;
    var username = ud.payload.username;
    var password = ud.payload.password;

    return _createToken(id, username, password);
}