"use strict";

var evaluatorService = function() {

var evaluators = this.make('evaluators');

//////////////////////// Create New Register ////////////////////////////
this.add('role: evaluators, cmd: register', (args, callback) => {
var seneca = this;
var regst = seneca.make$('registration')
regst = Object.assign(regst, args.req$.body);
regst.save$(function(err, regst) {
				 if(err) return callback(err);
				callback(null, regst)
			})
	});
//////////////////////// Create New Register ////////////////////////////

//////////////////////// Login  ////////////////////////////////////////
this.add('role: evaluators, cmd: getuser' , (args, callback) => {
var seneca = this;
var getuser = seneca.make$('registration')
getuser = Object.assign(getuser, args.req$.body);
var username = args.req$.body.username
var pwd = args.req$.body.password
getuser.list$( {username:username,pwd:pwd}, function(err,list){
	console.log(list);
	 if(err) return callback(err);
  list.forEach(function( getuser ){
	  callback(null, getuser)
  })
})

});
//////////////////////// End Login ////////////////////////////

	this.act('role: web', {
		use: {
			prefix: '',
			pin: 	'role: evaluators, cmd: *',
			map: {
			register: { POST: true, alias: '/evaluators/register' },
			getuser: { POST: true, alias: '/evaluators/getuser' }
			}
		}
	});
};

module.exports = evaluatorService;
