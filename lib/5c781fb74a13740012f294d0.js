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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/* ---
  index
*/
app.get('/', function( req, res ) {    

res.status( 200 ).send( 'Welcome to book address restful API - vs 7' );
});

/* ---
   retrieving all contacts
*/
app.get('/contacts/all', function( req, res ) {
    con.query('select * from contacts', function (error, results, fields) {
        if(error) throw error;
        console.log(JSON.stringify(results));
        res.status(200).send(results);
    });

    
});

/* ---
   adding new contact
*/
app.post('/new', function( req, res ) {
  con.query("insert into contacts(first_name,last_name,phone,email) values('"+req.body.first_name+"','"+req.body.last_name+"','"+req.body.phone+"','"+req.body.email+"')", function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
    
});

/* ---
   deleting  contacts
*/
app.post('/delete', function(req, res, next) {
    con.query("DELETE from contacts where id = "+req.body.id, function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});


/* ---
   editing  contacts
*/
app.post('/edit', function(req, res, next) {
    con.query("update contacts set first_name ='" +req.body.first_name+"', last_name='"+req.body.last_name+"', phone='"+req.body.phone+"', email='"+req.body.email+"' where id = " + req.body.id, function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

app.listen(1337, () => console.log('Example app listening on port 3000!'));