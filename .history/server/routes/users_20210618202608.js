/* FileName : index.js */
/* StudentName :Anureet Kaur */
/* Student Id :301174444 */
/* Date : 18/06/2021 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Annie');
});

module.exports = router;
