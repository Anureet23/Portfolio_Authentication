let mongoose = require('mongoose');

//create model class
let contactsModel = mongoose.Schema({
    contactname : String,
    contactnumber : String,
    emailaddress : 
},
{
    collection:"contacts"
}
)

module.exports = mongoose.model('Contacts',contactsModel);