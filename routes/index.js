var express = require('express');
var router = express.Router();
var React = require('react');
var reactB = require('react-bootstrap');
var Button = reactB.Button;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res) {
  function show () {
  	console.log('OK');
  }	
  var comp = React.renderToString(React.createElement('button',{ onClick : show },'Default'));	
  res.send(comp);
});

module.exports = router;
