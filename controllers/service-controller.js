const Service = require('../models/service-model');
async function services(req, resp) {
  try {
    const response = await Service.find();
    if (!response) {
      resp.status(404).json({ serviceMsg: 'No serives found' });
      return;
    }
    resp.status(200).json({serviceMsg : response})
  } catch (error) {
    console.log(error);
  }
};

module.exports = services;
