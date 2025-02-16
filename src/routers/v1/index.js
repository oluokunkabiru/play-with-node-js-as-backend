const express = require('express');
const router = express.Router();


const authenticationController =  require('../../controllers/auth/AuthenticationController');

router.get('/', (req, res) => {
  res.send('Welcome to Express API');
});

router.post('/auth/register', authenticationController.register);




module.exports = router;
