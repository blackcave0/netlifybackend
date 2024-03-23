const express = require('express');

const adminMiddlewere = async (req, resp, next) =>{
  try {
    // console.log(req.user);
    const adminRole = req.user.isAdmin;
    if(!adminRole){
      return resp.status(403).json({
        message : 'Access denied. User is not an admin.'
      })
    };
    // resp.status(200).json({message : req.user.isAdmin})
    // if true then next 
    next();
    
  } catch (error) {
    // console.log(error);
    next(error)
  }
}

module.exports = adminMiddlewere