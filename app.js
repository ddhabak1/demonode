var express = require('express');

var app = express();

app.use('/v1/',require('./route/route'));

app.listen($PORT, function () {
    console.log('listening on port'+ $PORT);
});
