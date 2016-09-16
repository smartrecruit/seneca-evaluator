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
var emailid = args.req$.body.emailid
var pwd = args.req$.body.password
getuser.list$( {emailid:emailid,pwd:pwd}, function(err,list){
	 if(err) return callback(err);
  list.forEach(function( getuser ){
	  callback(null, getuser)
  })
})

});
//////////////////////// End Login ////////////////////////////

                ////////// Profile Creation /////////////
//////////////////////// Create Contact  Info ////////////////////////////
this.add('role: evaluators, cmd: contactinfo', (args, callback) => {
var seneca = this;
var coninfo = seneca.make$('usercontactinfo')
coninfo = Object.assign(coninfo, args.req$.body);
coninfo.save$(function(err, coninfo) {
				 if(err) return callback(err);
				callback(null, coninfo)
			})
	});
//////////////////////// End Create Contact  Info ////////////////////////////

//////////////////////// Create Summary /////////////////////////////////
this.add('role: evaluators, cmd: summaryinfo', (args, callback) => {
var seneca = this;
var suminfo = seneca.make$('usersummaryinfo')
suminfo = Object.assign(suminfo, args.req$.body);
suminfo.save$(function(err, suminfo) {
				 if(err) return callback(err);
				callback(null, suminfo)
			})
	});
//////////////////////// End Create Summary /////////////////////////////////////

//////////////////////// Create Key Specilization ////////////////////////////
this.add('role: evaluators, cmd: profilekeyskills', (args, callback) => {
var seneca = this;
var keyskils = seneca.make$('userkeyskils')
keyskils = Object.assign(keyskils, args.req$.body);
keyskils.save$(function(err, keyskils) {
				 if(err) return callback(err);
				callback(null, keyskils)
			})
	});
//////////////////////// End Create Key Specilization ////////////////////////////

//////////////////////// Create Profile experience ////////////////////////////
this.add('role: evaluators, cmd: profileexperience', (args, callback) => {
var seneca = this;
var experience = seneca.make$('userexperience')
experience = Object.assign(experience, args.req$.body);
experience.save$(function(err, experience) {
				 if(err) return callback(err);
				callback(null, experience)
			})
	});
//////////////////////// End Create Profile experience ////////////////////////////

//////////////////////// Create Profile Education ////////////////////////////
this.add('role: evaluators, cmd: profileeducation', (args, callback) => {
var seneca = this;
var edu = seneca.make$('usereducation')
edu = Object.assign(edu, args.req$.body);
edu.save$(function(err, edu) {
				 if(err) return callback(err);
				callback(null, edu)
			})
	});
//////////////////////// End Create Profile Education ////////////////////////////

//////////////////////// Create Profile certifications ////////////////////////////
this.add('role: evaluators, cmd: profilecertifications', (args, callback) => {
var seneca = this;
var certificate = seneca.make$('usercertifications')
certificate = Object.assign(certificate, args.req$.body);
certificate.save$(function(err, certificate) {
				 if(err) return callback(err);
				callback(null, certificate)
			})
	});
//////////////////////// Create Profile certifications ////////////////////////////

//////////////////////// Create Resume Upload ////////////////////////////
this.add('role: evaluators, cmd: resumeupload', (args, callback) => {
var seneca = this;
var resum = seneca.make$('userresume')
resum = Object.assign(resum, args.req$.body);
resum.save$(function(err, resum) {
				 if(err) return callback(err);
				callback(null, resum)
			})
	});
//////////////////////// Create Resume Upload  ////////////////////////////

            ////////// Profile Creation /////////////
	this.act('role: web', {
		use: {
			prefix: '',
			pin: 	'role: evaluators, cmd: *',
			map: {
			register: { POST: true, alias: '/evaluators/register' },
			getuser: { POST: true, alias: '/evaluators/getuser' },
			contactinfo: { POST: true, alias: '/evaluators/contactinfo' },
			summaryinfo: { POST: true, alias: '/evaluators/summaryinfo' },
			profilekeyskills: { POST: true, alias: '/evaluators/profilekeyskills' },
			profileexperience: { POST: true, alias: '/evaluators/profileexperience' },
			profileeducation: { POST: true, alias: '/evaluators/profileeducation' },
			profilecertifications: { POST: true, alias: '/evaluators/profilecertifications' },
			resumeupload: { POST: true, alias: '/evaluators/resumeupload' }
			}
		}
	});
};

module.exports = evaluatorService;
