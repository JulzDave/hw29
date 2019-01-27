var express = require('express');
var router = express.Router();
var mysql = require('promise-mysql');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  connectionLimit: 10
});


router.post('/register', async function(req, res, next){
  let insertQuery = `INSERT INTO buyandsell.users (username, password)
  VALUES ('${req.body.username}','${req.body.password}')
  `;
  debugger;
  var result = await pool.query(insertQuery);
  res.json(result)
  // res.send(`thanks ${req.body.username}, <br/>You are now a registered`)
})

router.post('/login', async function(req, res, next){
  let loginQuery = `SELECT * FROM buyandsell.users
  WHERE username='${req.body.username}' AND password='${req.body.password}'
  `;
  debugger;
  var result = await pool.query(loginQuery);
  if (result.length == 0){
    res.send("<h2>Invalid username\\password</h2><br/> <button onclick='location.href = `http://localhost:3000/`'>Try Again</button>")
  }
  else{
    res.send("<h2>Hello "+req.body.username+",<br/> You are now connected</h2><br/> <button onclick='location.href = `http://localhost:3000/`'>Go Back</button>")

  }
})

router.get('/createdb', async function(req, res, next) {
 try{
  await pool.query("CREATE DATABASE buyandsell");
  
  var createTableQuery = `CREATE TABLE buyandsell.users(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(45) NULL,
    password VARCHAR(45) NULL,
    PRIMARY KEY(id))`;

    await pool.query(createTableQuery);

    res.send("DB and TABLE created!")
  }
  catch(err){
    console.log(err);
  }
});

module.exports = router;
