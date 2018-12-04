const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/carta'));

app.listen(process.env.PORT || 8080);

// PathLocationStrategy

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/carta/index.html'));
})

console.log('Console Listening!');
