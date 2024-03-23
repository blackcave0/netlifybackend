const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: String, require: true },
  password: { type: String, require: true },
  isAdmin: { type: Boolean, default: false },
});

//:: ------ Securing PASSWORD-------
userSchema.pre('save', async function (next) {
  // console.log(this);
  const user = this;
  if (!user.isModified('password')) {
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    console.log(error);
  }
});

//:: -- Compare Password
userSchema.methods.comparePassword = async function (password){
  return await bcrypt.compare(password,this.password)
}

//::----- JSON WEB TOKEN ---------
// creating an instancce
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_KEY, {expiresIn : "7d"}
    );
  } catch (error) {}
};

// define the model or the collection name;
const User = new mongoose.model('User', userSchema);

module.exports = User;
/* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRiYmZmYjYxYjYzODhmY2ZjNjQ5N2IiLCJlbWFpbCI6InJhbnVAdGVzdC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNzA5MjQwNzQxLCJleHAiOjE3MDkyNDA3NTF9.mVr_sUV3Grglrgngls6d2dlwK16rNBicJTrsdJ8q38o */

