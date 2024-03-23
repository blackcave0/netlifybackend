const User = require('../models/userSchema')
const getAllUsers = async (req, resp)=> {
  try {
    const users = await User.find({}, {password : 0});
    // const users = await User.find().select({password : 0});  //* ---- both methods are working good 

    // console.log(users);
    if(!users || users.length === 0){
      return resp.status(404).json({message : 'No user found'});
    };

    return resp.status(200).json(users);
  } catch (error) {
    next(error)
  };
};

// :: --- Delete by Users deleteUserById 
const deleteUserById = async (req, resp)=>{
  try {
    // when someone pass data on url use param this method get the url passed on data
    const id = req.params.id;
    await User.deleteOne({_id:id});
    return resp.status(200).json({
      message : 'User Delete Successfully',
    });
    
  } catch (error) {
    next(error)
  }
}

// :: user update logic

const updateUserById = async (req, resp) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;
    const updatedData = await User.updateOne(
      {_id:id},
      {
        $set : updateUserData,
      }
    );
    return resp.status(200).json(updatedData)
    // Last Edit ....
  } catch (error) {
    
  }
}

//:: --- Single User Data Logic funtion
const getUsersById = async (req, resp)=>{
  try {
    // when someone pass data on url use param this method get the url passed on data
    const id = req.params.id;
    const data = await User.findOne({_id:id}, {password : 0});
    return resp.status(200).json(data);
    
  } catch (error) {
    next(error)
  }
}


//:: ---- getAllContacts function 
const Contact = require('../models/contact-model');
const getAllContacts = async (req, resp)=>{
  try {
    // -- Import the Contact Model from the models file 
    const contacts = await Contact.find();
    if(!contacts || contacts.length === 0){
      return resp.status(400).json({message : "Contacts Not Found"})
    }
    return resp.status(200).json(contacts)
  } catch (error) {
    next(error)
  }
}

// :: --- Delete by Contacts Data deleteUserById 
const deleteContactById = async (req, resp)=>{
  try {
    // when someone pass data on url use param this method get the url passed on data
    const id = req.params.id;
    await Contact.deleteOne({_id:id});
    return resp.status(200).json({
      message : 'Contact Delete Successfully',
    });
    
  } catch (error) {
    next(error)
  }
}

module.exports = {getAllUsers, getAllContacts, deleteUserById, getUsersById, updateUserById, deleteContactById}