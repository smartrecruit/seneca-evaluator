evaluator Microservice
======================


## Build/Run Instructions

Open the terminal and run the following command at the root of the project to fetch all dependencies:

```
npm install
```

Once all dependencies are installed, run the following command to fire up the application:

```
npm start
```

## Integration Tests

Now that you have an app running, you can run the integration tests via the following command:

```
npm run integration-test
```

The integration tests will add a couple of evaluator ids for you by default.

For a POST request to add new evaluators, run this from the command line:

```
curl -m 1 -s -H 'Content-Type: application/json' -d '{"id": 567, "name":"Jeff Boyd", "skills": "R, Python", "eval_fee": 99.99}' http://localhost:3000/evaluators/add
```

Now, open up the browser (or postman) and go to the following url:

```
http://localhost:3000/evaluators/567
```

For a POST request to search for evaluators by name or description, run this from the command line:

```
curl -m 1 -s -H 'Content-Type: application/json' -d '{"query":"new"}' http://localhost:3000/evaluators/
```
