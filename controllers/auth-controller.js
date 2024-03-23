const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
//-- Home page logic or Method
async function Home(req, resp) {
  try {
    resp.status(200).send('Hello auth-controller side we are home file');
  } catch (error) {
    console.log(error);
  }
}

//:: ------------ Registration Page Method ------------
async function Registration(req, resp) {
  try {
    const { username, email, phone, password } = req.body;

    const userExit = await User.findOne({ email: email });
    if (userExit) {
      return resp.status(400).json({ message: 'Email already Exist' });
    }

    //:: --- Bcrypt Method Here
    /* const saltRound = 13;
    const hash_password = await bcrypt.hash(password, saltRound); */
    // await User.create({username, email, phone, password:hash_password});

    const userCreated = await User.create({ username, email, phone, password });
    // resp.status(201).json({ msg: 'User Registerd ' });

    //:: ---------JsonWebtoken -------
    // -- Retriving [generateToken()] from schema file route;
    resp.status(201).json({
      userCreateMsg : userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // console.log(error);
    //-- This function fetch from [middleware]=>[error-middleware.js]
    next(error)
  }
}

//:: ------- Login Route or Function
async function Login(req, resp) {
  try {
    const { email, password } = req.body;
    const userExit = await User.findOne({ email });
    if (!userExit) return resp.status(400).json({ message: 'Invalid Creadentials' });

    // comparing password
    // const pass_comp = await bcrypt.compare(password, userExit.password);

    // -- this is 2nd method --- This Instance define from userSchema.js file ....
    const pass_comp = userExit.comparePassword(password);
    if (pass_comp) {
      resp.status(200).json({
        msg: 'Login Successful',
        token: await userExit.generateToken(),
        userId: userExit._id.toString(),
      });
    }else {
      resp.status(401).json({msg : "Invalid login"})
    }
  } catch (error) {
    console.log(error);
    resp.status(500).json({ err: 'error' });
  }
};


// :: ------- USER FUNCTION
async function Users(req, resp){
  try {
    const userData = req.user;
    console.log(userData);
    // return resp.status(200).json({UsersMsg : userData})

    //-- remove the UserMsg for FronEnd #error
    return resp.status(200).json({userData})
  } catch (error) {
    console.log(error);
  }
}

module.exports = { Home, Registration, Login, Users };
