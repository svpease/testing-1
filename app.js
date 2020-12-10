const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
  console.log('About to initialize curl-request...');

  const curl = new (require('curl-request'))();

  console.log('INITIALIZED!');

  curl.setHeaders([
      'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
  ])
  .get('https://www.google.com')
  .then(({statusCode, body, headers}) => {
      console.log(statusCode, body, headers)
  })
  .catch((e) => {
      console.log(e);
  });

  res.send('Hello World! (Scucess!)');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
