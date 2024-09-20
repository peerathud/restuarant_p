var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST login route */
router.post("/login-fixed", function(req, res, next) {
  if (req.body.username === "poppy" && req.body.password === "1234") {
    return res.status(200).json({ data: "login success" });
  } else {
    return res.status(200).json({ data: "login failed" });
  }
}); 

module.exports = router;