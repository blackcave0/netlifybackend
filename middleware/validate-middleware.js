// [schema] == auth-validator [signUpSchema]
const path = require('path')
const validate = (schema) => async (req, resp, next) =>{
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    console.log(err);
    const status = 422;
    const pathLocation = path.normalize(__filename) 
    const message = err.errors[0].message;
    const extraDetails = err.errors[0].message;
    const error ={
      status,
      message,
      pathLocation,
      extraDetails
    }
    //-- [error-middleware.js] --
    next(error)
    console.log(error);
    // -- this line of code did not work
   /*  if(resp.status === 400 || message){
      // resp.status(400).json({msg : message});
      resp.json({msg : message})
    } else {
      resp.status(201).json({welcome : 'Registration Successful'})
    } */
    
  }
}

module.exports = validate;