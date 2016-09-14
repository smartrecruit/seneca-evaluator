"use strict";

var evaluatorService = function() {

	var evaluators = this.make('evaluators');	//the collection

	this.add('role: evaluators, cmd: getEvaluatorById', (args, callback) => {
		var evaluatorId = args.req$.params.id;
		evaluators.load$(evaluatorId, (error, result) => {
			callback(null, result);
		});
	});

	this.add('role: evaluators, cmd: search', (args, callback) => {
		console.log('Manikandan');
		var pattern = new RegExp(args.query, "i");
		evaluators.list$((error, evaluators) => {
			var result = evaluators.filter(prod => {
				return (pattern.test(prod.name) || pattern.test(prod.skills));
			});

			callback(null, result);
		});
	});

	this.add('role: evaluators, cmd: add', (args, callback) => {
		evaluators = Object.assign(evaluators, args.req$.body);
		evaluators.save$((error, evaluator) => {
			
			if (error) {
				console.log(`Error creating evaluator: ${error}`);
				callback(null, {error: error});
			}
				
			callback(null, {success: true, _id: evaluator.id});
		});
	});
	///////////////////////// Add evaluator details ////////////////////
	this.add('role: evaluators, cmd: register', (args, callback) => {
		evaluators = Object.assign(evaluators, args.req$.body);
		console.log(args.req$.body);
		evaluators.save$((error, evaluators) => {
			console.log(evaluators);
			if (error) {
				console.log(`Error creating evaluator: ${error}`);
				callback(null, {error: error});
			}
			callback(null, {success: true, _username: evaluators.username});
		});
	});
	///////////////////////////////////////////////////////////////////////////////
// Remove evaluator
this.add('role: evaluators, cmd: removeEvaluatorId', (args, callback) => {
	console.log(args);
		var evaluatorId = args.req$.params.id;
		console.log(evaluatorId);
		evaluators.remove$(evaluatorId, (error, result) => {
			callback(null, result);
		});
	});
/////////////////////////////////////////////////////////////////////////////////////

////////////////////////// Load the registered user ////////////////////////////////
//entity.load$({id: ... }, function (err, entity) { ... })
this.add('role: evaluators, cmd: searchEvaluator', (args, callback) => {
		console.log('Manikandan');
		var pattern = new RegExp(args.query, "i");
		evaluators.list$({},(error, evaluators) => {
			var result = evaluators.filter(prod => {
				return (pattern.test(prod.name) || pattern.test(prod.skills));
			});
			callback(null, result);
		});
	});
	/* this.add({role: 'evaluators', cmd: 'searchEvaluator'}, function product (msg, callback) {
		 console.log('Manikandan');
    evaluators.list$({}, function (err, list) {
      if (err) {
        return respond(err)
      }
	  var result =respond(null, {answer: list})
	  callback (null,result )
    })
  })*/
////////////////////////////////////////////////////////////////////////////////////
	this.act('role: web', {
		use: {
			prefix: '',
			pin: 	'role: evaluators, cmd: *',
			map: {
				getEvaluatorById: { alias: '/evaluators/:id' },
				search: { POST: true, alias: '/evaluators/search' },
				add: { POST: true, alias: '/evaluators/add' },
				register: { POST: true, alias: '/evaluators/register' },
				removeEvaluatorId: { alias: '/evaluators/removeEvaluator/:id' },
				searchEvaluator:{alias: '/evaluators/searchEvaluator' }
			}
		}
	});
};

module.exports = evaluatorService;
