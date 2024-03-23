const jwt = require('jsonwebtoken');
const User = require('../models/userSchema')
const authMidleWare = async (req, resp, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return resp.status(401).json({
        msg: 'Unauthorized HTTP, Token Not provided',
      });
    }

    const jwtToken = token.replace('Bearer', '').trim();
    const isVerified = jwt.verify(jwtToken, process.env.JWT_KEY);

    const userData = await User.findOne({ email: isVerified.email }).select({password : 0});
    // console.log(userData);
    if (!userData) {
      return resp.status(401).json({
        msg: 'Unauthorized HTTP, User not found',
      });
    }

    // Attach user data to the request (if needed)
    req.user = userData;
    // -- Creating custome data
    req.token = token;
    req.userID = userData._id;
    
    next();
  } catch (error) {
    resp.status(401).json({
      msg: 'Unauthorized HTTP, Token Not provided or invalid',
    });
  }
};


module.exports = authMidleWare;
