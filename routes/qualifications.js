const router = express.Router(); 
 
router.get('/', (req, res) =
  res.json({ message: 'Qualifications API is working' }); 
}); 
 
module.exports = router; 
