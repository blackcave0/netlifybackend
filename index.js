require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./Router/auth-router');
const connectDB = require('./utils/db');
const contactAuthRoute = require('./Router/contact-router');
const errormiddleware = require('./middleware/error-middleware');
const serviecRoute = require('./Router/service-router')
const adminRoute = require('./Router/admin-router')
const PORT = process.env.PORT || 8000
// -- CORS METHOD ---
const cors = require('cors');
const corsOption = {
  // origin : 'http://localhost:5173',
  origin : 'https://s3m.netlify.app',
  methods : "GET, POST, PUT, DELETE, PATCH, HEAD",
  optionsSuccessStatus: 200,
  credential : true,
}
app.use(cors(corsOption));
// app.use(cors())
// -- End of Line -- 

// -- Conver data to json
app.use(express.json());

// -- Initialize Roter file path
app.use('/api/auth', router);

// --- contact-form 
app.use('/api/form', contactAuthRoute);

// -- services route 
app.use('/api/data', serviecRoute)

// -- admin users route
app.use('/api/admin', adminRoute)


/* app.get('/', function (req, resp) {
  resp.send('helllo from server');
}); */

//....[handling error from midlleware\error-middleware.js]
app.use(errormiddleware);
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log('Listing Server........'));
  })
  .catch((err) => {
    console.log(err);
  });
