const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});
UserSchema.plugin(passportLocalMongoose); //UserSchema get to have username and password as well as several static methods such as authenticate
//Also, getting success to authenticate(login) store user info in session(find by req.user)
module.exports = mongoose.model('User', UserSchema);