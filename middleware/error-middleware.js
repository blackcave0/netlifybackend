const errormiddleware = (err,req, resp, next)=>{
  const status =err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const extraDetails = err.extraDetails || 'ERROR FROM BACKEND HAPY'
  const pathLocation = err.pathLocation

  return resp.status(status).json({message,extraDetails, pathLocation});
  
}
module.exports = errormiddleware;