const Contact = require('../models/contact-model');

const contactForm = async (req, resp)=>{
  try {
    const response = req.body;
    await Contact.create(response)
    return resp.status(200).json({message : 'message send successfully'});
  } catch (error) {
    next(error)
  }
}
module.exports = contactForm
