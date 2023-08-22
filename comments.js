//Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

//set the port for the server
var port = 3000;

//set the view engine for the server
app.set('view engine', 'ejs');

//middleware for body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//GET home page
app.get('/', function(req, res){
    res.render('index');
});

//GET comments page
app.get('/comments', function(req, res){
    //read the comments.json file
    fs.readFile(__dirname + '/comments.json', 'utf8', function(err, data){
        if (err) throw err;
        //parse the json file
        var obj = JSON.parse(data);
        //render the comments page with the parsed json file
        res.render('comments', {comments: obj});
    });
});

//POST comments page
app.post('/comments', function(req, res){
    //read the comments.json file
    fs.readFile(__dirname + '/comments.json', 'utf8', function(err, data){
        if (err) throw err;
        //parse the json file
        var obj = JSON.parse(data);
        //add the new comment to the comments array
        obj.comments.push(req.body);
        //write the new comments array to the json file
        fs.writeFile(__dirname + '/comments.json', JSON.stringify(obj), function(err){
            if (err) throw err;
            //redirect to the comments page
            res.redirect('/comments');
        });
    });
});

//start the server
app.listen(port, function(){
    console.log('Server running on port ' + port);
});

