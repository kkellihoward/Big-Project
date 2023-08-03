exports.storeToken = function(token){
    try{
        localStorage.setItem('token_data', token.accessToken);
    }
    catch(e){
        console.log(e.message);
    }
}

exports. retrieveToken = function(){
    var user;
    try{
        user = localStorage.getItem('token_data');
    }
    catch(e){
        console.log(e.message);
    }

    return user;
}