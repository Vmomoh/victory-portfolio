const express = require('express'); 
const router = express.Router(); 
 
router.get('/', (req, res) =
  res.json({ message: 'Users API is working' }); 
}); 
 
module.exports = router; 
