let mongoose = require('mongoose');

//create model class
let contactsModel = mongoose.Schema({
    contactname : String,
    contactnumber : String,
    
},
{
    collection:"contacts"
}
)

module.exports = mongoose.model('Contacts',contactsModel);