var mysql = require('mysql');
const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');

app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "zomato_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("DB connected");
  
});

app.get('/', (req, res) => {
  res.send('Hello siraj!')
})

app.get('/getproducts', (req, res) => {
  con.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})