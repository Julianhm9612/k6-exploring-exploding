# k6-exploring-exploding

Example of performance test for http with k6

## How run the tests:

- Clone this repo:
https://github.com/loadimpact/k6

- Install the dependencies:
```console
npm install
```

- Create your scripts for test.

- Run local:

Run k6 with the following command:
```console
k6 run scripts/http.get.js
```

- Run whit docker:

Run in the command line your script (example):
```console
docker-compose run -v D:/user/k6/scripts:/scripts k6 run scripts/http.get.js --vus 300 --duration 60s
```
or
```console
docker run --rm -i grafana/k6 run - <scripts/http.get.js
```

### If you need documentation of k6: https://docs.k6.io/docs
