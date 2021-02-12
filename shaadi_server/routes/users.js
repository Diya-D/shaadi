var express = require('express');
var Shaadi = require('../services/Shaadi');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with ae');
});
router.get('/get', function (req, res) {
  Shaadi.getUsers()
  .then(data=>{
    res.status(data.statusCode).send({users:data.users})
  })
});
router.post('/test', function (req, res, next) {
  res.send(req.body.name);
});


function authMiddleware(req, res, next) {
  if (req.session.currentUser) {
    next();

  }
  else {
    res.status(401).send({ message: "please login" })
  }
}


router.post('/register', function (req, res) {
  let usname = req.body.username;
  let pwd = req.body.password;
  let relation=req.body.relation;
  let gender=req.body.gender;
  
  
  
    Shaadi.registration1(usname, pwd, relation,gender)
      .then(data => {
        res.status(data.statusCode).send({ message: data.message })
      

  })
})
router.post('/login', function (req, res) {
  let usname = req.body.username;
  let pwd = req.body.password;
  Shaadi.login(usname, pwd)
    .then(data => {
      if (data.statusCode == 200) {
        req.session.currentUser = usname
      }
      res.status(data.statusCode).send({ message: data.message })
    })
  
})

module.exports = router;
