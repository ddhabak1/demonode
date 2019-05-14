var express = require('express');
const PORT = process.env.PORT || 5000

var app = express();

app.use('/v1/',require('./route/route'));

app.listen(PORT, function () {
    console.log(`Listening on ${ PORT }`);
});
