var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'My Demo Prog' });
});

router.post('/', function (req, res) {
  res.render('index', {
    title: 'Method POST result', 
  
    number:" "+firstnumber*secondnumber
  });
});

module.exports = router;

  
               
        
   
 
 
  

    
  
 
                   
              

