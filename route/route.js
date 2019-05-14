var express = require('express'); 
var router = express.Router();

router.get('/api', function(req, res){
    res.json({
        errorCode: 200,
        message: 'Test success dipankar'
    });
});

module.exports = router;