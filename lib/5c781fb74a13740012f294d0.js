
const express = require('express');
const app = express();
const mysql  = require('mysql');


var con = mysql.createConnection({
  host: "estoquedb.mysql.uhserver.com",
  user: "lucasjds1",
  password: "b00k@ddress1",
  database: "test123"
});


con.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + con.threadId);
});

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

/* ---
   Ref. to avoid CORS message on client side:
   https://jonathanmh.com/how-to-enable-cors-in-express-js-node-js/
*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/* ---
   When you call https://sample-express-lkithe7zmuwx.runkit.sh
   then you will receive the answer:
   >> Welcome to our restful API
*/
app.get('/', function( req, res ) {    

res.status( 200 ).send( 'Welcome to book address restful API - vs 7' );
});

/* ---
   When you call https://sample-express-lkithe7zmuwx.runkit.sh/users/all
   then you will receive the answer:
   >> the object users as described bellow
*/
app.get('/contacts/all', function( req, res ) {
    con.query('select * from contacts', function (error, results, fields) {
        if(error) throw error;
        console.log(JSON.stringify(results));
        res.status(200).send(results);
    });

    
});

app.post('/new', function( req, res ) {
  con.query("insert into contacts(first_name,last_name,phone,email) values('"+req.body.first_name+"','"+req.body.last_name+"','"+req.body.phone+"','"+req.body.email+"')", function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

const express = require('express');
const app = express();
const mysql  = require('mysql');


var con = mysql.createConnection({
  host: "estoquedb.mysql.uhserver.com",
  user: "lucasjds1",
  password: "b00k@ddress1",
  database: "test123"
});


con.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + con.threadId);
});

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

/* ---
   Ref. to avoid CORS message on client side:
   https://jonathanmh.com/how-to-enable-cors-in-express-js-node-js/
*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/* ---
   When you call https://sample-express-lkithe7zmuwx.runkit.sh
   then you will receive the answer:
   >> Welcome to our restful API
*/
app.get('/', function( req, res ) {    

res.status( 200 ).send( 'Welcome to book address restful API - vs 7' );
});

/* ---
   When you call https://sample-express-lkithe7zmuwx.runkit.sh/users/all
   then you will receive the answer:
   >> the object users as described bellow
*/
app.get('/contacts/all', function( req, res ) {
    con.query('select * from contacts', function (error, results, fields) {
        if(error) throw error;
        console.log(JSON.stringify(results));
        res.status(200).send(results);
    });

    
});

app.post('/new', function( req, res ) {
  con.query("insert into contacts(first_name,last_name,phone,email) values('"+req.body.first_name+"','"+req.body.last_name+"','"+req.body.phone+"','"+req.body.email+"')", function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
    
});

app.post('/delete', function(req, res, next) {
    con.query("DELETE from contacts where id = "+req.body.id, function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

app.listen(1337, () => console.log('Example app listening on port 3000!'));
