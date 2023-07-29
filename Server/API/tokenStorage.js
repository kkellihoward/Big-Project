
import dotenv from 'dotenv';

dotenv.config();

const storeToken = function(token){
    try{
        localStorage.setItem('token_data', token.accessToken);
    }
    catch(e){
        console.log(e.message);
    }
}

const retrieveToken = function(){
    var ud;
    try{
        ud = localStorage.getItem('token_data');
    }
    catch(e){
        console.log(e.message);
    }

    return ud;
}