"use strict";
/*var DBConfig = {
  name: 'senecatest',
  host: 'localhost',
  username: 'mani',//postgres
  password: '123',
  port: 5432
}*/
var seneca = require('seneca')()
	.use('evaluator-service')
	.use('entity')
	.use('pg')
	.use('jsonfile-store', {
		folder: './data'
	});

var port = 3000;
var app = require('express')()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

	app.use(require('body-parser').json())
	.use(seneca.export('web'))
	.listen(port);

console.log(`Listening on port ${port}`);
