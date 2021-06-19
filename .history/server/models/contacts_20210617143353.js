let mongoose = require('mongoose');

//create model class
let contactsModel = mongoose.Schema({
    contactname : String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection:"contacts"
}
)

module.exports = mongoose.model('Contacts',contactsModel);