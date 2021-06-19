//require  modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
       username :
       {
           type: String,
           default: "",
           trim : true,
           required : 'username is required'
       }
       /*
       password: {
           ty
       }
       */
    },
    {
        collection : "users"
    }
)