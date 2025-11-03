const express = require('express'); 
const router = express.Router(); 
 
router.post('/signup', (req, res) =
  res.json({ message: 'Signup API is working' }); 
}); 
 
router.post('/signin', (req, res) =
  res.json({ message: 'Signin API is working' }); 
}); 
 
module.exports = router; 
